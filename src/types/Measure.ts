export type Measure = {
  name: string;
  formula: string;
  score: number;
  order?: number;
};

export type Measures = { [key: string]: Measure };
