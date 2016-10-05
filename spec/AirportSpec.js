'use strict';

describe("Airport", function(){
  var airport;
  var plane;
  var weather;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj("plane",["land","takeoff"]);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
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







});
