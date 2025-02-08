import React from "react";
import styles from "./Login.module.scss";
import { Input } from "antd";
import classNames from "classnames";
function Login() {
  return (
    <div className={styles.login__form}>
      <div className={styles.login__item}>
        <img
          src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
          alt="avatar"
        />
      </div>
      <div className={styles.login__item}>
        <h1 className={styles.login__item__title}>
          Đăng nhập để tiếp tục hành trình học tập của bạn
        </h1>
        <div className={styles.login__item__form}>
            <Input/>
        </div>
      </div>
    </div>
  );
}

export default Login;
