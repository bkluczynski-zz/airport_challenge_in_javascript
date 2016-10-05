'use strict';

describe("Airport", function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj("plane",["land","takeoff"])
  });

  it("has no planes by default", function(){
    expect(airport.planes()).toEqual([]);
  });

  it("can give a plane green light to land", function(){
    airport.goodToLand(plane);
    expect(airport.planes()).toEqual([plane])
  });

  it("can give a plane green light to take off",function(){
    airport.goodToLand(plane);
    airport.goodToTakeOff(plane);
    expect(airport.planes()).toEqual([])
  });

  it("can check whether weather is stormy", function(){
    expect(airport.isStormy()).toBeFalsy;
  });


  describe("when weather is stormy", function(){
    it("can stop the plane", function(){
      airport.goodToLand(plane);
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ airport.goodToTakeOff(plane); }).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toEqual([plane]);
    });
  });







});
