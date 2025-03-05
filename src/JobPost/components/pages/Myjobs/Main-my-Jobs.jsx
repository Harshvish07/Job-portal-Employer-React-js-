// import React from "react";
// import MyJobsSearchBar from "./MyJobsSearchBar";
// import Myjobs from "./MyJobs";

// function MyJobs() {
//   return (
//     <div>
//       <MyJobsSearchBar />
//       <Myjobs />
//     </div>
//   );
// }

// export default MyJobs;

import React from "react";
import MyJobsSearchBar from "./MyJobsSearchBar";
import Myjobs from "./MyJobs";

function MyJobsPage() {
  return (
    <div className="no-header-sidebar  p-4">
      <MyJobsSearchBar />
      <Myjobs />
    </div>
  );
}

export default MyJobsPage;
