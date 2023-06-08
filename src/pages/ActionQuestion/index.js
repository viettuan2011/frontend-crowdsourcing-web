import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './ActionQuestion.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const listContent = [
    {
        id: 1,
        tag: [],
        content:
            'W3Schools is optimized for learning and training.but we cannot warrant full correctness of all content. While using W3Schools,but we cannot warrant full correctness of all content. While using W3Schools,but we cannot warrant full correctness of all content. While using W3Schools,but we cannot warrant full correctness of all content. While using W3Schools,but we cannot warrant full correctness of all content. While using W3Schools,but we cannot warrant full correctness of all content. While using W3Schools,but we cannot warrant full correctness of all content. While using W3Schools,',
    },
    {
        id: 2,
        tag: [],
        content: 'Examples might be simplified to improve reading and learning. ',
    },
    {
        id: 3,
        tag: [],
        content: 'Tutorials, references, and examples are constantly reviewed to avoid errors',
    },
    {
        id: 4,
        tag: [],
        content: 'but we cannot warrant full correctness of all content. While using W3Schools, ',
    },
    {
        id: 5,
        tag: [],
        content: 'you agree to have read and accepted our terms of use, cookie and privacy policy.',
    },
    {
        id: 6,
        tag: [],
        content: 'you agree to have read and accepted our terms of use, cookie and privacy policy.',
    },
    {
        id: 7,
        tag: [],
        content: 'you agree to have read and accepted our terms of use, cookie and privacy policy.',
    },
    {
        id: 8,
        tag: [],
        content: 'you agree to have read and accepted our terms of use, cookie and privacy policy.',
    },
    {
        id: 9,
        tag: [],
        content: 'you agree to have read and accepted our terms of use, cookie and privacy policy.',
    },
    {
        id: 10,
        tag: [],
        content: 'you agree to have read and accepted our terms of use, cookie and privacy policy.',
    },
    {
        id: 11,
        tag: [],
        content: 'you agree to have read and accepted our terms of use, cookie and privacy policy.',
    },
    {
        id: 12,
        tag: [],
        content: 'you agree to have read and accepted our terms of use, cookie and privacy policy.',
    },
    {
        id: 13,
        tag: [],
        content: 'you agree to have read and accepted our terms of use, cookie and privacy policy.',
    },
];

const listLabel = ['Ajax', 'Nodejs', 'Python', 'PHP'];

function ActionQuestion() {
    const [id, setId] = useState(1);
    const [tags, setTags] = useState(listContent[0].tag);
    const [content, setContent] = useState(listContent[0].content);

    const handleContent = (id, valueContent, listTag) => {
        if (listTag.length !== 0) {
            setTags(listTag);
        } else {
            setTags([]);
        }
        setId(id);
        setContent(valueContent);
    };

    const removeTags = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
        let result = listContent.find((item) => item.id === id);
        result.tag.splice(
            result.tag.findIndex((tag) => tag === tagToRemove),
            1,
        );
        //console.log(result.tag);
    };
    const addTags = (e) => {
        if (!tags.includes(e.target.value)) {
            setTags([...tags, e.target.value]);
            let result = listContent.find((item) => item.id === id);
            result.tag.push(e.target.value);
            console.log(listContent);
        }
        e.target.value = '';
    };

    const handleRightItem = () => {
        if (id !== listContent.length) {
            let nextItem = listContent.find((item) => item.id === id + 1);
            setId(id + 1);
            setTags(nextItem.tag);
            setContent(nextItem.content);
        }
    };
    const handleLeftItem = () => {
        if (id !== 1) {
            let nextItem = listContent.find((item) => item.id === id - 1);
            setId(id - 1);
            setTags(nextItem.tag);
            setContent(nextItem.content);
        }
    };
    // useEffect(() => {
    //     let result = listContent.find((item) => item.id === id);
    //     result.tag = tags;
    // }, [tags]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('card')}>
                    <div className={cx('card-title')}>
                        <ul>
                            {tags.map((tag, index) => (
                                <li key={index} className={cx('tag')}>
                                    <span className={cx('tag-content')}>{tag}</span>
                                    <span className={cx('tag-icon')} onClick={() => removeTags(tag)}>
                                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <select className={cx('card-select-tag')} onChange={(e) => addTags(e)}>
                            <option value="">Select label</option>
                            {listLabel.map((label, index) => (
                                <option key={index} value={label}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('card-content')}>{content}</div>
                    <div className={cx('card-ActionQuestion')}>
                        <Button
                            className={cx('button-left')}
                            outline
                            leftIcon={<FontAwesomeIcon icon={faArrowLeftLong} />}
                            onClick={handleLeftItem}
                        >
                            Truoc
                        </Button>
                        <Button
                            className={cx('button-right')}
                            outline
                            rightIcon={<FontAwesomeIcon icon={faArrowRightLong} />}
                            onClick={handleRightItem}
                        >
                            Tiep
                        </Button>
                    </div>
                </div>
                <div className={cx('table-wrapper')}>
                    <div className={cx('table-title')}>
                        <label>ID</label>
                        <label>Tag</label>
                    </div>
                    <div className={cx('table')}>
                        <table>
                            <tbody>
                                {listContent.map((item) => (
                                    <tr key={item.id} className={cx('table-content')}>
                                        <td
                                            className={cx(`${id === item.id ? 'col-content-active' : 'col-content'}`)}
                                            onClick={() => handleContent(item.id, item.content, item.tag)}
                                        >
                                            {item.id}
                                        </td>
                                        <td className={cx('col-tag')}>
                                            {item.tag.map((item, index) => (
                                                <span key={index} className={cx('col-tag-label')}>
                                                    {item}
                                                </span>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={cx('action')}>
                        <Button outline>Huy</Button>
                        <Button primary>Hoan thanh</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionQuestion;
