"use client"

import React from "react";

import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    route: "/dashboard",
    icon: "/assets/icons/home.svg",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
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
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            label: "Home",
            route: "/my-business",
            icon: "/assets/icons/image.svg",
          },
        {
            label: "TestPage",
            route: "/my-business/testPage",
            icon: "/assets/icons/image.svg",
          },
          
    ],
  },
  {
    title: "Collaboration",
    route: "/collaboration",
    icon: "/assets/icons/phone.svg",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
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
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
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
            label: "Home",
            route: "/imagine",
            icon: "/assets/icons/image.svg",
          },
          
          {
            label: "Buy Credits",
            route: "/imagine/credits",
            icon: "/assets/icons/image.svg",
          },
          {
            label: "Imagine Restore",
            route: "/imagine/transformations/add/restore",
            icon: "/assets/icons/image.svg",
          },
          {
            label: "Generative Fill",
            route: "/imagine/transformations/add/fill",
            icon: "/assets/icons/image.svg",
          },
          {
            label: "Object Remove",
            route: "/imagine/transformations/add/remove",
            icon: "/assets/icons/image.svg",
          },
          {
            label: "Object Recolor",
            route: "/imagine/transformations/add/recolor",
            icon: "/assets/icons/image.svg",
          },
          {
            label: "Background Remove",
            route: "/imagine/transformations/add/removeBackground",
            icon: "/assets/icons/image.svg",
          },
          {
            label: "Sketch Board",
            route: "/imagine/sketch-board",
            icon: "/assets/icons/image.svg",
          },
          
          
        ] 
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
        
        ]  
  },
  

  // Add other menu items as needed
];
