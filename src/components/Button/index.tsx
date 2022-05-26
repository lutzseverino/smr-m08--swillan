import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default class Button extends React.Component<ButtonProps> {
  static defaultProps: Pick<ButtonProps, "disabled"> = {
    disabled: false,
  };

  render(): React.ReactNode {
    return (
      <a href={this.props.href}>
        <button
          disabled={this.props.disabled}
          onClick={this.props.onClick}
          className="actionable rounded-xl px-4 py-2"
        >
          {this.props.children}
        </button>
      </a>
    );
  }
}
