import React from "react";
import MyJobsSearchBar from "./MyJobsSearchBar";
import Myjobs from "./MyJobs";
import MainHeader from "../../header/MainHeader";

function MyJobsPage() {
  return (
    <div className=" ">
      <MainHeader />

      <MyJobsSearchBar />
      <div className="container mx-auto mt-2 px-4 flex justify-center">
        <div className="w-full max-w-5xl   p-6">
          <Myjobs />
        </div>
      </div>
    </div>
  );
}

export default MyJobsPage;

// import React from "react";
// import MyJobsSearchBar from "./MyJobsSearchBar";
// import MyJobs from "./MyJobs";
// import MainHeader from "../../header/MainHeader";

// function MyJobsPage() {
//   return (
//     <div className="w-full bg-gray-100">
//       {/* Main Navigation Header */}
//       <MainHeader />

//       {/* Search Bar Section */}
//       <div className=" w-full mx-auto px-4">
//         <MyJobsSearchBar />
//       </div>

//       {/* Jobs List Section */}
//       <div className="container mx-auto mt-8 px-4 flex justify-center">
//         <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
//           <MyJobs />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyJobsPage;
