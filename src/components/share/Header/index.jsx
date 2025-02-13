import React, { useState } from "react";
import { Button, Badge, Dropdown } from "antd";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";
import ModalCustom from "../ModalCustom";
import { useTranslation } from "react-i18next";
import { FaRegBell } from "react-icons/fa";

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];

function Header() {
  const { t, i18n } = useTranslation();
  const [isLogin, setIsLogin] = useState(true)
  const [isHovered, setIsHovered] = useState({
    avatar: false,
    bell: false
  });  // state để theo dõi trạng thái hover
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

  // Quản lý sự kiện hover
  const handleMouseEnter = (name_type) => setIsHovered(prev => ({
    ...prev,
    [name_type]: true
  }));
  const handleMouseLeave = (name_type) => setIsHovered(prev => ({
    ...prev,
    [name_type]: false
  }))


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
            )}>
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
            <p className={styles.header__item__title}>{t("study")}</p>
          </li>
          <li className={styles.header__item}>
            <Button
              className={styles.btn_cart}
              icon={
                <Badge count={0} showZero>
                  <BsCart3 className={styles.header__item__icon_cart} />
                </Badge>
              }
            >
            </Button>
          </li>
          {isLogin == true ? <>
            <li className={styles.header__item}
              onMouseEnter={() => handleMouseEnter("bell")}
              onMouseLeave={() => handleMouseLeave("bell")}
            >
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <Button
                  className={styles.btn_cart}
                  icon={
                    <Badge count={0} showZero>
                      <FaRegBell className={styles.header__item__icon_cart} />
                    </Badge>
                  }></Button>
              </Dropdown>

            </li>
            <li className={styles.header__item}
              onMouseEnter={() => handleMouseEnter("avatar")}
              onMouseLeave={() => handleMouseLeave("avatar")}
            >
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <img className={styles.header__item__avatar} src="https://img-c.udemycdn.com/user/75x75/285978675_5cf5.jpg" alt="avatar" />
              </Dropdown>

            </li>

          </> : <>


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
                  )}>
                  {t("register")}
                </Button>
              </Link>
            </li>
          </>}

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
