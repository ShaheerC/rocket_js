
const Rocket = require('./rocket.js');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      // arrange
      let rocket_one = new Rocket ();
      
      // act
      let result = rocket_one.name && rocket_one.colour;
      
      // assert
      expect(result).toBeTruthy();
    });

    test("it should set the rocket's name and colour if provided", () => {
      // arrange
      let rocket_two = new Rocket ({name: 'Robbie', colour: 'Black'});
      
      // act
      let resultname = rocket_two.name;
      let resultcolour = rocket_two.colour;
          
      // assert
      expect(resultname).toBe('Robbie');
      expect(resultcolour).toBe('Black');
    });
  });

  describe('liftOff', () => {
    test("if the rocket is not flying, should set rocket's flying attribute to true and return true", () => {
      // arrange
      let rocket_three = new Rocket();

      // act
      let result = rocket_three.liftOff();

      // assert
      expect(result).toBe(true);
    });
    test("if the rocket is already flying should return false", () => {
      // arrange
      let rocket_four = new Rocket({flying: true});

      // act
      let result = rocket_four.liftOff();

      // assert
      expect(result).toBe(false);
    });
  });

  describe('land', () => {
    test('if the rocket is not flying return false', () => {
      // arrange
        let rocket_five = new Rocket();
      
      // act
        let result = rocket_five.land();

      // assert
        expect(result).toBe(false);
    });
    test("if the rocket is flying return true", () => {
      // arrange
        let rocket_six = new Rocket({flying: true});

      // act
        let result = rocket_six.land();

      // assert
        expect(result).toBe(true);
    });
  });

  describe('status', () => {
    test("if the rocket is not flying return ready for liftoff", () => {
      // arrange
        let rocket_seven = new Rocket();

      // act
        let result = rocket_seven.status();

      // assert
        expect(result).toContain('ready for liftoff!');
    });
    test("if the rocket is flying return flying through the sky", () => {
      // arrange
        let rocket_eight = new Rocket({flying: true});
      
      // act
        let result = rocket_eight.status();

      // assert
        expect(result).toContain('flying through the sky!');
    });
  });
  
  describe('send coded signal', () => {
    test("if no message code provided return boop", () => {
      // arrange
        let rocket_nine = new Rocket();

      // act
        let result = rocket_nine.sendCodedSignal();

      // assert
        expect(result).toBe('boop');
    });
    test("if code is < 10 return beep", () => {
      // arrange
        let rocket_ten = new Rocket();

      // act
        let result = rocket_ten.sendCodedSignal(9);

      // assert
        expect(result).toBe('beep');
    });
    test("if code is < 10 and rocket is flying return beep beep", () => {
      // arrange
        let rocket_eleven = new Rocket({flying: true});

      // act
        let result = rocket_eleven.sendCodedSignal(9);
      // assert
        expect(result).toBe('beep beep');
    });
    test("if code is > 10 and rocket is flying return boop boop boop", () => {
      // arrange
        let rocket_twelve = new Rocket({flying: true});

      // act
        let result = rocket_twelve.sendCodedSignal(11);

      // assert
        expect(result).toBe('boop boop boop');
    });
    test("if code is > 10 and rocket is not flying return boop beep beep", () => {
      // arrange
        let rocket_thirteen = new Rocket();

      // act
        let result = rocket_thirteen.sendCodedSignal(11);

      // assert
        expect(result).toBe("boop beep beep");
    });
  });

  // ...

});
