'use strict';

describe('Service: myexternalip', function () {

  // load the service's module
  beforeEach(module('rLoop'));

  // instantiate service
  var myexternalip;
  beforeEach(inject(function (_myexternalip_) {
    myexternalip = _myexternalip_;
  }));

  it('should do something', function () {
    expect(!!myexternalip).toBe(true);
  });

});
