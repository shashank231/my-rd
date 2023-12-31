
import { connect } from 'react-redux'
import { useEffect, useState } from "react";
import React from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, DatePicker, Space, Select } from 'antd';
import styles from "./tmc.module.scss";
const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

const TMCComponent = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const menuTop = (
    <Menu 
      onClick={onClick} 
      selectedKeys={[current]} 
      mode="horizontal" 
      items={items} 
    />
  );

  const selectComp = (
    <Space direction="vertical">
        <h5>Schedulers(Queue)</h5>
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
            {
                value: '1',
                label: 'Not Identified',
            },
            {
                value: '2',
                label: 'Closed',
            },
            {
                value: '3',
                label: 'Communicated',
            },
            {
                value: '4',
                label: 'Identified',
            },
            {
                value: '5',
                label: 'Resolved',
            },
            {
                value: '6',
                label: 'Cancelled',
            },
            ]}
        />
    </Space>
  );

  const datePicker = (
    <Space direction="vertical">
      <h5>Date</h5>
      <DatePicker onChange={onChange} />
    </Space>
  );

  return (
    <React.Fragment>
        {menuTop}
        <div className={styles.div1}>
          {datePicker}
          {selectComp}
        </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
});
   
export const TMC = connect(mapStateToProps, {})(TMCComponent);


