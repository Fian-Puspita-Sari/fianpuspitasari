var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KalisariPolygon_1 = new ol.format.GeoJSON();
var features_KalisariPolygon_1 = format_KalisariPolygon_1.readFeatures(json_KalisariPolygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KalisariPolygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalisariPolygon_1.addFeatures(features_KalisariPolygon_1);
var lyr_KalisariPolygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KalisariPolygon_1, 
                style: style_KalisariPolygon_1,
                popuplayertitle: "Kalisari Polygon",
                interactive: true,
                title: '<img src="styles/legend/KalisariPolygon_1.png" /> Kalisari Polygon'
            });
var format_Kebun_2 = new ol.format.GeoJSON();
var features_Kebun_2 = format_Kebun_2.readFeatures(json_Kebun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_2.addFeatures(features_Kebun_2);
var lyr_Kebun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_2, 
                style: style_Kebun_2,
                popuplayertitle: "Kebun",
                interactive: true,
                title: '<img src="styles/legend/Kebun_2.png" /> Kebun'
            });
var format_Batas_Sawahh_3 = new ol.format.GeoJSON();
var features_Batas_Sawahh_3 = format_Batas_Sawahh_3.readFeatures(json_Batas_Sawahh_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Sawahh_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Sawahh_3.addFeatures(features_Batas_Sawahh_3);
var lyr_Batas_Sawahh_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Sawahh_3, 
                style: style_Batas_Sawahh_3,
                popuplayertitle: "Batas_Sawahh",
                interactive: true,
                title: '<img src="styles/legend/Batas_Sawahh_3.png" /> Batas_Sawahh'
            });
var format_Sungai_4 = new ol.format.GeoJSON();
var features_Sungai_4 = format_Sungai_4.readFeatures(json_Sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_4.addFeatures(features_Sungai_4);
var lyr_Sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_4, 
                style: style_Sungai_4,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_4.png" /> Sungai'
            });
var format_WilayahRW_RT_5 = new ol.format.GeoJSON();
var features_WilayahRW_RT_5 = format_WilayahRW_RT_5.readFeatures(json_WilayahRW_RT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahRW_RT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahRW_RT_5.addFeatures(features_WilayahRW_RT_5);
var lyr_WilayahRW_RT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahRW_RT_5, 
                style: style_WilayahRW_RT_5,
                popuplayertitle: "Wilayah RW_RT",
                interactive: true,
    title: 'Wilayah RW_RT<br />\
    <img src="styles/legend/WilayahRW_RT_5_0.png" /> RT 01 RW 04<br />\
    <img src="styles/legend/WilayahRW_RT_5_1.png" /> RT 01/ RW 03<br />\
    <img src="styles/legend/WilayahRW_RT_5_2.png" /> RT 02/ RW 03<br />\
    <img src="styles/legend/WilayahRW_RT_5_3.png" /> RT 02/RW 04<br />\
    <img src="styles/legend/WilayahRW_RT_5_4.png" /> RT 03/ RW 03<br />\
    <img src="styles/legend/WilayahRW_RT_5_5.png" /> RT 03/ RW 04<br />\
    <img src="styles/legend/WilayahRW_RT_5_6.png" /> RT 04/ RW 03<br />\
    <img src="styles/legend/WilayahRW_RT_5_7.png" /> RT 04/ RW 04<br />\
    <img src="styles/legend/WilayahRW_RT_5_8.png" /> RT 05/ RW 03<br />\
    <img src="styles/legend/WilayahRW_RT_5_9.png" /> RT 05/ RW 04<br />\
    <img src="styles/legend/WilayahRW_RT_5_10.png" /> RT 06/ RW 04<br />\
    <img src="styles/legend/WilayahRW_RT_5_11.png" /> RT 07/ RW 04<br />\
    <img src="styles/legend/WilayahRW_RT_5_12.png" /> RT 01/ RW 02<br />\
    <img src="styles/legend/WilayahRW_RT_5_13.png" /> RT 06/ RW 03<br />\
    <img src="styles/legend/WilayahRW_RT_5_14.png" /> RT 07/ RW 03<br />\
    <img src="styles/legend/WilayahRW_RT_5_15.png" /> RT 02/ RW 02<br />\
    <img src="styles/legend/WilayahRW_RT_5_16.png" /> RT 03/ RW 02<br />\
    <img src="styles/legend/WilayahRW_RT_5_17.png" /> RT 04/ RW 02<br />\
    <img src="styles/legend/WilayahRW_RT_5_18.png" /> RT 05/ RW 02<br />\
    <img src="styles/legend/WilayahRW_RT_5_19.png" /> RT 06/ RW 02<br />\
    <img src="styles/legend/WilayahRW_RT_5_20.png" /> RT 07/ RW 02<br />\
    <img src="styles/legend/WilayahRW_RT_5_21.png" /> RT 08/ RW 02<br />\
    <img src="styles/legend/WilayahRW_RT_5_22.png" /> RT 01/ RW 01<br />\
    <img src="styles/legend/WilayahRW_RT_5_23.png" /> RT 02/ RW 01<br />\
    <img src="styles/legend/WilayahRW_RT_5_24.png" /> RT 03/ RW 01<br />\
    <img src="styles/legend/WilayahRW_RT_5_25.png" /> RT 04/ RW 01<br />\
    <img src="styles/legend/WilayahRW_RT_5_26.png" /> RT 05/ RW 01<br />\
    <img src="styles/legend/WilayahRW_RT_5_27.png" /> RT 06/ RW 01<br />\
    <img src="styles/legend/WilayahRW_RT_5_28.png" /> RT 07/RW 01<br />\
    <img src="styles/legend/WilayahRW_RT_5_29.png" /> <br />'
        });
