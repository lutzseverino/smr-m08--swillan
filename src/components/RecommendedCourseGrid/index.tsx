import Card, { CardSkeleton } from "components/Card";
import React from "react";
import CourseRepository, { CourseInfo } from "utils/CourseRepository";

interface RecommendedCoursesGridProps {
  amount: number;
}

interface RecommendedCoursesGridState {
  courses: CourseInfo[];
  loading: boolean;
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
      loading: true,
    };
  }

  componentDidMount() {
    this.load(this.props.amount);
  }

  render() {
    return (
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {this.state.loading &&
          Array(6)
            .fill(undefined)
            .map((_item, index) => {
              return <CardSkeleton key={index} />;
            })}

        {!this.state.loading &&
          this.state.courses.slice(0, 6).map((course) => (
            <Card
              key={course.id}
              id={course.id}
              image={course.image}
              title={course.title}
              author={course.author}
              button={{
                text: "Start learning",
                href: `/course?q=${course.id}&title=${course.title}`,
              }}
            >
              {course.description}
            </Card>
          ))}
      </div>
    );
  }

  private load = async (amount: number) => {
    let courses = await this.courses.getCourseRange(0, amount);

    this.setState({
      courses: courses,
      loading: false,
    });
  };
}
