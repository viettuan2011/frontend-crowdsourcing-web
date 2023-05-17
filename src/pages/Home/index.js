import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const listContent = [
    {
        tag: 'Nodejs',
        content: 'W3Schools is optimized for learning and training.',
    },
    {
        tag: 'PHP',
        content: 'Examples might be simplified to improve reading and learning. ',
    },
    {
        tag: 'ReactJs',
        content: 'Tutorials, references, and examples are constantly reviewed to avoid errors',
    },
    {
        tag: 'Python',
        content: 'but we cannot warrant full correctness of all content. While using W3Schools, ',
    },
    {
        tag: 'Ajax',
        content: 'you agree to have read and accepted our terms of use, cookie and privacy policy.',
    },
    {
        tag: '',
        content: 'you agree to have read and accepted our terms of use, cookie and privacy policy.',
    },
];

function Home() {
    const [tags, setTags] = useState([]);
    const [content, setContent] = useState(listContent[0].content);

    const handleContent = (valueContent, valueTag) => {
        if (valueTag !== '') {
            setTags([valueTag]);
        } else {
            setTags([]);
        }

        setContent(valueContent);
    };

    const removeTags = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };
    const addTags = (e) => {
        if (e.key === 'Enter') {
            setTags([...tags, e.target.value]);
            e.target.value = '';
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card')}>
                <div className={cx('tags-input')}>
                    <ul>
                        {tags.map((tag, index) => (
                            <li key={index}>
                                <span>{tag}</span>
                                <span className={cx('material-icons')} onClick={() => removeTags(index)}>
                                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                </span>
                            </li>
                        ))}
                    </ul>
                    <input type="text" placeholder="Press enter to add tags" onKeyUp={addTags} />
                </div>
                <div className={cx('content')}>{content}</div>
            </div>
            <div className={cx('list-content')}>
                <table>
                    <thead>
                        <tr>
                            <th>Content</th>
                            <th>Tag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listContent.map((item, index) => (
                            <tr className={cx('item-content')}>
                                <td
                                    className={cx('content')}
                                    key={index}
                                    onClick={() => handleContent(item.content, item.tag)}
                                >
                                    {item.content}
                                </td>
                                <td className={cx('tag')}>{item.tag}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
