import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import { Input, Button } from "antd";
import { FaGoogle, FaGithub } from "react-icons/fa";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import URL from "../../../utils/url-route";
import { showToast } from "../../../utils/toast";
import { apiLogin, oauthLogin } from "../../../services/auth";
import Cookies from "js-cookie";
import { handleTestCallApi } from "../../../services/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

import { auth } from "../../../helper/filebase";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });
  const { t } = useTranslation();

  const handleOnChangeLogin = (event) => {
    const { name, value } = event.target;
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };

  const handleLoginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const id_token = await result.user.getIdToken();
        const provider = result.providerId;
        const email = result.user.email;
        const username = result.user.displayName;
        const avatar = result.user.photoURL;
        const data = {
          id_token,
          provider,
          email,
          username,
          avatar,
        };

        const response = await oauthLogin(data);
        if (response?.status === 200) {
          const { accessToken, refreshToken } = response;
          Cookies.set("accessToken", accessToken, { expires: 1 / 24 }); // 1 giờ
          Cookies.set("refreshToken", refreshToken, { expires: 14 }); // 14 ngày
          showToast.success(t("login_success"));
        } else {
          showToast.error(t("login_fail"));
        }
      })
      .catch((error) => {
        showToast.error(t("error_from_firebase"));
      });
  };

  const handleLoginGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const id_token = await result.user.getIdToken();
        const provider = result.providerId;
        const email = result.user.email;
        const username = result.user.displayName;
        const avatar = result.user.photoURL;
        const data = {
          id_token,
          provider,
          email,
          username,
          avatar,
        };

        const response = await oauthLogin(data);
        if (response?.status === 200) {
          const { accessToken, refreshToken } = response;
          Cookies.set("accessToken", accessToken, { expires: 1 / 24 }); // 1 giờ
          Cookies.set("refreshToken", refreshToken, { expires: 14 }); // 14 ngày
          showToast.success(t("login_success"));
        } else {
          showToast.error(t("login_fail"));
        }
      })
      .catch((error) => {
        showToast.error(t("error_from_firebase"));
      });
  };

  const handleLoginSubmid = async () => {
    setIsLoading(true);
    if (
      dataLogin.username === "" ||
      dataLogin.password === "" ||
      dataLogin.password.length < 6 ||
      dataLogin.username.length < 6
    ) {
      showToast.error(t("error_input_login"));
      return;
    }
    const response = await apiLogin(dataLogin);
    if (response?.status === 200) {
      const { accessToken, refreshToken } = response;
      Cookies.set("accessToken", accessToken, { expires: 1 / 24 }); // 1 giờ
      Cookies.set("refreshToken", refreshToken, { expires: 14 }); // 14 ngày
      showToast.success(t("login_success"));
    } else {
      showToast.error(t("login_fail"));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const fetching = async () => {
      const reponse = await handleTestCallApi();
      console.log(reponse);
    };
    fetching();
  }, []);



  const handleTestCallApi = async () => {
  
  }

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
            name="username"
            value={dataLogin.username}
            onChange={handleOnChangeLogin}
          />
          <Input.Password
            className={styles.login__item__password}
            count={50}
            placeholder={t("password_input_login")}
            name="password"
            value={dataLogin.password}
            onChange={handleOnChangeLogin}
          />

          <Button
            className={styles.login__item__submid}
            onClick={handleLoginSubmid}
            loading={isLoading}>
            {t("login")}
          </Button>
          <div className={styles.login__item__more_option}>
            <div className={styles.login__item__more_option__title}>
              <hr />
              <p>{t("option_new_login")}</p>
            </div>
          </div>
          <div className={styles.login__item__more_option__list}>
            <Button onClick={handleLoginGoogle}>
              <FaGoogle
                className={classNames(
                  styles.login__item__more_option__list__icon
                )}
              />
            </Button>

            <Button onClick={handleLoginGithub}>
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
