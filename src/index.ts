console.log( 'Hello Typescript!' );

const a = 2,
			b = 1,
			c = 3;

( function( arg1: string, arg2: number, arg3: boolean ): void {
	console.log( arg1, arg2, arg3 );

	// comment
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

	let y = 15;
	const x = ( y++, arg1 );

	print( x );
} )( 'hello', 2, true );

const arr = [
	1,
	2,
	3
];

const testBool = ( arr[ 0 ] + arr[ 1 ] ) * arr[ 2 ];
console.log( testBool );

arr.reverse()
	.sort();

console.log( a, b, c );
