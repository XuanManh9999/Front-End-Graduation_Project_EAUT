import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa6";
import "../../../global.css";
function Footer() {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <div className={styles.footer__body}>
        <div className={styles.footer__item}>
          <h3 className={styles.footer__item__title}>
            {t("footer_Introduce")}
          </h3>
          <ul>
            <li>
              <Link>{t("footer_Introduce")}</Link>
            </li>
            <li>
              <Link>{t("footer_job")}</Link>
            </li>
            <li>
              <Link>{t("footer_contact")}</Link>
            </li>
            <li>
              <Link>{t("footer_blog")}</Link>
            </li>
            <li>
              <Link>{t("footer_investor")}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <h3 className={styles.footer__item__title}>
            {t("discover")} CODE ZEN
          </h3>
          <ul>
            <li>
              <Link>{t("footer_download")}</Link>
            </li>
            <li>
              <Link>{t("footer_teacher")} CODE ZEN</Link>
            </li>
            <li>
              <Link>{t("footer_pakage")}</Link>
            </li>
            <li>
              <Link>{t("footer_connect")}</Link>
            </li>
            <li>
              <Link>{t("footer_help")}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <h3 className={styles.footer__item__title}>
            CODE ZEN {t("footer_business")}
          </h3>
          <ul>
            <li>
              <Link>CODE ZEN {t("footer_business")}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <h3 className={styles.footer__item__title}>
            {t("footer_legal_accessibility")}
          </h3>
          <ul>
            <li>
              <Link>{t("footer_accessibility_statement")}</Link>
            </li>
            <li>
              <Link>{t("footer_privacy_policy")}</Link>
            </li>
            <li>
              <Link>{t("footer_sitemap")}</Link>
            </li>
            <li>
              <Link>{t("footer_clause")}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <p className={styles.footer__bottom__item}>
          © {new Date().getFullYear()} CODE ZEN. {t("slogan")}
        </p>

        <div className={styles.footer__bottom__item}>
          <Link>
            <FaFacebook color={"#1877F2"} />
          </Link>
          <Link>
            <FaYoutube color="#FF0000" />
          </Link>
          <Link>
            <FaTiktok color="#25F4EE" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
