import React from "react";

import CourseCard from "components/CourseComponents/CourseCard";

import { CourseData } from "utils/CourseRepository";

interface CourseListProps {
  courses: CourseData[];
  amount: number;
}

export default class CourseList extends React.Component<CourseListProps> {
  render() {
    return (
      <div className="flex flex-col gap-8">
        {this.props.courses.length > 0
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
