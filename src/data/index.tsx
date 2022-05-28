import dummyCourseData from "data/database.json";
import { Course } from "utils/CourseRepository";

export const dummyCourses: Course[] = dummyCourseData;

export const courseAmount: number = dummyCourses.length;
