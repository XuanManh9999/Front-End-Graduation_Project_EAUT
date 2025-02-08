import React, { useState } from "react";
import { Button } from "antd";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";
import ModalCustom from "../ModalCustom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [isShowChangeLanguage, setIsShowLanguage] = useState({
    title: "Chọn một ngôn ngữ",
    isShowModal: false,
    isCloseModal: false,
    footer: null,
  });
  const handleChangeLanguage = () => {
    setIsShowLanguage((prev) => ({
      ...prev,
      isShowModal: true,
    }));
  };

  const handleChangeLanguageCancel = () => {
    setIsShowLanguage((prev) => ({
      ...prev,
      isShowModal: false,
    }));
  };

  const handleClickItemChangeLanguage = (item) => {
    setIsShowLanguage((prev) => ({
      ...prev,
      isShowModal: false,
      selected: item.id,
    }));
    i18n.changeLanguage(item.id);
  };
  console.log("re-render");

  return (
    <>
      <header className={styles.header}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <Link to={"/"}>
              <img
                className={styles.header__item__logo}
                src="https://i.ibb.co/SDKsGrdF/logo-removebg-preview.png"
                alt="logo"
              />
            </Link>
          </li>
          <li className={styles.header__item}>
            <p className={styles.header__item__title}>{t("discover")}</p>
          </li>
          <li
            className={classNames(
              styles.header__item,
              styles.header__item_search
            )}
          >
            <FaSearch className={styles.header__item__icon_search} />
            <input
              type="text"
              className={styles.header__item__input_search}
              placeholder={t("find_search__header")}
            />
          </li>
          <li className={styles.header__item}>
            <p className={styles.header__item__title}>{t("learn")}</p>
          </li>
          <li className={styles.header__item}>
            <Button
              className={styles.btn_cart}
              icon={<BsCart3 className={styles.header__item__icon_cart} />}
            ></Button>
          </li>
          <li className={styles.header__item}>
            <Link to={"/login"}>
              <Button className={styles.header__item_btn}>{t("login")}</Button>
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link to={"/register"}>
              <Button
                className={classNames(
                  styles.header__item_btn,
                  styles.header__item_btn__bg
                )}
              >
                {t("register")}
              </Button>
            </Link>
          </li>
          <li className={styles.header__item}>
            <Button
              className={styles.btn_language}
              onClick={handleChangeLanguage}
              icon={
                <GrLanguage className={styles.header__item__icon_language} />
              }
            />
          </li>
        </ul>
      </header>
      <ModalCustom
        title={isShowChangeLanguage.title}
        isOpen={isShowChangeLanguage.isShowModal}
        isShowFooter={isShowChangeLanguage.footer}
        handleCancel={handleChangeLanguageCancel}
        handleOnClickItem={handleClickItemChangeLanguage}
      />
    </>
  );
}

export default Header;
