import React, { useState } from "react";
import styles from "./Current.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Progress, Tooltip } from "antd"
import { MdOutlinePlayCircle } from "react-icons/md";
function Current() {
  const { t } = useTranslation()
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? <div className={styles.home_page_login}>

        <div className={styles.home_page_login__acount}>
          <div className={styles.home_page_login__welcome}>
            <img src="https://img-c.udemycdn.com/user/100x100/285978675_5cf5.jpg" alt="avatar" />
            <div className={styles.home_page_login__acount}>
              <h2>Chào mừng Nguyễn Xuân Mạnh trở lại!</h2>
              <span>Lập trình viên web</span>
            </div>
          </div>
          <div className={styles.home_page_login__content__my}>
            <div className={styles.home_page_login__content__my__title}>
              <h2 >Hãy bắt đầu học nào</h2>
              <Link>Học tập</Link>
            </div>
            <div className={styles.home_page_login__content__my__learned}>
              <div className={styles.home_page_login__content__my__learned__item}>
                <div className={styles.home_page_login__content__my__learned__item__left}>
                  <img src="https://mp4-c.udemycdn.com/2023-05-11_16-53-14-6a8646e3675819633ceca64c0c02fa94/2/thumb-1.jpg?Expires=1739473818&Signature=fX1eYPFIvsCOmKXmgICuS9yG0cDbpIOJk7hT2kVK-GyNGIUxKI~hz4BGxSsRxBL9Mi5F95Bl9hFCvEi4V5CA-~uw1CpVibloH3A-YlmXxL31iu9a0KwYX9wAuHLJNA2RtaQ6qLFhKZ51w2RmYjPQJ8ClJ6eYHxkK4uA8LRdJ~zYHS263s0G7959Q~F5V3xdF0LQ~18d9-hKqyjwynRYqNxmVG2GBuQ8GFrjpzTR4d6DcQywRwgBIEXH9nHVReiiEhMS3lOJ3Nr7xW7nTSJ6YdkKk4XGvb2HBbRPi1HtmXXxPV1wB5IeqFFQ3YPsO-GQppGQc0zc7VnspDCv3SUFERg__&Key-Pair-Id=K3MG148K9RIRF4" alt="" />
                  <div className={styles.home_page_login__content__my__learned__item__left__overlay}></div>
                  <MdOutlinePlayCircle className={styles.home_page_login__content__my__learned__item__left__icon_play} />
                </div>
                <div className={styles.home_page_login__content__my__learned__item__right}>
                  <div className={styles.home_page_login__content__my__learned__item__right__top}>
                    <strong className={styles.home_page_login__content__my__learned__item__right__name_course}>Thực chiến microservice với Spring Boot  </strong>
                    <p className={styles.home_page_login__content__my__learned__item__right__title}>3. 25 phút hiểu rõ về Micro service  </p>
                  </div>
                  <div className={styles.home_page_login__content__my__learned__item__right__bot}>
                    <p><strong>Bài giảng: còn 25 phút</strong></p>
                      <Progress percent={0} />
                  </div>
                </div>
              </div>
              <div className={styles.home_page_login__content__my__learned__item}>
                <div className={styles.home_page_login__content__my__learned__item__left}>
                  <img src="https://mp4-c.udemycdn.com/2023-05-11_16-53-14-6a8646e3675819633ceca64c0c02fa94/2/thumb-1.jpg?Expires=1739473818&Signature=fX1eYPFIvsCOmKXmgICuS9yG0cDbpIOJk7hT2kVK-GyNGIUxKI~hz4BGxSsRxBL9Mi5F95Bl9hFCvEi4V5CA-~uw1CpVibloH3A-YlmXxL31iu9a0KwYX9wAuHLJNA2RtaQ6qLFhKZ51w2RmYjPQJ8ClJ6eYHxkK4uA8LRdJ~zYHS263s0G7959Q~F5V3xdF0LQ~18d9-hKqyjwynRYqNxmVG2GBuQ8GFrjpzTR4d6DcQywRwgBIEXH9nHVReiiEhMS3lOJ3Nr7xW7nTSJ6YdkKk4XGvb2HBbRPi1HtmXXxPV1wB5IeqFFQ3YPsO-GQppGQc0zc7VnspDCv3SUFERg__&Key-Pair-Id=K3MG148K9RIRF4" alt="" />
                  <div className={styles.home_page_login__content__my__learned__item__left__overlay}></div>
                  <MdOutlinePlayCircle className={styles.home_page_login__content__my__learned__item__left__icon_play} />
                </div>
                <div className={styles.home_page_login__content__my__learned__item__right}>
                  <div className={styles.home_page_login__content__my__learned__item__right__top}>
                    <strong className={styles.home_page_login__content__my__learned__item__right__name_course}>Thực chiến microservice với Spring Boot</strong>
                    <p className={styles.home_page_login__content__my__learned__item__right__title}>3. 25 phút hiểu rõ về Micro service</p>
                  </div>
                  <div className={styles.home_page_login__content__my__learned__item__right__bot}>
                    <p><strong>Bài giảng: còn 25 phút</strong></p>
                    <Progress percent={0} />
                  </div>
                </div>
              </div>
              <div className={styles.home_page_login__content__my__learned__item}>
                <div className={styles.home_page_login__content__my__learned__item__left}>
                  <img src="https://mp4-c.udemycdn.com/2023-05-11_16-53-14-6a8646e3675819633ceca64c0c02fa94/2/thumb-1.jpg?Expires=1739473818&Signature=fX1eYPFIvsCOmKXmgICuS9yG0cDbpIOJk7hT2kVK-GyNGIUxKI~hz4BGxSsRxBL9Mi5F95Bl9hFCvEi4V5CA-~uw1CpVibloH3A-YlmXxL31iu9a0KwYX9wAuHLJNA2RtaQ6qLFhKZ51w2RmYjPQJ8ClJ6eYHxkK4uA8LRdJ~zYHS263s0G7959Q~F5V3xdF0LQ~18d9-hKqyjwynRYqNxmVG2GBuQ8GFrjpzTR4d6DcQywRwgBIEXH9nHVReiiEhMS3lOJ3Nr7xW7nTSJ6YdkKk4XGvb2HBbRPi1HtmXXxPV1wB5IeqFFQ3YPsO-GQppGQc0zc7VnspDCv3SUFERg__&Key-Pair-Id=K3MG148K9RIRF4" alt="" />
                  <div className={styles.home_page_login__content__my__learned__item__left__overlay}></div>
                  <MdOutlinePlayCircle className={styles.home_page_login__content__my__learned__item__left__icon_play} />
                </div>
                <div className={styles.home_page_login__content__my__learned__item__right}>
                  <div className={styles.home_page_login__content__my__learned__item__right__top}>
                    <strong className={styles.home_page_login__content__my__learned__item__right__name_course}>Thực chiến microservice với Spring Boot</strong>
                    <p className={styles.home_page_login__content__my__learned__item__right__title}>3. 25 phút hiểu rõ về Micro service</p>
                  </div>
                  <div className={styles.home_page_login__content__my__learned__item__right__bot}>
                    <p><strong>Bài giảng: còn 25 phút</strong></p>
                    <Progress percent={0} />
                  </div>
                </div>
              </div>
              <div className={styles.home_page_login__content__my__learned__item}>
                <div className={styles.home_page_login__content__my__learned__item__left}>
                  <img src="https://mp4-c.udemycdn.com/2023-05-11_16-53-14-6a8646e3675819633ceca64c0c02fa94/2/thumb-1.jpg?Expires=1739473818&Signature=fX1eYPFIvsCOmKXmgICuS9yG0cDbpIOJk7hT2kVK-GyNGIUxKI~hz4BGxSsRxBL9Mi5F95Bl9hFCvEi4V5CA-~uw1CpVibloH3A-YlmXxL31iu9a0KwYX9wAuHLJNA2RtaQ6qLFhKZ51w2RmYjPQJ8ClJ6eYHxkK4uA8LRdJ~zYHS263s0G7959Q~F5V3xdF0LQ~18d9-hKqyjwynRYqNxmVG2GBuQ8GFrjpzTR4d6DcQywRwgBIEXH9nHVReiiEhMS3lOJ3Nr7xW7nTSJ6YdkKk4XGvb2HBbRPi1HtmXXxPV1wB5IeqFFQ3YPsO-GQppGQc0zc7VnspDCv3SUFERg__&Key-Pair-Id=K3MG148K9RIRF4" alt="" />
                  <div className={styles.home_page_login__content__my__learned__item__left__overlay}></div>
                  <MdOutlinePlayCircle className={styles.home_page_login__content__my__learned__item__left__icon_play} />
                </div>
                <div className={styles.home_page_login__content__my__learned__item__right}>
                  <div className={styles.home_page_login__content__my__learned__item__right__top}>
                    <strong className={styles.home_page_login__content__my__learned__item__right__name_course}>Thực chiến microservice với Spring Boot</strong>
                    <p className={styles.home_page_login__content__my__learned__item__right__title}>3. 25 phút hiểu rõ về Micro service</p>
                  </div>
                  <div className={styles.home_page_login__content__my__learned__item__right__bot}>
                    <p><strong>Bài giảng: còn 25 phút</strong></p>
                    <Progress percent={0} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div> : <div className={styles.home_page_not__login}>
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
