import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  FolderPlus,
  ListChecks,
  ListPlus,
  ClipboardList,
  Trophy,
  CircleUserRound,
  UserPlus,
} from "lucide-react";

const SideNavbar = () => {
  const [role, setRole] = useState("ADMIN");
  const [navList, setNavList] = useState([]);

  const adminNavList = [
    {
      name: "Categories",
      link: "/categories",
      icon: <LayoutGrid className="me-4" size={"20px"} />,
    },
    {
      name: "Add Category",
      link: "/addCategory",
      icon: <FolderPlus className="me-4" size={"20px"} />,
    },
    {
      name: "Quizzes",
      link: "/quizzes",
      icon: <ListChecks className="me-4" size={"20px"} />,
    },
    {
      name: "Add Quiz",
      link: "/addQuiz",
      icon: <ListPlus className="me-4" size={"20px"} />,
    },
    {
      name: "Invite Users",
      link: "/inviteUsers",
      icon: <UserPlus className="me-4" size={"20px"} />,
    },
  ];

  const userNavlist = [
    {
      name: "Tests",
      link: "/tests",
      icon: <ClipboardList className="me-4" size={"20px"} />,
    },
    {
      name: "Result",
      link: "/results",
      icon: <Trophy className="me-5" size={"20px"} />,
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
    <div className="bg-primary w-[18vw] h-screen flex flex-col Justify-center bg-gradient-to-b from-red-700 via-red-800 to-red-900">
      {/* logo */}
      <div className="flex items-center justify-center h-[15%] pt-8">
        <div className="mr-2">
          <img
            src="./logovirtuospark.svg"
            alt="logo_img"
            className="w-[32px] h-[32px]"
          />
        </div>
        <div>
          <h2 className="text-[30px] font-semibold text-white">
            Virtuospark<span className="text-yellow-500"> .</span>
          </h2>
        </div>
      </div>
      {/* Navlists */}
      <div className="text-white h-[53%]">
        <ul className="flex flex-col justify-start items-center h-[100%] py-2">
          {navList.map((value) => (
            <li className="text-[16px] font-semibold py-2 my-2 flex items-center justify-end w-[100%] ">
              <div className="flex justify-start w-[80%]">
                {value.icon}
                <NavLink to={value.link}>{value.name}</NavLink>
              </div>
            </li>
          ))}
          <li className="text-[16px] font-semibold py-2 my-2 flex items-center justify-end w-[100%] ">
            <div className="flex justify-start w-[80%]">
              <CircleUserRound className="me-4" size={"20px"} />
              <NavLink to="/profile">Profile</NavLink>
            </div>
          </li>
        </ul>
      </div>
      {/* Navfooter  */}
      <div className=" flex flex-col justify-top items-center h-[32%] pt-3 me-5">
        <div className="mb-4">
          <img
            src="./virtuonavimg.svg"
            alt="/navbar-img"
            className="h-[140px] w-[140px]"
          />
        </div>
        <div>
          <p className="text-[17px] font-semibold text-white cursor-pointer py-2 px-3 bg-red-600 rounded-md">
            About us ?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;