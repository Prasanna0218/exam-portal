import React, { useState } from "react";
import Button from "../commonComponents/Button";
import { motion, AnimatePresence } from "framer-motion";

const AddQuizzes = () => {
  const [file, setFile] = useState();
  const [activeTab, setActiveTab] = useState("manual");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      {/* Heading part */}
      <div>
        <p className="text-[34px] font-semibold mb-3">Add New Quiz</p>
      </div>
      {/* Tabs Section */}
      <div className="flex justify-center items-center mb-5">
        <ul className="flex justify-center border-b border-gray-200 w-[700px]">
          <li>
            <button
              onClick={() => setActiveTab("manual")}
              className={`px-3 py-2 mx-8 text-gray-500 font-semibold ${
                activeTab == "manual"
                  ? "border-b border-red-600 color-primary"
                  : ""
              }`}
            >
              Add Quizzes Manually
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("fileUpload")}
              className={`px-3 py-2 text-gray-500 font-semibold ${
                activeTab == "fileUpload"
                  ? "border-b border-red-600 color-primary"
                  : ""
              }`}
            >
              Upload Questions File
            </button>
          </li>
        </ul>
      </div>
      {/* contents description */}
      <div className="h-[35px] flex items-center justify-center">
        <p className="text-gray-600">
          {activeTab == "manual"
            ? "Create the Quizzes by Entering the details given Below"
            : "Create the Quizzes By uploading the file with Qusetions , Options and Answers"}
        </p>
      </div>
      {/* contents section */}
      <div className="h-[550px] w-[700px]">
        <AnimatePresence mode="wait">
          {activeTab == "manual" ? (
            <motion.div
              key="manual"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <form className="mt-5 flex flex-col w-[100%] justify-center items-center">
                {/* Quiz Title */}
                <div className="flex flex-col mb-4">
                  <label className="text-[17px] font-medium mb-2">
                    Quiz Title:
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter quiz title"
                    className="w-[600px] py-2 px-4 border-2 border-gray-400 rounded-md"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col mb-4">
                  <label className="text-[17px] font-medium mb-2">
                    Description:
                  </label>
                  <textarea
                    name="description"
                    rows={3}
                    placeholder="Enter quiz description"
                    className="w-[600px] py-2 px-4 border-2 border-gray-400 rounded-md resize-none"
                  ></textarea>
                </div>

                {/* Question */}
                <div className="flex flex-col mb-4">
                  <label className="text-[17px] font-medium mb-2">
                    Question:
                  </label>
                  <textarea
                    name="question"
                    rows={3}
                    placeholder="Enter question"
                    className="w-[600px] py-2 px-4 border-2 border-gray-400 rounded-md resize-none"
                  ></textarea>
                </div>

                {/* Options */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {["a", "b", "c", "d"].map((option) => (
                    <div key={option} className="flex flex-col">
                      <label className="text-[16px] font-medium mb-1 capitalize">
                        Option {option.toUpperCase()}:
                      </label>
                      <input
                        type="text"
                        name={option}
                        placeholder={`Enter option ${option.toUpperCase()}`}
                        className="w-[290px] py-2 px-4 border-2 border-gray-400 rounded-md"
                      />
                    </div>
                  ))}
                </div>

                {/* Correct Answer */}
                <div className="flex flex-col mb-4">
                  <label className="text-[17px] font-medium mb-2">
                    Correct Answer:
                  </label>
                  <select
                    name="correctAnswer"
                    className="w-[600px] py-2 px-4 border-2 border-gray-400 rounded-md"
                  >
                    <option value="">Select correct option</option>
                    <option value="a">Option A</option>
                    <option value="b">Option B</option>
                    <option value="c">Option C</option>
                    <option value="d">Option D</option>
                  </select>
                </div>

                {/* Difficulty */}
                <div className="flex flex-col mb-6">
                  <label className="text-[17px] font-medium mb-2">
                    Difficulty:
                  </label>
                  <select
                    name="difficulty"
                    className="w-[600px] py-2 px-4 border-2 border-gray-400 rounded-md"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>

                {/* Submit */}
                <div className="text-center">
                  <Button
                    value="Add Quiz"
                    width="200px"
                    bgColor="bg-primary hover:bg-primary-dark"
                    color="white"
                  />
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="fileUpload"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <form
                action=""
                className="flex flex-col justify-center items-center h-[100%] pt-7"
              >
                <div className="flex flex-col mb-6">
                  <label htmlFor="quizTitle" className="mb-1">
                    Quiz Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the Quiz title here"
                    id="quizTitle"
                    className="py-2 px-12 rounded-md border-2 border-gray-400 w-[500px]"
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <label htmlFor="description" className="mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows={3}
                    placeholder="Enter the description here"
                    className="py-2 px-12 rounded-md border-2 border-gray-400 w-[500px]"
                  ></textarea>
                </div>
                <div className="flex flex-col mb-6">
                  <label htmlFor="difficulty" className="mb-1">
                    Difficulty
                  </label>
                  <select
                    name="difficulty"
                    id="difficulty"
                    className="py-2 px-12 rounded-md border-2 border-gray-400 w-[500px]"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div className="flex flex-col mb-8">
                  <label htmlFor="" className="mb-1">
                    Choose the file
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="py-2 px-12 rounded-md border-2 border-gray-400 w-[500px]"
                  />
                </div>
                <div>
                  <Button
                    value={"Add Quiz"}
                    bgColor={"bg-primary"}
                    color={"white"}
                    width={"200px"}
                  />
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AddQuizzes;
