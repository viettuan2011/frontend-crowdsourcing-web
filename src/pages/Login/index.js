import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import React, { useContext } from 'react';
import AuthContext from '~/context/AuthContext';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Login() {
    const { loginUser } = useContext(AuthContext);

    return (
        <div className={cx('wrapper')}>
            <form onSubmit={loginUser}>
                <div className={cx('card')}>
                    <div class={cx('imgcontainer')}>
                        <Image src={images.logo} alt="project" className={cx('logo')} />
                    </div>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Enter Username" />
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter Password" />
                    <br />
                    <button type="submit" className={cx('button-submit')}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
