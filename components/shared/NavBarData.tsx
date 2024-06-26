// NavBarData.tsx

"use client";

import React from "react";

export const NavBarData = [
  {
    title: "Dashboard",
    route: "/dashboard",
    icon: "/assets/icons/home.svg",

    subNav: [
      {
        label: "Home",
        route: "/dashboard",
        icon: "/assets/icons/image.svg",
      },
    ],
  },
  {
    title: "My Business",
    route: "/my-business",
    icon: "/assets/icons/lightning.svg",

    subNav: [
      {
        label: "Home",
        route: "/my-business",
        icon: "/assets/icons/image.svg",
      },
    ],
  },
  {
    title: "Collaboration",
    route: "/collaboration",
    icon: "/assets/icons/phone.svg",

    subNav: [
      {
        label: "Chats",
        route: "/collaboration/chats",
        icon: "/assets/icons/image.svg",
      },
      {
        label: "Messages",
        route: "/collaboration/messages",
        icon: "/assets/icons/stars.svg",
      },
    ],
  },
  {
    title: "Analytics",
    route: "/analytics",
    icon: "/assets/icons/market.svg",
    subNav: [
      {
        label: "Overview",
        route: "/analytics",
        icon: "/assets/icons/image.svg",
      },
      {
        label: "In Progress",
        route: "/analytics/inProgress",
        icon: "/assets/icons/image.svg",
      },
      {
        label: "At Risk",
        route: "/analytics/atRisk",
        icon: "/assets/icons/stars.svg",
      },
      {
        label: "To Do",
        route: "/analytics/toDo",
        icon: "/assets/icons/scan.svg",
      },
    ],
  },
  {
    title: "Market Research",
    route: "/market-research",
    icon: "/assets/icons/search.svg",
    subNav: [
      {
        label: "History",
        route: "/market-research",
        icon: "/assets/icons/image.svg",
      },
    ], 
  },
  {
    title: "Finances",
    route: "/finances",
    icon: "/assets/icons/market-purchase-svgrepo-com.svg", 
    subNav: [
      {
        label: "Overview",
        route: "/finances",
        icon: "/assets/icons/image.svg",
      },
    ],
  },
  {
    title: "Products and Services",
    route: "/product-services",
    icon: "/assets/icons/truck.svg",
    subNav: [
      {
        label: "Overview",
        route: "/product-services",
        icon: "/assets/icons/image.svg",
      },
    ],  
  },
  
  {
    title: "Imagine",
    route: "/imagine",
    icon: "/assets/icons/sketchBoard.svg",
    subNav: [
      {
        label: "Imagine",
        route: "/imagine",
        icon: "/assets/icons/image.svg",
      },
      {
        label: "Sketch Board",
        route: "/imagine/sketch-board",
        icon: "/assets/icons/image.svg",
      },
    ],
  },

  {
    title: "Calendar",
    route: "/calendar",
    icon: "/assets/icons/calendar.svg",
    subNav: [
      {
        label: "This Week",
        route: "/calendar",
        icon: "/assets/icons/image.svg",
      },
    ],  
  },
];
