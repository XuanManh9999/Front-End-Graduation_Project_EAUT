import React from "react";
import styles from "./MyCourse.module.scss";
import { Link } from "react-router-dom";
import { Input, Button, Progress, Pagination } from "antd";
import { IoIosSearch } from "react-icons/io";
import classNames from "classnames";
import { FaPlayCircle } from "react-icons/fa";
function MyCourse() {
  return (
    <div className={styles.container__my_course}>
      <div className={styles.container__my_course__head}>
        <h1 className={styles.container__my_course__head__title}>Học Tập</h1>
        <ul className={styles.container__my_course__head__section}>
          <li
            className={classNames(
              styles.container__my_course__head__section__item
            )}>
            <Link className={styles.active}>Tất cả khóa học của tôi</Link>
          </li>

          <li className={styles.container__my_course__head__section__item}>
            <Link>Chứng chỉ</Link>
          </li>
          <li className={styles.container__my_course__head__section__item}>
            <Link>Đã lưu trữ</Link>
          </li>
          <li className={styles.container__my_course__head__section__item}>
            <Link>Công cụ học tập</Link>
          </li>
        </ul>
      </div>
      <div className={styles.container__my_course_main}>
        <div className={styles.container__my_course_main__option}>
          <div className={styles.container__my_course_main__left}>
            <h3 className={styles.container__my_course_main__left__title}>
              Khóa học của bạn
            </h3>
          </div>
          <div className={styles.container__my_course_main__right}>
            <Input
              className={styles.container__my_course_main__right__input_search}
              placeholder="Tìm kiếm khóa học của bạn..."
            />
            <Button
              className={styles.container__my_course_main__right__btn_search}
              icon={<IoIosSearch />}
            />
          </div>
        </div>
        <div className={styles.container__my_course_main__list_item}>
          <div className={styles.container__my_course_main__item}>
            <div className={styles.container__my_course_main__item__img}>
              <img
                src="https://img-c.udemycdn.com/course/480x270/6333675_c7df.jpg"
                alt=""
              />
              <FaPlayCircle />
            </div>
            <p className={styles.container__my_course_main__item__name}>
              Vỡ lòng về Python - từ cơ bản đến xử lý ảnh, xử lý dữ liệu
            </p>
            <strong
              className={styles.container__my_course_main__item__name__author}>
              Thang Nguyen
            </strong>
            <div className={styles.container__my_course_main__item__process}>
              <Progress
                strokeColor="var(--primary-color)"
                strokeWidth={9}
                className={
                  styles.container__my_course_main__item__process__line
                }
                percent={20}
                type="line"
              />
              <span
                className={
                  styles.container__my_course_main__item__process__percent
                }>
                Hoàn thành 20%
              </span>
            </div>
          </div>
          <div className={styles.container__my_course_main__item}>
            <div className={styles.container__my_course_main__item__img}>
              <img
                src="https://img-c.udemycdn.com/course/480x270/6333675_c7df.jpg"
                alt=""
              />
              <FaPlayCircle />
            </div>
            <p className={styles.container__my_course_main__item__name}>
              Vỡ lòng về Python - từ cơ bản đến xử lý ảnh, xử lý dữ liệu
            </p>
            <strong
              className={styles.container__my_course_main__item__name__author}>
              Thang Nguyen
            </strong>
            <div className={styles.container__my_course_main__item__process}>
              <Progress
                strokeColor="var(--primary-color)"
                strokeWidth={9}
                className={
                  styles.container__my_course_main__item__process__line
                }
                percent={20}
                type="line"
              />
              <span
                className={
                  styles.container__my_course_main__item__process__percent
                }>
                Hoàn thành 20%
              </span>
            </div>
          </div>
          <div className={styles.container__my_course_main__item}>
            <div className={styles.container__my_course_main__item__img}>
              <img
                src="https://img-c.udemycdn.com/course/480x270/6333675_c7df.jpg"
                alt=""
              />
              <FaPlayCircle />
            </div>
            <p className={styles.container__my_course_main__item__name}>
              Vỡ lòng về Python - từ cơ bản đến xử lý ảnh, xử lý dữ liệu
            </p>
            <strong
              className={styles.container__my_course_main__item__name__author}>
              Thang Nguyen
            </strong>
            <div className={styles.container__my_course_main__item__process}>
              <Progress
                strokeColor="var(--primary-color)"
                strokeWidth={9}
                className={
                  styles.container__my_course_main__item__process__line
                }
                percent={20}
                type="line"
              />
              <span
                className={
                  styles.container__my_course_main__item__process__percent
                }>
                Hoàn thành 20%
              </span>
            </div>
          </div>
          <div className={styles.container__my_course_main__item}>
            <div className={styles.container__my_course_main__item__img}>
              <img
                src="https://img-c.udemycdn.com/course/480x270/6333675_c7df.jpg"
                alt=""
              />
              <FaPlayCircle />
            </div>
            <p className={styles.container__my_course_main__item__name}>
              Vỡ lòng về Python - từ cơ bản đến xử lý ảnh, xử lý dữ liệu
            </p>
            <strong
              className={styles.container__my_course_main__item__name__author}>
              Thang Nguyen
            </strong>
            <div className={styles.container__my_course_main__item__process}>
              <Progress
                strokeColor="var(--primary-color)"
                strokeWidth={9}
                className={
                  styles.container__my_course_main__item__process__line
                }
                percent={20}
                type="line"
              />
              <span
                className={
                  styles.container__my_course_main__item__process__percent
                }>
                Hoàn thành 20%
              </span>
            </div>
          </div>
          <div className={styles.container__my_course_main__item}>
            <div className={styles.container__my_course_main__item__img}>
              <img
                src="https://img-c.udemycdn.com/course/480x270/6333675_c7df.jpg"
                alt=""
              />
              <FaPlayCircle />
            </div>
            <p className={styles.container__my_course_main__item__name}>
              Vỡ lòng về Python - từ cơ bản đến xử lý ảnh, xử lý dữ liệu
            </p>
            <strong
              className={styles.container__my_course_main__item__name__author}>
              Thang Nguyen
            </strong>
            <div className={styles.container__my_course_main__item__process}>
              <Progress
                strokeColor="var(--primary-color)"
                strokeWidth={9}
                className={
                  styles.container__my_course_main__item__process__line
                }
                percent={20}
                type="line"
              />
              <span
                className={
                  styles.container__my_course_main__item__process__percent
                }>
                Hoàn thành 20%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container__my_course__pagination}>
        <Pagination
          className={styles.container__my_course__pagination__item}
          defaultCurrent={1}
          total={50}
        />
      </div>
    </div>
  );
}
export default MyCourse;
