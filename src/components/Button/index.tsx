import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
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
        onClick={this.props.onClick}
        className="rounded-2xl border-2 border-black bg-rhythm px-4 py-2 text-white transition-colors hover:bg-tropical-violet disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-rhythm"
      >
        {this.props.children}
      </button>
    );
  }
}
