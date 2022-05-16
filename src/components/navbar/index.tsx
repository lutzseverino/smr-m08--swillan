import React from "react";

export default class Navbar extends React.Component {
  render(): React.ReactNode {
    return (
      <nav className="flex-rows flex gap-8 border-b border-black p-8">
        <div className="grow">
          <img src="logo.svg" alt="swillan logo" />
        </div>
        <div className="flex-rows flex gap-8">
          <a href="#">Courses</a>
          <a href="#">How does this work?</a>
        </div>
      </nav>
    );
  }
}
