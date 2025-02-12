import React from "react";
import { Input, Button } from 'antd'
import { Link } from "react-router-dom";
import styles from "./Register.module.scss";
import { useTranslation } from "react-i18next";
import URL from "../../../utils/url-route";
function Register() {
  const { t } = useTranslation();
  return <div class={styles.form_register}>
    <div class={styles.form_register__item}>
      <img
        src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
        alt="avatar"
      />
    </div>
    <div class={styles.form_register__item}>
      <h1 className={styles.register__item__title}>{t('register_title')}</h1>
      <div className={styles.form_register__item__submid}>
        <Input className={styles.form_register__item__submid_email} placeholder={t('register_email')} />
        <Input className={styles.form_register__item__submid_username} placeholder={t('register_username')} />
        <Input.Password className={styles.form_register__item__submid_password} placeholder={t('register_password')} />
        <Button className={styles.form_register__item_btn_submid}>{t('register')}</Button>
        <p className={styles.form_register__item__submid__clause}>{t('register_desc')} <Link>{t('register_clause')}</Link> {t('and')} <Link>{t('privacy_policy')}.</Link> </p>
      </div>
      <div className={styles.form_register__item__orther}>
        <p className={styles.form_register__item__orther__title}>{t('has_account')} <Link to={URL.AUTH.LOGIN}>{t('login')}</Link></p>
      </div>
    </div>
  </div>;
}

export default Register;
