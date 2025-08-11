// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import {LOCALES} from '../locales';

export default {
  property: {
    weight: 'Gewicht',
    label: 'Beschriftung',
    fillColor: 'Füllfarbe',
    color: 'Farbe',
    coverage: 'Abdeckung',
    strokeColor: 'Konturfarbe',
    radius: 'Radius',
    outline: 'Umriss',
    stroke: 'Kontur',
    density: 'Dichte',
    height: 'Höhe',
    sum: 'Summe',
    pointCount: 'Punktanzahl'
  },
  placeholder: {
    search: 'Suchen',
    selectField: 'Feld auswählen',
    yAxis: 'Y-Achse',
    selectType: 'Typ auswählen',
    selectValue: 'Wert auswählen',
    enterValue: 'Wert eingeben',
    empty: 'leer',
    selectLayer: 'Ebene auswählen'
  },
  misc: {
    by: 'von',
    valuesIn: 'Werte in',
    valueEquals: 'Wert gleich',
    dataSource: 'Datenquelle',
    brushRadius: 'Pinselradius (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Kartenebenen',
    label: 'Beschriftung',
    road: 'Straße',
    border: 'Grenze',
    building: 'Gebäude',
    water: 'Wasser',
    land: 'Land',
    '3dBuilding': '3D-Gebäude',
    background: 'Hintergrund'
  },
  panel: {
    text: {
      label: 'Beschriftung',
      labelWithId: 'Beschriftung {labelId}',
      fontSize: 'Schriftgröße',
      fontColor: 'Schriftfarbe',
      backgroundColor: 'Hintergrundfarbe',
      textAnchor: 'Textanker',
      alignment: 'Ausrichtung',
      addMoreLabel: 'Weitere Beschriftung hinzufügen',
      outlineWidth: 'Umrissbreite',
      outlineColor: 'Umrissfarbe'
    }
  },
  sidebar: {
    panels: {
      layer: 'Ebenen',
      filter: 'Filter',
      interaction: 'Interaktionen',
      basemap: 'Grundkarte'
    },
    panelViewToggle: {
      list: 'Listenansicht',
      byDataset: 'Nach Datensatz anzeigen'
    }
  },
  layer: {
    required: 'Erforderlich*',
    columnModesSeparator: 'Oder',
    radius: 'Radius',
    color: 'Farbe',
    fillColor: 'Füllfarbe',
    outline: 'Umriss',
    weight: 'Gewicht',
    propertyBasedOn: '{property} basierend auf',
    coverage: 'Abdeckung',
    stroke: 'Kontur',
    strokeWidth: 'Konturbreite',
    strokeColor: 'Konturfarbe',
    basic: 'Basic',
    trailLength: 'Pfadlänge',
    trailLengthDescription: 'Anzahl Sekunden, bis ein Pfad vollständig ausgeblendet ist',
    newLayer: 'neue Ebene',
    elevationByDescription: 'Wenn deaktiviert, basiert die Höhe auf der Punktanzahl',
    colorByDescription: 'Wenn deaktiviert, basiert die Farbe auf der Punktanzahl',
    aggregateBy: 'Aggregiere {field} nach',
    '3DModel': '3D-Modell',
    '3DModelOptions': '3D-Modell-Optionen',
    service: 'Service',
    layer: 'Ebene',
    appearance: 'Erscheinungsbild',
    type: {
      point: 'Punkt',
      arc: 'Bogen',
      line: 'Linie',
      grid: 'Raster',
      hexbin: 'Hexbin',
      polygon: 'Polygon',
      geojson: 'GeoJSON',
      cluster: 'Cluster',
      icon: 'Symbol',
      heatmap: 'Heatmap',
      hexagon: 'Hexagon',
      hexagonid: 'H3',
      trip: 'Route',
      s2: 'S2',
      '3d': '3D',
      vectortile: 'Vektor-Kachel',
      rastertile: 'Raster-Kachel',
      wms: 'WMS'
    },
    wms: {
      hover: 'Wert:'
    },
    layerUpdateError:
      'Fehler beim Aktualisieren der Ebene: {errorMessage}. Stellen Sie sicher, dass das Format der Eingabedaten gültig ist.',
    interaction: 'Interaktion'
  },
  layerVisConfigs: {
    angle: 'Winkel',
    strokeWidth: 'Konturbreite (Pixel)',
    strokeWidthRange: 'Konturbreitenbereich',
    radius: 'Radius',
    fixedRadius: 'Fester Radius in Metern',
    fixedRadiusDescription: 'Radius auf absoluten Radius in Metern abbilden, z.B. 5 für 5 Meter',
    radiusRange: 'Radiusbereich',
    clusterRadius: 'Cluster-Radius in Pixeln',
    radiusRangePixels: 'Radiusbereich in Pixeln',
    billboard: 'Billboard',
    billboardDescription: 'Geometrie zur Kamera ausrichten',
    fadeTrail: 'Pfad ausblenden',
    opacity: 'Deckkraft',
    coverage: 'Abdeckung',
    outline: 'Umriss',
    colorRange: 'Farbbereich',
    stroke: 'Kontur',
    strokeColor: 'Konturfarbe',
    strokeColorRange: 'Konturfarbbereich',
    targetColor: 'Zielfarbe',
    colorAggregation: 'Farbaggregation',
    heightAggregation: 'Höhenaggregation',
    resolutionRange: 'Auflösungsbereich',
    sizeScale: 'Größenskala',
    worldUnitSize: 'Größe in Weltkoordinaten',
    elevationScale: 'Höhenskala',
    enableElevationZoomFactor: 'Höhen-Zoomfaktor verwenden',
    enableElevationZoomFactorDescription: 'Höhe basierend auf aktuellem Zoomfaktor anpassen',
    enableHeightZoomFactor: 'Höhen-Zoomfaktor verwenden',
    heightScale: 'Höhenskala',
    coverageRange: 'Abdeckungsbereich',
    highPrecisionRendering: 'High-Precision-Rendering',
    highPrecisionRenderingDescription: 'Hohe Präzision führt zu langsamerer Performance',
    height: 'Höhe',
    heightDescription:
      'Klicken Sie auf die Schaltfläche oben rechts auf der Karte, um zur 3D-Ansicht zu wechseln',
    fill: 'Füllung',
    enablePolygonHeight: 'Polygonhöhe aktivieren',
    showWireframe: 'Drahtgitter anzeigen',
    weightIntensity: 'Gewichtsintensität',
    zoomScale: 'Zoomskala',
    heightRange: 'Höhenbereich',
    heightMultiplier: 'Höhenmultiplikator',
    fixedHeight: 'Feste Höhe',
    fixedHeightDescription: 'Höhe ohne Anpassungen verwenden',
    allowHover: 'Hover erlauben',
    showNeighborOnHover: 'Nachbarn bei Hover hervorheben',
    showHighlightColor: 'Highlight-Farbe anzeigen',
    darkModeEnabled: 'Dunkle Grundkarte',
    transparentBackground: 'Transparenter Hintergrund'
  },
  layerManager: {
    addData: 'Daten hinzufügen',
    addLayer: 'Ebene hinzufügen',
    layerBlending: 'Ebenenüberblendung',
    overlayBlending: 'Overlay-Überblendung'
  },
  mapManager: {
    mapStyle: 'Kartenstil',
    addMapStyle: 'Kartenstil hinzufügen',
    '3dBuildingColor': '3D-Gebäudefarbe',
    backgroundColor: 'Hintergrundfarbe'
  },
  effectManager: {
    effects: 'Effekte',
    addEffect: 'Effekt hinzufügen',
    pickDateTime: 'Datum/Zeit auswählen',
    currentTime: 'Aktuelle Zeit',
    pickCurrrentTime: 'Aktuelle Zeit auswählen',
    date: 'Datum',
    time: 'Zeit',
    timezone: 'Zeitzone'
  },
  layerConfiguration: {
    defaultDescription: 'Berechne {property} basierend auf ausgewähltem Feld',
    howTo: 'Anleitung',
    showColorChart: 'Farbdiagramm anzeigen',
    hideColorChart: 'Farbdiagramm ausblenden'
  },
  filterManager: {
    addFilter: 'Filter hinzufügen',
    timeFilterSync: 'Synchronisierte Datensätze',
    timeLayerSync: 'Mit Layer-Zeitleiste verknüpfen',
    timeLayerUnsync: 'Verknüpfung mit Layer-Zeitleiste aufheben',
    column: 'Spalte'
  },
  datasetTitle: {
    showDataTable: 'Datentabelle anzeigen',
    removeDataset: 'Datensatz entfernen'
  },
  datasetInfo: {
    rowCount: '{rowCount} Zeilen',
    vectorTile: 'Vektor-Kachel',
    rasterTile: 'Raster-Kachel',
    wmsTile: 'WMS-Kachel'
  },
  tooltip: {
    hideLayer: 'Ebene ausblenden',
    showLayer: 'Ebene anzeigen',
    hideFeature: 'Objekt ausblenden',
    showFeature: 'Objekt anzeigen',
    hide: 'ausblenden',
    show: 'anzeigen',
    removeLayer: 'Ebene entfernen',
    duplicateLayer: 'Ebene duplizieren',
    zoomToLayer: 'Auf Ebene zoomen',
    resetAfterError: 'Versuchen Sie, die Ebene nach einem Fehler erneut zu aktivieren',
    layerSettings: 'Ebeneneinstellungen',
    closePanel: 'Aktuelles Panel schließen',
    switchToDualView: 'Zu Dual-Map-Ansicht wechseln',
    showLegend: 'Legende anzeigen',
    disable3DMap: '3D-Karte deaktivieren',
    DrawOnMap: 'Auf Karte zeichnen',
    selectLocale: 'Sprache auswählen',
    showAiAssistantPanel: 'KI-Assistent anzeigen',
    hideAiAssistantPanel: 'KI-Assistent ausblenden',
    hideLayerPanel: 'Ebenenpanel ausblenden',
    showLayerPanel: 'Ebenenpanel anzeigen',
    moveToTop: 'An den Anfang der Datenebenen verschieben',
    selectBaseMapStyle: 'Grundkartenstil auswählen',
    removeBaseMapStyle: 'Grundkartenstil entfernen',
    delete: 'Löschen',
    timePlayback: 'Zeitabspielung',
    timeFilterSync: 'Mit Spalte aus anderem Datensatz synchronisieren',
    cloudStorage: 'Cloud-Speicher',
    '3DMap': '3D-Karte',
    animationByWindow: 'Bewegendes Zeitfenster',
    animationByIncremental: 'Inkrementelles Zeitfenster',
    speed: 'Geschwindigkeit',
    play: 'Abspielen',
    pause: 'Pausieren',
    reset: 'Zurücksetzen',
    export: 'Exportieren',
    timeLayerSync: 'Mit Layer-Zeitleiste verknüpfen',
    timeLayerUnsync: 'Verknüpfung mit Layer-Zeitleiste aufheben',
    syncTimelineStart: 'Anfang des aktuellen Filterzeitraums',
    syncTimelineEnd: 'Ende des aktuellen Filterzeitraums',
    showEffectPanel: 'Effektpanel anzeigen',
    hideEffectPanel: 'Effektpanel ausblenden',
    removeEffect: 'Effekt entfernen',
    disableEffect: 'Effekt deaktivieren',
    effectSettings: 'Effekteinstellungen'
  },
  toolbar: {
    exportImage: 'Bild exportieren',
    exportData: 'Daten exportieren',
    exportMap: 'Karte exportieren',
    shareMapURL: 'Karten-URL teilen',
    saveMap: 'Karte speichern',
    select: 'Auswählen',
    polygon: 'Polygon',
    rectangle: 'Rechteck',
    hide: 'Ausblenden',
    show: 'Anzeigen',
    ...LOCALES
  },
  editor: {
    filterLayer: 'Ebenen filtern',
    filterLayerDisabled: 'Nicht-Polygon-Geometrien können nicht zum Filtern verwendet werden',
    copyGeometry: 'Geometrie kopieren',
    noLayersToFilter: 'Keine Ebenen zum Filtern'
  },

  modal: {
    title: {
      deleteDataset: 'Datensatz löschen',
      addDataToMap: 'Daten zur Karte hinzufügen',
      exportImage: 'Bild exportieren',
      exportData: 'Daten exportieren',
      exportMap: 'Karte exportieren',
      addCustomMapboxStyle: 'Benutzerdefinierten Kartenstil hinzufügen',
      saveMap: 'Karte speichern',
      shareURL: 'URL teilen'
    },
    button: {
      delete: 'Löschen',
      download: 'Herunterladen',
      export: 'Exportieren',
      addStyle: 'Stil hinzufügen',
      save: 'Speichern',
      defaultCancel: 'Abbrechen',
      defaultConfirm: 'Bestätigen'
    },
    exportImage: {
      ratioTitle: 'Seitenverhältnis',
      ratioDescription: 'Wählen Sie das Seitenverhältnis für verschiedene Verwendungszwecke.',
      ratioOriginalScreen: 'Originalbildschirm',
      ratioCustom: 'Benutzerdefiniert',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Auflösung',
      resolutionDescription: 'Hohe Auflösung ist besser für Drucke geeignet.',
      mapLegendTitle: 'Kartenlegende',
      mapLegendAdd: 'Legende zur Karte hinzufügen'
    },
    exportData: {
      datasetTitle: 'Datensatz',
      datasetSubtitle: 'Wählen Sie die zu exportierenden Datensätze aus',
      allDatasets: 'Alle',
      dataTypeTitle: 'Datentyp',
      dataTypeSubtitle: 'Wählen Sie den zu exportierenden Datentyp aus',
      filterDataTitle: 'Daten filtern',
      filterDataSubtitle:
        'Sie können zwischen dem Export der Originaldaten oder gefilterten Daten wählen',
      filteredData: 'Gefilterte Daten',
      unfilteredData: 'Ungefilterte Daten',
      fileCount: '{fileCount} Dateien',
      rowCount: '{rowCount} Zeilen',
      tiledDatasetWarning: '* Der Export von Daten für gekachelte Datensätze wird nicht unterstützt'
    },
    deleteData: {
      warning: 'Sie werden diesen Datensatz löschen. Dies betrifft {length} Ebenen'
    },
    addStyle: {
      publishTitle:
        '2. Wenn Sie in Schritt 1 eine Mapbox-Style-URL eingegeben haben, veröffentlichen Sie Ihren Stil bei Mapbox oder geben Sie ein Zugriffstoken an. (Optional)',
      publishSubtitle1: 'Sie können Ihren eigenen Kartenstil erstellen unter',
      publishSubtitle2: 'und',
      publishSubtitle3: 'veröffentlichen',
      publishSubtitle4: 'ihn.',
      publishSubtitle5: 'Um einen privaten Stil zu verwenden, fügen Sie Ihr',
      publishSubtitle6: 'Zugriffstoken',
      publishSubtitle7:
        'hier ein. *kepler.gl ist eine clientseitige Anwendung, Daten verbleiben in Ihrem Browser.',
      exampleToken: 'z.B. pk.abcdefg.xxxxxx',
      pasteTitle: '1. Style-URL einfügen',
      pasteSubtitle0: 'Eine Style-URL kann eine Mapbox',
      pasteSubtitle1: 'Was ist eine',
      pasteSubtitle2: 'Style-URL',
      pasteSubtitle3: 'oder eine style.json unter Verwendung der',
      pasteSubtitle4: 'Mapbox GL Style Spec',
      namingTitle: '3. Geben Sie Ihrem Stil einen Namen'
    },
    shareMap: {
      title: 'Karte teilen',
      shareUriTitle: 'Karten-URL teilen',
      shareUriSubtitle: 'Generieren Sie eine Karten-URL, um sie mit anderen zu teilen',
      cloudTitle: 'Cloud-Speicher',
      cloudSubtitle:
        'Melden Sie sich an und laden Sie Kartendaten in Ihren persönlichen Cloud-Speicher hoch',
      shareDisclaimer:
        'kepler.gl speichert Ihre Kartendaten in Ihrem persönlichen Cloud-Speicher. Nur Personen mit der URL können auf Ihre Karte und Daten zugreifen. ' +
        'Sie können die Datendatei jederzeit in Ihrem Cloud-Konto bearbeiten/löschen.',
      gotoPage: 'Gehen Sie zu Ihrer Kepler.gl {currentProvider} Seite'
    },
    statusPanel: {
      mapUploading: 'Karte wird hochgeladen',
      error: 'Fehler'
    },
    saveMap: {
      title: 'Cloud-Speicher',
      subtitle: 'Melden Sie sich an, um die Karte in Ihrem persönlichen Cloud-Speicher zu speichern'
    },
    exportMap: {
      formatTitle: 'Kartenformat',
      formatSubtitle: 'Wählen Sie das Format, in das Sie Ihre Karte exportieren möchten',
      html: {
        selection: 'Exportieren Sie Ihre Karte in eine interaktive HTML-Datei.',
        tokenTitle: 'Mapbox-Zugriffstoken',
        tokenSubtitle: 'Verwenden Sie Ihr eigenes Mapbox-Zugriffstoken in der HTML (optional)',
        tokenPlaceholder: 'Fügen Sie Ihr Mapbox-Zugriffstoken ein',
        tokenMisuseWarning:
          '* Wenn Sie kein eigenes Token angeben, kann die Karte jederzeit nicht angezeigt werden, wenn wir unseres ersetzen, um Missbrauch zu vermeiden. ',
        tokenDisclaimer:
          'Sie können das Mapbox-Token später mit den folgenden Anweisungen ändern: ',
        tokenUpdate: 'So aktualisieren Sie ein vorhandenes Map-Token.',
        modeTitle: 'Kartenmodus',
        modeSubtitle1: 'Wählen Sie den App-Modus. Mehr ',
        modeSubtitle2: 'Info',
        modeDescription: 'Erlauben Sie Benutzern, die Karte zu {mode}',
        read: 'lesen',
        edit: 'bearbeiten'
      },
      json: {
        configTitle: 'Kartenkonfiguration',
        configDisclaimer:
          'Die Kartenkonfiguration wird in die JSON-Datei aufgenommen. Wenn Sie kepler.gl in Ihrer eigenen App verwenden, können Sie diese Konfiguration kopieren und an ',
        selection:
          'Exportieren Sie aktuelle Kartendaten und Konfiguration in eine einzelne JSON-Datei. Sie können die gleiche Karte später öffnen, indem Sie diese Datei in kepler.gl hochladen.',
        disclaimer:
          '* Die Kartenkonfiguration ist mit den geladenen Datensätzen gekoppelt. "dataId" wird verwendet, um Ebenen, Filter und Tooltips an einen bestimmten Datensatz zu binden. ' +
          'Wenn Sie diese Konfiguration an addDataToMap übergeben, stellen Sie sicher, dass die Datensatz-ID mit den dataId/s in dieser Konfiguration übereinstimmt.'
      }
    },
    loadingDialog: {
      loading: 'Laden...'
    },
    loadData: {
      upload: 'Dateien hochladen',
      tileset: 'Kachelset',
      storage: 'Aus Speicher laden'
    },
    tripInfo: {
      title: 'Routen aus GeoJSON erstellen',
      titleTable: 'Routen aus einer Punkteliste erstellen',
      description1: `Um den Pfad zu animieren, müssen die GeoJSON-Daten \`LineString\` in ihrer Feature-Geometrie enthalten, und die Koordinaten im LineString müssen 4 Elemente im Format haben
${'```json'}
[Längengrad, Breitengrad, Höhe, Zeitstempel]
${'```'}
Das 3. Element ist ein Zeitstempel. Gültige Zeitstempelformate sind Unix in Sekunden wie \`1564184363\` oder in Millisekunden wie \`1564184363000\`.`,
      descriptionTable1:
        'Routen können erstellt werden, indem eine Liste von Punkten aus Breiten- und Längengraden verbunden, nach Zeitstempeln sortiert und nach eindeutigen IDs gruppiert wird.',
      example: 'GeoJSON-Beispiel',
      exampleTable: 'CSV-Beispiel'
    },
    polygonInfo: {
      title: 'Polygonebene aus GeoJSON-Feature erstellen',
      titleTable: 'Pfad aus Punkten erstellen',
      description: `Polygone können erstellt werden aus
__1. Eine GeoJSON-Feature-Sammlung__
__2. Eine CSV mit Geometriespalte__

### 1. Polygon aus GeoJSON-Datei erstellen

Wenn Sie eine GeoJSON-Datei hochladen, die eine Feature-Sammlung enthält, wird automatisch eine Polygonebene erstellt

GeoJSON-Beispiel
${'```json'}
{
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [102.0, 0.5]
      },
      "properties": {
          "prop0": "value0"
      }
  }, {
      "type": "Feature",
      "geometry": {
          "type": "LineString",
          "coordinates": [
              [102.0, 0.0],
              [103.0, 1.0],
              [104.0, 0.0],
              [105.0, 1.0]
          ]
      },
      "properties": {
        "prop0": "value0"
      }
  }]
}
${'```'}

