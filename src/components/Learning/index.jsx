import React, { useEffect, useState } from "react";
import { Progress, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import styles from "./Learning.module.scss";
import { Collapse } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { FaTv } from "react-icons/fa";
import classNames from "classnames";
const items = [
  {
    key: "1",
    label: (
      <div className={styles.container_learning__section__lesson__title}>
        <strong
          className={styles.container_learning__section__lesson__title_part}>
          Phần 1: Giới thiệu về Python và các cú pháp cơ bản
        </strong>
        <div className={styles.container_learning__section__lesson__title_more}>
          <p
            className={
              styles.container_learning__section__lesson__title_quantity_lesson
            }>
            3/3
          </p>{" "}
          |{" "}
          <p className={styles.container_learning__section__lesson__title_time}>
            1 giờ 20 phút
          </p>
        </div>
      </div>
    ),
    children: (
      <div className={styles.container_learning__section__lesson__lecture}>
        <input type="checkbox" name="" id="" />
        <div
          className={
            styles.container_learning__section__lesson__lecture__content
          }>
          <p
            className={
              styles.container_learning__section__lesson__lecture__name
            }>
            Bài 1: Giới thiệu về Python
          </p>
          <div
            className={
              styles.container_learning__section__lesson__lecture__content__time
            }>
            <FaTv />
            <p>1 giờ 20 phút</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className={styles.container_learning__section__lesson__title}>
        <strong
          className={styles.container_learning__section__lesson__title_part}>
          Phần 1: Giới thiệu về Python và các cú pháp cơ bản
        </strong>
        <div className={styles.container_learning__section__lesson__title_more}>
          <p
            className={
              styles.container_learning__section__lesson__title_quantity_lesson
            }>
            3/3
          </p>{" "}
          |{" "}
          <p className={styles.container_learning__section__lesson__title_time}>
            1 giờ 20 phút
          </p>
        </div>
      </div>
    ),
    children: (
      <div className={styles.container_learning__section__lesson__lecture}>
        <input type="checkbox" name="" id="" />
        <div
          className={
            styles.container_learning__section__lesson__lecture__content
          }>
          <p
            className={
              styles.container_learning__section__lesson__lecture__name
            }>
            Bài 1: Giới thiệu về Python
          </p>
          <div
            className={
              styles.container_learning__section__lesson__lecture__content__time
            }>
            <FaTv />
            <p>1 giờ 20 phút</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className={styles.container_learning__section__lesson__title}>
        <strong
          className={styles.container_learning__section__lesson__title_part}>
          Phần 1: Giới thiệu về Python và các cú pháp cơ bản
        </strong>
        <div className={styles.container_learning__section__lesson__title_more}>
          <p
            className={
              styles.container_learning__section__lesson__title_quantity_lesson
            }>
            3/3
          </p>{" "}
          |{" "}
          <p className={styles.container_learning__section__lesson__title_time}>
            1 giờ 20 phút
          </p>
        </div>
      </div>
    ),
    children: (
      <div className={styles.container_learning__section__lesson__lecture}>
        <input type="checkbox" name="" id="" />
        <div
          className={
            styles.container_learning__section__lesson__lecture__content
          }>
          <p
            className={
              styles.container_learning__section__lesson__lecture__name
            }>
            Bài 1: Giới thiệu về Python
          </p>
          <div
            className={
              styles.container_learning__section__lesson__lecture__content__time
            }>
            <FaTv />
            <p>1 giờ 20 phút</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "1",
    label: (
      <div className={styles.container_learning__section__lesson__title}>
        <strong
          className={styles.container_learning__section__lesson__title_part}>
          Phần 1: Giới thiệu về Python và các cú pháp cơ bản
        </strong>
        <div className={styles.container_learning__section__lesson__title_more}>
          <p
            className={
              styles.container_learning__section__lesson__title_quantity_lesson
            }>
            3/3
          </p>{" "}
          |{" "}
          <p className={styles.container_learning__section__lesson__title_time}>
            1 giờ 20 phút
          </p>
        </div>
      </div>
    ),
    children: (
      <div className={styles.container_learning__section__lesson__lecture}>
        <input type="checkbox" name="" id="" />
        <div
          className={
            styles.container_learning__section__lesson__lecture__content
          }>
          <p
            className={
              styles.container_learning__section__lesson__lecture__name
            }>
            Bài 1: Giới thiệu về Python
          </p>
          <div
            className={
              styles.container_learning__section__lesson__lecture__content__time
            }>
            <FaTv />
            <p>1 giờ 20 phút</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className={styles.container_learning__section__lesson__title}>
        <strong
          className={styles.container_learning__section__lesson__title_part}>
          Phần 1: Giới thiệu về Python và các cú pháp cơ bản
        </strong>
        <div className={styles.container_learning__section__lesson__title_more}>
          <p
            className={
              styles.container_learning__section__lesson__title_quantity_lesson
            }>
            3/3
          </p>{" "}
          |{" "}
          <p className={styles.container_learning__section__lesson__title_time}>
            1 giờ 20 phút
          </p>
        </div>
      </div>
    ),
    children: (
      <div className={styles.container_learning__section__lesson__lecture}>
        <input type="checkbox" name="" id="" />
        <div
          className={
            styles.container_learning__section__lesson__lecture__content
          }>
          <p
            className={
              styles.container_learning__section__lesson__lecture__name
            }>
            Bài 1: Giới thiệu về Python
          </p>
          <div
            className={
              styles.container_learning__section__lesson__lecture__content__time
            }>
            <FaTv />
            <p>1 giờ 20 phút</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className={styles.container_learning__section__lesson__title}>
        <strong
          className={styles.container_learning__section__lesson__title_part}>
          Phần 1: Giới thiệu về Python và các cú pháp cơ bản
        </strong>
        <div className={styles.container_learning__section__lesson__title_more}>
          <p
            className={
              styles.container_learning__section__lesson__title_quantity_lesson
            }>
            3/3
          </p>{" "}
          |{" "}
          <p className={styles.container_learning__section__lesson__title_time}>
            1 giờ 20 phút
          </p>
        </div>
      </div>
    ),
    children: (
      <div className={styles.container_learning__section__lesson__lecture}>
        <input type="checkbox" name="" id="" />
        <div
          className={
            styles.container_learning__section__lesson__lecture__content
          }>
          <p
            className={
              styles.container_learning__section__lesson__lecture__name
            }>
            Bài 1: Giới thiệu về Python
          </p>
          <div
            className={
              styles.container_learning__section__lesson__lecture__content__time
            }>
            <FaTv />
            <p>1 giờ 20 phút</p>
          </div>
        </div>
      </div>
    ),
  },
];

function Learning() {
  const [activeCloseLesson, setActiveCloseLesson] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  });

  const onChange = (key) => {
    console.log(key);
  };

  const handleCloseCourseLesson = () => {
    if (!activeCloseLesson) {
      document
        .querySelector(".container_learning__section")
        .setAttribute("style", "min-width: 0;");
      document
        .querySelector(".view_video")
        .setAttribute("style", "width: 100%;");
    } else {
      document
        .querySelector(".config_layout")
        .setAttribute("style", "grid-template-columns: 3.5fr 1fr;");
    }
    setActiveCloseLesson(!activeCloseLesson);
  };

  return (
    <main className={styles.container_learning}>
      <header className={styles.container_learning__header}>
        <div className={styles.container_learning__header__left}>
          <Link to="/">
            <img
              className={styles.container_learning__header__left__img}
              src="https://i.ibb.co/SDKsGrdF/logo-removebg-preview.png"
              alt="logo"
            />
          </Link>
          <p className={styles.container_learning__header__left__name_course}>
            Vỡ lòng về Python - từ cơ bản đến xử lý ảnh, xử lý dữ liệu
          </p>
        </div>
        <div className={styles.container_learning__header__right}>
          <span
            className={
              styles.container_learning__header__right__progress__name
            }>
            Tiến độ học của bạn
          </span>
          <Tooltip title="Đã hoàn thành 60% khóa học">
            <Progress
              size={55}
              type="circle"
              percent={60}
              className={styles.container_learning__header__right__progress}
            />
          </Tooltip>
        </div>
      </header>
      <div
        className={classNames(
          styles.container_learning__content,
          "config_layout"
        )}>
        <div
          className={classNames(
            styles.container_learning__data_course,
            "view_video"
          )}></div>

        {activeCloseLesson ? (
          <button
            style={{ position: "absolute", right: "10px" }}
            onClick={handleCloseCourseLesson}>
            Mo
          </button>
        ) : (
          <div
            className={classNames(
              styles.container_learning__section,
              "container_learning__section"
            )}>
            <div className={styles.container_learning__section__header}>
              <h1 className={styles.container_learning__section__title}>
                Nội dung khóa học
              </h1>
              <IoMdClose onClick={handleCloseCourseLesson} />
            </div>
            <div className={styles.container_learning__content__wrap}>
              <Collapse
                className={styles.container_learning__section__lesson}
                items={items}
                defaultActiveKey={["1"]}
                onChange={onChange}
                expandIconPosition={"right"}
                expandIcon={({ isActive }) => (
                  <RightOutlined
                    style={{ fontSize: "16px", marginTop: "5px" }}
                    rotate={isActive ? 90 : 0}
                  />
                )}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Learning;
