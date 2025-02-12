import React from "react";
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
}) {
  return (
    <>

      <Modal
        title={<h1 className={styles.title__modal_custom}>{`${title}`}</h1>}
        open={isOpen}
        centered
        footer={isShowFooter}
        onCancel={handleCancel}
        width={width}
      >
        {typeModal == "otp" ?
          <div className={styles.modal__otp} >
            <Input.OTP style={{
              marginTop: "5px"
            }} className={styles.modal__otp__input} />
            <div className={styles.modal_otp__option}>
              <Button className={styles.modal__otp__submid} >Xác nhận</Button>
            </div>
          </div>
          : <ul className={styles.modal__language}>
            {languages.map((item) => (
              <li
                onClick={() => handleOnClickItem(item)}
                key={item.id}
                className={`${localStorage.getItem("i18nextLng") === item.id
                  ? classNames(styles.modal__language__item, styles.active)
                  : classNames(styles.modal__language__item)
                  }`}
              >
                {item.value}
              </li>
            ))}
          </ul>}

      </Modal>

    </>
  );
}

export default ModalCustom;
