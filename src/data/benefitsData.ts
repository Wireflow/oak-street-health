import React from "react";
import { Clock, User2, Plus, Home } from "lucide-react"; // replace with the actual import paths

const benefitsData = [
  {
    icon: React.createElement(Clock, {
      className: "fill-theme-lighter-green stroke-theme-green w-16 h-16",
    }),
    description: "Same & next day appointments and 24/7 patient support line",
  },
  {
    icon: React.createElement(User2, {
      className: "fill-theme-lighter-green stroke-theme-green w-16 h-16",
    }),
    description: "Easy access to specialists",
  },
  {
    icon: React.createElement(Plus, {
      className: "stroke-theme-lighter-green w-16 h-16",
      strokeWidth: 5,
    }),
    description: "Help understanding your medicare benefits",
  },
  {
    icon: React.createElement(Home, {
      className: "fill-theme-lighter-green stroke-theme-green w-16 h-16",
    }),
    description: "Locations in your neighborhood",
  },
];

export default benefitsData;
