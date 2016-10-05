'use strict';

describe("Airport", function(){
  var airport;
  var plane;
  var weather;
  var i;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj("plane",["land","takeoff"]);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    i = 0;
  });

  describe('under normal conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
      spyOn(Math,'random').and.returnValue(0);
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


  });



  describe("when weather is stormy", function(){
    it("can stop the plane from taking off", function(){
      spyOn(Math,'random').and.returnValue(1);
      expect(function(){ airport.goodToTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
    it("can stop the plane from landing", function(){
      spyOn(Math,'random').and.returnValue(1);
      expect(function(){ airport.goodToLand(plane); }).toThrowError('cannot land during storm');
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('airport can be full', function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });
    it('does not allow a plane over its default capacity', function(){
      while (i < 20) {
      airport.goodToLand(airport);
      i++;
    };
    expect(function(){ airport.goodToLand(airport); }).toThrowError('cannot land, airport over capacity');
  });
});







});
