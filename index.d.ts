declare type Fill = 0 | 1 | 2 | 3 | 4;

declare interface IRect {
  count: number,
  date: string,
  fill: Fill
}

declare type IG = IRect[];

declare interface IMonth {
  txt: string,
  x: number
}

declare interface IParsedPayload {
  months: IMonth[],
  gs: IG[]
}
