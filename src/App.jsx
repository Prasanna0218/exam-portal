import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SignInPage from "./pages/SignInPage";
import Navbar from "./components/commonComponents/Navbar";
import SideNavbar from "./components/commonComponents/SideNavbar";
import DashboardLayout from "./layouts/DashboardLayout";
import AddCategory from "./components/addcategoryComponents/AddCategory";
import AddQuizzes from "./components/addquizzesComponents/AddQuizzes";
import InviteUsers from "./components/inviteusersComponents/InviteUsers";
import AddQuizPage from "./pages/AddQuizPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SignInPage />} path="/" />
          {/* Add category */}
          <Route
            element={
              <DashboardLayout>
                <AddCategory />
              </DashboardLayout>
            }
            path="/addCategory"
          />
          {/* Add Quizzes */}
          <Route
            element={
              <DashboardLayout>
                <AddQuizPage/>
              </DashboardLayout>
            }
            path="/addQuiz"
          />
          {/* Invite users */}
          <Route
            element={
              <DashboardLayout>
                <InviteUsers />
              </DashboardLayout>
            }
            path="/inviteUsers"
          />
          {/* Profile */}
          <Route
          element={
            <DashboardLayout>
              <ProfilePage/>
            </DashboardLayout>
          }
          path="/profile"
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
