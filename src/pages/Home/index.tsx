import React from "react";

import RecommendedCoursesGrid from "components/CourseComponents/RecommendedCourseGrid";
import Button from "components/Button";

export default class Home extends React.Component {
  componentDidMount() {
    document.title = "swillan - home";
  }

  render(): React.ReactNode {
    return (
      <div>
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

          <RecommendedCoursesGrid amount={6} />

          <div className="mt-8 self-center">
            <Button href="/discover">Explore everything</Button>
          </div>
        </div>
      </div>
    );
  }
}
