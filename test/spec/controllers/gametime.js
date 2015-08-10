'use strict';

describe('Controller: GametimeCtrl', function () {

  // load the controller's module
  beforeEach(module('hockeyFightsApp'));

  var GametimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GametimeCtrl = $controller('GametimeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GametimeCtrl.awesomeThings.length).toBe(3);
  });
});
