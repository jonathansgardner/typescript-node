class Test {
  public logTest(): void {
    console.log( this );
  }
}

describe( 'Test Class', (): void => {
  const testClass = new Test();

  it( 'should return an instance of `Test`', () => {
    expect( testClass ).toBeInstanceOf( Test );
  } );
} );
