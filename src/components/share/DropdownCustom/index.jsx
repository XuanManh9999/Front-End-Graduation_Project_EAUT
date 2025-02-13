import React, { useState } from 'react';
import { Dropdown, Space } from 'antd';
import styles from "./DropdownCustom.module.scss";

// Dữ liệu của menu dropdown
const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];

function DropdownCustom() {
    return (
        <Space direction="vertical">
            <Dropdown
                menu={{ items }}
                placement="bottom"
                arrow
            >
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                </a>
            </Dropdown>
        </Space>
    );
}

export default DropdownCustom;
