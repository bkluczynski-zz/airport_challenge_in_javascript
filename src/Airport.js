function Airport(){
  this.hangar = [];
};

Airport.prototype.planes = function(){
 return this.hangar;
};

Airport.prototype.goodToLand = function(plane){
  this.hangar.push(plane);
};

Airport.prototype.goodToTakeOff =
function(plane){
  if (this.isStormy()) {
  throw new Error ('cannot takeoff during storm');
}
this.hangar.pop(plane)
};

Airport.prototype.isStormy = function(){
  return false;
};
