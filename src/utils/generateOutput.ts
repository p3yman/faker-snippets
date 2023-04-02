export interface Structure {
  name: string;
  label?: string;
  generator?: () => any;
  source?: string;
  children?: Structure[];
}

export function generateOutputData(fields: string[], structure: Structure[]) {
  const output: { [key: string]: string | number } = {};

  structure.map(({ name, generator, children }) => {
    output[name] = children?.length
      ? generateOutputData(fields, children)
      : generator?.();
  });

  return output;
}

export function generateOutputSource(fiels: string[], structure: Structure[]) {
  const output = generateOutputSourceObject(structure, 0, null);

  return `return {\n${output}};\n`;
}

function generateOutputSourceObject(
  structure: Structure[],
  level = 0,
  name: string | null = null
) {
  let output = "";

  structure.map(({ name, source, children }) => {
    output += children?.length
      ? generateOutputSourceObject(children, level + 1, name)
      : `${makeSpaces(level)}${name}: ${source},\n`;
  });

  const start = name ? `${makeSpaces(level - 1)}${name}: {\n` : "";
  const end = name ? `${makeSpaces(level - 1)}},\n` : "";

  return `${start}${output}${end}`;
}

function makeSpaces(level = 0) {
  return " ".repeat(level * 2 + 2);
}
