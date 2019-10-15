const expect = require('chai').expect;

const isOldEnoughToDrink = require('../SSP/1_isOldEnoughtToDrink.js');
const isOldEnoughToDrive = require('../SSP/2_isOldEnoughToDrive.js');
const isOldEnoughToVote = require('../SSP/3_isOldEnoughToVote.js');
const isOldEnoughToDrinkAndDrive = require('../SSP/4_isOldEnoughtToDrinkAndDrive.js');

describe('SSP Problems', function() {
  describe('#isOldEnoughToDrink()', function() {
    it("should return a boolean", function() {
      expect(isOldEnoughToDrink(33)).to.be.a('boolean')
    });
    it("should return whether the age is greater than 21", function() {
      expect(isOldEnoughToDrink(2)).to.be.false;
    });
    it("should return true if the age is 21", function() {
      expect(isOldEnoughToDrink(21)).to.be.true;
    });
  });

  describe("#isOldEnoughToDrive()", function() {
    it("should return a boolean", function() {
      expect(isOldEnoughToDrive(40)).to.be.a("boolean");
    });
    it("should return true if the age is 16", function() {
      expect(isOldEnoughToDrive(16)).to.be.true;
    });
    it("should return false if the age is less than 16", function() {
      expect(isOldEnoughToDrive(15)).to.be.false;
    });
  });

  describe("#isOldEnoughToVote()", function() {
    it("should return a boolean", function() {
      expect(isOldEnoughToVote(40)).to.be.a("boolean");
    });
    it("should return whether the age is less than 18", function() {
      expect(isOldEnoughToVote(12)).to.be.false;
    });
    it("should return true if the age is 18", function() {
      expect(isOldEnoughToVote(18)).to.be.true;
    });
  });

  describe("#isOldEnoughToDrinkAndDrive()", function() {
    it("should return a boolean", function() {
      expect(isOldEnoughToDrinkAndDrive(19)).to.be.a("boolean");
    });
    it("should return false", function() {
      expect(isOldEnoughToDrinkAndDrive(99999)).to.be.false;
    });
  });
}); 
