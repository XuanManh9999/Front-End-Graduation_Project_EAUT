import React, { useState } from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import styles from "./Register.module.scss";
import { useTranslation } from "react-i18next";
import URL from "../../../utils/url-route";
import { showToast } from "../../../utils/toast";
import { apiRegister, apiVerifyOtpRegister } from "../../../services/auth";
import { validateEmail } from "../../../utils/regex";
import ModalCustom from "../../share/ModalCustom";
function Register() {
  const { t } = useTranslation();
  const [dataRegister, setDataRegister] = React.useState({
    username: "",
    email: "",
    password: "",
    isLoadingSubmit: false,
  });
  const [isShowOTP, setIsShowOPT] = useState(false);
  const [dataOtpSubmit, setDataOtpSubmit] = useState({
    otp: "",
    isLoading: false,
  });

  const handleOnCancel = () => {
    setDataOtpSubmit((prev) => ({
      ...prev,
      otp: "",
    }));
    setIsShowOPT(false);
  };

  const handleOnChangeRegister = (event) => {
    const { name, value } = event.target;
    setDataRegister({
      ...dataRegister,
      [name]: value,
    });
  };

  const handleRegisterSubmid = async () => {
    if (
      dataRegister.username == "" ||
      dataRegister.email == "" ||
      dataRegister.password == "" ||
      dataRegister.password.length < 6 ||
      dataRegister.password.length > 20 ||
      dataRegister.username.length < 6 ||
      validateEmail(dataRegister.email) == false
    ) {
      showToast.error(t("error_input_login"));
      return;
    }
    setDataRegister((prev) => ({
      ...prev,
      isLoadingSubmit: true,
    }));
    const response = await apiRegister(dataRegister);
    if (response.status === 200) {
      showToast.success(t("register_success"));
      setIsShowOPT(true);
    } else if (response.status === 409) {
      showToast.error(t("register_extist_account"));
    } else {
      showToast.error(t("register_fail"));
    }
    setDataRegister((prev) => ({
      ...prev,
      isLoadingSubmit: false,
    }));
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
    const response = await apiVerifyOtpRegister({
      email: dataRegister.email,
      otp: dataOtpSubmit.otp,
    });
    if (response.status === 200) {
      showToast.success(t("otp_invalid_register"));
      setIsShowOPT(false);
    } else {
      showToast.error(t("otp_invalid"));
    }
    setDataOtpSubmit({
      ...dataOtpSubmit,
      isLoading: false,
    });
  };

  return (
    <>
      <div class={styles.form_register}>
        <div class={styles.form_register__item}>
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
            alt="avatar"
          />
        </div>
        <div class={styles.form_register__item}>
          <h1 className={styles.register__item__title}>
            {t("register_title")}
          </h1>
          <div className={styles.form_register__item__submid}>
            <Input
              className={styles.form_register__item__submid_email}
              placeholder={t("register_email")}
              name="email"
              value={dataRegister.email}
              onChange={handleOnChangeRegister}
            />
            <Input
              className={styles.form_register__item__submid_username}
              placeholder={t("register_username")}
              name="username"
              value={dataRegister.username}
              onChange={handleOnChangeRegister}
            />
            <Input.Password
              className={styles.form_register__item__submid_password}
              placeholder={t("register_password")}
              name="password"
              value={dataRegister.password}
              onChange={handleOnChangeRegister}
            />
            <Button
              loading={dataRegister.isLoadingSubmit}
              className={styles.form_register__item_btn_submid}
              onClick={handleRegisterSubmid}>
              {t("register")}
            </Button>
            <p className={styles.form_register__item__submid__clause}>
              {t("register_desc")} <Link>{t("register_clause")}</Link>{" "}
              {t("and")} <Link>{t("privacy_policy")}.</Link>{" "}
            </p>
          </div>
          <div className={styles.form_register__item__orther}>
            <p className={styles.form_register__item__orther__title}>
              {t("has_account")} <Link to={URL.AUTH.LOGIN}>{t("login")}</Link>
            </p>
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

export default Register;
