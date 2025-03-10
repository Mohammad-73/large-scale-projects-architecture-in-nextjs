"use client";

import { Comment } from "@/app/_components/comment";
import { TextPlaceholder } from "@/app/_components/placeholders";
import { useParams } from "next/navigation";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useCourseComments } from "../../_api/get-comments";

const CourseComments = () => {
  const { ref, inView } = useInView({});
  const { slug } = useParams();
  const {
    data: comments,
    error,
    isFetchingNextPage,
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

      {(isFetchingNextPage || hasNextPage) && (
        <div ref={ref}>
          <TextPlaceholder />
        </div>
      )}
      {/* {isLoading && <TextPlaceholder />} */}
    </>
  );
};

export default CourseComments;
