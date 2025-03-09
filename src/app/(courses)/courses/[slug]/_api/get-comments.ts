import { readData } from "@/core/http-service/http-service";
import { CourseCommentList } from "../_types/course-comment.interface";
import { useQuery } from "@tanstack/react-query";

type GetCommentsOptions = {
  params: {
    slug: string;
    page: number;
  };
};

const getComments = ({
  params,
}: GetCommentsOptions): Promise<CourseCommentList> => {
  const { slug, page } = params;
  const url = `/courses/${slug}/comments?page=${page}`;
  return readData(url);
};

export const useCourseComments = ({ params }: GetCommentsOptions) => {
  const { data } = useQuery({
    queryKey: ["courseComment"],
    queryFn: () => getComments({ params }),
  });

  return { data };
};
