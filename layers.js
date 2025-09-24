var wms_layers = [];

var format_Departements_carto_ARA_0 = new ol.format.GeoJSON();
var features_Departements_carto_ARA_0 = format_Departements_carto_ARA_0.readFeatures(json_Departements_carto_ARA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departements_carto_ARA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departements_carto_ARA_0.addFeatures(features_Departements_carto_ARA_0);
var lyr_Departements_carto_ARA_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departements_carto_ARA_0, 
                style: style_Departements_carto_ARA_0,
                popuplayertitle: 'Departements_carto_ARA',
                interactive: false,
                title: '<img src="styles/legend/Departements_carto_ARA_0.png" /> Departements_carto_ARA'
            });
var format_Dfaillance_1 = new ol.format.GeoJSON();
var features_Dfaillance_1 = format_Dfaillance_1.readFeatures(json_Dfaillance_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dfaillance_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dfaillance_1.addFeatures(features_Dfaillance_1);
var lyr_Dfaillance_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dfaillance_1, 
                style: style_Dfaillance_1,
                popuplayertitle: 'Défaillance',
                interactive: true,
                title: 'Défaillance'
            });

lyr_Departements_carto_ARA_0.setVisible(true);lyr_Dfaillance_1.setVisible(true);
var layersList = [lyr_Departements_carto_ARA_0,lyr_Dfaillance_1];
lyr_Departements_carto_ARA_0.set('fieldAliases', {'POPULATION': 'POPULATION', 'Code_dept': 'Code_dept', 'Lib_Dept': 'Lib_Dept', });
lyr_Dfaillance_1.set('fieldAliases', {'KC_ETABLISSEMENT': 'KC_ETABLISSEMENT', 'KC_ENTREPRISE': 'KC_ENTREPRISE', 'SIRET PRINCIPAL': 'SIRET PRINCIPAL', 'Catégories': 'Catégories', 'SIREN PRINCIPAL': 'SIREN PRINCIPAL', 'Raison sociale': 'Raison sociale', 'KC_NAFREV2': 'KC_NAFREV2', 'NAF': 'NAF', 'INSEE_COM': 'INSEE_COM', 'Code département': 'Code département', 'Commune principale': 'Commune principale', 'Impact DE motifs éco': 'Impact DE motifs éco', 'Indicateur': 'Indicateur', 'Impact possible': 'Impact possible', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Departements_carto_ARA_0.set('fieldImages', {'POPULATION': '', 'Code_dept': '', 'Lib_Dept': '', });
lyr_Dfaillance_1.set('fieldImages', {'KC_ETABLISSEMENT': 'TextEdit', 'KC_ENTREPRISE': 'TextEdit', 'SIRET PRINCIPAL': 'TextEdit', 'Catégories': 'TextEdit', 'SIREN PRINCIPAL': 'TextEdit', 'Raison sociale': 'TextEdit', 'KC_NAFREV2': 'TextEdit', 'NAF': 'TextEdit', 'INSEE_COM': 'TextEdit', 'Code département': 'TextEdit', 'Commune principale': 'TextEdit', 'Impact DE motifs éco': 'TextEdit', 'Indicateur': 'TextEdit', 'Impact possible': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_Departements_carto_ARA_0.set('fieldLabels', {'POPULATION': 'no label', 'Code_dept': 'no label', 'Lib_Dept': 'no label', });
lyr_Dfaillance_1.set('fieldLabels', {'KC_ETABLISSEMENT': 'hidden field', 'KC_ENTREPRISE': 'hidden field', 'SIRET PRINCIPAL': 'hidden field', 'Catégories': 'inline label - always visible', 'SIREN PRINCIPAL': 'hidden field', 'Raison sociale': 'inline label - always visible', 'KC_NAFREV2': 'hidden field', 'NAF': 'inline label - always visible', 'INSEE_COM': 'hidden field', 'Code département': 'hidden field', 'Commune principale': 'hidden field', 'Impact DE motifs éco': 'inline label - always visible', 'Indicateur': 'hidden field', 'Impact possible': 'inline label - always visible', 'longitude': 'hidden field', 'latitude': 'hidden field', });
lyr_Dfaillance_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});