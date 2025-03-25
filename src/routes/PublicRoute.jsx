import URL from "../utils/url-route";

import Main from "../components/share/Main";
import Login from "../components/Authentication/Login";
import Current from "../components/Authentication/Current";
import Register from "../components/Authentication/Register";
import ForgotPassword from "../components/Authentication/ForgotPassword";
import OverviewCourse from "../components/OverviewCourse";
import MyCourse from "../components/MyCourse/index";

const publicRoutes = [
  {
    path: URL.PUBLIC.HOME,
    element: <Main />,
    children: [
      {
        index: true,
        element: <Current />,
      },
      {
        path: URL.AUTH.LOGIN,
        element: <Login />,
      },
      {
        path: URL.AUTH.REGISTER,
        element: <Register />,
      },
      {
        path: URL.AUTH.FORGOT_PASSWORD,
        element: <ForgotPassword />,
      },
      {
        path: URL.PUBLIC.COURSE_INFO,
        element: <OverviewCourse />,
      },
      {
        path: URL.PUBLIC.MY_COURSE,
        element: <MyCourse />,
      },
    ],
  },
];

export default publicRoutes;
