import React from "react";

export default class Navbar extends React.Component {
  render(): React.ReactNode {
    return (
      <nav className="flex-rows sticky top-8 m-8 flex items-center justify-between gap-8 rounded-2xl border-black bg-cambridge-blue p-4 shadow-xl ring-1 ring-black">
        <div>
          <a href="/">
            <img className="w-12" src="swillan logo.svg" alt="swillan logo" />
          </a>
        </div>
        <div className="flex-rows flex gap-8 ">
          <a href="#">Courses</a>
          <a href="#">How does this work?</a>
        </div>
      </nav>
    );
  }
}
