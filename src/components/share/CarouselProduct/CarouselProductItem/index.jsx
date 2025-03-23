import React from "react";
import { FaCheck } from "react-icons/fa";
// ant
import { Rate, Tag, Popover, Button } from "antd";
import styles from "./CarouselProductItem.module.scss";
import { Link } from "react-router-dom";
const content = (
  <div className={styles.carousel_preview}>
    <strong className={styles.carousel_preview__name_course}>
      Spring Boot Full Skill's
    </strong>
    <div className={styles.carousel_preview__has_tag_time}>
      <Tag className={styles.carousel_preview__has_tag_text} color="cyan">
        Bán chạy nhất
      </Tag>
      <p>
        Đã cập nhật{" "}
        <strong className={styles.carousel_preview__has_tag__update}>
          tháng 2 năm 2024
        </strong>
      </p>
    </div>
    <div className={styles.carousel_preview__time_level}>
      <span className={styles.carousel_preview__time}>15,5 giờ</span>
      <span className={styles.carousel_preview__level}>Trung cấp</span>
    </div>
    <strong className={styles.carousel_preview__knowledge}>
      Java Backend, Spring Boot 3, Java 17, JPA, PostgreSQL, Docker, Maven,
      Kafka, Redis
    </strong>
    <ul className={styles.carousel_preview__learn}>
      <li className={styles.carousel_preview__learn__item}>
        <FaCheck />{" "}
        <span>Hiểu sâu về kiến trúc Spring Framework và Spring Boot 3</span>
      </li>
      <li className={styles.carousel_preview__learn__item}>
        <FaCheck />{" "}
        <span>Thành thạo kỹ năng làm việc với database thông qua JPA</span>
      </li>
      <li className={styles.carousel_preview__learn__item}>
        <FaCheck />{" "}
        <span>
          Thành thạo kỹ năng xử lý validate, chuẩn hoá dữ liệu đầu vào
        </span>
      </li>
    </ul>
    <Button className={styles.carousel_preview__add_cart}>
      Thêm vào giỏ hàng
    </Button>
  </div>
);
function CarouselProductItem() {
  return (
    <Popover placement="right" content={content}>
      <Link to={"/course-info/1"} className={styles.carousel__item}>
        <img
          src="https://img-c.udemycdn.com/course/480x270/6291743_5d97_3.jpg"
          alt="name_course"
          className={styles.carousel__item__img_course}
        />
        <h5 className={styles.carousel__item__title}>
          Spring Boot Full Skill's{" "}
        </h5>
        <strong className={styles.carousel__item__name_author}>Tây Java</strong>
        <div className={styles.carousel__item__star}>
          <span className={styles.carousel__item__star_rate}>4,8</span>
          <Rate
            className={styles.carousel__item__star__icon_rate}
            allowHalf
            defaultValue={5}
            disabled
          />
          <span className={styles.carousel__item__star_rate__presion_review}>
            (41)
          </span>
        </div>
        <div className={styles.carousel__item__price}>
          <strong className={styles.carousel__item__price__discount}>
            1.099.000 ₫
          </strong>
          <strong className={styles.carousel__item__price_now}>
            1.099.000 ₫
          </strong>
        </div>
        <div className={styles.carousel__item__tag}>
          <Tag color="cyan">Bán chạy nhất</Tag>
          <Tag color="cyan">Bán chạy nhất</Tag>
        </div>
      </Link>
    </Popover>
  );
}
export default CarouselProductItem;
