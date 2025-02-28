import React from "react";
import classNames from "classnames";
import styles from "./DrawerCustomItem.module.scss";
import { IoMdClose } from "react-icons/io";

function DrawerCustomItem() {
  return (
    <div className={styles.drawer_cart__item}>
      <img
        src="https://img-c.udemycdn.com/course/480x270/6291743_5d97_3.jpg"
        alt="Course Udemy"
        className={styles.drawer_cart__item__img}
      />
      <div className={styles.drawer_cart__item__content}>
        <strong className={styles.drawer_cart__item__content__title}>
          Spring Boot Full Skill's
        </strong>
        <strong className={styles.drawer_cart__item__content__author}>
          Tây Java
        </strong>
        <strong className={styles.drawer_cart__item__content__price}>
          1.499.000 đ
        </strong>
      </div>
      <IoMdClose className={styles.drawer_cart__item__content__icon_close} />
    </div>
  );
}

export default DrawerCustomItem;
