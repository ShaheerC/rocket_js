
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

  });
  // ...

});
