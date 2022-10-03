function funcA() {
  console.log(a); //! result will be undefined hoisted scope
  console.log(foo()); //? function will run when we call main func
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

//* to fix it we need to change var to let/const to avoid hoisting and change func to expression func

// --------//
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); //! will print "Aurelio De Rosa"
var test = obj.prop.getFullName; //? undefined geting the func without calling
console.log(test());
//* change var to let/const
//* and for test remove () from log and add it to teh .getfullname on test assing also change it to let/const

// ----------------//
function funcB() {
  let a = b = 0;
  a++;
  return a;
}
funcB();
console.log(typeof a); //!undefined 
console.log(typeof b); //? number
//* b with no let/var/const = becomes global var hoist 

// -----------//
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
//* will console log ("2") bottom priority

// -----------------//

function funcD1() {
  d = 1;
}
funcD1();
console.log(d); //! = 1 hoisting
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e); //? error var hoist only top of current scope

// -----------//

function funcE() {
  console.log("Value of f in local scope: ", f); //? print 1
}
console.log("Value of f in global scope: ", f); //! undefined 
var f = 1;
funcE();
