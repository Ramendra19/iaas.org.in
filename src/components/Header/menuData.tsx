import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Industries",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Semiconductor ",
        path: "/semiconductor",
        newTab: false,
      },
      {
        id: 32,
        title: "Space",
        path: "/spacelist",
        newTab: false,
      },
    ],
  },

  {
    id: 5,
    title: "Institute",    
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Bharat",
        path: "/isemiconductor",
        newTab: false,
      },
      {
        id: 52,
        title: "Foreign",
        path: "/fsemiconductor",
        newTab: false,
      },
    ],
  },


  {
    id: 4,
    title: "Events",
    path: "/industries",
    newTab: false,
  },
  {
    id: 5,
    title: "Memberships",
    path: "/membership",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
