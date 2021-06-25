// consecutive variables
const d = 5;
const a = 2,
			b = 1,
			c = 3;
let v = 5;

v += 3;
v **= 3;

console.log( a, b, c, d );
console.log( v );

const obj = {
	'1': 'one',
	test: 'testing'
};

console.log( obj );

function* other() {
	yield 2;
}

function* generator() {
	yield* other();
}

generator();

// iife
( function( arg1: string, arg2: number, arg3: boolean ): void {
	console.log( arg1, arg2, arg3 );

	// function declaration
	function print(
		message: string
	) {
		return message
			? console.log(
				message + 1
			)
			: message.length > 2
				? console.log(
					message + 2
				)
				: null;
	}

	// consecutive variables
	let y = 15;
	const x = ( y++, arg1 );

	// expression
	print( x );
} )( 'hello', 2, true );

// consecutive variables
const arr = [
	1,
	2,
	3
];
const testBool = ( arr[ 0 ] + arr[ 1 ] ) * arr[ 2 ];

console.log( testBool );

arr.reverse()
	.sort();

class TestClass {
	greeting: string

	constructor( greeting : string ) {
		this.greeting = greeting;
	}

	private getPrintMessage(): string {
		return `${ this.greeting } I'm TestClass`;
	}

	print(): string {
		return this.getPrintMessage();
	}
}

console.log( new TestClass( 'hi' ).print() );

switch ( v ) {
	case 1:
		console.log( 'hi' );

		break;

	default:
		break;
}
