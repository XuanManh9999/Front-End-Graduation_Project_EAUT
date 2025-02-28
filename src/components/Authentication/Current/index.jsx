import React, { useState } from "react";
import styles from "./Current.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Progress } from "antd";
import { MdOutlinePlayCircle } from "react-icons/md";
import CarouselProduct from "../../share/CarouselProduct";
import CourseProductList from "../../share/CourseProductList";

function Current() {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);

  // Tách thành component riêng để dễ quản lý
  const LearningItem = ({ course }) => (
    <div className={styles.learning_item}>
      <div className={styles.learning_item__left}>
        <img src={course.thumbnail} alt={course.title} />
        <div className={styles.overlay}></div>
        <MdOutlinePlayCircle className={styles.icon_play} />
      </div>
      <div className={styles.learning_item__right}>
        <div className={styles.learning_item__content}>
          <strong className={styles.course_name}>{course.title}</strong>
          <p className={styles.lesson_title}>{course.lessonTitle}</p>
        </div>
        <div className={styles.learning_item__progress}>
          <p>
            <strong>{course.remainingTime}</strong>
          </p>
          <Progress percent={course.progress} />
        </div>
      </div>
    </div>
  );

  const LoggedInView = () => (
    <div className={styles.dashboard}>
      <div className={styles.welcome_section}>
        <img
          src="https://img-c.udemycdn.com/user/100x100/285978675_5cf5.jpg"
          alt="avatar"
          className={styles.avatar}
        />
        <div className={styles.welcome_text}>
          <h2>Chào mừng Nguyễn Xuân Mạnh trở lại!</h2>
          <span>Lập trình viên web</span>
        </div>
      </div>

      <div className={styles.learning_section}>
        <div className={styles.section_header}>
          <h2>Hãy bắt đầu học nào</h2>
          <Link to="/learning" className="section_header__learn">
            Học tập
          </Link>
        </div>

        <div className={styles.learning_list}>
          {/* Giả sử có một mảng courses chứa thông tin khóa học */}
          {[1, 2, 3, 4].map((_, index) => (
            <LearningItem
              key={index}
              course={{
                thumbnail:
                  "https://mp4-c.udemycdn.com/2023-07-30_13-22-08-da37812567f99dad42c0317fc3bef669/2/thumb-1.jpg?Expires=1739726447&Signature=lbTJI7DLv8bfBWAv3n2ic8UgcFK3z0ATGrCYP1Q7K~dnEeNCBPrO69y79t3CMgCow8O59dAC~1aPeWYlLpNZ~Bz5q6I8OvSs~8fuygV12QfZZyBkJeYFKg081HvhEiAiIR-ej5fUMDgf2Zjhb0KdP66GVoVazgJMITuGtUEgmPpJKLDaalqlcMLJSC-LmTPgK7UYo09kZCV4TVtq91dBsOnyGB-ZhWz~GS0tF~BckhrGKoF~Ip0MkFuI7HPfVMo~DmXFHs0KW78P3WGT5E3aN9EYx1Se4O5AXgFaKEKvRGMMYps2ty~mr7DcJNNS2sWZ-AExZCXBXDQc0DZMXN0nGg__&Key-Pair-Id=K3MG148K9RIRF4",
                title: "Thực chiến microservice với Spring Boot",
                lessonTitle: "3. 25 phút hiểu rõ về Micro service",
                remainingTime: "Bài giảng: còn 25 phút",
                progress: 0,
              }}
            />
          ))}
        </div>
      </div>

      <CarouselProduct />
      <CarouselProduct title="Phổ biến cho lập trình web" />
      <CourseProductList />
    </div>
  );

  return (
    <>
      {isLogin ? (
        <LoggedInView />
      ) : (
        <div className={styles.home_page_not__login}>
          <img
            className={styles.home_page_not__login_img}
            src="https://s.udemycdn.com/mobile/default-banner-desktop-1x.jpg"
            alt="img"
          />

          <div className={styles.home_page_not__login__sale}>
            <h1 className={styles.home_page_not__login__title}>
              {t("curr_home_non_login__title")}
            </h1>
            <ul className={styles.home_page_not__login__outstanding}>
              <li className={styles.home_page_not__login__item}>
                {t("curr_home_non_login_op1")}
              </li>
              <li className={styles.home_page_not__login__item}>
                {t("curr_home_non_login_op2")}
              </li>
              <li className={styles.home_page_not__login__item}>
                {t("curr_home_non_login_op3")}
              </li>
              <li className={styles.home_page_not__login__item}>
                {t("curr_home_non_login_op4")}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Current;
