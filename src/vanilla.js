// global.a = 5;

// const numbers = [
//   3,
//   10,
//   6
// ];
// const sortedNumbers = numbers.sort( number => number > 5 );

// console.log( sortedNumbers );

// const obj = {
//   '2': 2,
//   true: true,
//   x: 'x'
// };

const octal = 0o76;

console.log( octal );

// console.log( obj.length );

// console.log( obj );

// const multilineString = `
//   this
//   is
//   a
//   string
// `;

// console.log( multilineString );

// const sum = ( a, b ) => new Promise( resolve => {
//   setTimeout( () => resolve( a + b ), 500 );
// } );

// const arr = [
//   [ 1, 2 ],
//   [ 3, 4 ],
//   [ 5, 6 ],
//   [ 7, 8 ]
// ];

// // map
// const mappedSums = arr.map( async values => {
//   const result = await sum( ...values );

//   return result;
// } );

// console.log( 'mappedSums: ', mappedSums );

// // resolving mapped Promises
// Promise.all( mappedSums ).then( res => {
//   console.log( 'mappedSumsResolved: ', res );
// } );

// // filter
// const sumsGreaterThan10 = arr.filter( async values => {
//   const result = await sum( ...values );

//   return result > 10;
// } );

// console.log( 'sumsGreaterThan10: ', sumsGreaterThan10 );

// // forEach
// arr.forEach( async values => {
//   const result = await sum( ...values );

//   console.log( `sum[${ 1 }]: `, result );
// } );

// // reduce
// const sumAll = arr.reduce( async ( acc, values ) => {
//   const resolvedAcc = await acc;
//   const result = await sum( ...values );

//   return resolvedAcc + result;
// }, 0 );

// Promise.resolve( sumAll ).then( res => {
//   console.log( 'sumAllResolved: ', res );
// } );

// console.log( 'end' );
