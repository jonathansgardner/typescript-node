### Contents

1. Strings
1. Numbers
1. Booleans
1. Arrays
1. Objects
1. Functions
1. Variables
1. Destructuring
1. Imports & Exports

### Strings

- Use string literals `'' ""` or template literals ` `` `, and not the `String` constructor, to create strings. eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

- Use single quotes `''` for strings wherever possible. eslint: [`quotes`](https://eslint.org/docs/rules/quotes)

- Only use double quotes `""` to avoid escaping when a string contains the single quote `'` character. eslint: [`quotes#avoidEscape`](https://eslint.org/docs/rules/quotes#avoidescape)

- Use template literals ` `` ` for string interpolation. eslint: [`prefer-template`](https://eslint.org/docs/rules/prefer-template)

- Do not use template literal placeholder syntax `${}` in regular strings. eslint: [`no-template-curly-in-string`](https://eslint.org/docs/rules/no-template-curly-in-string)

- Do not break up strings, even to accomodate line length limitations. eslint: [`no-multi-str`](https://eslint.org/docs/rules/no-multi-str) [`max-len/ignoreStrings`](https://eslint.org/docs/rules/max-len#ignorestrings) [`max-len/ignoreTemplateLiterals`](https://eslint.org/docs/rules/max-len#ignoretemplateliterals)

- Do not unneccessarily concatenate strings. eslint: [`no-useless-concat`](https://eslint.org/docs/rules/no-useless-concat)

- Do not unneccessarily escape characters in a string. eslint: [`no-usesless-escape`](https://eslint.org/docs/rules/no-usesless-escape)

- Do not use `eval()` on a string. eslint: [`no-eval`](https://eslint.org/docs/rules/no-eval)

### Numbers

- Use numeric or floating point literals, and not the `Number` constructor, to create numbers. eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

- Do not use leading or trailing decimal points in number literals. eslint: [`no-floating-decimal`](https://eslint.org/docs/rules/no-floating-decimal)

- Do not use number literals the immediately lose precision at runtime whe converted to a JavaScript `Number` object.[`no-loss-of-precision`](https://eslint.org/docs/rules/no-loss-of-precision)

- Do not use `parseInt()` or to turn binary, octal, or hexadecimal strings into integers. eslint: [`prefer-numeric-literals`](https://eslint.org/docs/rules/prefer-numeric-literals)

[//]: # (Consider Octal section?)

- Do not use ES5 octal literals. eslint: [`no-octal`](https://eslint.org/docs/rules/no-octal)

- Use the radix argument when parsing any non-decimal value with `parseInt()`.

### Booleans

- Use boolean literals, and not the `Boolean` constructor, to create booleans. eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

- Do not unneccessarily type cast a value to a boolean via double negation `!!` or a `Boolean()` call. eslint: [`no-extra-boolean-cast`](https://eslint.org/docs/rules/no-extra-boolean-cast)

### Arrays

- Use array literals `[]`, and not the `Array` constructor, to create arrays. eslint: [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)

- Use return statements in array method callbacks that require a return value. eslint: [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

- Do not use return statements in `Array.prototype.forEach` method callbacks. [`array-callback-return/checkForEach`](https://eslint.org/docs/rules/array-callback-return#checkforeach)

- Avoid sparse arrays. eslint: [`no-sparse-arrays`](https://eslint.org/docs/rules/no-sparse-arrays)

### Objects

- Use object literals `{}`, and not the `Object` constructor, to create new objects. eslint: [`no-new-object`](https://eslint.org/docs/rules/no-new-object)

- Use property value and method shorthand syntax. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)

- Do not duplicate keys. eslint: [`no-dupe-keys`](https://eslint.org/docs/rules/no-dupe-keys)

- Only use quote properties for invalid identifiers. eslint: [`quote-props`](https://eslint.org/docs/rules/quote-props)

- Do not use computed property keys with literals. eslint: [`no-useless-computed-key`](https://eslint.org/docs/rules/no-useless-computed-key)

- Use the spread operator to shallow-copy objects. eslint: [`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)

- Do not call Object.prototype methods directly on object instances. eslint: [`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)

### Functions

- Use function or arrow function expressions, and not the `Function` constructor, to create new functions. eslint: [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

- Wrap immediately invoked funtion expressions in parenthesis. eslint: [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife)

- Never declare functions in a non-function block. eslint: [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func)

- Use rest parameters instead of the `arguments` variable for variadic functions. eslint: [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

- Do not reassign function parameters. eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign)

- Do not mutate function parameters. eslint: [`no-param-reassign/props`](https://eslint.org/docs/rules/no-param-reassign#props)

- Use the spread operator `...` to call variadic functions. eslint: [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

### Variables

- Use `const` or `let` to declare variables. eslint: [`no-var`](https://eslint.org/docs/rules/no-var)

- Use `const` to declare variables that will not be reassigned. eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

- Use `let` for any variable that must to be reassigned after it is declared. eslint: [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)

- Use a single declaration statement for each variable. eslint: [`one-var`](https://eslint.org/docs/rules/one-var)

- Initialize variables when they are declared. eslint: [`init-declarations`](https://eslint.org/docs/rules/init-declarations) [`no-undef-init`](https://eslint.org/docs/rules/no-undef-init)

- Do not use variables before they are declared. eslint: [`no-use-before-define`](https://eslint.org/docs/rules/no-use-before-define)

- Do not implicitly create global variables. eslint: [`no-implicit-globals`](https://eslint.org/docs/rules/no-implicit-globals)

- Do not declare variables that are not used. eslint: [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)

- Do not chain variable assignments. eslint: [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)

- Do not use the `delete` operator on variables. eslint: [`no-delete-var`](https://eslint.org/docs/rules/no-delete-var)

### Destructuring

- Use destructuring when creating variables from an array or object property. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

- Do not use empty patterns in destructured objects and arrays. eslint: [`no-empty-pattern`](https://eslint.org/docs/rules/no-empty-pattern)

- Do not rename destructured assignments to the same name. eslint: [`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename)

### Imports & Exports

- Do not rename imports and exports to the same name. eslint: [`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename)
