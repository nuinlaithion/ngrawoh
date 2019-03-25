var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_JenisTanah_1 = new ol.format.GeoJSON();
var features_JenisTanah_1 = format_JenisTanah_1.readFeatures(json_JenisTanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenisTanah_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JenisTanah_1.addFeatures(features_JenisTanah_1);var lyr_JenisTanah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JenisTanah_1, 
                style: style_JenisTanah_1,
    title: 'Jenis Tanah<br />\
    <img src="styles/legend/JenisTanah_1_0.png" /> Aluvial Coklat Kekelabuan<br />\
    <img src="styles/legend/JenisTanah_1_1.png" /> Aluvial Kelabu<br />\
    <img src="styles/legend/JenisTanah_1_2.png" /> Aluvial Kelabu Tua<br />\
    <img src="styles/legend/JenisTanah_1_3.png" /> Asosiasi Grumosol Kelabu Tua dan Mediteran Coklat<br />\
    <img src="styles/legend/JenisTanah_1_4.png" /> Asosiasi Litosol dan Grumosol<br />\
    <img src="styles/legend/JenisTanah_1_5.png" /> Grumosol Kelabu<br />\
    <img src="styles/legend/JenisTanah_1_6.png" /> Grumosol Kelabu Tua<br />\
    <img src="styles/legend/JenisTanah_1_7.png" /> Kompleks Litosol Mediteran dan Renzina<br />\
    <img src="styles/legend/JenisTanah_1_8.png" /> Kompleks Regosol Kelabu dan Grumosol Kelabu Tua<br />\
    <img src="styles/legend/JenisTanah_1_9.png" /> Litosol Coklat<br />\
    <img src="styles/legend/JenisTanah_1_10.png" /> Mediteran Coklat<br />\
    <img src="styles/legend/JenisTanah_1_11.png" /> Mediteran Coklat Kemerahan<br />\
    <img src="styles/legend/JenisTanah_1_12.png" /> Mediteran Coklat Tua<br />\
    <img src="styles/legend/JenisTanah_1_13.png" /> Waduk<br />\
    <img src="styles/legend/JenisTanah_1_14.png" /> <br />'
        });var format_Kelerengan_2 = new ol.format.GeoJSON();
var features_Kelerengan_2 = format_Kelerengan_2.readFeatures(json_Kelerengan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelerengan_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Kelerengan_2.addFeatures(features_Kelerengan_2);var lyr_Kelerengan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kelerengan_2, 
                style: style_Kelerengan_2,
    title: 'Kelerengan<br />\
    <img src="styles/legend/Kelerengan_2_0.png" /> Lereng > 40 %<br />\
    <img src="styles/legend/Kelerengan_2_1.png" /> Lereng 0 % - 2 %<br />\
    <img src="styles/legend/Kelerengan_2_2.png" /> Lereng 15 % - 40 %<br />\
    <img src="styles/legend/Kelerengan_2_3.png" /> Lereng 2 % - 15 %<br />\
    <img src="styles/legend/Kelerengan_2_4.png" /> Waduk<br />\
    <img src="styles/legend/Kelerengan_2_5.png" /> <br />'
        });var format_PenggunaanLahan_3 = new ol.format.GeoJSON();
var features_PenggunaanLahan_3 = format_PenggunaanLahan_3.readFeatures(json_PenggunaanLahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahan_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PenggunaanLahan_3.addFeatures(features_PenggunaanLahan_3);var lyr_PenggunaanLahan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenggunaanLahan_3, 
                style: style_PenggunaanLahan_3,
    title: 'Penggunaan Lahan<br />\
    <img src="styles/legend/PenggunaanLahan_3_0.png" /> Air Tawar<br />\
    <img src="styles/legend/PenggunaanLahan_3_1.png" /> Embung<br />\
    <img src="styles/legend/PenggunaanLahan_3_2.png" /> Hankam<br />\
    <img src="styles/legend/PenggunaanLahan_3_3.png" /> Hutan Jati<br />\
    <img src="styles/legend/PenggunaanLahan_3_4.png" /> Industri<br />\
    <img src="styles/legend/PenggunaanLahan_3_5.png" /> Kebun<br />\
    <img src="styles/legend/PenggunaanLahan_3_6.png" /> Kebun Karet<br />\
    <img src="styles/legend/PenggunaanLahan_3_7.png" /> Lahan Kosong<br />\
    <img src="styles/legend/PenggunaanLahan_3_8.png" /> Padang Rumput<br />\
    <img src="styles/legend/PenggunaanLahan_3_9.png" /> Pariwisata<br />\
    <img src="styles/legend/PenggunaanLahan_3_10.png" /> Permukiman<br />\
    <img src="styles/legend/PenggunaanLahan_3_11.png" /> Sawah Irigasi<br />\
    <img src="styles/legend/PenggunaanLahan_3_12.png" /> Sawah Tadah Hujan<br />\
    <img src="styles/legend/PenggunaanLahan_3_13.png" /> Sungai<br />\
    <img src="styles/legend/PenggunaanLahan_3_14.png" /> Tegalan<br />\
    <img src="styles/legend/PenggunaanLahan_3_15.png" /> Waduk<br />\
    <img src="styles/legend/PenggunaanLahan_3_16.png" /> <br />'
        });var format_CurahHujan_4 = new ol.format.GeoJSON();
