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
    title: "Chapters",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Guidelines to Establish a Chapter",
        path: "form/Guidelines_to_Open_a_Chapter.pdf",
        newTab: true,
      },
      {
        id: 62,
        title: "Chandigarh",
        path: "./",
        newTab: false,
      },
      {
        id: 63,
        title: "Mumbai",
        path: "./",
        newTab: false,
      },
      {
        id: 64,
        title: " Surat",
        path: "./",
        newTab: false,
      },
      {
        id: 65,
        title: "Delhi",
        path: "./",
        newTab: false,
      },
      {
        id: 66,
        title: "Bhiwani",
        path: "./",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
