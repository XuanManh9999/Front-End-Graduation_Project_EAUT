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
import DrawerCustom from "../DrawerCustom";
import "./config-css-header.css";
import CustomModalFunction from "../MocalFunction";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  const { t, i18n } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [isHovered, setIsHovered] = useState({
    avatar: false,
    bell: false,
  }); // state để theo dõi trạng thái hover

  const [dataInputModal, setDataInputModal] = useState({});
  const [configModal, setConfigModal] = useState({
    titleModal: "Cập nhật thông tin",
    isOpenModal: false,
    fields: [
      {
        name: "username",
        type: "input",
        label: "Username",
        placeholder: "Nhập username của bạn",
        rules: [{ required: true, message: "Vui lòng nhập username!" }],
        onChange: (event) => {
          const { name, value } = event.target;
          setDataInputModal((prev) => ({
            ...prev,
            [name]: value,
          }));
        },
      },
      {
        name: "description",
        type: "textarea",
        label: "Description",
        placeholder: "Nhập mô tả chi tiết",
        rules: [{ required: true, message: "Vui lòng nhập mô tả!" }],
        rows: 6,
        onChange: (event) => {
          const { name, value } = event.target;
          setDataInputModal((prev) => ({
            ...prev,
            [name]: value,
          }));
        },
      },
    ],
  });

  const [isCart, setIsCart] = useState({
    title: "Giỏ hàng",
    isShow: false,
  });

  const handleCloseDrawerCart = () => {
    setIsCart((prev) => ({
      ...prev,
      isShow: false,
    }));
  };

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
  const handleMouseEnter = (name_type) =>
    setIsHovered((prev) => ({
      ...prev,
      [name_type]: true,
    }));
  const handleMouseLeave = (name_type) =>
    setIsHovered((prev) => ({
      ...prev,
      [name_type]: false,
    }));

  const handleOnClickCart = () => {
    setIsCart((prev) => ({
      ...prev,
      isShow: true,
    }));
  };

  const handleSetting = () => {
    setConfigModal((prev) => ({
      ...prev,
      isOpenModal: true,
    }));
  };

  const handleCancel = () => {
    setConfigModal((prev) => ({
      ...prev,
      isOpenModal: false,
    }));
  };
  const handleOnSubmit = (event) => {
    console.log("onsubmit", event);
  };

  const handleOnChangeInputSearch = (event) => {
    setInputSearch(event.target.value);
  };

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
              name="search"
              value={inputSearch}
              onChange={handleOnChangeInputSearch}
              className={styles.header__item__input_search}
              placeholder={t("find_search__header")}
            />

            {inputSearch.length > 0 && (
              <div className={styles.header__item_search__modal_result_search}>
                <ul
                  className={
                    styles.header__item_search__modal_result_search__list
                  }>
                  <Link
                    to={"/course-info/1"}
                    className={
                      styles.header__item_search__modal_result_search__item
                    }>
                    <img
                      className={
                        styles.header__item_search__modal_result_search__item__left
                      }
                      src="https://img-c.udemycdn.com/course/480x270/6333675_c7df.jpg"
                      alt=""
                    />
                    <div
                      className={
                        styles.header__item_search__modal_result_search__item__right
                      }>
                      <p
                        className={
                          styles.header__item_search__modal_result_search__item__right__title
                        }>
                        Khóa học Figma từ căn bản đến thực chiến [2025 BIG
                        UPDATE!]
                      </p>
                      <p
                        className={
                          styles.header__item_search__modal_result_search__item__right__author
                        }>
                        Nguyễn Xuân Mạnh
                      </p>
                    </div>
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <li className={styles.header__item}>
            <p className={styles.header__item__title}>{t("learn")}</p>
          </li>
          <li className={styles.header__item}>
            <Link
              to={"/my-course/learning"}
              className={styles.header__item__title}>
              {t("study")}
            </Link>
          </li>
          <li className={styles.header__item}>
            <Button
              className={styles.btn_cart}
              onClick={handleOnClickCart}
              icon={
                <Badge count={0} showZero>
                  <BsCart3 className={styles.header__item__icon_cart} />
                </Badge>
              }></Button>
          </li>
          {isLogin == true ? (
            <>
              <li
                className={styles.header__item}
                onMouseEnter={() => handleMouseEnter("bell")}
                onMouseLeave={() => handleMouseLeave("bell")}>
                <Button
                  className={styles.btn_cart}
                  icon={
                    <Badge count={0} showZero>
                      <FaRegBell className={styles.header__item__icon_cart} />
                    </Badge>
                  }></Button>
              </li>
              <li
                className={styles.header__item}
                onMouseEnter={() => handleMouseEnter("avatar")}
                onMouseLeave={() => handleMouseLeave("avatar")}>
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "custom",
                        label: (
                          <div className={styles.container__detail_author}>
                            <ul
                              style={{ padding: 0 }}
                              className={
                                styles.container__detail_author__list_option
                              }>
                              <li
                                key="profile"
                                className={
                                  styles.container__detail_author__option_self
                                }>
                                <img
                                  src="https://img-c.udemycdn.com/user/100x100/285978675_5cf5.jpg"
                                  alt="avatar"
                                />
                                <div
                                  className={
                                    styles.container__detail_author__option_self__content
                                  }>
                                  <strong
                                    className={
                                      styles.container__detail_author__option_self__content__name
                                    }>
                                    Nguyễn Xuân Mạnh
                                  </strong>
                                  <span
                                    className={
                                      styles.container__detail_author__option_self__content__email
                                    }>
                                    nguyenxuanmanh2992003@gmail.com
                                  </span>
                                </div>
                              </li>
                              <li
                                key="learning"
                                className={
                                  styles.container__detail_author__option
                                }>
                                <Link>Học tập</Link>
                              </li>
                              <li
                                key="purchase-history"
                                className={
                                  styles.container__detail_author__option
                                }>
                                <Link>Lịch sử mua</Link>
                              </li>
                              <li
                                key="language"
                                onClick={handleChangeLanguage}
                                className={
                                  styles.container__detail_author__option
                                }>
                                <Link>Ngôn ngữ</Link>
                              </li>
                              <li
                                key="setting"
                                className={
                                  styles.container__detail_author__option
                                }
                                onClick={handleSetting}>
                                <Link>Cập nhật thông tin</Link>
                              </li>
                              <li
                                key="logout"
                                className={
                                  styles.container__detail_author__option
                                }>
                                <Link>Đăng xuất</Link>
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                    ],
                  }}
                  overlayClassName="custom-dropdown"
                  className={styles.dropdown__author}
                  placement="bottom"
                  getPopupContainer={(triggerNode) => triggerNode.parentElement}
                  arrow>
                  <img
                    className={styles.header__item__avatar}
                    src="https://img-c.udemycdn.com/user/75x75/285978675_5cf5.jpg"
                    alt="avatar"
                  />
                </Dropdown>
              </li>
            </>
          ) : (
            <>
              <li className={styles.header__item}>
                <Link to={"/login"}>
                  <Button className={styles.header__item_btn}>
                    {t("login")}
                  </Button>
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
            </>
          )}

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
      <DrawerCustom
        title={isCart.title}
        open={isCart.isShow}
        onClose={handleCloseDrawerCart}
      />
      <CustomModalFunction
        titleModal={configModal.titleModal}
        visible={configModal.isOpenModal}
        onCancel={handleCancel}
        onSubmit={handleOnSubmit}
        fields={configModal.fields}
      />
    </>
  );
}

export default Header;
