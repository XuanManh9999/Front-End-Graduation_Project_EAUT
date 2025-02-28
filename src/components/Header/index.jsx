import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Input } from "antd";
import { MenuOutlined, SearchOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Xử lý scroll header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.header_container}>
        {/* Mobile Menu Button */}
        <button
          className={styles.mobile_menu_btn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </Link>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.nav_open : ""}`}>
          <ul className={styles.nav_list}>
            <li>
              <Link to="/courses">{t("header.courses")}</Link>
            </li>
            <li>
              <Link to="/business">{t("header.business")}</Link>
            </li>
            <li>
              <Link to="/teach">{t("header.teach")}</Link>
            </li>
          </ul>
        </nav>

        {/* Search */}
        <div
          className={`${styles.search} ${
            isSearchOpen ? styles.search_open : ""
          }`}>
          <Input
            prefix={<SearchOutlined />}
            placeholder={t("header.search_placeholder")}
            className={styles.search_input}
          />
          <button
            className={styles.mobile_search_btn}
            onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <CloseOutlined /> : <SearchOutlined />}
          </button>
        </div>

        {/* User Actions */}
        <div className={styles.user_actions}>
          <Link to="/login" className={styles.login_btn}>
            {t("header.login")}
          </Link>
          <Link to="/signup" className={styles.signup_btn}>
            {t("header.signup")}
          </Link>
          <Link to="/language" className={styles.language_btn}>
            <img src="/language-icon.png" alt="Language" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