var features_CurahHujan_4 = format_CurahHujan_4.readFeatures(json_CurahHujan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurahHujan_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CurahHujan_4.addFeatures(features_CurahHujan_4);var lyr_CurahHujan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurahHujan_4, 
                style: style_CurahHujan_4,
    title: 'Curah Hujan<br />\
    <img src="styles/legend/CurahHujan_4_0.png" /> < 1500 mm/tahun<br />\
    <img src="styles/legend/CurahHujan_4_1.png" /> > 2000 mm/tahun<br />\
    <img src="styles/legend/CurahHujan_4_2.png" /> 1500 mm/tahun - 2000<br />\
    <img src="styles/legend/CurahHujan_4_3.png" /> <br />'
        });var format_Geologi_5 = new ol.format.GeoJSON();
var features_Geologi_5 = format_Geologi_5.readFeatures(json_Geologi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geologi_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Geologi_5.addFeatures(features_Geologi_5);var lyr_Geologi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geologi_5, 
                style: style_Geologi_5,
    title: 'Geologi<br />\
    <img src="styles/legend/Geologi_5_0.png" /> Aluvial<br />\
    <img src="styles/legend/Geologi_5_1.png" /> Anggota Banyak<br />\
    <img src="styles/legend/Geologi_5_2.png" /> Anggota Klitik<br />\
    <img src="styles/legend/Geologi_5_3.png" /> Batuan gunungapi Lawu<br />\
    <img src="styles/legend/Geologi_5_4.png" /> Breksi Jobolarangan<br />\
    <img src="styles/legend/Geologi_5_5.png" /> Endapan Undak<br />\
    <img src="styles/legend/Geologi_5_6.png" /> Formasi Kabuh<br />\
    <img src="styles/legend/Geologi_5_7.png" /> Formasi Kalibeng<br />\
    <img src="styles/legend/Geologi_5_8.png" /> Formasi Kerek<br />\
    <img src="styles/legend/Geologi_5_9.png" /> Formasi Notopuro<br />\
    <img src="styles/legend/Geologi_5_10.png" /> Formasi Pucangan<br />\
    <img src="styles/legend/Geologi_5_11.png" /> Lahar Lawu<br />\
    <img src="styles/legend/Geologi_5_12.png" /> <br />'
        });var format_KawasanPerancangan_6 = new ol.format.GeoJSON();
