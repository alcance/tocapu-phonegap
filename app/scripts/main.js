require.config({
    paths: {
        jquery: '../../vendor/jquery/jquery',
        cartodb: '../../vendor/cartodb.js/dist/cartodb.nojquery'
    },
    shim: {
        cartodb: {
            deps: ['jquery'],
            exports: 'cartodb'
        }
    }
});

require(['views/map'], function (MapView) {
    'use strict';

    var app = {};

    app.map = new MapView();
});