var format_BangunanKalisari_6 = new ol.format.GeoJSON();
var features_BangunanKalisari_6 = format_BangunanKalisari_6.readFeatures(json_BangunanKalisari_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanKalisari_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanKalisari_6.addFeatures(features_BangunanKalisari_6);
var lyr_BangunanKalisari_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanKalisari_6, 
                style: style_BangunanKalisari_6,
                popuplayertitle: "Bangunan Kalisari",
                interactive: true,
    title: 'Bangunan Kalisari<br />\
    <img src="styles/legend/BangunanKalisari_6_0.png" /> yes<br />'
        });
var format_KalisariLine_7 = new ol.format.GeoJSON();
var features_KalisariLine_7 = format_KalisariLine_7.readFeatures(json_KalisariLine_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KalisariLine_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalisariLine_7.addFeatures(features_KalisariLine_7);
var lyr_KalisariLine_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KalisariLine_7, 
                style: style_KalisariLine_7,
                popuplayertitle: "Kalisari Line",
                interactive: true,
                title: '<img src="styles/legend/KalisariLine_7.png" /> Kalisari Line'
            });
var format_UMKM_8 = new ol.format.GeoJSON();
var features_UMKM_8 = format_UMKM_8.readFeatures(json_UMKM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_8.addFeatures(features_UMKM_8);
var lyr_UMKM_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKM_8, 
                style: style_UMKM_8,
                popuplayertitle: "UMKM",
                interactive: true,
                title: '<img src="styles/legend/UMKM_8.png" /> UMKM'
            });
var format_TempatIbadah_9 = new ol.format.GeoJSON();
var features_TempatIbadah_9 = format_TempatIbadah_9.readFeatures(json_TempatIbadah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_9.addFeatures(features_TempatIbadah_9);
var lyr_TempatIbadah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_9, 
                style: style_TempatIbadah_9,
                popuplayertitle: "Tempat Ibadah",
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_9.png" /> Tempat Ibadah'
            });
var format_TPU_10 = new ol.format.GeoJSON();
var features_TPU_10 = format_TPU_10.readFeatures(json_TPU_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPU_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPU_10.addFeatures(features_TPU_10);
var lyr_TPU_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPU_10, 
                style: style_TPU_10,
                popuplayertitle: "TPU",
                interactive: true,
                title: '<img src="styles/legend/TPU_10.png" /> TPU'
            });
