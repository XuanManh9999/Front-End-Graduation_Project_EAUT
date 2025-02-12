import React, { useState } from 'react'
import styles from "./ForgotPassword.module.scss"
import { Input, Button } from "antd"
import classNames from 'classnames'
import { useTranslation } from "react-i18next";
import URL from '../../../utils/url-route';
import { Link } from 'react-router-dom';
import ModalCustom from '../../share/ModalCustom';


function ForgotPassword() {
    const [isShowOTP, setIsShowOPT] = useState(false)
    const { t } = useTranslation();



    const handleForgotPassword = () => {
        setIsShowOPT(true)
    }

    const handleOnCancel = () => {
        setIsShowOPT(false)
    }

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
                    <h1 className={styles.register__item__title}>{t('forgot_password')}</h1>
                    <div class={styles.form_forgot_item_sub}>
                        <Input placeholder={t('input_email')} />
                        <Button onClick={handleForgotPassword}>{t('forgot_password')}</Button>
                    </div>
                    <div class={styles.form_forgot_password__orther}>
                        <div className={styles.form_forgot_password__orther__login}>
                            <p>{t('has_account')}</p>
                            <Link to={URL.AUTH.LOGIN}>{t("login")}</Link>
                        </div>
                        <div className={styles.form_forgot_password__orther__register}>
                            <p>{t("not_account")} </p>
                            <Link to={URL.AUTH.REGISTER}>{t("register")}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <ModalCustom typeModal={"otp"} title={"Xác thực OTP"} isOpen={isShowOTP} handleCancel={handleOnCancel} width={350} />
        </>
    )
}
export default ForgotPassword