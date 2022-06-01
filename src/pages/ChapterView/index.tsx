import React from "react";
import ReactMarkdown from "react-markdown";
import CourseRepository, { Course } from "utils/CourseRepository";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "components/Button";

interface ChapterViewState {
  id: string;
  chapterNumber: string;

  course?: Course;
}

export default class ChapterView extends React.Component<{}, ChapterViewState> {
  private courses = new CourseRepository();
  private params = new URLSearchParams(window.location.search);

  constructor(props: any) {
    super(props);

    this.state = {
      id: this.params.get("q") || "0",
      chapterNumber: this.params.get("chapter") || "0",
    };
  }

  componentDidMount() {
    this.load(this.state.id);
  }

  render() {
    return (
      <div className="flex flex-col items-center">
        {this.state.course && (
          <div className="max-w-prose">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");

                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={androidstudio}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {
                this.state.course.content.chapters[+this.state.chapterNumber]
                  .content
              }
            </ReactMarkdown>

            {/* Previous and next chapter buttons */}
            <div className="flex flex-row justify-between">
              <Button onClick={this.previousChapter}>Previous chapter</Button>
              <Button onClick={this.nextChapter}>Next chapter</Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  private load = async (id: string) => {
    const course = await this.courses.get(id);

    this.setState({
      course,
    });
  };

  private previousChapter = () => {
    window.scrollTo(0, 0);

    const chapterNumber = Math.max(0, +this.state.chapterNumber - 1).toString();

    this.params.set("chapter", chapterNumber);

    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${this.params.toString()}`
    );

    this.setState({
      chapterNumber,
    });
  };

  private nextChapter = () => {
    window.scrollTo(0, 0);

    const chapterNumber = Math.min(
      this.state.course!.content.chapters.length - 1,
      +this.state.chapterNumber + 1
    ).toString();

    this.params.set("chapter", chapterNumber);

    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${this.params.toString()}`
    );

    this.setState({
      chapterNumber,
    });
  };
}
