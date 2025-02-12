import React, { useState } from "react";
import styles from "./Current.module.scss";
function Current() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin == true ? <div></div> : <div className={styles.home_page_not__login}>

        <div className={styles.home_page_not__login__sale}>
          <h1 className={styles.home_page_not__login__title}>Tiếp cận phong cách học tập mới mẻ, hiện đại chỉ có tại — CODE ZEN</h1>
          <ul className={styles.home_page_not__login__outstanding}>
            <li className={styles.home_page_not__login__item}>Xây dựng bộ kỹ năng của bạn với các khóa học video với rất nhiều chủ đề</li>
            <li className={styles.home_page_not__login__item}>Tùy chỉnh trải nghiệm của bạn với tính năng tối ưu cho việc học</li>
            <li className={styles.home_page_not__login__item}>Nền tảng có thể truy cập từ bất kỳ thiết bị nào chỉ cần có kết nối với internet</li>
            <li className={styles.home_page_not__login__item}>Phát triển các kĩ năng, xây dựng nghề nghiệp vững chắc cho tương lai</li>
          </ul>
          <img className={styles.home_page_not__login_img} src="https://s.udemycdn.com/mobile/default-banner-desktop-1x.jpg" alt="img" />
        </div>

      </div>}
    </>
  )
}

export default Current;
