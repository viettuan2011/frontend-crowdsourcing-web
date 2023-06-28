import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faArrowRightLong,
    faArrowLeftLong,
    faAngleLeft,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './ActionQuestion.module.scss';
import Button from '~/components/Button';
import useAxios from '~/utils/useAxios';

const cx = classNames.bind(styles);

const listContent = [
    {
        id: 1,
        tag: 'Yes',
        question:
            'How old are you ? How old are you ? How old are you ? How old are you ? How old are you ? How old are you ? How old are you ?How old are you ?How old are you ? How old are you ? How old are you ?',
        answer: 'twenty two twenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty two twenty two twenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty two',
    },
    {
        id: 2,
        tag: null,
        question: '2How old are you ?',
        answer: '2twenty two twenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty two',
    },
    {
        id: 3,
        tag: null,
        question: '3How old are you ?',
        answer: '3twenty two twenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty two',
    },
    {
        id: 4,
        tag: null,
        question: '4How old are you ?',
        answer: '4twenty two twenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty two',
    },
    {
        id: 5,
        tag: null,
        question: '5How old are you ?',
        answer: '5twenty two twenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty twotwenty two',
    },
];

function ActionQuestion() {
    const [tag, setTag] = useState(listContent[0].tag);
    const [content, setContent] = useState(listContent[0]);

    const handleContent = (item) => {
        if (item.tag) {
            setTag(item.tag);
        } else {
            setTag(null);
        }
        setContent(item);
    };

    let api = useAxios();

    let getNotes = async () => {
        let response = await api.get('/api/projects/data/?project=1');

        console.log(response);

        if (response.status === 200) {
            console.log('error');
        }
    };

    const addTag = (newtag) => {
        setTag(newtag);
        let result = listContent.find((item) => item.id === content.id);
        result.tag = newtag;
    };

    const printList = () => {
        getNotes();
        console.log(listContent);
    };

    const handleRightItem = () => {
        if (content.id !== listContent.length) {
            let nextItem = listContent.find((item) => item.id === content.id + 1);
            setTag(nextItem.tag);
            setContent(nextItem);
        }
    };
    const handleLeftItem = () => {
        if (content.id !== 1) {
            let nextItem = listContent.find((item) => item.id === content.id - 1);
            setTag(nextItem.tag);
            setContent(nextItem);
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
                    <div className={cx('card-question')}>
                        <u>Question</u>: {content.question}
                    </div>
                    <div className={cx('card-answer')}>
                        <u>Answer</u>: {content.answer}
                    </div>
                    <div className={cx('card-select')}>
                        <Button outline className={cx('button-no')} onClick={() => addTag('No')}>
                            No
                        </Button>
                        <Button primary className={cx('button-yes')} onClick={() => addTag('Yes')}>
                            Yes
                        </Button>
                    </div>
                    <div className={cx('card-action')}>
                        <span className={cx('button-left')} onClick={handleLeftItem}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </span>
                        <span className={cx('button-right')} onClick={handleRightItem}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
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
                                {listContent.map((item, index) => (
                                    <tr key={item.id} className={cx('table-content')}>
                                        <td
                                            className={cx(
                                                `${content.id === item.id ? 'col-content-active' : 'col-content'}`,
                                            )}
                                            onClick={() => handleContent(item)}
                                        >
                                            {index + 1}
                                        </td>
                                        <td className={cx('col-tag')}>
                                            <span className={cx('col-tag-label')}>{item.tag}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={cx('action')}>
                        <Button outline>Huy</Button>
                        <Button primary onClick={printList}>
                            Hoan thanh
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionQuestion;
