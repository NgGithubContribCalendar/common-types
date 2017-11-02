export declare type Fill = 0 | 1 | 2 | 3 | 4;

export declare interface IRect {
  count: number,
  date: string,
  fill: Fill
}

export declare type IG = IRect[];

export declare interface IMonth {
  txt: string,
  x: number
}

export declare interface IParsedPayload {
  months: IMonth[],
  gs: IG[]
}
