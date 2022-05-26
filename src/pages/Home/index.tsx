import React from "react";
import Button from "components/Button";
import Card, { CardSkeleton } from "components/Card";
import CourseRepository, { CourseInfo } from "utils/CourseRepository";

interface HomeState {
  courses: CourseRepository;
  recommended: CourseInfo[];
  loading: boolean;
}

export default class Home extends React.Component<{}, HomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      courses: new CourseRepository(),
      recommended: [],
      loading: true,
    };
  }

  componentDidMount() {
    document.title = "swillan - home";

    this.load(6);
  }

  render(): React.ReactNode {
    return (
      <div className="m-8 mx-16">
        <div className="my-16 md:my-48 md:text-center">
          <h1>
            Knowledge{" "}
            <span className="underline decoration-wavy underline-offset-4">
              shouldn't be hard{" "}
            </span>
          </h1>
          <h2>Start learning a new skill at your pace, no account required</h2>
          <Button href="/discover">Discover everything</Button>
        </div>

        <div className="flex flex-col">
          <h4>Recommended courses</h4>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {this.state.loading &&
              Array(6)
                .fill(undefined)
                .map((_item, index) => {
                  return <CardSkeleton key={index} />;
                })}

            {!this.state.loading &&
              this.state.recommended.slice(0, 6).map((course) => (
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
          <div className="mt-8 self-center">
            <Button href="/discover">Explore everything</Button>
          </div>
        </div>
      </div>
    );
  }

  private load = async (amount: number) => {
    let courses = await this.state.courses.getCourseRange(0, amount);

    this.setState({
      recommended: courses,
      loading: false,
    });
  };
}
