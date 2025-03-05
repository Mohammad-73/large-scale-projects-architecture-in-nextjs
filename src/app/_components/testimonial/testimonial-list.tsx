import React from "react";
import TestimonialItem from "./testimonial-item";
import { TestimonialListProps } from "./testimonial.types";

export const TestimonialList: React.FC<TestimonialListProps> = ({
  testimonials,
}) => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-10 pb-24 md:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(3n-1)]:translate-y-16">
      {testimonials.map((testimonial) => (
        <TestimonialItem
          key={`testimonial-${testimonial.name}`}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
};
