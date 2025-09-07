import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCard } from "./course-card";
import { API_URL } from "@/configs/global";

type CourseCardListProps = {
  // courses: CourseSummary[];
};

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    // cache:"no-store", // For dynamic rendering we can set 'no-store' value for cache or 0 value for revalidate or segment config option on top of page.
    next: {
      revalidate: 24 * 60 * 60,
    },
  });
  return res.json();
}

export const CourseCardList: React.FC<
  CourseCardListProps
> = async ({}: CourseCardListProps) => {
  const newestCoursesData = await getNewestCourses(4);
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestCoursesData.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
