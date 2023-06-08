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
            <Link to="/action" style={{ fontSize: 20 }}>
                Hoạt động
            </Link>
        ),
        key: 'action',
    },
    {
        key: 'certification',
        label: (
            <Link to="/certification" style={{ fontSize: 20 }}>
                Dự án
            </Link>
        ),
        children: [
            {
                key: 'project:1',
                label: (
                    <Link to="/project/doing" style={{ fontSize: 20 }}>
                        Đang làm
                    </Link>
                ),
            },
            {
                key: 'project:2',
                label: (
                    <Link to="/project/done" style={{ fontSize: 20 }}>
                        Đã hoàn thành
                    </Link>
                ),
            },
        ],
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
                About
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
                <Link to="/" className={cx('logo')}>
                    <Image src={images.logo} alt="project" />
                </Link>
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
                        <>
                            <Link>Tran Viet Tuan</Link>
                            <Menu items={userMenu}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU"
                                    alt="Nguyen Van A"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button text to="/login">
                                Sign in
                            </Button>
                            <Button primary to="/register" rightIcon={<FontAwesomeIcon icon={faArrowRightLong} />}>
                                Sign up
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
