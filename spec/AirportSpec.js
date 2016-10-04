'use strict';

describe("Airport", function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj("plane",["land"])
  });

  it("has no planes by default", function(){
    expect(airport.planes()).toEqual([]);
  });

  it("can give a plane green light to land", function(){
    airport.goodToLand(plane);
    expect(airport.planes()).toEqual([plane])
  });

});
