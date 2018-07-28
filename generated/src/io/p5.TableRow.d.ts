import * as p5 from '../../index'

declare module '../../index' {
  interface TableRowInstanceExtensions {
    /**
     *   Stores a value in the TableRow's specified column. 
     *   The column may be specified by either its ID or 
     *   title.
     *
     *   @param column Column ID (Number) or Title (String)
     *   @param value The value to be stored
     */
    set(column: string|number, value: string|number): void;

    /**
     *   Stores a Float value in the TableRow's specified 
     *   column. The column may be specified by either its 
     *   ID or title.
     *
     *   @param column Column ID (Number) or Title (String)
     *   @param value The value to be stored as a Float
     */
    setNum(column: string|number, value: number|string): void;

    /**
     *   Stores a String value in the TableRow's specified 
     *   column. The column may be specified by either its 
     *   ID or title.
     *
     *   @param column Column ID (Number) or Title (String)
     *   @param value The value to be stored as a String
     */
    setString(column: string|number, value: string|number|boolean|object): void;

    /**
     *   Retrieves a value from the TableRow's specified 
     *   column. The column may be specified by either its 
     *   ID or title.
     *
     *   @param column columnName (string) or ID (number)
     */
    get(column: string|number): string|number;

    /**
     *   Retrieves a Float value from the TableRow's 
     *   specified column. The column may be specified by 
     *   either its ID or title.
     *
     *   @param column columnName (string) or ID (number)
     *   @return Float Floating point number
     */
    getNum(column: string|number): number;

    /**
     *   Retrieves an String value from the TableRow's 
     *   specified column. The column may be specified by 
     *   either its ID or title.
     *
     *   @param column columnName (string) or ID (number)
     *   @return String
     */
    getString(column: string|number): string;
  }
}
