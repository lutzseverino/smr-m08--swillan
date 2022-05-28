import React from "react";

import CourseCard from "components/CourseComponents/CourseCard";

import { CourseData } from "utils/CourseRepository";

interface CourseListProps {
  courses?: CourseData[];
  amount: number;
}

export default class CourseList extends React.Component<CourseListProps> {
  render() {
    return (
      <div>
        {this.props.courses
          ? this.props.courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          : Array(this.props.amount)
              .fill(undefined)
              .map((_, index) => <CourseCard key={index} />)}
      </div>
    );
  }
}
