const expect = require('chai').expect;

const isOldEnoughToDrink = require('../SSP/1_isOldEnoughtToDrink.js');
const isOldEnoughToDrive = require('../SSP/2_isOldEnoughToDrive.js');
const isOldEnoughToVote = require('../SSP/3_isOldEnoughToVote.js');
const isOldEnoughToDrinkAndDrive = require('../SSP/4_isOldEnoughtToDrinkAndDrive.js');
const getProperty = require('../SSP/5_getProperty.js');
const addProperty = require('../SSP/6_addProperty.js');
const checkAge = require('../SSP/8_checkAge.js');
const getFullName = require('../SSP/9_getFullName.js');
const getLengthOfWord = require('../SSP/10_getLengthOfWord.js');
const getLengthOfTwoWords = require('../SSP/11_getLengthOfTwoWords.js');
const isGreaterThan10 = require('../SSP/12_isGreaterThanTen.js'); 

describe('SSP Problems', function() {
  describe('#isOldEnoughToDrink()', function() {
    it('should return a boolean', function() {
      expect(isOldEnoughToDrink(33)).to.be.a('boolean')
    });
    it('should return whether the age is greater than 21', function() {
      expect(isOldEnoughToDrink(2)).to.be.false;
    });
    it('should return true if the age is 21', function() {
      expect(isOldEnoughToDrink(21)).to.be.true;
    });
  });

  describe('#isOldEnoughToDrive()', function() {
    it('should return a boolean', function() {
      expect(isOldEnoughToDrive(40)).to.be.a('boolean');
    });
    it('should return true if the age is 16', function() {
      expect(isOldEnoughToDrive(16)).to.be.true;
    });
    it('should return false if the age is less than 16', function() {
      expect(isOldEnoughToDrive(15)).to.be.false;
    });
  });

  describe('#isOldEnoughToVote()', function() {
    it('should return a boolean', function() {
      expect(isOldEnoughToVote(40)).to.be.a('boolean');
    });
    it('should return whether the age is less than 18', function() {
      expect(isOldEnoughToVote(12)).to.be.false;
    });
    it('should return true if the age is 18', function() {
      expect(isOldEnoughToVote(18)).to.be.true;
    });
  });

  describe('#isOldEnoughToDrinkAndDrive()', function() {
    it('should return a boolean', function() {
      expect(isOldEnoughToDrinkAndDrive(19)).to.be.a('boolean');
    });
    it('should return false', function() {
      expect(isOldEnoughToDrinkAndDrive(99999)).to.be.false;
    });
  });

  describe('getProperty', function () {
    var obj;

    beforeEach(function () {
      obj = {
        name: 'You'
      }
    });

    it('should return the value of the property located in the object at the passed in key', function () {
      expect(getProperty(obj, 'name')).to.equal('You');
    });
    it('should return undefined when there is no property at the passed in key', function () {
      expect(getProperty(obj, 'age')).to.equal(undefined);
    });
  });

  describe('addProperty', function () {
    var testObj;
    beforeEach(function () {
      testObj = {};
    });
    it('should add a property to the passed in object at the passed in key', function () {
      addProperty(testObj, 'testKey');
      expect(testObj.testKey).to.be.true;
    });
    it('should set the value at the passed in key to true on the passed in object', function () {
      addProperty(testObj, 'testKey');
      expect(testObj.testKey).to.be.true;
    });
  });

  describe('#checkAge()', function() {
    it('should return a string', function() {
      expect(checkAge('Dan', '24')).to.be.a('string');
    });
    it('should welcome someone over 21', function() {
      expect(checkAge('Dan', '24')).to.equal('Welcome, Dan!');
    });
    it('should welcome a 21 year old', function() {
      expect(checkAge('Toni', '21')).to.equal('Welcome, Toni!');
    });
    it('should bounce someone under 21', function() {
      expect(checkAge('Rad', '4')).to.equal('Go home, Rad!');
    });
  });

  describe('#getFullName()', function() {
    it('should return a string', function() {
      expect(getFullName('Rebecca', 'Solnit')).to.be.a('string');
    });
    it('should return a full name using firstName and lastName', function() {
      expect(getFullName('Rebecca', 'Solnit')).to.equal('Rebecca Solnit');
    });
  });

  describe('#getLengthOfWord()', function() {
    it('should return a number', function() {
      expect(getLengthOfWord('something')).to.be.a('number');
    });
    it('should return the length of the passed in word', function() {
      expect(getLengthOfWord('random')).to.equal(6);
    });
    it('should return the length of an empty word', function() {
      expect(getLengthOfWord('')).to.equal(0);
    });
  });

  describe('#getLengthOfTwoWords()', function() {
    it('should return a number', function() {
      expect(getLengthOfTwoWords('two', 'words')).to.be.a('number');
    });
    it('should return the sum length of two words', function() {
      expect(getLengthOfTwoWords('one', 'two')).to.equal(6);
    });
  });

  describe('isGreaterThan10', function() {
    it('should return a boolean', function() {
      expect(isGreaterThan10(40)).to.be.a('boolean');
    });
    it('should return false for a number less than 10', function() {
      expect(isGreaterThan10(4)).to.be.false;
    });
    it('should return true for a number greater than 10', function() {
      expect(isGreaterThan10(40)).to.be.true;
    });
    it('should return false for the number 10', function() {
      expect(isGreaterThan10(10)).to.be.false;
    });
  });
  
}); 
