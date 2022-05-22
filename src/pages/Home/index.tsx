import React from "react";
import Button from "components/Button";
import CourseCard, { CourseCardSkeleton } from "components/CourseCard";
import CourseRepository, { CourseAd } from "utils/CourseRepository";

interface HomeState {
  courses: CourseRepository;
  recommended: CourseAd[];
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

    this.state.courses.getAdRange(0, 6).then((response) => {
      this.setState({
        recommended: response,
        loading: false,
      });
    });
  }

  render(): React.ReactNode {
    return (
      <div className="m-8">
        <div className="my-16 md:my-32">
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
                  return <CourseCardSkeleton key={index} />;
                })}

            {!this.state.loading &&
              this.state.recommended.slice(0, 6).map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  image={course.image}
                  title={course.title}
                >
                  {course.description}
                </CourseCard>
              ))}
          </div>
          <div className="mt-8 self-center">
            <Button onClick={() => (window.location.href = "courses/")}>
              Explore everything
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
