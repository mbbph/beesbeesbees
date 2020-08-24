var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.color = 'yellow';
  this.job = 'make honey'
  this.honeyPot = 0;

};


HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//NOTE: FUNCTIONS MUST BE DECLARED AFTER PROTOTYPE IS ESTABLISHED
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
