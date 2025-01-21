declare namespace TYPES {
  type OpSymbol = "*" | "/" | "-" | "+" | "^" | "%" | "";

  interface StateType {
    operand1: string;
    operand2: string;
    operation: OpSymbol;
    result: string;
    mode: Mode;
  }

  interface KeyProps {
    // children: JSX.Element;
    action: ACTION;
    cls: string;
    icon: string;
    id: string;
    dispatchFn: React.Dispatch<ACTION>;
  }
}
