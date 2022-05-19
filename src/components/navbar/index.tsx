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
          (this.state.hide ? "-top-full " : "top-0 md:top-8 ") +
          (window.scrollY > 0 ? " shadow-xl " : "") +
          "flex-rows sticky mb-8 flex items-center justify-between gap-8 border-b-[1px] border-black bg-pale-pink p-4 transition-all duration-500 ease-in-out md:m-8 md:rounded-2xl md:border-[1px]"
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
