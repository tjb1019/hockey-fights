'use strict';

describe('Service: sinBin', function () {

  // load the service's module
  beforeEach(module('hockeyFightsApp'));

  // instantiate service
  var sinBin;
  beforeEach(inject(function (_sinBin_) {
    sinBin = _sinBin_;
  }));

  it('should do something', function () {
    expect(!!sinBin).toBe(true);
  });

});
