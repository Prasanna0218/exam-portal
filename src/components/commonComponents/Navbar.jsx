import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Grid2x2,
  Grid2x2Plus,
  ListPlus,
  FileQuestion,
  FilePlus,
  CircleUserRound,
  BookCheck,
  Crosshair,
} from "lucide-react";

const Navbar = () => {
  const [role, setRole] = useState("ADMIN");
  const [navList, setNavList] = useState([]);

  const adminNavList = [
    {
      name: "Categories",
      link: "/categories",
      icon: <Grid2x2 className="ms-1" size={"20px"} />,
    },
    {
      name: "Add Category",
      link: "/addCategory",
      icon: <Grid2x2Plus className="ms-1" size={"20px"} />,
    },
    {
      name: "Quizzes",
      link: "/quizzes",
      icon: <FileQuestion className="ms-1" size={"20px"} />,
    },
    {
      name: "Add Quiz",
      link: "/addQuiz",
      icon: <FilePlus className="ms-1" size={"20px"} />,
    },
  ];

  const userNavlist = [
    {
      name: "Tests",
      link: "/tests",
      icon: <BookCheck className="ms-1" size={"20px"} />,
    },
    {
      name: "Result",
      link: "/results",
      icon: <Crosshair className="ms-1" size={"20px"} />,
    },
  ];

  useEffect(() => {
    if (role == "USER") {
      setNavList(userNavlist);
    } else {
      setNavList(adminNavList);
    }
  }, []);

  return (
    <div className="h-[65px] w-full flex justify-between px-20 bg-primary">
      <div className="flex items-center">
        <div className="mr-2">
          <img
            src="./logovirtuospark.svg"
            alt="logo_img"
            className="w-[32px] h-[32px]"
          />
        </div>
        <div>
          <h2 className="text-[32px] font-semibold text-white">
            Virtuospark<span className="text-yellow-500"> .</span>
          </h2>
        </div>
      </div>
      <div className="text-white">
        <ul className="flex items-center h-[100%]">
          {navList.map((value) => (
            <li className="px-3 text-[16px] font-semibold py-2 mx-2 flex items-center">
              <NavLink to={value.link}>{value.name}</NavLink>
              {value.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;