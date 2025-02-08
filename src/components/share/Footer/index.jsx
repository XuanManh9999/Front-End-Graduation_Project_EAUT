import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa6";
function Footer() {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <div className={styles.footer__body}>
        <div className={styles.footer__item}>
          <h3 className={styles.footer__item__title}>Giới thiệu</h3>
          <ul>
            <li>
              <Link>Giới thiệu</Link>
            </li>
            <li>
              <Link>Nghề nghiệp</Link>
            </li>
            <li>
              <Link>Hãy liên hệ với tôi</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Nhà đầu tư</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <h3 className={styles.footer__item__title}>Khám phá CODE ZEN</h3>
          <ul>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link>Tải ứng dụng</Link>
            </li>
            <li>
              <Link>Giảng dạy trên CODE ZEN</Link>
            </li>
            <li>
              <Link>Gói và giá cả</Link>
            </li>
            <li>
              <Link>Đơn vị liên kết</Link>
            </li>
            <li>
              <Link>Trợ giúp và hỗ trợ</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <h3 className={styles.footer__item__title}>Udemy for Business</h3>
          <ul>
            <li>
              <Link>Udemy Business</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <h3 className={styles.footer__item__title}>
            Pháp lý & Khả năng tiếp cận
          </h3>
          <ul>
            <li>
              <Link>Tuyến bố về khả năng tiếp cận</Link>
            </li>
            <li>
              <Link>Chính sách về quyền riêng tư</Link>
            </li>
            <li>
              <Link>Sơ đồ trang web</Link>
            </li>
            <li>
              <Link>Điều khoản</Link>
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
