function Plane (){};

Plane.prototype.land = function(airport){
  airport.goodToLand(this);
};
