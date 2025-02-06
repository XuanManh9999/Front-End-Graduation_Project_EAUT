import React from "react";
import { Modal } from "antd";
import classNames from "classnames";
import styles from "./ModalCustom.module.scss";
import { languages } from "../../../data/common.jsx";
// , styles.active
function ModalCustom({
  typeModal,
  title,
  isOpen,
  handleCancel,
  isShowFooter,
  handleOnClickItem,
}) {
  return (
    <Modal
      title={<h1 className={styles.title__modal_custom}>{`${title}`}</h1>}
      open={isOpen}
      centered
      footer={isShowFooter}
      onCancel={handleCancel}
    >
      <ul className={styles.modal__language}>
        {languages.map((item) => (
          <li
            onClick={() => handleOnClickItem(item)}
            key={item.id}
            className={`${
              localStorage.getItem("i18nextLng") === item.id
                ? classNames(styles.modal__language__item, styles.active)
                : classNames(styles.modal__language__item)
            }`}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </Modal>
  );
}

export default ModalCustom;
