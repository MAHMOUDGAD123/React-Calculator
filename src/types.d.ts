declare namespace TYPES {
  type OpSymbol = "*" | "/" | "-" | "+" | "^" | "%" | "";

  interface StateType {
    operand1: string;
    operand2: string;
    operation: OpSymbol;
    result: string;
    mode: Mode;
  }

  interface KeyInfo {
    icon: string;
    action: number;
    cls: string;
    id: string;
    title: string;
  }
}
