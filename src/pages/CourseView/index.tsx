import React from "react";

import Button from "components/Button";
import RecommendedCoursesGrid from "components/CourseComponents/RecommendedCourseGrid";

import CourseRepository, { Course } from "utils/CourseRepository";

interface CourseState {
  id: string;
  title: string;

  course?: Course;

  loading: boolean;
}

export default class CourseView extends React.Component<{}, CourseState> {
  private courses = new CourseRepository();
  private params = new URLSearchParams(window.location.search);

  constructor(props: any) {
    super(props);

    this.state = {
      id: this.params.get("q") || "0",
      title: this.params.get("title") || "",

      course: undefined,

      loading: true,
    };
  }

  componentDidMount() {
    document.title = `swillan - ${this.state.title}`;

    this.load(this.state.id);
  }

  render() {
    return (
      <div className="flex flex-col gap-8">
        {this.state.course && (
          <>
            <div className="flex flex-row justify-between">
              <div>
                <h2>{this.state.course.info.title}</h2>
                <p className="max-w-prose">
                  {this.state.course.info.description}
                </p>

                <div>
                  <Button>Start this course</Button>
                </div>
              </div>

              <div className="text-right">
                <h3>Course chapters</h3>
                <ul>
                  {this.state.course.content.chapters.map((chapter, index) => (
                    <li key={index}>{chapter.title}</li>
                  ))}
                </ul>
              </div>
            </div>

            <hr />

            <h3>Preview</h3>
          </>
        )}

        {!this.state.loading && !this.state.course && (
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
    const course = await this.courses.get(id);

    this.setState({
      course,
      loading: false,
    });
  };
}
