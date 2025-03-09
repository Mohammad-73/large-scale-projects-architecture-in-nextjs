import { Comment } from "@/types/comments.interface";

export interface CourseCommentList {
  data: Comment[];
  nextPage: number;
}
