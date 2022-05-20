import React from "react";
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
      recommendedCourses: [
        {
          id: 0,
          title: "loading",
          description: "loading",
          image: "dummy.png",
        },
      ],
      loading: true,
    };
  }

  componentDidMount(): void {
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
            Find begginer courses to jump start your programming journey.
            Without even logging in!
          </h3>
        </div>

        <div>
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
        </div>
      </div>
    );
  }
}
