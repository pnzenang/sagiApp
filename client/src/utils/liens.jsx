import {
  FcAbout,
  FcRules,
  FcContacts,
  FcQuestions,
  FcGallery,
  FcServices,
  FcProcess,
  FcBusiness,
  FcConferenceCall,
} from "react-icons/fc";

const liens = [
  { id: 1, text: "mission", path: "/home", icon: <FcServices /> },
  { id: 2, text: "How It Works", path: "how", icon: <FcProcess /> },
  { id: 3, text: "bylaws", path: "bylaws", icon: <FcRules /> },
  { id: 4, text: "F.A.Q.", path: "faq", icon: <FcQuestions /> },
  { id: 5, text: "about us", path: "about", icon: <FcAbout /> },
  // { id: 6, text: "gallery", path: "gallery", icon: <FcGallery /> },
  { id: 7, text: "contacts", path: "contact", icon: <FcContacts /> },
  // { id: 8, text: "our team", path: "team", icon: <FcConferenceCall /> },
];
export default liens;
