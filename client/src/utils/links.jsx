import {
  PiUserPlusLight,
  PiUsersThreeLight,
  PiUsersFourLight,
} from "react-icons/pi";

import { BsBarChart } from "react-icons/bs";
import { AiOutlineProfile } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";

const links = [
  {
    text: "add member",
    path: ".",
    icon: <PiUserPlusLight />,
  },
  {
    text: "all members",
    path: "all-members",
    icon: <PiUsersThreeLight />,
  },
  {
    text: "all members-admin",
    path: "all-members-admin",
    icon: <PiUsersFourLight />,
  },

  {
    text: "stats",
    path: "stats",
    icon: <BsBarChart />,
  },
  // {
  //   text: "profile",
  //   path: "profile",
  //   icon: <AiOutlineProfile />,
  // },

  {
    text: "admin",
    path: "admin",
    icon: <MdOutlineAdminPanelSettings />,
  },
];

export default links;
