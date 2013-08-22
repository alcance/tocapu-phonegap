require.config({
    paths: {
        jquery: '../../vendor/jquery/jquery',
        backbone: '../../vendor/backbone-amd/backbone',
        underscore: '../../vendor/underscore-amd/underscore',
        handlebars: '../../vendor/handlebars/handlebars',
        quojs: '../../vendor/quojs/quo',
        lungo: '../../vendor/lungo/lungo'
    },
    shim: {
        jquery: {
            exports: '$'
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
