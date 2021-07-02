// consecutive variables - global variables must be capitalized
const a = 2;
const b = 1;
const c = 3;
const d = 5;

let v = 5;

v += 3;
v **= 3;

function func<T = number>( arg: T ): T {
  return arg;
}

func( 5 );

// interface keyword
interface T1 {
  greeting: string;
  printMessage: () => string;
}

console.log( a, b, c, d );
console.log( v );

{
  interface Obj {
    '1': string;
    test: string;
  }

  const obj: Obj = {
    '1': 'one',
    test: 'testing'
  };

  console.log( obj );
}

function* other(): Generator<number> {
  yield 2;
}

function* generator(): Generator<number> {
  yield* other();
}

generator();

// iife
( function( arg1: string, arg2: number, arg3: boolean ): void {
  console.log( arg1, arg2, arg3 );

  // function declaration
  function printMessage( num: number ): number | null {
    return num ? num + 1 : num > 2 ? num + 2 : null;
  }

  // consecutive variables
  let y = 15;
  const x = ( y++, arg2 );

  // expression
  printMessage( x );
} )( 'hello', 2, true );

// consecutive variables
const ARR: number[] = [
  1,
  2,
  3
];
const TEST_BOOL = ( ARR[ 0 ] + ARR[ 1 ] ) * ARR[ 2 ];

console.log( TEST_BOOL );

interface Accumulator {
  readonly [ key: string ]: number;
}

const reducedArr = ARR.reduce<Accumulator>(
  ( acc: Accumulator, num: number ) => ( { ...acc, [ num ]: num } ),
  {}
);

console.log( reducedArr );

ARR.reverse().sort();

class TestClass implements T1 {
  public static readonly TEST_PROPERTY: string = 'TEST';

  public greeting: string;

  get greet(): string {
    return `${ this.greeting } There!`;
  }

  set greet( value: string ) {
    this.greeting = value;
  }

  constructor( greeting?: string ) {
    this.greeting = greeting ?? 'hello';
  }

  private getPrintMessage(): string {
    return `${ this.greeting } I'm TestClass`;
  }

  public printMessage(): string {
    return this.getPrintMessage();
  }
}

new TestClass().printMessage();

switch ( v ) {
  case 1:
    console.log( 'hi' );

    break;

  default:
    break;
}

export default TestClass;
