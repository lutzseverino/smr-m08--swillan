import Button from "components/Button";
import React from "react";

interface PageNavProps {
  current: number;
  pages: number;
  onClick: (page: number) => void;
}

export default class PageNav extends React.Component<PageNavProps> {
  render() {
    const MORE = (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path d="M10.4 26.4Q9.4 26.4 8.7 25.7Q8 25 8 24Q8 23 8.7 22.3Q9.4 21.6 10.4 21.6Q11.4 21.6 12.1 22.3Q12.8 23 12.8 24Q12.8 25 12.1 25.7Q11.4 26.4 10.4 26.4ZM24 26.4Q23 26.4 22.3 25.7Q21.6 25 21.6 24Q21.6 23 22.3 22.3Q23 21.6 24 21.6Q25 21.6 25.7 22.3Q26.4 23 26.4 24Q26.4 25 25.7 25.7Q25 26.4 24 26.4ZM37.6 26.4Q36.6 26.4 35.9 25.7Q35.2 25 35.2 24Q35.2 23 35.9 22.3Q36.6 21.6 37.6 21.6Q38.6 21.6 39.3 22.3Q40 23 40 24Q40 25 39.3 25.7Q38.6 26.4 37.6 26.4Z" />
      </svg>
    );
    const RANGE = getRange(this.props.current, this.props.pages);

    return (
      <div className="flex flex-row items-center gap-4">
        {RANGE.includes(1) ||
          (this.props.current !== 1 && (
            <>
              <Button onClick={() => this.props.onClick(1)}>1</Button>

              {MORE}
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
            {MORE}

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
