import React from "react";

import Button from "components/Button";
import RecommendedCoursesGrid from "components/CourseComponents/RecommendedCourseGrid";

import CourseRepository, { CourseData } from "utils/CourseRepository";

interface CourseState {
  id: string;
  title: string;

  course?: CourseData;
}

export default class Course extends React.Component<{}, CourseState> {
  private courses = new CourseRepository();
  private params = new URLSearchParams(window.location.search);

  constructor(props: any) {
    super(props);

    this.state = {
      id: this.params.get("q") || "0",
      title: this.params.get("title") || "",
    };
  }

  componentDidMount() {
    document.title = `swillan - ${this.state.title}`;

    this.load(this.state.id);
  }

  render() {
    return (
      <div className="flex flex-col gap-8">
        {this.state.course ? (
          <>
            <div className="flex flex-row justify-between">
              <div>
                <h2>{this.state.course?.info.title}</h2>
                <p className="max-w-prose">
                  {this.state.course.info.description}
                </p>

                <div>
                  <Button>Start this course</Button>
                </div>
              </div>

              <div className="text-right">
                {/* Temporary dummy chapters */}
                <h3>Course contents</h3>
                <ul>
                  <li>Chapter 1: Main method</li>
                  <li>Chapter 2: Variable declaration</li>
                </ul>
              </div>
            </div>

            <hr />

            <h3>Preview</h3>
          </>
        ) : (
          <div>
            <div className="text-center">
              <h2>404 - Not Found</h2>
              <h4>That course doesn't exist, here are some recommended one</h4>
            </div>

            <RecommendedCoursesGrid amount={6} />
          </div>
        )}
      </div>
    );
  }

  private load = async (id: string) => {
    this.setState({
      id,
      course: await this.courses.getCourse(id),
    });
  };
}
