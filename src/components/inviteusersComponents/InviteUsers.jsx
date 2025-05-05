// import React, { useState } from "react";

// const InviteUsers = () => {
//   const [singleEmail, setSingleEmail] = useState("");
//   const [emails, setEmails] = useState("");
//   const [message, setMessage] = useState("");

//   const handleAddEmail = () => {
//     if (singleEmail.trim() !== "") {
//       setEmails((prev) => (prev ? `${prev}, ${singleEmail}` : singleEmail));
//       setSingleEmail("");
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const text = event.target.result;
//       setEmails((prev) => (prev ? `${prev}, ${text}` : text));
//     };
//     reader.readAsText(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Emails:", emails);
//     console.log("Message:", message);
//     alert("Invites sent successfully!");
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Invite Users</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">

//         {/* Single Email Input */}
//         <div className="flex items-center space-x-2">
//           <input
//             type="email"
//             value={singleEmail}
//             onChange={(e) => setSingleEmail(e.target.value)}
//             placeholder="Enter single email"
//             className="flex-1 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="button"
//             onClick={handleAddEmail}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Add
//           </button>
//         </div>

//         {/* Textarea Showing All Emails */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Email List
//           </label>
//           <textarea
//             className="w-full border border-gray-300 rounded p-2"
//             rows="4"
//             value={emails}
//             readOnly
//           />
//         </div>

//         {/* File Upload */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Or Upload Email List File
//           </label>
//           <input
//             type="file"
//             accept=".txt,.csv"
//             onChange={handleFileChange}
//             className="block w-full text-sm text-gray-600"
//           />
//         </div>

//         {/* Message Box */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Custom Message
//           </label>
//           <textarea
//             className="w-full border border-gray-300 rounded p-2"
//             rows="3"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Enter your message..."
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//         >
//           Send Invite
//         </button>
//       </form>
//     </div>
//   );
// };

// export default InviteUsers;

import React, { useState } from 'react';

const InviteUsers = () => {
  const [activeTab, setActiveTab] = useState('manual');

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'manual'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('manual')}
          >
            Manual Entry
          </button>
          <button
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'upload'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('upload')}
          >
            Upload File
          </button>
          <button
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'message'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('message')}
          >
            Custom Message
          </button>
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'manual' && (
          <div>
            {/* Manual Entry Form */}
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        )}
        {activeTab === 'upload' && (
          <div>
            {/* File Upload Form */}
            <input
              type="file"
              accept=".csv, .txt"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        )}
        {activeTab === 'message' && (
          <div>
            {/* Custom Message Form */}
            <textarea
              placeholder="Enter your message"
              className="w-full border border-gray-300 p-2 rounded"
              rows="4"
            ></textarea>
          </div>
        )}
      </div>
    </div>
  );
};

export default InviteUsers;
