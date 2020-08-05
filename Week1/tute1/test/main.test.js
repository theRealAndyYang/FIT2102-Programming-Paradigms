describe("exercise_1_suite", function() {
  describe("aVariable", function() {
    it("Please create a mutable variable called `aVariable` and initialise its value to 1.", function() {
      expect(aVariable).to.equal(1);
    });
    it("Since it's mutable I should be able to reassign it a different value... I'm setting it to 2.", function() {
      aVariable = 2;
      expect(aVariable).to.equal(2);
    });
  });
  describe("aConst", function() {
    it("Please create a variable called aConst and set its value to aVariable + 1.  It's value is now 2 (not 3 although I set aVariable to 2 just now, due to eager evaluation of the value of aVariable immediately after you created aVariable).", function() {
      expect(aConst).to.equal(2);
    });
    it("Since aConst is immutable it will throw an error at runtime if I try to change it.", function() {
      try {
        aConst = 3;
      } catch(e) {
        console.log(e.message);
        expect(e.name).to.equal('TypeError')
      }
      expect(aConst).to.equal(2);
    });
  });
});

describe("exercise_2_suite", function() {
  describe("aFunction", function() {
    it("aFunction exists and is a function", function() {
      expect(aFunction).is.a('function');
    });
    it("invoking aFunction should return the value of anotherVariable which is 2", function() {
      expect(aFunction()).to.equal(2);
    });
  });
  describe("anotherVariable", function() {
    it("anotherVariable is not visible outside the function scope", function() {
      try {
        console.log(anotherVariable);
        expect(0,"anotherVariable shouldn't be visible!").to.equal(1)
      } catch(e) {
        console.log(e.message);
        expect(e.name).to.equal('ReferenceError')
      }
    });
  });
});

describe("exercise_3_suite", function() {
  describe("Solve Project Euler Problem 1", function() {
    it("Function `projectEulerProblem1` exists.", function() {
      expect(projectEulerProblem1).is.a('function');
    });
    it("The answer is correct.", function() {
      const r = projectEulerProblem1();
      expect(hash(r+"")).to.equal(String(166417277))
    });
  });
});

describe("exercise_4_suite", function() {
  describe("alwaysTrue", function() {
    it("Function `alwaysTrue` exists.", function() {
      expect(alwaysTrue).is.a('function');
    });
    it("Function `alwaysTrue` always returns true.", function() {
      expect(alwaysTrue(false)).to.equal(true);
      expect(alwaysTrue("blah")).to.equal(true);
      expect(alwaysTrue(123)).to.equal(true);
    });
  });
  describe("Imperative Summer", function() {
    it("Function `imperativeSummer` exists.", function() {
      expect(imperativeSummer).is.a('function');
    });
    it("imperativeSummer(alwaysTrue, 10) is 45", function() {
      expect(imperativeSummer(alwaysTrue, 10)).to.equal(45);
    });
    it("imperativeSummer(!alwaysTrue, 10) is 0", function() {
      expect(imperativeSummer(x => !alwaysTrue(), 10)).to.equal(0);
    });
  });
  describe("sumTo", function() {
    it("Function `sumTo` exists.", function() {
      expect(sumTo).is.a('function');
    });
    it("sumTo(10) is 45", function() {
      expect(sumTo(10)).to.equal(45);
    });
  });
  describe("isDivisibleByThreeOrFives", function() {
    it("Function `isDivisibleByThreeOrFive` exists.", function() {
      expect(isDivisibleByThreeOrFive).is.a('function');
    });
    it("3 is divisible by 3 or 5", function() {
      expect(isDivisibleByThreeOrFive(3)).is.true;
    });
    it("5 is divisible by 3 or 5", function() {
      expect(isDivisibleByThreeOrFive(5)).is.true;
    });
    it("10 is divisible by 3 or 5", function() {
      expect(isDivisibleByThreeOrFive(10)).is.true;
    });
  });
  describe("projectEulerProblem1UsingImperativeSummer ", function() {
    it("Function `projectEulerProblem1UsingImperativeSummer` exists.", function() {
      expect(projectEulerProblem1UsingImperativeSummer).is.a('function');
    });
    it("The answer is correct.", function() {
      const r = projectEulerProblem1UsingImperativeSummer();
      expect(hash(r+"")).to.equal(String(166417277))
    });
  });
});

describe("exercise_5_suite", function() {
  describe("immutableSummer: Implement a summer that uses an immutable loop", function() {
    it("Function `immutableSummer` exists.", function() {
      expect(immutableSummer).is.a('function');
    });
    it("Sum of [1,10) is 45", function() {
      expect(immutableSummer(alwaysTrue, 10)).to.equal(45);
    });
  });
  describe("projectEulerProblem1UsingImmutableSummer", function() {
    it("Function `projectEulerProblem1UsingImmutableSummer` exists.", function() {
      expect(projectEulerProblem1UsingImmutableSummer).is.a('function');
    });
    it("The answer is correct.", function() {
      const r = projectEulerProblem1UsingImmutableSummer();
      expect(hash(r+"")).to.equal(String(166417277))
    });
  });
});
