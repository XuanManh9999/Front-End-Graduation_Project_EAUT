import React from "react";
import styles from "./Login.module.scss";
import { Input, Button } from "antd";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import URL from "../../../utils/url-route"
function Login() {
  const { t } = useTranslation();
  return (
    <div className={styles.login__form}>
      <div className={styles.login__item}>
        <img
          src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
          alt="avatar"
        />
      </div>
      <div className={styles.login__item}>
        <h1 className={styles.login__item__title}>{t("login_title")}</h1>
        <div className={styles.login__item__form}>
          <Input
            className={styles.login__item__username}
            count={50}
            placeholder={t("username_input_login")}
          />
          <Input.Password
            className={styles.login__item__password}
            count={50}
            placeholder={t("password_input_login")}
          />

          <Button className={styles.login__item__submid}>{t("login")}</Button>
          <div className={styles.login__item__more_option}>
            <div className={styles.login__item__more_option__title}>
              <hr />
              <p>{t("option_new_login")}</p>
            </div>
          </div>
          <div className={styles.login__item__more_option__list}>
            <Button>
              <FaGoogle
                className={classNames(
                  styles.login__item__more_option__list__icon
                )}
              />
            </Button>
            <Button>
              <FaFacebook
                color="#1877F2"
                className={classNames(
                  styles.login__item__more_option__list__icon
                )}
              />
            </Button>
            <Button>
              <FaGithub
                color="#181717"
                className={classNames(
                  styles.login__item__more_option__list__icon
                )}
              />
            </Button>
          </div>
          <div className={styles.login__item__form__footer}>
            <div className={styles.login__item__form__footer__register}>
              <p>{t("not_account")} </p>
              <Link to={URL.AUTH.REGISTER}>{t("register")}</Link>
            </div>
            <div className={styles.login__item__form__footer__forgot_password}>
              <p>{t("forgot_password__title")} </p>
              <Link to={URL.AUTH.FORGOT_PASSWORD}>{t("forgot_password")}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
