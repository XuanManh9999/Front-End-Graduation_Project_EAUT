import React, { useEffect, useState } from "react";
import { Modal, Input, Button } from "antd";
import classNames from "classnames";
import styles from "./ModalCustom.module.scss";
import { languages } from "../../../data/common.jsx";
function ModalCustom({
  width,
  typeModal,
  title,
  isOpen,
  handleCancel,
  isShowFooter = null,
  handleOnClickItem,
  setDataOtpSubmit,
  handleOnSubmitOTP,
  dataOtpSubmit,
}) {
  const [timeLeft, setTimeLeft] = useState(90); // 90s đếm ngược

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(90); // Reset thời gian khi mở lại modal
      return;
    }

    if (timeLeft === 0) {
      handleCancel(); // Tự động đóng modal khi hết thời gian
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer); // Cleanup khi component unmount
  }, [isOpen, timeLeft, handleCancel]);

  return (
    <>
      <Modal
        title={<h1 className={styles.title__modal_custom}>{`${title}`}</h1>}
        open={isOpen}
        centered
        footer={isShowFooter}
        onCancel={handleCancel}
        width={width}>
        {typeModal == "otp" ? (
          <div className={styles.modal__otp}>
            <Input.OTP
              style={{
                marginTop: "5px",
              }}
              className={styles.modal__otp__input}
              length={6}
              autoFocus
              onChange={(text) =>
                setDataOtpSubmit((prev) => ({
                  ...prev,
                  otp: text,
                }))
              }
            />
            <p
              className="text-gray-600 text-sm mt-2"
              style={{ marginTop: "5px" }}>
              Mã OTP hết hạn sau:{" "}
              <span className="font-semibold text-red-500">{timeLeft}s</span>
            </p>
            <div className={styles.modal_otp__option}>
              <Button
                className={styles.modal__otp__submid}
                onClick={handleOnSubmitOTP}
                loading={dataOtpSubmit.isLoading}>
                Xác nhận
              </Button>
            </div>
          </div>
        ) : (
          <ul className={styles.modal__language}>
            {languages.map((item) => (
              <li
                onClick={() => handleOnClickItem(item)}
                key={item.id}
                className={`${
                  localStorage.getItem("i18nextLng") === item.id
                    ? classNames(styles.modal__language__item, styles.active)
                    : classNames(styles.modal__language__item)
                }`}>
                {item.value}
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </>
  );
}

export default ModalCustom;
