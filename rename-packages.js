// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

const fs = require('fs');
const path = require('path');

const OLD_SCOPE = '@kepler.gl';
const NEW_SCOPE = '@reedu-kepler.gl';
const REGISTRY_LINE = `${NEW_SCOPE}:registry=https://registry.npmjs.org`;

const IGNORED_DIRS = ['node_modules', '.git', 'dist', 'build', '.turbo'];

function walkDir(dir, callback) {
  fs.readdirSync(dir, {withFileTypes: true}).forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (IGNORED_DIRS.includes(entry.name)) return;

    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (entry.isFile()) {
      callback(fullPath);
    }
  });
}

function replaceInFile(filePath, from, to) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(from)) {
    const updated = content.replaceAll(from, to);
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✅ Updated imports in: ${filePath}`);
  }
}

function updatePackageJson(filePath) {
  const pkg = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updated = false;

  const updateField = field => {
    if (!pkg[field]) return;
    for (const dep in pkg[field]) {
      if (dep.startsWith(OLD_SCOPE)) {
        const newDep = dep.replace(OLD_SCOPE, NEW_SCOPE);
        pkg[field][newDep] = pkg[field][dep];
        delete pkg[field][dep];
        updated = true;
      }
    }
  };

  // Update package name
  if (pkg.name && pkg.name.startsWith(OLD_SCOPE)) {
    pkg.name = pkg.name.replace(OLD_SCOPE, NEW_SCOPE);
    updated = true;
  }

  updateField('dependencies');
  updateField('devDependencies');
  updateField('peerDependencies');

  // Update repository.url if it exists
  if (pkg.repository && typeof pkg.repository === 'object' && pkg.repository.url) {
    const oldUrl = pkg.repository.url;
    const newUrl = oldUrl.replace(/keplergl/gi, NEW_SCOPE.replace('@', ''));
    if (newUrl !== oldUrl) {
      pkg.repository.url = newUrl;
      updated = true;
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2), 'utf8');
    console.log(`📦 Updated package.json: ${filePath}`);
  }

  const packageDir = path.dirname(filePath);
  addOrUpdateNpmrc(packageDir);
}

function addOrUpdateNpmrc(dir) {
  const npmrcPath = path.join(dir, '.npmrc');
  let content = '';
  if (fs.existsSync(npmrcPath)) {
    content = fs.readFileSync(npmrcPath, 'utf8');
    if (content.includes(REGISTRY_LINE)) return;
  }
  fs.appendFileSync(npmrcPath, REGISTRY_LINE + '\n');
  console.log(`🛠️  Added/updated .npmrc in: ${dir}`);
}

// Entry point
function run() {
  const root = process.cwd();

  walkDir(root, filePath => {
    if (filePath.endsWith('package.json')) {
      updatePackageJson(filePath);
    } else if (/\.(ts|js|tsx|jsx|json|md|yml|yaml|lock)$/.test(filePath)) {
      replaceInFile(filePath, `${OLD_SCOPE}/`, `${NEW_SCOPE}/`);
    }
  });

  // Ensure root .npmrc is set too
  addOrUpdateNpmrc(root);

  console.log('\n🎉 Done updating package names and metadata.');
}

run();
