import React from "react";
import styles from "./DrawerCustom.module.scss";
import DrawerCustomItem from "./DrawerCustomItem";
import classNames from "classnames";
import { Drawer, Button } from "antd";

function DrawerCustom({
  title = "Title",
  open = false,
  placement = "right",
  onClose,
}) {
  return (
    <Drawer
      title={<h3 className={styles.drawer_cart__title}>{title}</h3>}
      placement={placement}
      onClose={onClose}
      open={open}
      key={placement}
      className={styles.drawer_cart}>
      <div className={styles.drawer_cart__list_item}>
        <DrawerCustomItem />
        <DrawerCustomItem />
        <DrawerCustomItem />
        <DrawerCustomItem />
        <DrawerCustomItem />
        <DrawerCustomItem />
        <div className={styles.drawer_cart__list_item__total}>
          <p className={styles.drawer_cart__list_item__total__price}>
            Tạm tính:
            <strong> 195.000 đ</strong>
          </p>
        </div>
      </div>
      <div className={styles.drawer_cart__footer}>
        <Button className={styles.drawer_cart__footer__cart_detail}>
          Xem giỏ hàng
        </Button>
      </div>
    </Drawer>
  );
}
export default DrawerCustom;
