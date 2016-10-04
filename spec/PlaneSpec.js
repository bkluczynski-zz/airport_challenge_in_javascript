'use strict';

describe("Plane", function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['goodToLand','goodToTakeOff'])
  });

  it("can land at an airport", function(){
    plane.land(airport);
    expect(airport.goodToLand).toHaveBeenCalledWith(plane);
  });

  it("can take off from an airport", function(){
    plane.takeoff(airport);
    expect(airport.goodToTakeOff).toHaveBeenCalledWith(plane);
  });



});
