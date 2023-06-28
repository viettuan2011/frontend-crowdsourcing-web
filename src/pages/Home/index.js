import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import useAxios from '~/utils/useAxios';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Home() {
    let api = useAxios();

    useEffect(() => {
        getNotes();
    }, []);

    let getNotes = async () => {
        let response = await api.get('/api/projects/projects');

        console.log(response.data);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h1>DỊCH VỤ GÁN NHÃN CHO DỮ LIỆU CHẤT LƯỢNG CAO</h1>
                    <p>
                        Gán nhãn dữ liệu là một công đoạn thiết yếu trong việc phát triển mọi hệ thống học máy và trí
                        tuệ nhân tạo (AI). Hãy để chúng tôi giúp bạn gán nhãn dữ liệu chính xác và chất lượng cao với
                        giá cả phải chăng.
                    </p>
                    <div className={cx('action')}>
                        <Button rounded large>
                            Quick start
                        </Button>
                    </div>
                </div>

                <Image className={cx('image')} src={images.content} alt="project" />
            </div>
        </div>
    );
}

export default Home;
