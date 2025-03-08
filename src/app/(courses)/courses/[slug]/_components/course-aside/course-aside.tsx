import { Avatar } from "@/app/_components/avatar/avatar";
import { CourseAsideProps } from "./course-aside.types";
import { Button } from "@/app/_components/button";
import {
  IconArrowLeftFill,
  IconClock,
  IconComment,
  IconDoc,
  IconDownload,
  IconLevel,
  IconRecord,
  IconStudents,
} from "@/app/_components/icons/icons";
import { API_URL } from "@/configs/global";
import { Progress } from "@/app/_components/progress";
import { Rating } from "@/app/_components/rating";
import { Price } from "@/app/_components/price";
import { CourseLevel } from "@/app/enums/course-level.enum";
import { Variant } from "@/app/_components/types/variant.type";

const levelVariant: Record<CourseLevel, Variant> = {
  0: "warning",
  1: "info",
  2: "success",
};

const levelProgress: Record<CourseLevel, number> = {
  0: 25,
  1: 50,
  2: 100,
};

export const CourseAside: React.FC<CourseAsideProps> = ({
  basePrice,
  numberOfLectures,
  numOfStudents,
  duration,
  recordStatus,
  isDownloadable,
  averageReviewRating,
  level,
  numOfReviews,
  authorName,
  authorSpecialty,
  profileImageId,
  levelNumber,
}) => {
  return (
    <aside className="flex flex-col gap-5 sticky top-5">
      <div className="flex items-center justify-between">
        <Price price={basePrice} text="دوره رایگان" />
        <Rating rate={averageReviewRating} />
      </div>
      <div className="flex border rounded-lg dark:border-base-content/10 mb-4">
        <div className="flex-1 border-l dark:border-base-content/10 p-3 flex gap-2 items-center">
          <IconStudents width={22} />
          <span className="font-bold">{numOfStudents}</span>
          شرکت کننده
        </div>
        <div className="flex-1 p-3 flex flex-col gap-2">
          <div className="flex gap-2">
            <IconLevel width={22} />
            {level}
          </div>
          <Progress
            size="tiny"
            variant={levelVariant[levelNumber!]}
            value={levelProgress[levelNumber!]}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <IconDoc width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">تعداد مباحث: </span>
          <span className=" dark:text-info">{numberOfLectures}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconClock width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">مدت آموزش: </span>
          <span className=" dark:text-info">{duration}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconRecord width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">وضعیت ضبط: </span>
          <span className=" dark:text-info">{recordStatus}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconDownload width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">قابلیت دانلود: </span>
          <span className=" dark:text-info">
            {isDownloadable ? "دارد" : "ندارد"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconComment width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">تعداد دیدگاه‌ها: </span>
          <span className=" dark:text-info">{numOfReviews}</span>
        </div>
      </div>
      <div>Enrollment in course component</div>
      <div className="border-t border-dashed dark:border-base-content/20 my-5 pt-8 mb-0 flex gap-4 items-center">
        <Avatar src={`${API_URL}/picture/${profileImageId}`} />
        <div>
          <span className="font-semibold">{authorName}</span>
          <p className="dark:text-base-content/60 font-semibold">
            {authorSpecialty}
          </p>
        </div>
      </div>
      <Button
        variant="neutral"
        shape="full"
        className="font-semibold"
        animatedIcon={true}
      >
        مشاهده پروفایل
        <IconArrowLeftFill fill="currentColor" />
      </Button>
    </aside>
  );
};
