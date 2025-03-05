import { GoStack, GoBriefcase, GoSignOut } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { CiCirclePlus, CiBookmark, CiGlobe } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUserList, PiNotebookLight, PiGearSix } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";
import CompanyInfo from "../components/pages/settings/CompanyInfo";
import FoundingInfo from "../components/pages/settings/FoundingInfo";
import SocialMedia from "../components/pages/settings/SocialMedia";
import AccountSetting from "../components/pages/settings/AccountSetting";

export const sidebarItem = [
  {
    id: 1,
    name: "Overview",
    icon: <GoStack />,
    path: "/dashboard/overview"
  },
  {
    id: 2,
    name: "Employer Profile",
    icon: <FaRegUserCircle />,
    path: "/dashboard/employerprofile"
  },
  {
    id: 3,
    name: "Post a Job",
    icon: <CiCirclePlus />,
    path: "/dashboard/post-a-job"
  },
  {
    id: 4,
    name: "Manage Job",
    icon: <GoBriefcase />,
    path: "/dashboard/manage-jobs"
  },
  {
    id: 5,
    name: "Saved Candidates",
    icon: <CiBookmark />,
    path: "/dashboard/saved-candidates"
  },
  {
    id: 6,
    name: "Plans and Billing",
    icon: <PiNotebookLight />,
    path: "/dashboard/plans-billing"
  },
  {
    id: 7,
    name: "All Companies",
    icon: <PiUserList />,
    path: "/dashboard/all-companies"
  },
  {
    id: 8,
    name: "Settings",
    icon: <IoSettingsOutline />,
    path: "dashboard/main-settings"
  }
  // {
  //     id: 9,
  //     name: 'Logout',
  //     icon:  <GoSignOut />,
  // },
];

// Setting Items for navigation
export const settingNavItems = [
  {
    id: 1,
    name: "Company Info",
    icon: <LuUserRound />,
    component: <CompanyInfo />
  },
  {
    id: 2,
    name: "Founding Info",
    icon: <FaRegUserCircle />,
    component: <FoundingInfo />
  },
  {
    id: 3,
    name: "Social Media Profile",
    icon: <CiGlobe />,
    component: <SocialMedia />
  },
  {
    id: 4,
    name: "Accounting Setting",
    icon: <PiGearSix />,
    component: <AccountSetting />
  }
];
