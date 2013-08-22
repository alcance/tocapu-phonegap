require.config({
    baseUrl: '../',
    paths: {
        jquery: 'vendor/jquery/jquery',
        cartodb: 'vendor/cartodb.js/dist/cartodb.nojquery',
        mocha: 'vendor/mocha/mocha',
        chai: 'vendor/chai/chai'
    },
    shim: {
        cartodb: {
            deps: ['jquery'],
            exports: 'cartodb'
        },
        mocha: {
            exports: 'mocha'
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