import { dummyCourses } from "data";

export type Course = {
  id: {
    $oid: string;
  };

  info: {
    title: string;
    description: string;
    image?: string;

    author?: {
      name: string;
      image?: string;
    };
  };

  content: { chapters: Chapter[] };
};

export type CourseInfo = {
  id: {
    $oid: string;
  };

  title: string;
  description: string;
  image?: string;

  author?: {
    name: string;
    image?: string;
  };
};

export type CourseContent = {
  id: {
    $oid: string;
  };

  chapters: Chapter[];
};

type Chapter = {
  title: string;
  content: string;
};

/**
 * This is a dummy repository that returns dummy data,
 * it's used for development purposes only.
 *
 * This will be replaced by a real repository in production.
 */
export default class CourseRepository {
  /**
   * Returns a course by its id.
   *
   * @param id the id of the course
   * @returns the course or undefined
   */
  public get = (id: string): Promise<Course | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyCourses.find((course) => course.id.$oid === id));
      }, 1000);
    });
  };

  /**
   * Returns the information of a range of courses.
   *
   * @param start the start index
   * @param end the end index
   * @returns an array of courses or an empty array
   */
  public getInfoRange = async (
    start: number,
    end: number
  ): Promise<CourseInfo[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          dummyCourses.slice(start, end).map((course) => ({
            ...course.info,
            id: course.id,
          }))
        );
      }, 1000);
    });
  };

  /**
   * Returns the information of a range of courses
   * that match the search string.
   *
   * @param search the search string
   * @param start the start index
   * @param end the end index
   * @returns an array of courses or an empty array
   */
  public getInfoRangeBySearch = (
    search: string,
    start: number,
    end: number
  ): Promise<CourseInfo[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          dummyCourses
            .filter((course) => course.info.title.includes(search))
            .slice(start, end)
            .map((course) => ({
              ...course.info,
              id: course.id,
            }))
        );
      }, 1000);
    });
  };

  /**
   * Returns the amount of courses that match a
   * given string
   *
   * @param search the search string
   * @returns the amount of courses that match the search string
   */
  public getAmountBySearch = (search: string): Promise<number> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          dummyCourses.filter((course) => course.info.title.includes(search))
            .length
        );
      }, 1000);
    });
  };

  /**
   * Returns a given amount of information of random courses.
   *
   * @param amount the amount of courses to return
   * @returns an array of courses or an empty array
   */
  public getInfoRecommendations = async (
    amount: number
  ): Promise<CourseInfo[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          dummyCourses
            .sort(() => 0.5 - Math.random())
            .slice(0, amount)
            .map((course) => ({
              ...course.info,
              id: course.id,
            }))
        );
      }, 1000);
    });
  };
}
