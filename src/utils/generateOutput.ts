export interface Structure {
  name: string;
  label: string;
  generator: {
    nested?: boolean;
    fn: () => any;
    source: string;
  };
}

export function generateOutputData(fiels: string[], structure: Structure[]) {
  const output: { [key: string]: string | number } = {};

  structure.map(({ name, generator }) => {
    output[name] = generator.fn();
  });

  return output;
}

export function generateOutputSource(fiels: string[], structure: Structure[]) {
  let source = "";

  structure.map(({ name, generator }) => {
    source += `  ${name}: ${generator.source}`;
    source += generator?.nested ? ",\n" : "(),\n";
  });

  return `return {\n${source}}`;
}
