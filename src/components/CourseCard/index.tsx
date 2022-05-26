import React from "react";
import Button from "components/Button";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CardProps {
  id: number;
  title: string;
  children: React.ReactNode;
  image?: string;
}

export default class Card extends React.Component<CardProps, {}> {
  render(): React.ReactNode {
    return (
      <div
        className={
          "flex flex-col overflow-hidden rounded-2xl border-2 border-black bg-columbia-blue transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-solid md:h-48 md:flex-row"
        }
      >
        <div className="max-w-full md:max-w-sm">
          {this.props.image && (
            <img
              className="h-52 w-full object-cover "
              src={this.props.image}
              alt={this.props.title}
            />
          )}
        </div>
        <div className="flex flex-col md:w-3/5">
          <h4 className="mx-8 mt-8">
            {this.props.id} {this.props.title}
          </h4>
          <div className="mx-8 h-full from-black via-black bg-clip-text pb-8 md:overflow-hidden md:bg-gradient-to-b md:pb-0 md:text-transparent">
            <p>{this.props.children}</p>
          </div>
          <div className="relative bottom-4 mr-auto ml-8">
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
    );
  }
}

export class CardSkeleton extends React.Component {
  render(): React.ReactNode {
    return (
      <div
        className={
          "flex flex-col overflow-hidden rounded-2xl border-2 border-black bg-columbia-blue transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-solid md:h-48 md:flex-row"
        }
      >
        <div className="flex flex-col md:min-w-[60%] md:max-w-[60%]">
          <h4 className="mx-8 mt-8">
            <Skeleton />
          </h4>
          <div className="h-full overflow-hidden from-black via-black bg-clip-text px-8 pb-8 md:bg-gradient-to-b md:pb-0 md:text-transparent">
            <p className="">
              <Skeleton count={3} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
