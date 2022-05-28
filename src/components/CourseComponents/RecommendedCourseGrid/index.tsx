import React from "react";

import CourseCard from "components/CourseComponents/CourseCard";

import CourseRepository, { CourseInfo } from "utils/CourseRepository";

interface RecommendedCoursesGridProps {
  amount: number;
}

interface RecommendedCoursesGridState {
  courses: CourseInfo[];
}

export default class RecommendedCoursesGrid extends React.Component<
  RecommendedCoursesGridProps,
  RecommendedCoursesGridState
> {
  private courses = new CourseRepository();

  constructor(props: any) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    this.load(this.props.amount);
  }

  render() {
    return (
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {Array(6)
          .fill(undefined)
          .map((_, index) => {
            return (
              <CourseCard key={index} course={this.state.courses[index]} />
            );
          })}
      </div>
    );
  }

  private load = async (amount: number) => {
    let courses = await this.courses.getInfoRecommendations(amount);

    this.setState({
      courses: courses,
    });
  };
}
