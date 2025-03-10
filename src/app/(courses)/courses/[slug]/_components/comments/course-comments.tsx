"use client";

import { createData } from "@/core/http-service/http-service";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/_components/comment";
import { TextPlaceholder } from "@/app/_components/placeholders";

const CourseComments = () => {
  const { slug } = useParams();
  const { data: comments, isLoading } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });
  return (
    <>
      {comments?.data.map((comment) => (
        <Comment key={`comment-${comment.id}`} {...comment} variant="info" />
      ))}

      {isLoading && <TextPlaceholder />}
    </>
  );
};

export default CourseComments;