### 2. Polygon aus einer Geometriespalte in einer CSV-Tabelle erstellen
Geometrien (Polygone, Punkte, Linien etc.) können als \`GeoJSON\` oder \`WKT\` formatierte Zeichenkette in eine CSV eingebettet werden.

#### 2.1 \`GeoJSON\` Zeichenkette
Beispiel data.csv mit \`GeoJSON\` Zeichenkette
${'```txt'}
id,_geojson
1,"{""type"":""Polygon"",""coordinates"":[[[-74.158491,40.835947],[-74.157914,40.83902]]]}"
${'```'}

#### 2.2 \`WKT\` Zeichenkette
Beispiel data.csv mit \`WKT\` Zeichenkette
[Well-Known Text (WKT)](https://dev.mysql.com/doc/refman/5.7/en/gis-data-formats.html#gis-wkt-format) ist ein ASCII-Format zum Austausch von Geometriedaten.

Beispiel data.csv mit WKT
${'```txt'}
id,_geojson
1,"POLYGON((0 0,10 0,10 10,0 10,0 0),(5 5,7 5,7 7,5 7, 5 5))"
${'```'}
`,
      descriptionTable: `Pfade können erstellt werden, indem eine Liste von Punkten aus Breiten- und Längengraden verbunden, nach einem Indexfeld (z.B. Zeitstempel) sortiert und nach eindeutigen IDs gruppiert wird.

  ### Ebenenspalten:
  - **id**: - *erforderlich*&nbsp;- Eine \`id\` Spalte wird verwendet, um Punkte zu gruppieren. Punkte mit derselben ID werden zu einem einzigen Pfad verbunden.
  - **lat**: - *erforderlich*&nbsp;- Der Breitengrad des Punkts
  - **lon**: - *erforderlich*&nbsp;- Der Längengrad des Punkts
  - **alt**: - *optional*&nbsp;- Die Höhe des Punkts
  - **sort by**: - *optional*&nbsp;- Eine \`sort by\` Spalte wird verwendet, um die Punkte zu sortieren. Wenn nicht angegeben, werden die Punkte nach Zeilenindex sortiert.
`,
      exampleTable: 'CSV-Beispiel'
    },
    iconInfo: {
      title: 'Symbole zeichnen',
      description1:
        'Erstellen Sie in Ihrer CSV eine Spalte und geben Sie den Namen des Symbols ein, das Sie zeichnen möchten. Sie können die Zelle leer lassen, wenn das Symbol für einige Punkte nicht angezeigt werden soll. Wenn die Spalte benannt ist',
      code: 'icon',
      description2: ' erstellt kepler.gl automatisch eine Symbolebene für Sie.',
      example: 'Beispiel:',
      icons: 'Symbole'
    },
    storageMapViewer: {
      lastModified: 'Zuletzt geändert vor {lastUpdated}',
      back: 'Zurück'
    },
    overwriteMap: {
      title: 'Karte wird gespeichert...',
      alreadyExists: 'existiert bereits in Ihrem {mapSaved}. Möchten Sie sie überschreiben?'
    },
    loadStorageMap: {
      back: 'Zurück',
      goToPage: 'Gehen Sie zu Ihrer Kepler.gl {displayName} Seite',
      storageMaps: 'Speicher / Karten',
      noSavedMaps: 'Noch keine gespeicherten Karten',
      foursquareStorageMessage:
        'Hier werden nur Karten angezeigt, die mit Kepler.gl > Speichern > Foursquare-Speicher gespeichert wurden'
    }
  },
  header: {
    visibleLayers: 'Sichtbare Ebenen',
    layerLegend: 'Legende'
  },
  interactions: {
    tooltip: 'Tooltip',
    brush: 'Pinsel',
    coordinate: 'Koordinaten',
    geocoder: 'Geocoder'
  },
  layerBlending: {
    title: 'Ebenenüberblendung',
    additive: 'additiv',
    normal: 'normal',
    subtractive: 'subtraktiv'
  },
  overlayBlending: {
    title: 'Karten-Overlay-Überblendung',
    description: 'Ebenen mit der Grundkarte überblenden, sodass beide sichtbar sind.',
    screen: 'dunkle Grundkarte',
    normal: 'normal',
    darken: 'helle Grundkarte'
  },
  columns: {
    title: 'Spalten',
    lat: 'lat',
    lng: 'lng',
    altitude: 'Höhe',
    alt: 'Höhe',
    id: 'id',
    timestamp: 'Zeit',
    icon: 'Symbol',
    geojson: 'geojson',
    geoarrow: 'geoarrow',
    geoarrow0: 'geoarrow Quelle',
    geoarrow1: 'geoarrow Ziel',
    token: 'Token',
    sortBy: 'sortieren nach',
    neighbors: 'Nachbarn',
    arc: {
      lat0: 'Quellen-Breitengrad oder Hex-ID',
      lng0: 'Quellen-Längengrad oder Hex-ID',
      lat1: 'Ziel-Breitengrad oder Hex-ID',
      lng1: 'Ziel-Längengrad oder Hex-ID'
    },
    line: {
      alt0: 'Quellen-Höhe',
      alt1: 'Ziel-Höhe'
    },
    grid: {
      worldUnitSize: 'Rastergröße (km)'
    },
    hexagon: {
      worldUnitSize: 'Hexagon-Radius (km)'
    },
    hex_id: 'Hex-ID'
  },
  color: {
    customPalette: 'Benutzerdefinierte Palette',
    steps: 'Stufen',
    type: 'Typ',
    colorBlindSafe: 'Farbenblind-sicher',
    reversed: 'Umgekehrt',
    disableStepReason: `Die Anzahl der Stufen kann mit benutzerdefinierten Farbunterbrechungen nicht geändert werden. Verwenden Sie die benutzerdefinierte Palette, um Stufen zu bearbeiten.`,
    preset: 'Farbvorgaben',
    picker: 'Farbauswahl'
  },
  scale: {
    colorScale: 'Farbskala',
    sizeScale: 'Größenskala',
    strokeScale: 'Konturskala',
    strokeColorScale: 'Konturfarbenskala',
    scale: 'Skala'
  },
  fileUploader: {
    message: 'Ziehen Sie Ihre Datei(en) hierher',
    chromeMessage:
      '*Chrome-Benutzer: Begrenzen Sie die Dateigröße auf 250 MB. Für größere Dateien verwenden Sie Safari.',
    disclaimer:
      '*kepler.gl ist eine clientseitige Anwendung ohne Server-Backend. Daten verbleiben nur auf Ihrem Gerät/Browser. ' +
      'Es werden keine Informationen oder Kartendaten an einen Server gesendet.',
    configUploadMessage:
      'Laden Sie {fileFormatNames} oder gespeicherte Karten-**Json** hoch. Lesen Sie mehr über [**unterstützte Dateiformate**]',
    browseFiles: 'Dateien durchsuchen',
    uploading: 'Wird hochgeladen',
    fileNotSupported: 'Datei {errorFiles} wird nicht unterstützt.',
    or: 'oder'
  },
  tilesetSetup: {
    header: 'Vektor-Kacheln einrichten',
    rasterTileHeader: 'Raster-Kacheln einrichten',
    addTilesetText: 'Kachelset hinzufügen'
  },
  geocoder: {
    title: 'Geben Sie eine Adresse oder Koordinaten ein, z.B. 37.79,-122.40'
  },
  fieldSelector: {
    clearAll: 'Alle löschen',
    formatting: 'Formatierung'
  },
  compare: {
    modeLabel: 'Vergleichsmodus',
    typeLabel: 'Vergleichstyp',
    types: {
      absolute: 'Absolut',
      relative: 'Relativ'
    }
  },
  mapPopover: {
    primary: 'Primär'
  },
  density: 'Dichte',
  'Bug Report': 'Fehlerbericht',
  'User Guide': 'Benutzerhandbuch',
  Save: 'Speichern',
  Share: 'Teilen',
  mapLegend: {
    layers: {
      line: {
        singleColor: {
          sourceColor: 'Quelle',
          targetColor: 'Ziel'
        }
      },
      arc: {
        singleColor: {
          sourceColor: 'Quelle',
          targetColor: 'Ziel'
        }
      },
      default: {
        singleColor: {
          color: 'Füllfarbe',
          strokeColor: 'Umriss'
        }
      }
    }
  }
};
