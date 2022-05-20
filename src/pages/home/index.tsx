import React from "react";
import Button from "../../components/button";
import CourseBlock, { CourseBlockSkeleton } from "../../components/courseblock";
import { dummyCourses } from "../../data";

interface HomeState {
  recommendedCourses: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
  loading: boolean;
}

export default class Home extends React.Component<{}, HomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      recommendedCourses: [],
      loading: true,
    };
  }

  componentDidMount(): void {
    document.title = "swillan - home";

    setTimeout(() => {
      this.setState({
        recommendedCourses: dummyCourses,
        loading: false,
      }); //After 1 second, render courses
    }, 2000);
  }

  render(): React.ReactNode {
    return (
      <div className="px-8 md:px-16">
        <div className="py-8 md:py-32">
          <h1>
            <span className="underline">Learn</span>, without gates
          </h1>
          <h3>
            Jump start your programming journey with swillan, a free online
            course platform
          </h3>
        </div>

        <div className="flex flex-col">
          <h4>Recommended courses</h4>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
            {this.state.loading &&
              Array(6)
                .fill(undefined)
                .map((_item, index) => {
                  return <CourseBlockSkeleton key={index} />;
                })}

            {!this.state.loading &&
              this.state.recommendedCourses.map((course) => (
                <CourseBlock
                  key={course.id}
                  id={course.id}
                  image={course.image}
                  title={course.title}
                >
                  {course.description}
                </CourseBlock>
              ))}
          </div>
          <div className="mt-8 self-center">
            <Button>Explore everything</Button>
          </div>
        </div>
      </div>
    );
  }
}
