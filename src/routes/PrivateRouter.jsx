import Learning from "../components/Learning";
import URL from "../utils/url-route";
const privateRoutes = [
  {
    path: URL.PRIVATE.HOME,
    element: <Learning />,
  },
];

export default privateRoutes;
