define(['jquery', 'backbone', 'leaflet'], function ($, Backbone, L) {
    'use strict';

    var MapView = Backbone.View.extend({
        tagName: 'div',
        id: 'map',
        initialize: function () {
            this.createMap();
        },
        createMap: function () {
            var map = L.map(this.id, {
                center: [40, -4],
                zoom: 12
            });

            this.map = map;
        },
        createLayer: function () {
            //this.layer = cartodb.createLayer();
        }
    });

    return MapView;
});