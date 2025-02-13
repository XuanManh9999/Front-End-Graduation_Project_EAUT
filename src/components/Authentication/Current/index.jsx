import React, { useState } from "react";
import styles from "./Current.module.scss";
import { useTranslation } from "react-i18next";
function Current() {
  const { t } = useTranslation()
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin == true ? <div></div> : <div className={styles.home_page_not__login}>
        <img className={styles.home_page_not__login_img} src="https://s.udemycdn.com/mobile/default-banner-desktop-1x.jpg" alt="img" />

        <div className={styles.home_page_not__login__sale}>
          <h1 className={styles.home_page_not__login__title}>{t('curr_home_non_login__title')}</h1>
          <ul className={styles.home_page_not__login__outstanding}>
            <li className={styles.home_page_not__login__item}>{t('curr_home_non_login_op1')}</li>
            <li className={styles.home_page_not__login__item}>{t('curr_home_non_login_op2')}</li>
            <li className={styles.home_page_not__login__item}>{t('curr_home_non_login_op3')}</li>
            <li className={styles.home_page_not__login__item}>{t('curr_home_non_login_op4')}</li>
          </ul>
        </div>

      </div>}
    </>
  )
}

export default Current;
