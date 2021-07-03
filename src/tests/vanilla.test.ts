import Test from '../vanilla';

describe( 'Test Class', (): void => {
  it( 'should return an instance of `Test`', () => {
    expect( new Test() ).toBeInstanceOf( Test );
  } );
} );
