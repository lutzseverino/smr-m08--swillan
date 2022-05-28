import React from "react";

import Button from "components/Button";

interface PageNavProps {
  current: number;
  pages: number;
  onClick: (page: number) => void;
}

export default class PageNav extends React.Component<PageNavProps> {
  render() {
    const RANGE = getRange(this.props.current, this.props.pages);

    return (
      <div className="flex flex-row items-center gap-4">
        {RANGE.includes(1) ||
          (this.props.current !== 1 && (
            <>
              <Button onClick={() => this.props.onClick(1)}>1</Button>

              <span className="material-symbols-outlined">&#xe5d3;</span>
            </>
          ))}

        {RANGE.map((item, _index) => {
          return (
            <Button
              disabled={this.props.current === item}
              key={item}
              onClick={() => this.props.onClick(item)}
            >
              {item}
            </Button>
          );
        })}

        {!RANGE.includes(this.props.pages) && (
          <>
            <span className="material-symbols-outlined">&#xe5d3;</span>

            <Button onClick={() => this.props.onClick(this.props.pages)}>
              {this.props.pages}
            </Button>
          </>
        )}
      </div>
    );
  }
}

const getRange = (index: number, max: number) => {
  const MIN = index - 2;
  const MAX = index + 2;

  const RANGE = [];

  for (let i = MIN; i <= MAX; i++) {
    if (i > 0 && i <= max) {
      RANGE.push(i);
    }
  }

  return RANGE;
};
