import React from "react";

import Card from "components/Card";

import { CourseData } from "utils/CourseRepository";

interface CourseCardProps {
  course?: CourseData;
}

export default class CourseCard extends React.Component<CourseCardProps> {
  render() {
    return (
      <Card
        id={this.props.course?.id.$oid || "0"}
        title={this.props.course?.info.title}
        image={this.props.course?.info.image}
        author={this.props.course?.info.author}
        button={{
          text: "Start learning",
          href: `/course?q=${this.props.course?.id.$oid}&title=${this.props.course?.info.title}`,
        }}
      >
        {this.props.course?.info.description}
      </Card>
    );
  }
}
