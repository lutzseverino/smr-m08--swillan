import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="mt-8 border-t-2 border-black bg-morning-blue p-12 px-16 md:h-64">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <h2>
              <span className="underline">Learn</span>, without gates
            </h2>
            <h6>
              swillan © 2022 by Jasper Lutz Severino is licensed under{" "}
              <a
                href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                target="_blank"
                rel="noreferrer"
              >
                CC BY-NC-ND 4.0
              </a>
            </h6>
          </div>
          <div className="flex flex-row gap-8 text-right">
            <div className="flex flex-col">
              <h4>Trust</h4>
              <a
                href="https://github.com/swillan"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
              <a
                href="https://youtube.com/jasperlutzseverino"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
              <a
                href="https://twitter.com/lutzseverino"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>
            <div className="flex flex-col">
              <h4>Legal</h4>
              <a href="/legal/terms">Terms of Service</a>
              <a href="/legal/cookies">Cookies</a>
              <a href="/legal/privacy">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
