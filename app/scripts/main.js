require.config({
    paths: {
        jquery: '../../vendor/jquery/jquery',
        backbone: '../../vendor/backbone-amd/backbone',
        underscore: '../../vendor/underscore-amd/underscore',
        leaflet: '../../vendor/leaflet/dist/'
        handlebars: '../../vendor/handlebars/handlebars',
        quojs: '../../vendor/quojs/quo',
        lungo: '../../vendor/lungo/lungo'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        leaflet: {
            exports: 'L'
        }
    }
});

require(['views/map'], function (MapView) {
    'use strict';

    //var app = {};

    //app.map = new MapView();
});
