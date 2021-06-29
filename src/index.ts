// consecutive variables - global variables must be capitalized
const A = 2,
			B = 1,
			C = 3,
			D = 5;
let v = 5;

v += 3;
v **= 3;

// interface keyword
interface T1 {
  greeting: string;
	printMessage: () => string;
}

console.log( A, B, C, D );
console.log( v );

{
	const obj = {
		'1': 'one',
		test: 'testing'
	};

	console.log( obj );
}

function* other() : Generator<number> {
	yield 2;
}

function* generator() : Generator<number> {
	yield* other();
}

generator();

// iife
( function( arg1: string, arg2: number, arg3: boolean ): void {
	console.log( arg1, arg2, arg3 );

	// function declaration
	function printMessage(
		message: string
	) : ( string | null ) {
		return message
			? message + 1
			: message.length > 2
				? message + 2
				: null;
	}

	// consecutive variables
	let y = 15;
	const x = ( y++, arg1 );

	// expression
	printMessage( x );
} )( 'hello', 2, true );

// consecutive variables
const ARR = [
				1,
				2,
				3
			],
			TEST_BOOL = ( ARR[ 0 ] + ARR[ 1 ] ) * ARR[ 2 ];

console.log( TEST_BOOL );

ARR.reverse()
	.sort();

class TestClass implements T1 {
	public readonly greeting: string = 'test';

	public constructor() {}

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
