import React from "react";

export interface ISelectInputOptions {
  options: {
    value: string | number;
    text: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}
