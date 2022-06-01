import React from "react";

import Button from "components/Button";
import RecommendedCoursesGrid from "components/CourseComponents/RecommendedCourseGrid";

import CourseRepository, { Course } from "utils/CourseRepository";
import ReactMarkdown from "react-markdown";

interface CourseState {
  id: string;

  course?: Course;

  loading: boolean;
}

export default class CoursePreview extends React.Component<{}, CourseState> {
  private courses = new CourseRepository();
  private params = new URLSearchParams(window.location.search);

  constructor(props: any) {
    super(props);

    this.state = {
      id: this.params.get("q") || "0",

      course: undefined,

      loading: true,
    };
  }

  componentDidMount() {
    this.load(this.state.id);
  }

  render() {
    return (
      <div className="flex flex-col gap-8">
        {this.state.course && (
          <>
            <div className="flex flex-col justify-between md:flex-row">
              <div>
                <h2>{this.state.course.info.title}</h2>
                <p className="max-w-prose">
                  {this.state.course.info.description}
                </p>

                <div>
                  <Button href={`/course?q=${this.state.id}&chapter=0`}>
                    Start this course
                  </Button>
                </div>
              </div>

              <div className="mt-8 md:mt-0 md:text-right">
                <h3>Course chapters</h3>
                <ul>
                  {this.state.course.content.chapters.map((chapter, index) => (
                    <li key={index}>
                      {index + 1}. {chapter.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <hr />

            <div className="flex flex-col md:items-center">
              <h3>Preview</h3>

              <div className="foreground border-style w-full rounded-xl border p-8">
                <article className="mx-auto max-w-prose">
                  <ReactMarkdown>
                    {this.state.course.content.chapters[0].content}
                  </ReactMarkdown>
                </article>
              </div>
            </div>
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

    document.title = `swillan - ${course ? course.info.title : "not found"}`;
  };
}
