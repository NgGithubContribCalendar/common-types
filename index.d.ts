/**
 * How active a given day was, from 0 (no contributions) to 4 (a lot of contributions)
 */
export declare type Fill = 0 | 1 | 2 | 3 | 4;

/**
 * An abbreviated month name
 */
export declare type MonthLabel = 'Jan' |
  'Feb' |
  'Mar' |
  'Apr' |
  'May' |
  'Jun' |
  'Jul' |
  'Aug' |
  'Sep' |
  'Oct' |
  'Nov' |
  'Dec' |
  string;

/**
 * A given day's data
 */
export declare interface IRect {
  /** Number of contributions */
  count: number;
  /** Fill colour intensity */
  fill: Fill;

  /** The date in YYYY-mm-dd format */
  date: string;
}

/** Grouped {@link IRect}s */
export declare type IG = IRect[];

/** Month position data */
export declare interface IMonth {
  /** Abbreviated month name */
  txt: MonthLabel;
  /** Horizontal offset */
  x: number;
}

/** A full parsed payload of a user's calendar */
export declare interface IParsedPayload {
  /** Grouped {@link IRect}s */
  gs: IG[];
  /** Month position data */
  months: IMonth[];
}
