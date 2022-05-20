import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export default class Button extends React.Component<ButtonProps> {
  static defaultProps: Pick<ButtonProps, "disabled"> = {
    disabled: false,
  };

  render(): React.ReactNode {
    return (
      <button
        disabled={this.props.disabled}
        className="rounded-2xl border-2 border-black bg-rhythm px-4 py-2 text-white transition-colors hover:bg-tropical-violet disabled:opacity-25"
      >
        {this.props.children}
      </button>
    );
  }
}
