import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './Checkbox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

console.log(styles);

function Checkbox({ checked, children, ...rest }) {
  return (
    <div className={cx('checkbox')}>
      <label>
        <input type="checkbox" checked={checked} {...rest}></input>
        <div className={cx('icon')}>
          {checked ? (
            <MdCheckBox className={cx('checked')}></MdCheckBox>
          ) : (
            <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default Checkbox;
