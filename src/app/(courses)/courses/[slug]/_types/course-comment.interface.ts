export interface CourseComment {
  id: number;
  date: string;
  userId: number | undefined;
  fullName: string;
  commentText: string;
  score: number | null;
  isResponse: boolean;
}

export interface CourseCommentList {
  data: CourseComment[];
  nextPage: number;
}
