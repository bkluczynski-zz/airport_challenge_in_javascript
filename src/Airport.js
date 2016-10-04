function Airport(){
  this.hangar = [];
};

Airport.prototype.planes = function(){
 return this.hangar;
};

Airport.prototype.goodToLand = function(plane){
  this.hangar.push(plane);
};
