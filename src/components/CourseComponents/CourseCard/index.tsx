import React from "react";

import Card from "components/Card";

import { CourseInfo } from "utils/CourseRepository";

interface CourseCardProps {
  course?: CourseInfo;
}

export default class CourseCard extends React.Component<CourseCardProps> {
  render() {
    return (
      <Card
        title={this.props.course?.title}
        image={this.props.course?.image}
        author={this.props.course?.author}
        button={
          this.props.course
            ? {
                text: "Start learning",
                href: `/course?q=${this.props.course.id.$oid}&title=${this.props.course.title}`,
              }
            : undefined
        }
      >
        {this.props.course?.description}
      </Card>
    );
  }
}
