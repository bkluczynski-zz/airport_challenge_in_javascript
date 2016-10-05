'use strict';

describe('Feature Test', function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe('under not stormy conditions', function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });
    it("planes can be instructed to land at an airport", function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it("planes can take off from an airport", function(){
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('under stormy conditions', function(){


    it("prevents the takeoff when weather is stormy", function(){
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport)
      spyOn(airport.weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff(airport); }).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });

    it("prevents the landing when weather is stormy", function(){
      spyOn(Math,'random').and.returnValue(0);
      plane.takeoff(airport);
      spyOn(airport.weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.planes()).not.toContain(plane);
    });

  });


});
