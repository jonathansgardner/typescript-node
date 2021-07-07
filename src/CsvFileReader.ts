import fs from 'fs';

export abstract class CsvFileReader<T> {
  public data: T[] = [];

  constructor( public filename: string ) {}

  public read(): void {
    this.data = fs
      .readFileSync( this.filename, { encoding: 'utf-8' } )
      .split( '\n' )
      .map( ( match: string ): string[] => match.split( ',' ) )
      .map( this.mapRow );
  }

  public abstract mapRow( this: void, row: readonly string[] ): T;
}
