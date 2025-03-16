import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Col, Layout, Row, Collapse, Button, Modal } from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  PlayCircleOutlined,
  ClockCircleOutlined,
  DashboardOutlined,
  PlaySquareOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import styles from "./OverviewCourse.module.scss";
import "./config.css";

// Hàm chuyển đổi thời lượng (giả sử duration là số giây)
function convertDurationCourse(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes} phút ${seconds} giây`;
}

function OverviewCourse() {
  const navigate = useNavigate();
  const playerRef = useRef(null);
  const [course, setCourse] = useState({});
  const [videoPreOrder, setVideoPreOrder] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);
  const [activeKeys, setActiveKeys] = useState([]);
  const [isRegister, setIsRegister] = useState(0);
  const [isLoadingRegister, setIsLoadingRegister] = useState(false);
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  // Giả sử trạng thái đăng nhập (đổi thành false nếu cần)
  const isLoggedIn = true;

  // Dữ liệu cứng cho khóa học
  const staticCourse = {
    id: 1,
    name: "Khóa học React căn bản",
    description:
      "Đây là khóa học React căn bản dành cho người mới bắt đầu, giúp bạn làm quen với các kiến thức cơ bản của React.",
    chapterList: [
      {
        id: "ch1",
        title: "Giới thiệu",
        total_videos: 2,
        videos: [
          {
            id: "vid1",
            title: "Giới thiệu khóa học",
            durationText: "3:45",
            urlVideo: "dQw4w9WgXcQ",
          },
          {
            id: "vid2",
            title: "Setup môi trường",
            durationText: "5:20",
            urlVideo: "dQw4w9WgXcQ",
          },
        ],
      },
      {
        id: "ch2",
        title: "React Cơ bản",
        total_videos: 3,
        videos: [
          {
            id: "vid3",
            title: "Component và Props",
            durationText: "7:30",
            urlVideo: "dQw4w9WgXcQ",
          },
          {
            id: "vid4",
            title: "State và Lifecycle",
            durationText: "8:00",
            urlVideo: "dQw4w9WgXcQ",
          },
          {
            id: "vid5",
            title: "Sự kiện",
            durationText: "6:15",
            urlVideo: "dQw4w9WgXcQ",
          },
        ],
      },
    ],
    videosCount: 5,
    duration: 900,
    image:
      "https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png",
    level: "Beginner",
    slug: "khoa-hoc-react-can-ban",
  };

  // Giả lập load dữ liệu khi component mount
  useEffect(() => {
    setCourse(staticCourse);
    if (staticCourse.chapterList.length > 0) {
      setActiveKeys([staticCourse.chapterList[0].id]);
      setVideoPreOrder(staticCourse.chapterList[0].videos[0]);
    }
  }, []);

  const toggleExpandAll = useCallback(() => {
    const allKeys = course?.chapterList?.map((item) => item.id) || [];
    if (isAllExpanded) {
      setActiveKeys([]);
      setIsAllExpanded(false);
    } else {
      setActiveKeys(allKeys);
      setIsAllExpanded(true);
    }
  }, [isAllExpanded, course]);

  const handlePanelChange = useCallback((keys) => {
    setActiveKeys(keys);
  }, []);

  const handleViewPreview = () => {
    setIsShowModal(true);
  };

  const handleRegisterCourse = () => {
    if (!isLoggedIn) {
      alert("Vui lòng đăng nhập để đăng ký khóa học");
    } else {
      setIsLoadingRegister(true);
      setTimeout(() => {
        setIsLoadingRegister(false);
        setIsRegister(1);
        alert("Đăng ký khóa học thành công!");
      }, 1000);
    }
  };

  const handleShowModal = () => {
    setIsShowModal(false);
    if (playerRef.current && playerRef.current.pauseVideo) {
      playerRef.current.pauseVideo();
    }
  };

  const renderedChapters = useMemo(() => {
    let videoCounter = 0;
    return (course?.chapterList || []).map((chapter, index) => ({
      key: chapter.id,
      label: (
        <div className={styles["overview-course__chapter-header"]}>
          <strong>
            {index + 1}. {chapter.title}
          </strong>
          <span>{chapter.total_videos} bài học</span>
        </div>
      ),
      children: chapter.videos.map((video) => {
        videoCounter++;
        return (
          <div
            className={styles["overview-course__chapter-video"]}
            key={video.id}>
            <div className={styles["overview-course__chapter-video-content"]}>
              <div
                className={
                  styles["overview-course__chapter-video-content-left"]
                }>
                <PlayCircleOutlined />{" "}
                <strong>
                  {videoCounter}. {video.title}
                </strong>
              </div>
              <div
                className={
                  styles["overview-course__chapter-video-content-right"]
                }>
                <span>{video.durationText}</span>
              </div>
            </div>
          </div>
        );
      }),
    }));
  }, [course]);

  return (
    <>
      <Layout className={styles["overview-course"]}>
        <Row className={styles["overview-course__list"]} gutter={[25, 25]}>
          <Col xxl={18} xl={18} className={styles["overview-course__left"]}>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <section className={styles["overview-course__left-info"]}>
              <h2>Nội dung khóa học</h2>
              <div className={styles["overview-course__left-info-desc"]}>
                <ul>
                  <li>
                    <strong>{course?.chapterList?.length}</strong> chương
                  </li>
                  <li>
                    <strong>{course?.videosCount}</strong> bài học
                  </li>
                  <li>
                    Thời lượng{" "}
                    <strong>{convertDurationCourse(course?.duration)}</strong>
                  </li>
                </ul>
                <span onClick={toggleExpandAll}>
                  {isAllExpanded ? "Thu gọn tất cả" : "Mở rộng tất cả"}
                </span>
              </div>
            </section>
            <Collapse
              activeKey={activeKeys}
              onChange={handlePanelChange}
              className={styles["overview-course__chapters"]}
              expandIcon={({ isActive }) =>
                isActive ? <MinusOutlined /> : <PlusOutlined />
              }
              items={renderedChapters}
            />
          </Col>

          <Col xxl={6} xl={6} className={styles["overview-course__right"]}>
            <div
              className={styles["overview-course__right-header"]}
              style={{ backgroundImage: `url(${course?.image})` }}
              onClick={handleViewPreview}>
              <PlayCircleOutlined
                className={styles["overview-course__right-header-icon"]}
              />
              <p className={styles["overview-course__right-header-desc"]}>
                Xem giới thiệu khóa học
              </p>
            </div>
            <div className={styles["overview-course__right-type"]}>
              <h5>Miễn phí</h5>
            </div>
            {!isLoggedIn || !isRegister ? (
              <Button
                loading={isLoadingRegister}
                type="primary"
                onClick={handleRegisterCourse}>
                Đăng ký khóa học
              </Button>
            ) : (
              <Link
                to={`/learning/${course?.slug}`}
                className={styles["overview-course__right-to-learning"]}>
                Học ngay
              </Link>
            )}

            <ul className={styles["overview-course__right-bottom"]}>
              <li>
                <DashboardOutlined />
                Trình độ {course?.level}
              </li>
              <li>
                <PlaySquareOutlined />
                Tổng số <strong>{course?.videosCount}</strong> bài học
              </li>
              <li>
                <ClockCircleOutlined />
                Thời lượng{" "}
                <strong>{convertDurationCourse(course?.duration)}</strong>
              </li>
              <li>
                <TrophyOutlined />
                Học mọi lúc, mọi nơi
              </li>
            </ul>
          </Col>
        </Row>
      </Layout>
      <Modal
        className={styles["overview-course__modal-preview"]}
        open={isShowModal}
        onCancel={handleShowModal}
        centered
        footer={null}
        width={800}>
        <h3>Giới thiệu khóa học</h3>
        <div className={styles["overview-course__modal-content"]}>
          <h2>{course?.name}</h2>
          {/* Bạn có thể chèn video preview vào đây nếu cần */}
        </div>
      </Modal>
    </>
  );
}

export default OverviewCourse;
