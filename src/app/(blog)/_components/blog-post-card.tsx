import { Badge } from "@/app/_components/badge";
import {
  IconCalendar,
  IconClock,
  IconComment,
  IconUserProfile,
} from "@/app/_components/icons/icons";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import Image from "next/image";
import Link from "next/link";

export type BlogPostCardProps = BlogPostSummary & {};

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  coverImage,
  studyTime,
  author,
  postDate,
  numberOfViews,
  numberOfComments,
  isNew,
  slug,
  summary,
}) => {
  return (
    <div className="card">
      <figure>
        <Image src={coverImage} alt={title} width={550} height={327} />
      </figure>
      <div className="card-body">
        <Link href={`/blog/${slug}`} className="card-title mb-auto">
          {title}
        </Link>
        <p>{summary}</p>
        <div className="flex items-center justify-between mt-2">
          <Badge variant="info" size="tiny">
            <IconUserProfile width={16} height={16} />
            {author}
          </Badge>
          <Badge variant="info" size="tiny">
            <IconCalendar width={16} height={16} />
            {postDate}
          </Badge>
        </div>
      </div>

      <div className="card-footer text-xs justify-between">
        <div className="flex gap-1">
          <Badge variant="info" size="tiny">
            <IconComment width={16} height={16} />
            {numberOfComments}
          </Badge>
        </div>
        <span className="flex items-center gap-1">
          <IconClock width={16} height={16} />
          زمان مطالعه : {studyTime} دقیقه
        </span>
      </div>
    </div>
  );
};