var features_KawasanPerancangan_6 = format_KawasanPerancangan_6.readFeatures(json_KawasanPerancangan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanPerancangan_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_KawasanPerancangan_6.addFeatures(features_KawasanPerancangan_6);var lyr_KawasanPerancangan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KawasanPerancangan_6, 
                style: style_KawasanPerancangan_6,
                title: '<img src="styles/legend/KawasanPerancangan_6.png" /> Kawasan Perancangan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_JenisTanah_1.setVisible(true);lyr_Kelerengan_2.setVisible(true);lyr_PenggunaanLahan_3.setVisible(true);lyr_CurahHujan_4.setVisible(true);lyr_Geologi_5.setVisible(true);lyr_KawasanPerancangan_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_JenisTanah_1,lyr_Kelerengan_2,lyr_PenggunaanLahan_3,lyr_CurahHujan_4,lyr_Geologi_5,lyr_KawasanPerancangan_6];
lyr_JenisTanah_1.set('fieldAliases', {'KET_TANAH': 'KET_TANAH', 'SUMBER': 'SUMBER', 'TAHUN': 'TAHUN', });
lyr_Kelerengan_2.set('fieldAliases', {'KEMIRINGAN': 'KEMIRINGAN', 'SUMBER': 'SUMBER', 'TAHUN': 'TAHUN', });
lyr_PenggunaanLahan_3.set('fieldAliases', {'LANDUSE': 'LANDUSE', 'SUMBER': 'SUMBER', 'TAHUN': 'TAHUN', 'LUAS': 'LUAS', });
lyr_CurahHujan_4.set('fieldAliases', {'KET_CH': 'KET_CH', 'SUMBER': 'SUMBER', 'TAHUN': 'TAHUN', });
lyr_Geologi_5.set('fieldAliases', {'SYMBOLS': 'SYMBOLS', 'NM_LEMBAR': 'NM_LEMBAR', 'NO_LEMBAR': 'NO_LEMBAR', 'NAME': 'NAME', 'CLASS_LITH': 'CLASS_LITH', 'T_CLASS_EN': 'T_CLASS_EN', 'B_CLASS_EN': 'B_CLASS_EN', 'CLASS_TECT': 'CLASS_TECT', 'B_ERA': 'B_ERA', 'B_PERIOD': 'B_PERIOD', 'B_EPOCH': 'B_EPOCH', 'B_EVID': 'B_EVID', 'T_ERA': 'T_ERA', 'T_PERIOD': 'T_PERIOD', 'T_EPOCH': 'T_EPOCH', 'T_EVID': 'T_EVID', 'SUMBER': 'SUMBER', 'TAHUN': 'TAHUN', });
lyr_KawasanPerancangan_6.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JenisTanah_1.set('fieldImages', {'KET_TANAH': 'TextEdit', 'SUMBER': 'TextEdit', 'TAHUN': 'TextEdit', });
lyr_Kelerengan_2.set('fieldImages', {'KEMIRINGAN': 'TextEdit', 'SUMBER': 'TextEdit', 'TAHUN': 'TextEdit', });
lyr_PenggunaanLahan_3.set('fieldImages', {'LANDUSE': 'TextEdit', 'SUMBER': 'TextEdit', 'TAHUN': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_CurahHujan_4.set('fieldImages', {'KET_CH': 'TextEdit', 'SUMBER': 'TextEdit', 'TAHUN': 'TextEdit', });
lyr_Geologi_5.set('fieldImages', {'SYMBOLS': 'TextEdit', 'NM_LEMBAR': 'TextEdit', 'NO_LEMBAR': 'TextEdit', 'NAME': 'TextEdit', 'CLASS_LITH': 'TextEdit', 'T_CLASS_EN': 'TextEdit', 'B_CLASS_EN': 'TextEdit', 'CLASS_TECT': 'TextEdit', 'B_ERA': 'TextEdit', 'B_PERIOD': 'TextEdit', 'B_EPOCH': 'TextEdit', 'B_EVID': 'TextEdit', 'T_ERA': 'TextEdit', 'T_PERIOD': 'TextEdit', 'T_EPOCH': 'TextEdit', 'T_EVID': 'TextEdit', 'SUMBER': 'TextEdit', 'TAHUN': 'TextEdit', });
lyr_KawasanPerancangan_6.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JenisTanah_1.set('fieldLabels', {'KET_TANAH': 'no label', 'SUMBER': 'no label', 'TAHUN': 'no label', });
lyr_Kelerengan_2.set('fieldLabels', {'KEMIRINGAN': 'no label', 'SUMBER': 'no label', 'TAHUN': 'no label', });
lyr_PenggunaanLahan_3.set('fieldLabels', {'LANDUSE': 'no label', 'SUMBER': 'no label', 'TAHUN': 'no label', 'LUAS': 'no label', });
lyr_CurahHujan_4.set('fieldLabels', {'KET_CH': 'no label', 'SUMBER': 'no label', 'TAHUN': 'no label', });
lyr_Geologi_5.set('fieldLabels', {'SYMBOLS': 'no label', 'NM_LEMBAR': 'no label', 'NO_LEMBAR': 'no label', 'NAME': 'no label', 'CLASS_LITH': 'no label', 'T_CLASS_EN': 'no label', 'B_CLASS_EN': 'no label', 'CLASS_TECT': 'no label', 'B_ERA': 'no label', 'B_PERIOD': 'no label', 'B_EPOCH': 'no label', 'B_EVID': 'no label', 'T_ERA': 'no label', 'T_PERIOD': 'no label', 'T_EPOCH': 'no label', 'T_EVID': 'no label', 'SUMBER': 'no label', 'TAHUN': 'no label', });
lyr_KawasanPerancangan_6.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KawasanPerancangan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});