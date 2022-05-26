import { DummyCourses, CourseAmount } from "data";

export interface CourseInfo {
  id: number;

  title: string;
  description: string;
  image?: string;

  author?: {
    name?: string;
    image?: string;
  };
}

export default class CourseRepository {
  public getCourses = async (): Promise<CourseInfo[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DummyCourses);
      }, 1000);
    });
  };

  public getCourse = async (id: number): Promise<CourseInfo | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          DummyCourses.find((course) => {
            return course.id === id;
          })
        );
      }, 1000);
    });
  };

  public getCourseAmount = async (): Promise<number> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(CourseAmount);
      }, 1000);
    });
  };

  public getCourseRange = async (
    start: number,
    end: number
  ): Promise<CourseInfo[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DummyCourses.slice(start, end));
      }, 1000);
    });
  };

  public getCoursesBySearch = async (search: string): Promise<CourseInfo[]> => {
    if (!search) return this.getCourses();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          DummyCourses.filter((course) => {
            return (
              course.title.toLowerCase().includes(search.toLowerCase()) ||
              course.description.toLowerCase().includes(search.toLowerCase())
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
          DummyCourses.filter((course) => {
            return (
              course.title.toLowerCase().includes(search.toLowerCase()) ||
              course.description.toLowerCase().includes(search.toLowerCase())
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
  ): Promise<CourseInfo[]> => {
    if (!search) return this.getCourseRange(start, end);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          DummyCourses.filter((course) => {
            return (
              course.title.toLowerCase().includes(search.toLowerCase()) ||
              course.description.toLowerCase().includes(search.toLowerCase())
            );
          }).slice(start, end)
        );
      }, 1000);
    });
  };
}
