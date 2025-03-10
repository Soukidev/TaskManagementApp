export default function Features() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Task Management <span className="text-purple-600">Simplified</span>
          </h2>
          <p className="text-gray-600 sm:text-xl">
            Our intuitive platform helps you organize, prioritize, and complete work efficiently, 
            boosting productivity across your entire team.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-purple-100 lg:h-12 lg:w-12">
              <svg
                className="w-5 h-5 text-purple-600 lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Task Tracking</h3>
            <p className="mb-4 text-gray-600">
              Create, assign, and track tasks with ease. Set deadlines, add descriptions, and monitor progress.
            </p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
              Explore
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
              <svg
                className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Team Collaboration</h3>
            <p className="mb-4 text-gray-600">
              Collaborate seamlessly with your team. Share tasks, provide feedback, and keep everyone aligned.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Explore
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-100 lg:h-12 lg:w-12">
              <svg
                className="w-5 h-5 text-indigo-600 lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Workflow Automation
            </h3>
            <p className="mb-4 text-gray-600">
              Automate repetitive tasks and set up custom workflows that help your team focus on what matters most.
            </p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
              Explore
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12">
              <svg
                className="w-5 h-5 text-green-600 lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Time Tracking</h3>
            <p className="mb-4 text-gray-600">
              Track time spent on tasks, analyze productivity patterns, and generate detailed efficiency reports.
            </p>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
              Explore
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-amber-100 lg:h-12 lg:w-12">
              <svg
                className="w-5 h-5 text-amber-600 lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Project Templates
            </h3>
            <p className="mb-4 text-gray-600">
              Get started quickly with customizable templates designed for different workflows and team sizes.
            </p>
            <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition duration-300">
              Explore
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-purple-100 lg:h-12 lg:w-12">
              <svg
                className="w-5 h-5 text-purple-600 lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Customization</h3>
            <p className="mb-4 text-gray-600">
              Tailor your task management experience with custom fields, labels, and views to match your workflow.
            </p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}