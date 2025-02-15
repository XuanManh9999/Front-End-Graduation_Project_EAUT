import React from 'react'
import styles from "./CourseProductList.module.scss"
import classNames from 'classnames'
import CourseProductItem from './CourseProductItem'


function CourseProductList() {
    return (
        <div className={styles.course_product_list}>
            <h4 className={styles.course_product_list__title}>Các khóa học hàng đầu về Tiếng Việt</h4>
            <div className={styles.course_product_list__container}>
                <CourseProductItem />
                <CourseProductItem />
                <CourseProductItem />
                <CourseProductItem />
                <CourseProductItem />
                <CourseProductItem />
            </div>
        </div>
    )
}
export default CourseProductList