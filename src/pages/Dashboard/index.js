import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const listProject = [
    {
        id: 1,
        name: 'project 1',
        description: 'lam bai tap ve nha 1',
        category: {
            id: 2,
            name: 'Text generation',
        },
        created_at: '2023-06-17T00:46:28.676315Z',
        size: 2,
        author: 1,
    },
    {
        id: 2,
        name: 'project 2',
        description: 'lam bai tap ve nha 2',
        category: {
            id: 1,
            name: 'Text generation',
        },
        created_at: '2023-06-17T00:46:28.676315Z',
        size: 2,
        author: 1,
    },
    {
        id: 3,
        name: 'project 3',
        description: 'lam bai tap ve nha 3',
        category: {
            id: 3,
            name: 'Text generation',
        },
        created_at: '2023-06-17T00:46:28.676315Z',
        size: 2,
        author: 1,
    },
    {
        id: 4,
        name: 'project 4',
        description:
            'lam bai tap ve nha 4 lam bai tap ve nha 4lam bai tap ve nha 4lam bai tap ve nha 4lam bai tap ve nha 4',
        category: {
            id: 1,
            name: 'Text generation',
        },
        created_at: '2023-06-17T00:46:28.676315Z',
        size: 2,
        author: 1,
    },
    {
        id: 5,
        name: 'project 5',
        description: 'lam bai tap ve nha 5',
        category: {
            id: 1,
            name: 'Text generation',
        },
        created_at: '2023-06-17T00:46:28.676315Z',
        size: 2,
        author: 1,
    },
];

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

function Dashboard() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>Danh sách dự án đã tham gia</div>
                <div className={cx('list-project')}>
                    {listProject.map((project, index) => (
                        <Link
                            key={index}
                            className={cx('project')}
                            to={{
                                pathname:
                                    project.category.id === 1
                                        ? `/action/${project.id}`
                                        : project.category.id === 2
                                        ? `/actiontest/${project.id}`
                                        : `/action/RealisticLabeling/${project.id}`,
                                state: { project },
                            }}
                        >
                            <div className={cx('project-card')}>
                                <div>
                                    <h3>{project.name}</h3>
                                    <div className={cx('separator')} />
                                    <label>{project.description}</label>
                                </div>
                                <h5>Ngày tạo {formatDate(project.created_at)}</h5>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
