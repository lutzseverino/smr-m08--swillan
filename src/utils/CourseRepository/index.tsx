import { dummyCourses, courseAmount } from "data";

export type CourseData = {
  id: {
    $oid: string;
  };

  info: {
    title: string;
    description: string;
    image?: string | null;
    author?: {
      name: string;
      image?: string | null;
    };
  };
};

export default class CourseRepository {
  public getCourses = async (): Promise<CourseData[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyCourses);
      }, 1000);
    });
  };

  public getCourseRecommendations = async (
    amount: number
  ): Promise<CourseData[]> => {
    const courses = await this.getCourses();
    return courses.slice(0, amount);
  };

  public getCourse = async (id: string): Promise<CourseData | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          dummyCourses.find((course) => {
            return course.id.$oid === id;
          })
        );
      }, 1000);
    });
  };

  public getCourseAmount = async (): Promise<number> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(courseAmount);
      }, 1000);
    });
  };

  public getCourseRange = async (
    start: number,
    end: number
  ): Promise<CourseData[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyCourses.slice(start, end));
      }, 1000);
    });
  };

  public getCoursesBySearch = async (search: string): Promise<CourseData[]> => {
    if (!search) return this.getCourses();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          dummyCourses.filter((course) => {
            return (
              course.info.title.toLowerCase().includes(search.toLowerCase()) ||
              course.info.description
                .toLowerCase()
                .includes(search.toLowerCase())
            );
          })
        );
      }, 1000);
    });
  };

  public getCourseAmountBySearch = async (search: string): Promise<number> => {
    if (!search) return this.getCourseAmount();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          dummyCourses.filter((course) => {
            return (
              course.info.title.toLowerCase().includes(search.toLowerCase()) ||
              course.info.description
                .toLowerCase()
                .includes(search.toLowerCase())
            );
          }).length
        );
      }, 1000);
    });
  };

  public getCourseRangeBySearch = async (
    search: string,
    start: number,
    end: number
  ): Promise<CourseData[]> => {
    if (!search) return this.getCourseRange(start, end);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          dummyCourses
            .filter((course) => {
              return (
                course.info.title
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                course.info.description
                  .toLowerCase()
                  .includes(search.toLowerCase())
              );
            })
            .slice(start, end)
        );
      }, 1000);
    });
  };
}
