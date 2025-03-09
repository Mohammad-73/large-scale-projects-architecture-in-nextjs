"use client";

import { createData } from "@/core/http-service/http-service";
import { useEffect } from "react";

const CourseComments = () => {
  useEffect(() => {
    createData("/validation-error", {});
  }, []);
  return <></>;
};

export default CourseComments;
