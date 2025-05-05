import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl">
        {/* Profile Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
          />
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-500">Student | B.Sc Computer Science</p>
            <p className="text-sm text-gray-400 mt-1">johndoe@example.com</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="bg-blue-50 p-5 rounded-lg text-center shadow-sm">
            <p className="text-gray-600">Exams Attempted</p>
            <h3 className="text-2xl font-bold text-blue-600">12</h3>
          </div>
          <div className="bg-green-50 p-5 rounded-lg text-center shadow-sm">
            <p className="text-gray-600">Exams Passed</p>
            <h3 className="text-2xl font-bold text-green-600">10</h3>
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg text-center shadow-sm">
            <p className="text-gray-600">Avg. Score</p>
            <h3 className="text-2xl font-bold text-yellow-600">87%</h3>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center md:justify-end mt-8 space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md">
            Edit Profile
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
