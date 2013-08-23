require.config({
    baseUrl: '../',
    paths: {
        mocha: 'vendor/mocha/mocha',
        chai: 'vendor/chai/chai',
        jquery: 'vendor/jquery/jquery',
        backbone: 'vendor/backbone-amd/backbone',
        underscore: 'vendor/underscore-amd/underscore',
        leaflet: 'vendor/leaflet/dist/leaflet',
        handlebars: 'vendor/handlebars/handlebars',
        quojs: 'vendor/quojs/quo',
        lungo: 'vendor/lungo/lungo'
    },
    shim: {
        mocha: {
            exports: 'mocha'
        },
        jquery: {
            exports: '$'
        },
        leaflet: {
            exports: 'L'
        }
    }
});

require(['require', 'mocha'], function (require, mocha) {
    'use strict';

    mocha.setup('bdd');

    require([
        'test/spec/views/map'
    ], function () {
        (window.mochaPhantomJS || mocha).run();
    });
});
