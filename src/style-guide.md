## Variables

- Use `const` or `let` to declare variables. eslint: [`no-var`](https://eslint.org/docs/rules/no-var)

  > Using `const` or `let` creates a block-scoped variable and should always be preferred to using `var` which creates a function-scoped variable. Additionally there is can be difficult-to-predict behavior around the way in which variables declared using `var` are initialized, redeclared, and hoisted.

  ```javascript
  // bad
  // variables declared using the var keyword are not block-scoped
  var numbers = [ 1, 2, 3 ];

  // good
  // variables declared using const or let are block-scoped
  const primary = [ 'red', 'yellow', 'blue' ];
  let isLoading = false;
  ```

- Use `const` to declare variables that will not be reassigned. If a variable must to be reassigned after it is declared, use `let`. eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const) [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)

  ```javascript
  // bad
  // don't use let for variables that are not going to need to be reassigned
  let neverGonnaChange = 23;

  // never reassign a variable declared using const
  const count = 0;

  const incrementCount = () => {
    count += 1;
  }

  // good
  const neverGonnaChange = 23;

  // if you must reassign a variable, use let instead
  let count = 0;

  const incrementCount = () => {
    count += 1;
  }
  ```

- Initialize variables when they are declared. eslint: [`init-declarations`](https://eslint.org/docs/rules/init-declarations) [`no-undef-init`](https://eslint.org/docs/rules/init-declarations)

  > Initializing variables when they are declared avoids confusion around undefined values and can provide insight into the type of data the variable is intended to hold. Rather than leaving a variable uninitialized, consider using null or an empty or falsy value of the type the variable is intended to reference (i.e. null, '', false, 0, {}, []).

  ```javascript
  // bad
  let age;

  age = 33;

  // good
  let age = 0;

  age = 33;
  ```

- Use a separate declaration statement for each variable. eslint: [`one-var`](https://eslint.org/docs/rules/one-var)

  > Consistency is the important thing here. Declaring one variable per `const` or `let` declaration is clearer and more explicit than the alternative. It also avoids confusion around swapping out a semicolon for a comma when adding in new values and avoids puntuation-only diffs.

  ```javascript
  // bad
  // avoid declaring multiple variables in a single declaration statement
  const pi = 3.14159,
        root2 = 1.41421,
        e = 2.71828;

  // good
  // each variable should be declared using a separate declaration statement
  const pi = 3.14159;
  const root2 = 1.41421;
  const e = 2.71828;
  ```

- No implicit global variables [`no-implicit-globals`](https://eslint.org/docs/rules/no-implicit-globals)

  > Per Eslint, it is the best practice to avoid 'polluting' the global scope with variables that are intended to be local to the script. Declaring a variable without the use of a keyword creates a global variable and should be avoided. In browser environments, variables declared with `const` or `let` at the top-level, while not added as a property to the global object, are not script-scoped and could potentially conflict with globally-scoped variables from other scripts. When declared in this way, it is unclear as to whether the variable was intended to be global. Variables that are intended to be global should therefore be assigned directly to the global object instead.

  ```javascript
  // bad
  // declaration statements without a keyword create global variables
  today = new Date();

  // variables declared at the top-level of a browser script are globally-scoped
  // this can result in name-collisions with variables from other scripts
  let coords = { lat: 40.678177, lng: -73.944160 };

  // good
  // global variables should be assigned directly to the global (node) or window (browser) object
  global.today = new Date();
  window.coords = { lat: 40.678177, lng: -73.944160 };
  ```

- No unused variables. eslint: [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)

  > Unused variables take up unneccessary space in the codebase and are confusing to other developers. All declared variables should be read, called, exported, or passed into a function at some point after being declared. Simply reassigning a variable does not qualify as "using" it. An exception would be destructured properties that have a rest sibling as this is often used as a way to omit certain properties from an object and the omitted properties are therefore intentionally unused.

  ```javascript
  // bad
  const unusedVar = 'Use me!';

  // reassigning a variable does not qualify as "using" it
  let num = 2;
  num = 4;
  num += 2;
  num = num * 3;

  // good
  const add = (a, b) => a + b;
  add(5, 10);

  const numbers = [ 3, 10, 6 ];
  const sortedNumbers = numbers.sort( number => ( number > 5 ) );

  export default sortedNumbers;

  // here, the destructured "password" variable is intentionally unused
  // it has a rest sibling which can now be used to represent the user object minus the password property
  const { password, ...rest } = user;
  console.log( rest );
  ```

- Do not chain variable assignments. eslint: [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)
