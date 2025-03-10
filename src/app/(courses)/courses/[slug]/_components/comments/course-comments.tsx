"use client";

import { Comment } from "@/app/_components/comment";
import { TextPlaceholder } from "@/app/_components/placeholders";
import { useParams } from "next/navigation";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useCourseComments } from "../../_api/get-comments";
import { Button } from "@/app/_components/button";
import { IconRefresh } from "@/app/_components/icons/icons";

const CourseComments = () => {
  const { ref, inView } = useInView({});
  const { slug } = useParams();
  const {
    data: comments,
    error,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (error) {
    return (
      <>
        <p>خطا در برقراری ارتباط با سرور</p>
        <div className="text-center mt-3">
          <Button
            variant="neutral"
            className="font-semibold"
            isOutline={true}
            shape="wide"
            onClick={() => refetch()}
          >
            <IconRefresh />
            تلاش مجدد
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      {comments?.pages.map((currentPage) => (
        <Fragment key={`comment-page-${currentPage.nextPage}`}>
          {currentPage.data.map((comment) => (
            <Comment
              key={`comment-${comment.id}`}
              {...comment}
              variant="info"
            />
          ))}
        </Fragment>
      ))}

      {(isFetching || hasNextPage) && (
        <div ref={ref}>
          <TextPlaceholder />
        </div>
      )}
    </>
  );
};

export default CourseComments;
