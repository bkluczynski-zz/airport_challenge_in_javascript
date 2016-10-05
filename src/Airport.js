function Airport(weather = new Weather){
  this.hangar = [];
  this.weather = weather;
};

Airport.prototype.planes = function(){
 return this.hangar;
};

Airport.prototype.goodToLand = function(plane){
  if (this.weather.isStormy()) {
  throw new Error ('cannot land during storm');
}
this.hangar.push(plane);
};

Airport.prototype.goodToTakeOff =
function(plane){
  if (this.weather.isStormy()) {
  throw new Error ('cannot takeoff during storm');
}
this.hangar.pop(plane)
};
