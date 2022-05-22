import React from "react";

export default class Navbar extends React.Component<{}, { hide: Boolean }> {
  private scrollToHideAmount: number = 400;

  constructor(props: any) {
    super(props);
    this.state = { hide: window.scrollY > this.scrollToHideAmount };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <nav
        className={`${this.state.hide ? "-top-full" : "top-0 md:top-8"} ${
          window.scrollY > 0 ? " shadow-xl " : ""
        } flex-rows sticky z-50 flex items-center justify-between gap-8 border-b-2 border-black bg-columbia-blue p-4 transition-all duration-500 ease-in-out md:m-8 md:rounded-2xl md:border-2`}
      >
        <div>
          <a href="/">
            <img className="w-12" src="/swillan logo.svg" alt="swillan logo" />
          </a>
        </div>
        <div className="flex-rows hidden gap-8 md:flex">
          <a href="/courses">Search courses</a>
          <a href="/how">How does this work?</a>
        </div>
      </nav>
    );
  }

  private handleScroll = (event: Event) => {
    this.setState({ hide: window.scrollY > this.scrollToHideAmount });
  };
}
