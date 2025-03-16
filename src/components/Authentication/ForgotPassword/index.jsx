import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import { Input, Button } from "antd";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import URL from "../../../utils/url-route";
import { Link } from "react-router-dom";
import ModalCustom from "../../share/ModalCustom";
import { validateEmail } from "../../../utils/regex";
import { showToast } from "../../../utils/toast";
import {
  apiForgotPassword,
  apiVerifyOtpForgotPassword,
} from "../../../services/auth";

function ForgotPassword() {
  const { t } = useTranslation();
  const [isShowOTP, setIsShowOPT] = useState(false);
  const [dataOtpSubmit, setDataOtpSubmit] = useState({
    otp: "",
    isLoading: false,
  });

  const [dataForgotPassword, setDataForgotPassword] = useState({
    email: "",
    isLoadingForgotPassword: false,
  });

  const handleOnchangeForgotPassword = (e) => {
    setDataForgotPassword({
      ...dataForgotPassword,
      [e.target.name]: e.target.value,
    });
  };

  const handleForgotPassword = async () => {
    setDataForgotPassword({
      ...dataForgotPassword,
      isLoadingForgotPassword: true,
    });

    if (validateEmail(dataForgotPassword.email)) {
      const response = await apiForgotPassword({
        email: dataForgotPassword.email,
      });
      if (response.status === 200) {
        showToast.success(t("forgot_password_success"));
        setIsShowOPT(true);
      } else {
        showToast.error(t("forgot_password_fail"));
      }

      setIsShowOPT(true);
    } else {
      showToast.error(t("email_invalid"));
    }
    setDataForgotPassword({
      ...dataForgotPassword,
      isLoadingForgotPassword: false,
    });
  };

  const handleOnCancel = () => {
    setDataOtpSubmit((prev) => ({
      ...prev,
      otp: "",
    }));
    setIsShowOPT(false);
  };

  const handleOnSubmitOTP = async () => {
    if (dataOtpSubmit.otp.length < 6) {
      showToast.error(t("otp_invalid"));
      return;
    }

    setDataOtpSubmit({
      ...dataOtpSubmit,
      isLoading: true,
    });

    const response = await apiVerifyOtpForgotPassword({
      email: dataForgotPassword.email,
      otp: dataOtpSubmit.otp,
    });
    if (response.status !== 200) {
      showToast.error(t("otp_invalid"));
      return;
    } else {
      showToast.success(t("otp_success"));
      setIsShowOPT(false);
    }
    setDataOtpSubmit({
      ...dataOtpSubmit,
      isLoading: false,
    });
    setDataForgotPassword({
      email: "",
      isLoadingForgotPassword: false,
    });
  };

  return (
    <>
      <div class={styles.form_forgot_password}>
        <div class={styles.form_forgot_item}>
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
            alt="avatar"
          />
        </div>
        <div class={styles.form_forgot_item}>
          <h1 className={styles.register__item__title}>
            {t("forgot_password")}
          </h1>
          <div class={styles.form_forgot_item_sub}>
            <Input
              placeholder={t("input_email")}
              name="email"
              value={dataForgotPassword.email}
              onChange={handleOnchangeForgotPassword}
            />
            <Button
              loading={dataForgotPassword.isLoadingForgotPassword}
              onClick={handleForgotPassword}>
              {t("forgot_password")}
            </Button>
          </div>
          <div class={styles.form_forgot_password__orther}>
            <div className={styles.form_forgot_password__orther__login}>
              <p>{t("has_account")}</p>
              <Link to={URL.AUTH.LOGIN}>{t("login")}</Link>
            </div>
            <div className={styles.form_forgot_password__orther__register}>
              <p>{t("not_account")} </p>
              <Link to={URL.AUTH.REGISTER}>{t("register")}</Link>
            </div>
          </div>
        </div>
      </div>
      <ModalCustom
        typeModal={"otp"}
        title={"Xác thực OTP"}
        isOpen={isShowOTP}
        handleCancel={handleOnCancel}
        setDataOtpSubmit={setDataOtpSubmit}
        dataOtpSubmit={dataOtpSubmit}
        handleOnSubmitOTP={handleOnSubmitOTP}
        width={350}
      />
    </>
  );
}
export default ForgotPassword;
