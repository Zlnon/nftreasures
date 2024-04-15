import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient
            id="grad1"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#011640", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#000000", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
      </svg>

      <Button variant="default" className="whitespace-break-spaces">
        Discover More
      </Button>

      <Button variant="outline">All collections2</Button>
    </div>
  );
};

export default page;
