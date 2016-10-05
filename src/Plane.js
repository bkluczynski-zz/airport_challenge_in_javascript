function Plane (){};

Plane.prototype.land = function(airport){
  airport.goodToLand(this);
};

Plane.prototype.takeoff =
function(airport){
  airport.goodToTakeOff(this)
};
