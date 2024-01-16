

export interface UpdateablePlot {
  bind: (node: HTMLElement) => void;
  plotAPI: (call: Record<string, unknown>) => void | Promise<void>;
  query: Record<string, unknown>;
}
export type Newable<T> = new () => T;
export type PlotConstructor = Newable<UpdateablePlot>;
export type PlotImportable = (() => Promise<{ default: PlotConstructor }>)

type SliderArgs = {
  // the API call that the slider will modify.
  api?: Record<string, unknown>;
  // The minimum value for the slider
  min?: number;
  // The maximum value for the slider.
  max?: number;
  // The name of the property that the slider will modify.
  // This is a lodash path, so you can use dot notation to modify nested properties.
  // For example, 'query[0].x' will modify the x property of the first element of the query array.
  target: string;
  trans?: 'linear' | 'log' | 'sqrt';
  label?: string | null;
};

type ButtonArgs = {
  // the API call that the slider will modify.
  api?: Record<string, unknown>;
  // The name of the property that the slider will modify.
  // This is a lodash path, so you can use dot notation to modify nested properties.
  // For example, 'query[0].x' will modify the x property of the first element of the query array.
  label?: string | null;
  clone?: string | string[];
};

type ButtonsetArgs = {
  // the API call that the slider will modify.
  api?: Record<string, unknown>;
  // The minimum value for the slider

  // The name of the property that the slider will modify.
  // This is a lodash path, so you can use dot notation to modify nested properties.
  // For example, 'query[0].x' will modify the x property of the first element of the query array.
  target: string;
  // A string template that takes 'value' as a parameter.
  // E.g. 'foo ${value}'
  pattern?: string;
  label?: string | null;
  hover?: boolean;
  // A list of values: one per button.
  values: string[];
  clone?: string | string[];
}