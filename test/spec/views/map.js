define([
    'chai',
    'jquery',
    'app/scripts/views/map'
],  function (Chai, $, MapView) {
        'use strict';

        var expect = Chai.expect;

        describe('#Views map', function () {
            beforeEach(function () {
                this.map = new MapView();
            });

            describe('@Create', function () {
                it('map should a instance MapView', function () {
                    expect(this.map).to.instanceOf(MapView);
                });
            });
        });
    });