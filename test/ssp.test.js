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
const isLessThan30 = require('../SSP/13_isLessThan30.js');
const equalsTen = require('../SSP/14_equalsTen.js');
const isLessThan = require('../SSP/15_isLessThan.js');
const isGreaterThan = require('../SSP/16_isGreaterThan.js');
const isEqualTo = require('../SSP/17_isEqualTo.js');
const isEven = require('../SSP/18_isEven.js');
const isOdd = require('../SSP/19_isOdd.js');
const isSameLength = require('../SSP/20_isSameLength.js');
const areBothOdd = require('../SSP/21_areBothOdd.js');
const isEitherEven = require('../SSP/22_isEitherEven.js');
const isEvenLength = require('../SSP/23_isEvenLength.js');
const isEvenAndGreaterThanTen = require('../SSP/24_isEvenAndGreaterThan10.js');

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

  describe('#isGreaterThan10()', function() {
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

  describe("#isLessThan30()", function() {
    it("should return a boolean", function() {
      expect(isLessThan30(40)).to.be.a('boolean');
    });
    it("should return true for a number less than 30", function() {
      expect(isLessThan30(4)).to.be.true;
    });
    it("should return false for a number greater than 30", function() {
      expect(isLessThan30(400)).to.be.false;
    });
    it("should return false for the number 30", function() {
      expect(isLessThan30(30)).to.be.false;
    });
  });
  
  describe("#equalsTen()", function() {
    it("should return a boolean", function() {
      expect(equalsTen(10)).to.be.a("boolean");
    });
    it("should return true for the number 10", function() {
      expect(equalsTen(10)).to.be.true;
    });
    it("should return false for a number greater than 10", function() {
      expect(equalsTen(400)).to.be.false;
    });
    it("should return false for the number 10", function() {
      expect(equalsTen(3)).to.be.false;
    });
  });

  describe("#isLessThan()", function() {
    it("should return a boolean", function() {
      expect(isLessThan(40, 30)).to.be.a("boolean");
    });
    it("should return whether num2 is less than num1", function() {
      expect(isLessThan(20, 200)).to.be.false;
    });
    it("should return false if the numbers are equal", function() {
      expect(isLessThan(20, 20)).to.be.false;
    });
  });

  describe("#isGreaterThan()", function() {
    it("should return a boolean", function() {
      expect(typeof isGreaterThan(40, 30)).to.equal("boolean");
    });
    it("should return whether num2 is greater than num1", function() {
      expect(isGreaterThan(20, 200)).to.be.true;
    });
    it("should return false if the numbers are equal", function() {
      expect(isGreaterThan(20, 20)).to.be.false;
    });
  });

  describe("#isEqualTo()", function() {
    it("should return a boolean", function() {
      expect(isEqualTo(40, 30)).to.be.a("boolean");
    });
    it("should return false if num2 is greater than num1", function() {
      expect(isEqualTo(20, 200)).to.be.false;
    });
    it("should return false if num2 is less than num1", function() {
      expect(isEqualTo(20, 2)).to.be.false;
    });
    it("should return true if the numbers are equal", function() {
      expect(isEqualTo(20, 20)).to.be.true;
    });
  });

  describe("#isEven()", function() {
    it("should return a boolean", function() {
      expect(isEven(40)).to.be.a("boolean");
    });
    it("should return if the number is even", function() {
      expect(isEven(8)).to.be.true;
    });
    it("should return true if the number is 0", function() {
      expect(isEven(0)).to.be.true;
    });
  });

  describe("#isOdd()", function() {
    it("should return a boolean", function() {
      expect(isOdd(40)).to.be.a("boolean");
    });
    it("should return true if the number is odd", function() {
      expect(isOdd(7)).to.be.true;
    });
    it("should return false if the number is 0", function() {
      expect(isOdd(0)).to.be.false;
    });
  });

  describe("#isSameLength()", function() {
    it("should return a boolean", function() {
      expect(isSameLength("hi", "there")).to.be.a("boolean");
    });
    it("should return true if the two words are the same length", function() {
      expect(isSameLength("yes", "you")).to.be.true;
    });
    it("should return false if the two words are not the same length", function() {
      expect(isSameLength("hi", "there")).to.be.false;
    });
  });

  describe("#areBothOdd()", function () {
    it("should return a boolean", function () {
      expect(areBothOdd(40, 3)).to.be.a("boolean");
    });
    it("should return true if both numbers are odd", function () {
      expect(areBothOdd(41, 3)).to.be.true;
    });
    it("should return false if the first number is even", function () {
      expect(areBothOdd(4, 3)).to.be.false;
    });
    it("should return false if the second number is even", function () {
      expect(areBothOdd(5, 30)).to.be.false;
    });
  });

  describe("#isEitherEven()", function () {
    it("should return a boolean", function () {
      expect(isEitherEven(40, 3)).to.be.a("boolean");
    });
    it("should return true if the first number is even", function () {
      expect(isEitherEven(4, 3)).to.be.true;
    });
    it("should return true if the second number is even", function () {
      expect(isEitherEven(7, 30)).to.be.true;
    });
    it("should return true if the both numbers are even", function () {
      expect(isEitherEven(70, 30)).to.be.true;
    });
    it("should return false if both numbers are odd", function () {
      expect(isEitherEven(71, 31)).to.be.false;
    });
  });

  describe("#isEvenLength()", function () {
    it("should return a boolean", function () {
      expect(isEvenLength("wow")).to.be.a('boolean');
    });
    it('should return if the length of the word is even', function () {
      expect(isEvenLength('specials')).to.be.true;
    });
    it('should return true if the string is empty', function () {
      expect(isEvenLength('')).to.be.true;
    });
  });

  describe("isEvenAndGreaterThanTen", function () {
    it("should return a boolean", function () {
      expect(isEvenAndGreaterThanTen(40)).to.be.a('boolean');
    });
    it('should return true if the number is even and greater than 10', function () {
      expect(isEvenAndGreaterThanTen(80)).to.be.true;
    });
    it('should return false if the number is odd', function () {
      expect(isEvenAndGreaterThanTen(91)).to.be.false;
    });
    it('should return false if the number is less than 10', function () {
      expect(isEvenAndGreaterThanTen(8)).to.be.false;
    });
    it('should return false if the number is 10', function () {
      expect(isEvenAndGreaterThanTen(10)).to.be.false;
    });
  });

}); 
