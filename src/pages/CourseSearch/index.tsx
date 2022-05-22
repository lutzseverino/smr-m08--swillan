import React from "react";

/* Components */
import SearchBar from "components/SearchBar";
import PageNav from "components/PageNav";
import CourseCard, { CourseCardSkeleton } from "components/CourseCard";

/* Utilities */
import CourseRepository, { CourseAd } from "utils/CourseRepository";
import { withParams } from "utils/hocs";

interface CourseSearchProps {
  params: {
    page: string;
    search: string;
  };
}

interface CourseSearchState {
  visibleCourses: CourseAd[];

  courseAmount: number;
  pageAmount: number;
  pageStartAt: number;
  pageEndAt: number;

  loading: boolean;
}

class CourseSearch extends React.Component<
  CourseSearchProps,
  CourseSearchState
> {
  private courses = new CourseRepository();

  constructor(props: any) {
    super(props);

    this.state = {
      visibleCourses: [],

      courseAmount: 0,
      pageAmount: 0,
      pageStartAt: 0,
      pageEndAt: 0,

      loading: false,
    };
  }

  componentDidMount() {
    document.title = "swillan - courses";

    this.load(this.props.params.search, +this.props.params.page || 1);
  }

  render() {
    return (
      <div className="m-8 h-full">
        <div className="my-8 flex flex-row items-center gap-4">
          <SearchBar
            defaultValue={this.props.params.search}
            loading={this.state.loading}
            placeholder="Search courses"
            search={(search) => {
              this.load(search, +this.props.params.page);
            }}
          />
        </div>

        <div className="flex flex-col gap-8">
          {/* Shows skeleton if default course selection is yet loading */}
          {this.state.visibleCourses.length === 0 &&
            Array(5)
              .fill(undefined)
              .map((_item, index) => {
                return <CourseCardSkeleton key={index} />;
              })}

          {/* Shows visisble courses, this may be search and found courses or default ones */}
          {this.state.visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              image={course.image}
              title={course.title}
            >
              {course.description}
            </CourseCard>
          ))}

          {/* If selection exceeds 5 courses, show page navigation */}
          {this.state.courseAmount > 5 && (
            <PageNav
              onClick={(page) => {
                this.load(this.props.params.search, page);
              }}
              current={+this.props.params.page}
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
  private load = (search: string, page: number) => {
    this.props.params.search = search;
    this.props.params.page = `${page}`;

    window.history.pushState(
      {},
      "",
      `/courses/${search ? `search/${search}/` : ""}page/${page}`
    );

    this.setState(
      {
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
  private findCourses = (search: string = "") => {
    this.setState({
      visibleCourses: [],
      loading: true,
    });

    this.courses
      .getAdRangeBySearch(search, this.state.pageStartAt, this.state.pageEndAt)
      .then((response) => {
        this.setState({
          visibleCourses: response,

          loading: false,
        });
      });

    this.courses.getAdAmountBySearch(search).then((response) => {
      this.setState({
        courseAmount: response,
        pageAmount: Math.ceil(response / 6),
      });
    });
  };
}

export default withParams(CourseSearch);
