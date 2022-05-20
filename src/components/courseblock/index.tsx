import React from "react";
import Button from "components/button";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CourseBlockProps {
  id: number;
  title: string;
  children: React.ReactNode;
  image: string;
}

export default class CourseBlock extends React.Component<CourseBlockProps, {}> {
  render(): React.ReactNode {
    return (
      <div
        className={
          "flex flex-col overflow-hidden rounded-2xl border-2 border-black bg-columbia-blue transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-solid md:h-48 md:flex-row"
        }
      >
        <div className="w-full">
          <img
            className="h-52 w-full object-cover "
            src={this.props.image}
            alt={this.props.title + " image"}
          />
        </div>
        <div className="flex flex-col md:min-w-[60%] md:max-w-[60%]">
          <h4 className="px-8 pt-8">{this.props.title}</h4>
          <div className="h-full overflow-hidden from-black via-black bg-clip-text px-8 pb-8 md:bg-gradient-to-b md:pb-0 md:text-transparent">
            <p className="">{this.props.children}</p>
          </div>
          <div className="relative bottom-4 ml-auto mr-4">
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
    );
  }
}

export class CourseBlockSkeleton extends React.Component {
  render(): React.ReactNode {
    return (
      <div
        className={
          "flex flex-col overflow-hidden rounded-2xl border-2 border-black bg-columbia-blue transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-solid md:h-48 md:flex-row"
        }
      >
        <div className="flex flex-col md:min-w-[60%] md:max-w-[60%]">
          <h4 className="px-8 pt-8">
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
