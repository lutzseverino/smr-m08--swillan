import React from "react";

import CourseCard from "components/CourseComponents/CourseCard";
import CourseList from "components/CourseComponents/CourseList";
import SearchBar from "components/SearchBar";
import PageNav from "components/PageNav";

import CourseRepository, { CourseData } from "utils/CourseRepository";
import { withParams } from "utils/hocs";

interface CourseSearchState {
  defaultCourses: CourseData[];
  foundCourses: CourseData[];

  currentPage: number;
  currentSearch: string;

  courseAmount: number;
  pageAmount: number;
  pageStartAt: number;
  pageEndAt: number;

  loading: boolean;
}

class CourseSearch extends React.Component<{}, CourseSearchState> {
  private courses = new CourseRepository();
  private requests = new Array<Promise<CourseData[]>>();
  private params = new URLSearchParams(window.location.search);

  constructor(props: any) {
    super(props);

    this.state = {
      defaultCourses: [],
      foundCourses: [],

      currentPage: 0,
      currentSearch: "",

      courseAmount: 0,
      pageAmount: 0,
      pageStartAt: 0,
      pageEndAt: 0,

      loading: false,
    };
  }

  componentDidMount() {
    document.title = "swillan - courses";

    let search = this.params.get("q") || undefined;
    let page = this.params.get("page") || 1;

    this.load(search, +page);
  }

  render() {
    return (
      <div>
        <div className="my-8 flex flex-row items-center gap-4">
          <SearchBar
            defaultValue={this.state.currentSearch}
            loading={this.state.loading}
            placeholder="Search courses"
            search={(search) => {
              this.load(search, 1);
            }}
          />
        </div>

        <div className="flex flex-col gap-8">
          <CourseList courses={this.state.foundCourses} amount={5} />

          {!this.state.loading && this.state.foundCourses.length < 5 && (
            <>
              <h4 className="mb-0">
                {`No ${
                  this.state.foundCourses.length === 0 ? "" : "more"
                } courses found. Here are some recommended ones.`}
              </h4>

              {this.state.defaultCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </>
          )}

          {/* If selection exceeds 5 courses, show page navigation */}
          {this.state.courseAmount > 5 && (
            <PageNav
              onClick={(page) => {
                window.scrollTo(0, 0);
                this.load(this.state.currentSearch, page);
              }}
              current={this.state.currentPage}
              pages={this.state.pageAmount}
            />
          )}
        </div>
      </div>
    );
  }

  /**
   * Loads the courses with the given page and search query.
   *
   * @param search the search string
   * @param page the page number
   */
  private load = (search: string = "", page: number) => {
    search ? this.params.set("q", search) : this.params.delete("q");
    this.params.set("page", page.toString());

    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${this.params.toString()}`
    );

    this.setState(
      {
        currentPage: page,
        currentSearch: search,
        foundCourses: [],
        loading: true,
      },
      () => {
        this.setPage(page, () => {
          this.findCourses(search);
        });
      }
    );
  };

  /**
   * Sets the page and calculates the start and end
   * index of courses to query.
   *
   * @param page the page number
   * @param callback callback function
   */
  private setPage(page: number, callback: () => void = () => {}) {
    const STARTS = (page - 1) * 5;
    const ENDS = STARTS + 5;

    this.setState(
      {
        pageStartAt: STARTS,
        pageEndAt: ENDS,
      },
      callback
    );
  }

  /**
   * Finds courses by a search string and updates
   * the state.
   *
   * @param search the search string
   */
  private findCourses = async (search: string = "") => {
    this.requests.unshift(
      this.courses.getCourseRangeBySearch(
        search,
        this.state.pageStartAt,
        this.state.pageEndAt
      )
    );

    let [courses, defaults, amount] = await Promise.all([
      Promise.all(this.requests),
      this.courses.getCourseRange(this.state.pageStartAt, this.state.pageEndAt),
      this.courses.getCourseAmountBySearch(search),
    ]);

    if (this.requests.length === 1) {
      this.setState({
        defaultCourses: defaults.slice(0, 5 - courses[0].length),
        foundCourses: courses[0],
        courseAmount: amount,
        pageAmount: Math.ceil(amount / 5),
        loading: false,
      });
    }

    this.requests.pop();
  };
}

export default withParams(CourseSearch);
