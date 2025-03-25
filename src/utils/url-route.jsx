const URL = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
  },
  PUBLIC: {
    HOME: "/",
    COURSE_INFO: "/course-info/:idCourse",
    MY_COURSE: "/my-course/learning",
  },
  PRIVATE: {
    HOME: "/learning",
  },
};

export default URL;
