require.config({
    paths: {
        jquery: '../../vendor/jquery/jquery',
        backbone: '../../vendor/backbone-amd/backbone',
        underscore: '../../vendor/underscore-amd/underscore',
        leaflet: '../../vendor/leaflet/dist/leaflet',
        handlebars: '../../vendor/handlebars/handlebars'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        leaflet: {
            exports: 'L'
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        }
    }
});

require(['views/map'], function(MapView) {
    'use strict';
    console.log(MapView);
});