// import { Provider } from "react-redux";
// import Body from "./JobPost/components/Body";
// import store from "./JobPost/utils/redux/appStore";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Overview from "./JobPost/components/pages/Overview";
// import Dashboard from "./JobPost/components/Dashboard/Dashboard";
// import MainSetting from "./JobPost/components/pages/settings/MainSetting";
// import Applications from "./JobPost/components/Applications";
// import PostJobForm from "./JobPost/components/PostJobForm";
// import CandidatePool from "../src/JobPost/components/CandidatePool";
// import MainContainer from "./JobPost/components/MainContainer";
// import Header from "./JobPost/Header";
// import Login from "./pages/auth/Login";
// import Layout from "./pages/auth/Layout";
// import ForgetPassword from "./pages/auth/ForgetPassword";
// import ResetPassword from "./pages/auth/ResetPassword";
// import DetailsPage from "./pages/auth/DetailsPage";
// import SavedCandidates from "./JobPost/components/SavedCandidates";
// import PaymentBilling from "./JobPost/components/PaymentBilling";
// import NotFound from "./JobPost/components/pages/ErrorPage";
// import Faqs from "./JobPost/components/Faqs";
// import TermsConditions from "./JobPost/components/TermsConditions";
// import Contact from "./JobPost/components/Contact";
// import TalentPool from "./JobPost/components/TalentPool";
// import ComingSoonPage from "./pages/module/ComingSoonPage";
// import SettingsPage from "./JobPost/components/pages/Mainsetting/Main-setting";
// import MyJobs from "./JobPost/components/pages/Myjobs/Main-my-Jobs";

// const Home = () => (
//   <h1>
//     Home
//     <MainContainer />
//   </h1>
// );
// const FindCandidate = () => <h1>FindCandidate</h1>;

// // const Applications = () => <h1>Applications</h1>;
// const CustomerSupports = () => <h1>CustomerSupports</h1>;

// function App() {
//   return (
//     <>
//       <Provider store={store}>
//         <Router>
//           <Body>
//             <Routes>
//               <Route path="/home" element={<Home />} />
//               <Route path="/find-candidate" element={<FindCandidate />} />
//               <Route path="/dashboard" element={<Dashboard />}>
//                 <Route path="overview" element={<Overview />} />
//                 <Route path="employerprofile" element={<MainSetting />} />
//                 <Route path="main-settings" element={<SettingsPage />} />
//                 <Route path="post-a-job" element={<PostJobForm />} />
//                 <Route path="manage-jobs" element={<CandidatePool />} />
//                 <Route path="saved-candidates" element={<SavedCandidates />} />
//                 <Route path="plans-billing" element={<PaymentBilling />} />
//               </Route>

//               <Route path="/my-jobs" element={<MyJobs />} />

//               <Route path="/applications" element={<Applications />} />
//               <Route path="/customer-supports" element={<CustomerSupports />} />
//               <Route path="/faqs" element={<Faqs />} />
//               <Route path="/termsConditions" element={<TermsConditions />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/talentPool" element={<TalentPool />} />
//               <Route path="/comingSoonPage" element={<ComingSoonPage />} />

//               {/* These are login components.
//                   They are currently commented out due to uncertainty about the routing. */}

//               <Route path="/" element={<Layout />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/forgetPassword" element={<ForgetPassword />} />
//               <Route path="/resetPassword" element={<ResetPassword />} />
//               <Route path="/detailspage" element={<DetailsPage />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </Body>
//         </Router>
//       </Provider>
//     </>
//   );
// }

// export default App;

import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./JobPost/utils/redux/appStore";
import Body from "./JobPost/components/Body";

import Dashboard from "./JobPost/components/Dashboard/Dashboard";
import Overview from "./JobPost/components/pages/Overview";
import MainSetting from "./JobPost/components/pages/settings/MainSetting";
import SettingsPage from "./JobPost/components/pages/Mainsetting/Main-setting";
import PostJobForm from "./JobPost/components/PostJobForm";
import CandidatePool from "./JobPost/components/CandidatePool";
import SavedCandidates from "./JobPost/components/SavedCandidates";
import PaymentBilling from "./JobPost/components/PaymentBilling";
import MyJobs from "./JobPost/components/pages/Myjobs/Main-my-Jobs";
import Applications from "./JobPost/components/Applications";
import Faqs from "./JobPost/components/Faqs";
import TermsConditions from "./JobPost/components/TermsConditions";
import Contact from "./JobPost/components/Contact";
import TalentPool from "./JobPost/components/TalentPool";
import ComingSoonPage from "./pages/module/ComingSoonPage";
import NotFound from "./JobPost/components/pages/ErrorPage";
import Layout from "./pages/auth/Layout";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import DetailsPage from "./pages/auth/DetailsPage";
import ViewApplication from "./JobPost/components/ViewApplication/ViewApplication";
import { ToastContainer } from "react-toastify";
import EmailVerificationSuccessful from "./pages/auth/EmailVerificationSuccessful";
import EmailVerification from "./pages/auth/EmailVerification";
import Signup from "./pages/auth/Signup";
import FindCandidate from "./JobPost/components/Find Candidates/FindCandidate";
import Homepage from "./pages/module/Homepage";
import CustomerSupports from "./JobPost/components/Support/Support";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Body>
            <Routes>
              <Route path="/home" element={<Homepage />} />
              <Route path="/find-candidate" element={<FindCandidate />} />

              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<Overview />} />
                <Route path="overview" element={<Overview />} />

                <Route path="employerprofile" element={<MainSetting />} />
                <Route path="main-settings" element={<SettingsPage />} />
                <Route path="post-a-job" element={<PostJobForm />} />
                <Route path="manage-jobs" element={<CandidatePool />} />
                <Route path="saved-candidates" element={<SavedCandidates />} />
                <Route path="plans-billing" element={<PaymentBilling />} />
              </Route>
              <Route path="viewapplication" element={<ViewApplication />} />
              <Route path="/my-jobs" element={<MyJobs />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/customer-supports" element={<CustomerSupports />} />
              {/* Static Pages */}
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/talent-pool" element={<TalentPool />} />
              <Route path="/coming-soon" element={<ComingSoonPage />} />
              {/* Authentication Routes */}
              {/* <Route path="/" element={<Layout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="details" element={<DetailsPage />} />
            </Route> */}
              <Route path="/" element={<Login />} />
              <Route
                path="/emailVerification/:token"
                element={<EmailVerification />}
              />
              <Route
                path="/emailVerificationSuccessful"
                element={<EmailVerificationSuccessful />}
              />

              <Route path="/signup" element={<Signup />} />
              <Route path="/forgetPassword" element={<ForgetPassword />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/detailspage" element={<DetailsPage />} />

              {/* Catch-All Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Body>
        </Router>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
