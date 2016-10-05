function Airport(weather = new Weather){
  this.hangar = [];
  this.weather = weather;
  this.DEFAULT_CAPACITY = 20;

};

Airport.prototype.planes = function(){
 return this.hangar;
};

Airport.prototype.goodToLand = function(plane){
  if (this.weather.isStormy()) {
  throw new Error ('cannot land during storm');
}
  if (this.hangar.length >= this.DEFAULT_CAPACITY) {
  throw new Error ('cannot land, airport over capacity');
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
