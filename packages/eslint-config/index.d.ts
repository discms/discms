declare module '@discms/eslint-config';

export declare interface EslintRequiredConfig {
  parser: string;
  env: Partial<{
    node: boolean;
    browser: boolean;
    es6: boolean;
    jest: boolean;
    commonjs: boolean;
    mocha: boolean;
  }>;
  extends: string[];
  plugins: string[];
  rules: EslintRules;
  globals: EslintGlobals;
  overrides: EslintOverride[];
  settings: EslintSettings;
  ignorePatterns: string[];
}

export declare interface EslintSettings {
  react: any;
  next: any;
}

export declare interface EslintOverride {
  files: string[];
  extends: string[];
  rules: EslintRules;
}

export declare interface EslintGlobals {
  React: string;
}

export declare type EslintRules = Record<string, any>;

export declare type EslintConfig = Partial<EslintRequiredConfig>;
