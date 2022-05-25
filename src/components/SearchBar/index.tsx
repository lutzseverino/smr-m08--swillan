import React from "react";

interface SearchBarProps {
  placeholder: string;
  defaultValue?: string;
  loading: boolean;
  search: (query: string) => void;
}

export default class SearchBar extends React.Component<SearchBarProps> {
  render() {
    let timer: any;

    return (
      <div className="flex flex-row items-center gap-4">
        <span className="material-symbols-outlined">search</span>

        <input
          className="w-full rounded-2xl border-2 border-black bg-tropical-violet px-4 py-2 placeholder:text-gray-500 md:w-auto"
          type="search"
          defaultValue={this.props.defaultValue}
          placeholder={this.props.placeholder}
          onInput={(e) => {
            const TEXT = e.currentTarget.value;

            // Clear timer
            clearTimeout(timer);

            // Wait for X ms and then process the request
            timer = setTimeout(() => {
              this.props.search(TEXT);
            }, 500);
          }}
        />

        <svg
          className={
            this.props.loading ? "h-6 w-6 animate-spin text-black" : "hidden"
          }
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  }
}