var format_FasilitasDesa_11 = new ol.format.GeoJSON();
var features_FasilitasDesa_11 = format_FasilitasDesa_11.readFeatures(json_FasilitasDesa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasDesa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasDesa_11.addFeatures(features_FasilitasDesa_11);
var lyr_FasilitasDesa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasDesa_11, 
                style: style_FasilitasDesa_11,
                popuplayertitle: "Fasilitas Desa",
                interactive: true,
                title: '<img src="styles/legend/FasilitasDesa_11.png" /> Fasilitas Desa'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_KalisariPolygon_1.setVisible(true);lyr_Kebun_2.setVisible(true);lyr_Batas_Sawahh_3.setVisible(true);lyr_Sungai_4.setVisible(true);lyr_WilayahRW_RT_5.setVisible(true);lyr_BangunanKalisari_6.setVisible(true);lyr_KalisariLine_7.setVisible(true);lyr_UMKM_8.setVisible(true);lyr_TempatIbadah_9.setVisible(true);lyr_TPU_10.setVisible(true);lyr_FasilitasDesa_11.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_KalisariPolygon_1,lyr_Kebun_2,lyr_Batas_Sawahh_3,lyr_Sungai_4,lyr_WilayahRW_RT_5,lyr_BangunanKalisari_6,lyr_KalisariLine_7,lyr_UMKM_8,lyr_TempatIbadah_9,lyr_TPU_10,lyr_FasilitasDesa_11];
