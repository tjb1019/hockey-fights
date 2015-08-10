'use strict';

describe('Service: matchups', function () {

  // load the service's module
  beforeEach(module('hockeyFightsApp'));

  // instantiate service
  var matchups;
  beforeEach(inject(function (_matchups_) {
    matchups = _matchups_;
  }));

  it('should do something', function () {
    expect(!!matchups).toBe(true);
  });

});
