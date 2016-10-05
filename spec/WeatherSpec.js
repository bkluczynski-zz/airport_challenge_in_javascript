'use strict';

describe ("Weather", function(){
  var weather;
  beforeEach(function(){
    weather = new Weather();
  });
  it("sometimes stormy", function(){
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });
  it("sometimes it's not stormy", function(){
    spyOn(Math,'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });

















});
