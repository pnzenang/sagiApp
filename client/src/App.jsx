import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Landing,
  Register,
  Login,
  DashboardLayout,
  HomeLayout,
  Error,
  AddMember,
  Stats,
  AllMembers,
  AllMembersAdmin,
  // Profile,
  Admin,
  EditMember,
  WindowLayout,
  How,
  About,
  ByLaws,
  Contacts,
  FAQ,
  Mission,
  Gallery,
  Team,
  ForgotPassword,
  ResetPassword,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as forgotPasswordAction } from "./pages/ForgotPassword";
import { action as resetPasswordAction } from "./pages/ResetPassword";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { action as addMemberAction } from "./pages/AddMember";
import { loader as allMembersLoader } from "./pages/AllMembers";
import { loader as allMembersAdminLoader } from "./pages/AllMembersAdmin";
import { loader as editMemberLoader } from "./pages/EditMember";
import { action as editMemberAction } from "./pages/EditMember";
import { action as deleteMemberAction } from "./pages/DeleteMember";
import { loader as adminLoader } from "./pages/Admin";
// import { action as profileAction } from "./pages/Profile";
import { loader as statsLoader } from "./pages/Stats";
import ErrorElement from "./components/ErrorElement";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <WindowLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction(queryClient),
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
        action: forgotPasswordAction,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
        action: resetPasswordAction,
      },
      {
        path: "home",
        element: (
          <HomeLayout
            isDarkThemeEnabled={isDarkThemeEnabled}
            // queryClient={queryClient}
          />
        ),
        // loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <Mission />,
            // action: addMemberAction(queryClient),
          },
          {
            path: "about",
            element: <About />,
            // loader: statsLoader(queryClient),
            // errorElement: <ErrorElement />,
          },
          {
            path: "how",
            element: <How />,
            // loader: allMembersLoader(queryClient),
            // errorElement: <ErrorElement />,
          },
          {
            path: "bylaws",
            element: <ByLaws />,
            // action: profileAction(queryClient),
          },
          {
            path: "faq",
            element: <FAQ />,
            // loader: adminLoader,
          },
          {
            path: "contact",
            element: <Contacts />,
            // loader: editMemberLoader(queryClient),
            // action: editMemberAction(queryClient),
          },
          {
            path: "gallery",
            element: <Gallery />,
            // loader: editMemberLoader(queryClient),
            // action: editMemberAction(queryClient),
          },
          {
            path: "team",
            element: <Team />,
            // loader: editMemberLoader(queryClient),
            // action: editMemberAction(queryClient),
          },
          // {
          //   path: "register",
          //   element: <Register />,
          //   action: registerAction,
          // },
        ],
      },
      {
        path: "dashboard",
        element: (
          <DashboardLayout
            isDarkThemeEnabled={isDarkThemeEnabled}
            queryClient={queryClient}
          />
        ),
        loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <AddMember />,
            action: addMemberAction(queryClient),
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: "all-members",
            element: <AllMembers />,
            loader: allMembersLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: "all-members-admin",
            element: <AllMembersAdmin />,
            loader: allMembersAdminLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          // {
          //   path: "profile",
          //   element: <Profile />,
          //   action: profileAction(queryClient),
          // },

          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "edit-member/:id",
            element: <EditMember />,
            loader: editMemberLoader(queryClient),
            action: editMemberAction(queryClient),
          },
          {
            path: "delete-member/:id",
            action: deleteMemberAction(queryClient),
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