lyr_KalisariPolygon_1.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Kebun_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Batas_Sawahh_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Sungai_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_WilayahRW_RT_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BangunanKalisari_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tourism': 'tourism', 'health_fac': 'health_fac', 'office': 'office', 'tunnel': 'tunnel', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'staff_coun': 'staff_coun', 'roof_mater': 'roof_mater', 'power': 'power', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'width': 'width', 'name_fr': 'name_fr', 'military': 'military', 'building': 'building', 'covered': 'covered', 'isced_leve': 'isced_leve', 'operator': 'operator', 'place': 'place', 'healthcare': 'healthcare', 'admin_leve': 'admin_leve', 'natural': 'natural', 'access_roo': 'access_roo', 'is_in': 'is_in', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'religion': 'religion', 'beds': 'beds', 'shop': 'shop', 'staff_co_1': 'staff_co_1', 'name_en': 'name_en', 'backup_gen': 'backup_gen', 'communicat': 'communicat', 'building_m': 'building_m', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'waterway': 'waterway', 'leisure': 'leisure', 'name_sw': 'name_sw', 'railway': 'railway', 'smoothness': 'smoothness', 'depth': 'depth', 'toilets_di': 'toilets_di', 'medical_sy': 'medical_sy', 'blockage': 'blockage', 'name': 'name', 'bridge': 'bridge', 'government': 'government', 'population': 'population', 'operator_t': 'operator_t', 'rooms': 'rooms', 'boundary': 'boundary', 'status': 'status', 'pump': 'pump', 'historic': 'historic', 'network': 'network', 'addr_stree': 'addr_stree', 'denominati': 'denominati', 'landuse': 'landuse', 'tower': 'tower', 'toilets_ha': 'toilets_ha', 'amenity': 'amenity', 'barrier': 'barrier', 'health_f_2': 'health_f_2', 'access': 'access', 'communic_1': 'communic_1', 'highway': 'highway', 'surface': 'surface', 'diameter': 'diameter', 'water': 'water', 'public_tra': 'public_tra', 'fuel': 'fuel', });
lyr_KalisariLine_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'name_en': 'name_en', 'aeroway': 'aeroway', 'name_sw': 'name_sw', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'name_fr': 'name_fr', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_UMKM_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TempatIbadah_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_TPU_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_FasilitasDesa_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_KalisariPolygon_1.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Kebun_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Batas_Sawahh_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Sungai_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_WilayahRW_RT_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BangunanKalisari_6.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tourism': 'TextEdit', 'health_fac': 'TextEdit', 'office': 'TextEdit', 'tunnel': 'TextEdit', 'man_made': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'staff_coun': 'TextEdit', 'roof_mater': 'TextEdit', 'power': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'width': 'TextEdit', 'name_fr': 'TextEdit', 'military': 'TextEdit', 'building': 'TextEdit', 'covered': 'TextEdit', 'isced_leve': 'TextEdit', 'operator': 'TextEdit', 'place': 'TextEdit', 'healthcare': 'TextEdit', 'admin_leve': 'TextEdit', 'natural': 'TextEdit', 'access_roo': 'TextEdit', 'is_in': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'religion': 'TextEdit', 'beds': 'TextEdit', 'shop': 'TextEdit', 'staff_co_1': 'TextEdit', 'name_en': 'TextEdit', 'backup_gen': 'TextEdit', 'communicat': 'TextEdit', 'building_m': 'TextEdit', 'oneway': 'TextEdit', 'opening_ho': 'TextEdit', 'waterway': 'TextEdit', 'leisure': 'TextEdit', 'name_sw': 'TextEdit', 'railway': 'TextEdit', 'smoothness': 'TextEdit', 'depth': 'TextEdit', 'toilets_di': 'TextEdit', 'medical_sy': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'bridge': 'TextEdit', 'government': 'TextEdit', 'population': 'TextEdit', 'operator_t': 'TextEdit', 'rooms': 'TextEdit', 'boundary': 'TextEdit', 'status': 'TextEdit', 'pump': 'TextEdit', 'historic': 'TextEdit', 'network': 'TextEdit', 'addr_stree': 'TextEdit', 'denominati': 'TextEdit', 'landuse': 'TextEdit', 'tower': 'TextEdit', 'toilets_ha': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'health_f_2': 'TextEdit', 'access': 'TextEdit', 'communic_1': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'diameter': 'TextEdit', 'water': 'TextEdit', 'public_tra': 'TextEdit', 'fuel': 'TextEdit', });
lyr_KalisariLine_7.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'name_en': 'TextEdit', 'aeroway': 'TextEdit', 'name_sw': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'name_fr': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_UMKM_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TempatIbadah_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_TPU_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_FasilitasDesa_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_KalisariPolygon_1.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Kebun_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Batas_Sawahh_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Sungai_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_WilayahRW_RT_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BangunanKalisari_6.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tourism': 'no label', 'health_fac': 'no label', 'office': 'no label', 'tunnel': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'staff_coun': 'no label', 'roof_mater': 'no label', 'power': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'width': 'no label', 'name_fr': 'no label', 'military': 'no label', 'building': 'no label', 'covered': 'no label', 'isced_leve': 'no label', 'operator': 'no label', 'place': 'no label', 'healthcare': 'no label', 'admin_leve': 'no label', 'natural': 'no label', 'access_roo': 'no label', 'is_in': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'religion': 'no label', 'beds': 'no label', 'shop': 'no label', 'staff_co_1': 'no label', 'name_en': 'no label', 'backup_gen': 'no label', 'communicat': 'no label', 'building_m': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'waterway': 'no label', 'leisure': 'no label', 'name_sw': 'no label', 'railway': 'no label', 'smoothness': 'no label', 'depth': 'no label', 'toilets_di': 'no label', 'medical_sy': 'no label', 'blockage': 'no label', 'name': 'no label', 'bridge': 'no label', 'government': 'no label', 'population': 'no label', 'operator_t': 'no label', 'rooms': 'no label', 'boundary': 'no label', 'status': 'no label', 'pump': 'no label', 'historic': 'no label', 'network': 'no label', 'addr_stree': 'no label', 'denominati': 'no label', 'landuse': 'no label', 'tower': 'no label', 'toilets_ha': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'health_f_2': 'no label', 'access': 'no label', 'communic_1': 'no label', 'highway': 'no label', 'surface': 'no label', 'diameter': 'no label', 'water': 'no label', 'public_tra': 'no label', 'fuel': 'no label', });
lyr_KalisariLine_7.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'name_en': 'no label', 'aeroway': 'no label', 'name_sw': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'name_fr': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_UMKM_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TempatIbadah_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_TPU_10.set('fieldLabels', {'id': 'header label - visible with data', 'Nama': 'no label', });
lyr_FasilitasDesa_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_FasilitasDesa_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});