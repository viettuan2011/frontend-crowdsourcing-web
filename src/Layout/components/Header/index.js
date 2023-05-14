import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCoins, faGear, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { Menu as MenuHeader } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(styles);

const itemMenus = [
    {
        label: (
            <Link to="/training" style={{ fontSize: 20 }}>
                Luyện tập
            </Link>
        ),
        key: 'training',
    },
    {
        key: 'certification',
        label: (
            <Link to="/certification" style={{ fontSize: 20 }}>
                Chứng chỉ
            </Link>
        ),
    },
    {
        key: 'feedback',
        label: (
            <a
                style={{ fontSize: 20 }}
                href="https://forms.gle/szKhopPu395Hv4mS8"
                target="_blank"
                rel="noopener noreferrer"
            >
                Khảo sát
            </a>
        ),
    },
    {
        key: 'about',
        label: (
            <Link to="/about" style={{ fontSize: 20 }}>
                Về chúng tôi
            </Link>
        ),
    },
];

function Header() {
    const [currentMenuItem, setCurrentMenuItem] = useState('mail');
    const HandleMenuItem = (e) => {
        setCurrentMenuItem(e.key);
    };
    const currentUser = false;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@username',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Image src={images.logo} alt="project" />
                </div>
                <div className={cx('actions')}>
                    <MenuHeader
                        onClick={HandleMenuItem}
                        selectedKeys={[currentMenuItem]}
                        mode="horizontal"
                        items={itemMenus}
                    />
                </div>

                <div className={cx('auth')}>
                    {currentUser ? (
                        <Menu items={userMenu}>
                            <Image
                                className={cx('user-avatar')}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU"
                                alt="Nguyen Van A"
                            />
                        </Menu>
                    ) : (
                        <>
                            <Button primary to="/login">
                                Login
                            </Button>
                            <Button text to="/register" rightIcon={<FontAwesomeIcon icon={faArrowRightLong} />}>
                                Register
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
