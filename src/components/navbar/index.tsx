import React from "react";

export default class Navbar extends React.Component<{}, { hide: Boolean }> {
  readonly scrollToHideAmount: number = 400;

  constructor(props: any) {
    super(props);
    this.state = { hide: Boolean(window.scrollY > this.scrollToHideAmount) };
  }

  componentDidMount(): void {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount(): void {
    window.removeEventListener("scroll", this.handleScroll);
  }

  readonly handleScroll = (event: Event): void => {
    this.setState({ hide: window.scrollY > this.scrollToHideAmount });
    console.debug(
      "Scroll amount: " + window.scrollY + "\nHide navbar: " + this.state.hide
    );
  };

  render(): React.ReactNode {
    return (
      <nav
        className={
          (this.state.hide ? "-top-full " : "top-8 ") +
          "flex-rows sticky m-8 flex items-center justify-between gap-8 rounded-2xl border-black bg-cambridge-blue p-4 shadow-xl ring-1 ring-black transition-all duration-1000 ease-in-out"
        }
      >
        <div>
          <a href="/">
            <img className="w-12" src="swillan logo.svg" alt="swillan logo" />
          </a>
        </div>
        <div className="flex-rows flex gap-8 ">
          <a href="/#">Courses</a>
          <a href="/#">How does this work?</a>
        </div>
      </nav>
    );
  }
}
