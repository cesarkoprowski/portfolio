"use client";

import React, { useState } from "react";

interface ProjectDescriptionProps {
  text: string;
  maxLength: number;
}

const ProjectDescription = ({ text, maxLength }: ProjectDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) {
    return (
      <p className="text-gray-200 text-sm leading-relaxed text-pretty">
        {text}
      </p>
    );
  }

  return (
    <p className="text-gray-200 text-sm leading-relaxed text-pretty">
      {isExpanded ? text : `${text.substring(0, maxLength)}... `}

      <span
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-1 font-semibold text-blue-400 cursor-pointer underline hover:text-blue-300"
      >
        {isExpanded ? "See Less" : "See More"}
      </span>
    </p>
  );
};

export default ProjectDescription;
