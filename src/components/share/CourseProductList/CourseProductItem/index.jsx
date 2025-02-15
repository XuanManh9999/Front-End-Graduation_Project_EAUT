import React from 'react'
import styles from "./CourseProductItem.module.scss"
import { Rate, Tag, Popover, Button } from "antd"
import { FaCheck } from "react-icons/fa";

const content = (
    <div className={styles.carousel_preview}>
        <strong className={styles.carousel_preview__name_course}>Spring Boot Full Skill's</strong>
        <div className={styles.carousel_preview__has_tag_time}>
            <Tag className={styles.carousel_preview__has_tag_text} color='cyan'>Bán chạy nhất</Tag>
            <p>Đã cập nhật <strong className={styles.carousel_preview__has_tag__update}>tháng 2 năm 2024</strong></p>
        </div>
        <div className={styles.carousel_preview__time_level}>
            <span className={styles.carousel_preview__time}>15,5 giờ</span>
            <span className={styles.carousel_preview__level}>Trung cấp</span>
        </div>
        <strong className={styles.carousel_preview__knowledge}>
            Java Backend, Spring Boot 3, Java 17, JPA, PostgreSQL, Docker, Maven, Kafka, Redis
        </strong>
        <ul className={styles.carousel_preview__learn}>
            <li className={styles.carousel_preview__learn__item}><FaCheck /> <span>Hiểu sâu về kiến trúc Spring Framework và Spring Boot 3</span></li>
            <li className={styles.carousel_preview__learn__item}><FaCheck /> <span>Thành thạo kỹ năng làm việc với database thông qua JPA</span></li>
            <li className={styles.carousel_preview__learn__item}><FaCheck /> <span>Thành thạo kỹ năng xử lý validate, chuẩn hoá dữ liệu đầu vào</span></li>
        </ul>
        <Button className={styles.carousel_preview__add_cart}>Thêm vào giỏ hàng</Button>
    </div>
);
function CourseProductItem() {
    return (
        <Popover placement="right" content={content} >
            <div className={styles.course_product_list__item}>
                <img src="https://img-c.udemycdn.com/course/100x100/823546_a941.jpg" alt="avatar course" className={styles.course_product_list__item__img_course} />
                <div className={styles.course_product_list__item__content}>
                    <strong className={styles.course_product_list__item__content__name_course}>C++ từ cơ bản tới nâng cao dành cho người mới học lập trình</strong>
                    <strong className={styles.course_product_list__item__content__author}>Le Tran Dat</strong>
                    <div className={styles.course_product_list__item__content__review}>
                        <span className={styles.course_product_list__item__content__review__rate}>4,4</span>
                        <Rate className={styles.course_product_list__item__content__review__icon} allowHalf defaultValue={5} disabled />
                        <span className={styles.course_product_list__item__content__review__preson}>(41)</span>
                    </div>
                    <div className={styles.course_product_list__item__content__price}>

                    </div>
                    <div className={styles.course_product_list__item__content__tag}>
                        <Tag color="cyan">Bán chạy nhất</Tag>
                    </div>
                </div>
            </div>
        </Popover>
    )
}
export default CourseProductItem