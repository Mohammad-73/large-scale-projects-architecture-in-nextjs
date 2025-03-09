"use client";

import { createData } from "@/core/http-service/http-service";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/_components/comment";

const CourseComments = () => {
  const { slug } = useParams();
  const { data: comments } = useCourseComments({
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
    </>
  );
};

export default CourseComments;
