import React from "react";
import Button from "components/Button";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CardProps {
  id: number;

  title: string;
  image?: string;

  author?: {
    name?: string;
    image?: string;
  };

  button?: {
    text: string;
    href: string;
  };

  children: React.ReactNode;
}

export default class Card extends React.Component<CardProps, {}> {
  render(): React.ReactNode {
    return (
      <article
        className={
          "foreground border-style relative flex w-full flex-col overflow-hidden rounded-xl border transition-transform md:h-48 md:flex-row"
        }
      >
        <div className="md:w-64">
          {this.props.image && (
            <img
              className="h-52 w-full object-cover "
              src={this.props.image}
              alt="course advertisement"
            />
          )}
        </div>
        <div className="flex max-h-64 w-full flex-col">
          <h4 className="mx-8 mt-8">{this.props.title}</h4>
          <div className="text-fade mx-8 overflow-hidden pb-0">
            <p className="text-transparent">{this.props.children}</p>
          </div>
        </div>

        {this.props.author && (
          <div className="absolute bottom-4 left-4">
            <AuthorCard
              name={this.props.author.name}
              image={this.props.author.image}
            />
          </div>
        )}
        {this.props.button && (
          <div className="absolute bottom-4 right-4">
            <Button href={this.props.button.href}>
              {this.props.button.text}
            </Button>
          </div>
        )}
      </article>
    );
  }
}

interface AuthorCardProps {
  name?: string;
  image?: string;
}

class AuthorCard extends React.Component<AuthorCardProps> {
  render() {
    return (
      <div className="actionable flex flex-row items-center rounded-xl">
        {this.props.image && (
          <img
            className="w-10 rounded-xl"
            src={this.props.image}
            alt="author of the course"
          />
        )}
        <span className="py-2 px-4 text-sm">{this.props.name}</span>
      </div>
    );
  }
}

export class CardSkeleton extends React.Component {
  render(): React.ReactNode {
    return (
      <div
        className={
          "foreground border-style flex w-full flex-col overflow-hidden rounded-xl border md:h-48 md:flex-row"
        }
      >
        <div className="flex w-full flex-col">
          <h4 className="mx-8 mt-8">
            <Skeleton />
          </h4>
          <div className="h-full px-8 pb-8 md:pb-0">
            <p className="text-black">
              <Skeleton count={3} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
