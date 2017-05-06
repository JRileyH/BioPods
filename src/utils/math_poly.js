Math.toDeg = function(angle) {
  return angle * (180 / Math.PI);
}
Math.toRad = function(angle) {
  return angle * (Math.PI / 180);
}
Math.chance = function(chk){
    return Math.random()<chk;
}
Math.span = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}