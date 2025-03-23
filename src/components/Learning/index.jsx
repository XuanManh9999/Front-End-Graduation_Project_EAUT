import React, { useEffect, useState } from "react";
import { Progress, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import styles from "./Learning.module.scss";
import { Collapse, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { FaTv, FaCode } from "react-icons/fa";
import classNames from "classnames";
import { FaArrowLeftLong, FaRegCircleQuestion, FaPlay } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import CodeBlock from "../share/CodeBlock";
import CodeEditor from "../share/CodeEditor";
import { runCode } from "../../services/learning";
import QuestionListExam from "../share/QuestionListExam";
import { fireConfetti } from "../../utils/confetti";

const sections = [
  {
    id: 1,
    title: "Phần 1: Giới thiệu Python",
    lessons: [
      {
        id: 101,
        name: "Bài 1: Giới thiệu Python",
        duration: "10 phút",
        video: 1,
        code: 0,
        quiz: 0,
      },
      {
        id: 102,
        name: "Bài 2: Trắc nghiệm về kiểu dữ liệu",
        duration: "15 phút",
        video: 0,
        code: 0,
        quiz: 1,
      },
      {
        id: 103,
        name: "Bài 3: Thực hành về khai báo biến",
        duration: "15 phút",
        video: 0,
        code: 1,
        quiz: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Phần 2: Cấu trúc điều khiển",
    lessons: [{ id: 201, name: "Câu lệnh if else", duration: "8 phút" }],
  },
];

function Learning() {
  const [configShowHide, setConfigShowHide] = useState({
    activeCloseLesson: false,
    isShowQuestion: false,
    activeLesson: null,
    activeLessonCode: true,
  });

  const [configLoadding, setConfigLoadding] = useState({
    isLoaddingRunCode: false,
  });

  const [code, setCode] = useState("");
  const [languageActive, setLanguageActive] = useState("python");
  const [responseCode, setResponseCode] = useState(null);

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
    if (!configShowHide.activeCloseLesson) {
      document
        .querySelector(".config_layout")
        ?.setAttribute("style", "display: unset;");
    } else {
      document
        .querySelector(".config_layout")
        ?.setAttribute("style", "display: grid;");
      document.querySelector(".config_layout");
    }

    setConfigShowHide((prev) => ({
      ...prev,
      activeCloseLesson: !configShowHide.activeCloseLesson,
    }));
  };

  const handleOnMouseEnter = () => {
    document
      .querySelector(".container_learning__content__course_more__active")
      .setAttribute("style", "transform: translateX(10px);");
  };

  const handleOnMouseLeave = () => {
    document
      .querySelector(".container_learning__content__course_more__active")
      .setAttribute("style", "transform: translateX(170px);");
  };

  const handleViewLessonActive = (id) => {
    setConfigShowHide((prev) => ({
      ...prev,
      activeLesson: id,
    }));
  };

  const handleSubmitCode = async () => {
    setConfigLoadding((prev) => ({
      ...prev,
      isLoaddingRunCode: true,
    }));
    const response = await runCode(languageActive, code);
    setConfigLoadding((prev) => ({
      ...prev,
      isLoaddingRunCode: false,
    }));
    setResponseCode(
      response?.run?.stdout == ""
        ? response?.run?.stderr
        : response?.run?.stdout
    );
  };

  const handleSubmidQuestion = () => {
    fireConfetti();
  };

  return (
    <main className={styles.container_learning}>
      <header className={styles.container_learning__header}>
        <div className={classNames(styles.container_learning__header__left)}>
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
              strokeColor="var(--primary-color)"
              strokeWidth={12}
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
        {/* left */}
        <div className={classNames(styles.container_learning__data_course)}>
          {configShowHide.isShowQuestion && (
            <div
              className={classNames(
                styles.container_learning__data_course__container
              )}>
              <h1
                className={classNames(
                  styles.container_learning__data_course__title
                )}>
                Ôn tập hiển thị ảnh dự phòng khi ảnh chính lỗi
              </h1>
              <span
                className={classNames(
                  styles.container_learning__data_course__update_at
                )}>
                Cập nhật tháng 6 năm 2022
              </span>
              <div
                className={classNames(
                  styles.container_learning__data_course__question
                )}>
                <p
                  className={classNames(
                    styles.container_learning__data_course__question__name
                  )}>
                  Nên dùng thuộc tính nào để hiển thị ảnh dự phòng khi ảnh chính
                  bị lỗi?
                </p>

                <div
                  className={classNames(
                    styles.container_learning__data_course__question__data
                  )}>
                  <div
                    className={classNames(
                      styles.container_learning__data_course__question__data__item,
                      styles.question_sucscess
                    )}>
                    onClick
                  </div>
                  <div
                    className={classNames(
                      styles.container_learning__data_course__question__data__item,
                      styles.question_error
                    )}>
                    onError
                  </div>
                  <div
                    className={classNames(
                      styles.container_learning__data_course__question__data__item
                    )}>
                    onKeyDown
                  </div>
                </div>
                <div
                  className={classNames(
                    styles.container_learning__data_course__question__btn_submid
                  )}>
                  <Button onClick={handleSubmidQuestion}>Trả lời</Button>
                </div>
              </div>
              <div
                className={classNames(
                  styles.container_learning__data_course__container__result
                )}>
                <h2
                  className={classNames(
                    styles.container_learning__data_course__container__result__title
                  )}>
                  Giải thích
                </h2>
                <p
                  className={classNames(
                    styles.container_learning__data_course__container__result__desc
                  )}>
                  Khi sử dụng onerror, nội dung javascript trong onerror sẽ được
                  thực thi khi ảnh bị lỗi.
                </p>
              </div>
            </div>
          )}

          {configShowHide.activeLessonCode && (
            <div
              className={classNames(
                styles.container_learning__data_course__ide_code
              )}>
              <QuestionListExam />
              <div
                className={classNames(
                  styles.container_learning__data_course__ide_code__header
                )}>
                <div
                  className={classNames(
                    styles.container_learning__data_course__ide_code__header__left
                  )}>
                  <CiMenuBurger
                    className={classNames(
                      styles.container_learning__data_course__ide_code__header__left___menu
                    )}
                  />
                  <Button
                    loading={configLoadding.isLoaddingRunCode}
                    className={classNames(
                      styles.container_learning__data_course__ide_code__header__left_btn
                    )}
                    icon={
                      <FaPlay
                        className={classNames(
                          styles.container_learning__data_course__ide_code__header__left_btn__icon_play
                        )}
                      />
                    }
                    onClick={handleSubmitCode}>
                    <span>Chạy code</span>
                  </Button>
                </div>
                <div
                  className={classNames(
                    styles.container_learning__data_course__ide_code__header__right
                  )}>
                  <p>Result Size: 731 x 518</p>
                </div>
              </div>
              <div
                className={classNames(
                  styles.container_learning__data_course__ide_code__container
                )}>
                <div
                  className={classNames(
                    styles.container_learning__data_course__ide_code__container__left
                  )}>
                  <CodeEditor
                    code={code}
                    setCode={setCode}
                    languageActive={languageActive}
                    setLanguageActive={setLanguageActive}
                  />
                </div>
                <div
                  className={classNames(
                    styles.container_learning__data_course__ide_code__container__right
                  )}>
                  <CodeBlock code={responseCode} />
                </div>
              </div>
            </div>
          )}
        </div>

        {configShowHide.activeCloseLesson ? (
          <div
            className={classNames(
              styles.container_learning__content__course_more,
              "container_learning__content__course_more__active"
            )}
            onClick={handleCloseCourseLesson}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}>
            <FaArrowLeftLong />
            <p>Nội dung khóa học</p>
          </div>
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
                defaultActiveKey={["1"]}
                onChange={onChange}
                expandIconPosition={"right"}
                expandIcon={({ isActive }) => (
                  <RightOutlined
                    style={{ fontSize: "16px", marginTop: "5px" }}
                    rotate={isActive ? 90 : 0}
                  />
                )}>
                {sections.map((section) => (
                  <Collapse.Panel
                    key={section.id}
                    header={
                      <div
                        className={
                          styles.container_learning__section__lesson__title
                        }>
                        <strong
                          className={
                            styles.container_learning__section__lesson__title_part
                          }>
                          {section.title}
                        </strong>
                        <div
                          className={
                            styles.container_learning__section__lesson__title_more
                          }>
                          <p
                            className={
                              styles.container_learning__section__lesson__title_quantity_lesson
                            }>
                            3/3
                          </p>{" "}
                          |{" "}
                          <p
                            className={
                              styles.container_learning__section__lesson__title_time
                            }>
                            1 giờ 20 phút
                          </p>
                        </div>
                      </div>
                    }>
                    {section.lessons.map((lesson) => (
                      <>
                        <div
                          className={
                            styles.container_learning__section__lesson__lecture
                          }
                          style={{
                            backgroundColor:
                              configShowHide.activeLesson === lesson.id
                                ? "var(--primary-color)"
                                : "",
                            color:
                              configShowHide.activeLesson === lesson.id
                                ? "#fff"
                                : "",
                          }}>
                          <input
                            className={
                              styles.container_learning__section__lesson__lecture__input
                            }
                            type="checkbox"
                            name=""
                            id=""
                          />
                          <div
                            className={
                              styles.container_learning__section__lesson__lecture__content
                            }
                            onClick={() => handleViewLessonActive(lesson.id)}>
                            <p
                              className={
                                styles.container_learning__section__lesson__lecture__name
                              }
                              style={{
                                color:
                                  configShowHide.activeLesson === lesson.id
                                    ? "#fff"
                                    : "",
                              }}>
                              {lesson.name}
                            </p>
                            <div
                              className={
                                styles.container_learning__section__lesson__lecture__content__time
                              }>
                              {lesson.video ? (
                                <FaTv
                                  className={
                                    styles.container_learning__section__lesson__lecture__content__time__icon
                                  }
                                />
                              ) : lesson.code ? (
                                <FaCode
                                  className={
                                    styles.container_learning__section__lesson__lecture__content__time__icon
                                  }
                                />
                              ) : (
                                <FaRegCircleQuestion
                                  className={
                                    styles.container_learning__section__lesson__lecture__content__time__icon
                                  }
                                />
                              )}

                              <p
                                style={{
                                  color:
                                    configShowHide.activeLesson === lesson.id
                                      ? "#fff"
                                      : "",
                                }}>
                                {lesson.duration}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </Collapse.Panel>
                ))}
              </Collapse>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Learning;
