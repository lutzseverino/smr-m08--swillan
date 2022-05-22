import { DummyCourses, CourseAmount } from "data";

export interface CourseAd {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default class CourseRepository {
  public getAds = async (): Promise<CourseAd[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DummyCourses);
      }, 1000);
    });
  };

  public getAdAmount = async (): Promise<number> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(CourseAmount);
      }, 1000);
    });
  };

  public getAdRange = async (
    start: number,
    end: number
  ): Promise<CourseAd[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DummyCourses.slice(start, end));
      }, 1000);
    });
  };

  public getAdsBySearch = async (search: string): Promise<CourseAd[]> => {
    if (!search) return this.getAds();

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

  public getAdAmountBySearch = async (search: string): Promise<number> => {
    if (!search) return this.getAdAmount();

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

  public getAdRangeBySearch = async (
    search: string,
    start: number,
    end: number
  ): Promise<CourseAd[]> => {
    if (!search) return this.getAdRange(start, end);

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
