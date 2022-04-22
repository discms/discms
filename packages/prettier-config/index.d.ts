declare module '@discms/prettier-config';

export declare interface PrettierRequiredOptions {
  printWidth: number;
  semi: boolean;
  singleQuote: boolean;
  trailingComma: 'none' | 'es5' | 'all';
  useTabs: boolean;
  tabWidth: number;
  quoteProps: 'as-needed' | 'consistent' | 'preserve';
  arrowParens: 'avoid' | 'always';
  bracketSpacing: boolean;
  jsxBracketSameLine: boolean;
  plugins: string[];
  proseWrap: 'always' | 'never' | 'preserve';
  htmlWhitespaceSensitivity: 'css' | 'strict' | 'ignore';
  endOfLine: 'auto' | 'lf' | 'crlf' | 'cr';
  vueIndentScriptAndStyle: boolean;
  parser: string;
  requirePragma: boolean;
  insertPragma: boolean;
}

export declare interface PrettierConfig extends Partial<PrettierRequiredOptions> {
  overrides: Override[];
}

export declare interface Override {
  files: string[];
  options: Exclude<PrettierConfig, 'overrides'>;
}
