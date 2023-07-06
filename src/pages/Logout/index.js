import classNames from 'classnames/bind';
import styles from './Logout.module.scss';
import React, { useContext } from 'react';
import AuthContext from '~/context/AuthContext';

const cx = classNames.bind(styles);
function Logout() {
    const { logoutUser } = useContext(AuthContext);

    return (
        <div className={cx('wrapper')}>
            <h1>Bạn muốn đăng xuất ?</h1>
            <button className={cx('button-logout')} onClick={logoutUser}>
                Đăng xuất
            </button>
            <button className={cx('button-cancel')}>Quay lại</button>
        </div>
    );
}

export default Logout;
