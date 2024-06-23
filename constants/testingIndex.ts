export const navLinks = [
    {
      label: "",
      
      icon: "/assets/icons/home.svg",
      subLinks: [
        {
          label: " ",
          route: "/dashboard",
          icon: "/assets/icons/home.svg",
        },
        {
          label: " ",
          route: "/dashboard/dashboard-inf",
          icon: "/assets/icons/image.svg",
        },
      
      ]
    },
    {
      label: " ",
      
      icon: "/assets/icons/lightning.svg",
      subLinks: [
        {
          label: " ",
          route: "/my-business",
          icon: "/assets/icons/home.svg",
        },
        {
          label: " ",
          route: "/my-business/testPage",
          icon: "/assets/icons/image.svg",
        },
      
      ]
    },
    {
      label: " ",
      icon: "/assets/icons/phone.svg",
      subLinks: [
        {
          label: " ",
          route: "/collaboration",
          icon: "/assets/icons/home.svg",
        },
        {
          label: " ",
          route: "/collaboration/Chats",
          icon: "/assets/icons/image.svg",
        },
        {
          label: " ",
          route: "/collaboration/messages",
          icon: "/assets/icons/stars.svg",
        },
      
      ]
    },
    {
      label: " ",
      
      icon: "/assets/icons/market.svg",
      subLinks: [
        {
          label: " ",
          route: "/analytics",
          icon: "/assets/icons/home.svg",
        },
        {
          label: " ",
          route: "/analytics/inProgress",
          icon: "/assets/icons/image.svg",
        },
        {
          label: " ",
          route: "/analytics/atRisk",
          icon: "/assets/icons/stars.svg",
        },
        {
          label: " ",
          route: "/analytics/toDo",
          icon: "/assets/icons/scan.svg",
        },
      ]
    },
    {
      label: " ",
      
      icon: "/assets/icons/search.svg",
      subLinks: [
        {
          label: " ",
          route: "/market-research",
          icon: "/assets/icons/home.svg",
        },
      
      ]
    },
    {
      label: " ",
      
      icon: "/assets/icons/market-purchase-svgrepo-com.svg",
      subLinks: [
        {
          label: " ",
          route: "/picture-generate-home",
          icon: "/assets/icons/home.svg",
        },
      
      ]
    },
    {
      label: " ",
      
      icon: "/assets/icons/truck.svg",
      subLinks: [
        {
          label: " ",
          route: "/product-services",
          icon: "/assets/icons/home.svg",
        },
      
      ]
    },
    {
      label: " ",
      
      icon: "/assets/icons/calendar.svg",
      subLinks: [
        {
          label: " ",
          route: "/calendar",
          icon: "/assets/icons/home.svg",
        },
      
      ]
    },
    
    {
      label: " ",
      icon: "/assets/icons/sketchBoard.svg",
      subLinks: [
        {
          label: " ",
          route: "/sketch-board",
          icon: "/assets/icons/home.svg",
        },
      
      ]
    },
    {
      label: " ",
      icon: "/assets/icons/content-creator.svg",
      subLinks: [
        {
          label: " ",
          route: "/picture-generate-home",
          icon: "/assets/icons/home.svg",
        },
        {
          label: " ",
          route: "/transformations/add/restore",
          icon: "/assets/icons/image.svg",
        },
        {
          label: " ",
          route: "/transformations/add/fill",
          icon: "/assets/icons/stars.svg",
        },
        {
          label: " ",
          route: "/transformations/add/remove",
          icon: "/assets/icons/scan.svg",
        },
        {
          label: " ",
          route: "/transformations/add/recolor",
          icon: "/assets/icons/filter.svg",
        },
        {
          label: " ",
          route: "/transformations/add/removeBackground",
          icon: "/assets/icons/camera.svg",
        },
        
        {
          label: " ",
          route: "/credits",
          icon: "/assets/icons/bag.svg",
        },
      
      ]
    },
    {
      label: " ",
      
      icon: "/assets/icons/subscription.svg",
      subLinks: [
        {
          label: " ",
          route: "/subscription",
          icon: "/assets/icons/home.svg",
        },
        {
          label: " ",
          route: "/transformations/add/restore",
          icon: "/assets/icons/image.svg",
        },
        
      
      ]
    }
  ];

  export const sheetLinks = [
    {
      label: "Dashboard",
      route: "/dashboard",
      icon: "/assets/icons/home.svg",
      
    },
    {
      label: "My Business",
      route: "/my-business",
      icon: "/assets/icons/lightning.svg",
    },
    {
      label: "Collaboration",
      route: "/collaboration",
      icon: "/assets/icons/phone.svg",
    },
    {
      label: "Analytics",
      route: "/analytics",
      icon: "/assets/icons/market.svg",
    },
    {
      label: "Market Research",
      route: "/market-research",
      icon: "/assets/icons/search.svg",
    },
    {
      label: "Finances",
      route: "/finances",
      icon: "/assets/icons/market-purchase-svgrepo-com.svg",
    },
    {
      label: "Product & Services",
      route: "/product-services",
      icon: "/assets/icons/truck.svg",
    },
    {
      label: "Calendar",
      route: "/calendar",
      icon: "/assets/icons/calendar.svg",
    },
    {
      label: "Sketch Board",
      route: "/sketch-board",
      icon: "/assets/icons/sketchBoard.svg"
    },
    {
      label: "Image Generator",
      route: "/picture-generate-home",
      icon: "/assets/icons/content-creator.svg"
    },
    {
      label: "Subscriptions",
      route: "/subscription",
      icon: "/assets/icons/subscription.svg"
    }
  ];
  
 
  
  export const plans = [
    {
      _id: 1,
      name: "Free",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 20,
      inclusions: [
        {
          label: "20 Free Credits",
          isIncluded: true,
        },
        {
          label: "Basic Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: false,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Pro Package",
      icon: "/assets/icons/free-plan.svg",
      price: 40,
      credits: 120,
      inclusions: [
        {
          label: "120 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 3,
      name: "Premium Package",
      icon: "/assets/icons/free-plan.svg",
      price: 199,
      credits: 2000,
      inclusions: [
        {
          label: "2000 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: true,
        },
      ],
    },
  ];
  
  export const transformationTypes = {
    restore: {
      type: "restore",
      title: "Restore Image",
      subTitle: "Refine images by removing noise and imperfections",
      config: { restore: true },
      icon: "image.svg",
    },
    removeBackground: {
      type: "removeBackground",
      title: "Background Remove",
      subTitle: "Removes the background of the image using AI",
      config: { removeBackground: true },
      icon: "camera.svg",
    },
    fill: {
      type: "fill",
      title: "Generative Fill",
      subTitle: "Enhance an image's dimensions using AI outpainting",
      config: { fillBackground: true },
      icon: "stars.svg",
    },
    remove: {
      type: "remove",
      title: "Object Remove",
      subTitle: "Identify and eliminate objects from images",
      config: {
        remove: { prompt: "", removeShadow: true, multiple: true },
      },
      icon: "scan.svg",
    },
    recolor: {
      type: "recolor",
      title: "Object Recolor",
      subTitle: "Identify and recolor objects from the image",
      config: {
        recolor: { prompt: "", to: "", multiple: true },
      },
      icon: "filter.svg",
    },
  };
  
  export const aspectRatioOptions = {
    "1:1": {
      aspectRatio: "1:1",
      label: "Square (1:1)",
      width: 1000,
      height: 1000,
    },
    "3:4": {
      aspectRatio: "3:4",
      label: "Standard Portrait (3:4)",
      width: 1000,
      height: 1334,
    },
    "9:16": {
      aspectRatio: "9:16",
      label: "Phone Portrait (9:16)",
      width: 1000,
      height: 1778,
    },
  };
  
  export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
  };
  
  export const creditFee = -1;
  