import { TypeMyData, TypeNavbar } from "./Models";
import Portpolio from "../assets/portpolio.png";
import Watchme from "../assets/watchme.png";
import King from "../assets/king.png";
import Travel from "../assets/travel.png";
import Winter from "../assets/winer.png";
import Book from "../assets/book-store.jpg";

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "Book Store",
    img_url: `${Book}`,
    link: "https://github.com/TIEN1909/book-store",
    gitHub: "https://github.com/TIEN1909/book-store",
  },
  {
    id: 2,
    title: "Portpolio",
    img_url: `${Portpolio}`,
    link: "#",
    gitHub: "#",
  },
  {
    id: 3,
    title: "Watch Me",
    img_url: `${Watchme}`,
    link: "https://github.com/TIEN1909/watch-me",
    gitHub: "https://github.com/TIEN1909/watch-me",
  },
  {
    id: 4,
    title: "King Shoes",
    img_url: `${King}`,
    link: "https://king-shoes.vercel.app/",
    gitHub: "https://github.com/TIEN1909/kingShoes",
  },
  {
    id: 5,
    title: "Travelix",
    img_url: `${Travel}`,
    link: "https://travelix-sable.vercel.app/",
    gitHub: "https://github.com/TIEN1909/travelix",
  },
  {
    id: 6,
    title: "Winter-Holidays",
    img_url: `${Winter}`,
    link: "https://winter-holidays-master.vercel.app/",
    gitHub: "https://github.com/TIEN1909/Winter-Holidays-master",
  },
];

export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];
