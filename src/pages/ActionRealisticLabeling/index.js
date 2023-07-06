import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ActionRealisticLabeling.module.scss';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const listContent = [
    {
        id: 1,
        tag: 'Yes',
        content:
            'isLorem After bowling Somerset out for 83 on the opening morning at Grace Road, Leicestershire extended their first innings by 94 runs before being bowled out for 296 with England discard Andy Caddick taking three for 83.',
    },
];

const tags = ['Thanh Pho', 'Con nguoi', 'Dia diem'];

function ActionRealisticLabeling() {
    const [content, setContent] = useState(listContent[0].content);
    const [selectedText, setSelectedText] = useState('');
    const [showTagList, setShowTagList] = useState(false);
    const [taggedTexts, setTaggedTexts] = useState([]);
    const [tagListPosition, setTagListPosition] = useState({ top: 0, left: 0 });

    const handleContent = (item) => {
        // if (item.tag) {
        //     setTag(item.tag);
        // } else {
        //     setTag(null);
        // }
        setContent(item);
    };

    // const addTag = (newtag) => {
    //     // setTag(newtag);
    //     let result = listContent.find((item) => item.id === content.id);
    //     result.tag = newtag;
    // };

    const handleSelect = (e) => {
        const selection = window.getSelection();
        if (selection.toString()) {
            const selectedText = selection.toString();
            if (!taggedTexts.some((item) => item.text === selectedText || selectedText.includes(item.text))) {
                setSelectedText(selectedText);
                setShowTagList(true);
                const rect = selection.getRangeAt(0).getBoundingClientRect();
                setTagListPosition({ top: rect.bottom, left: rect.left });
            }
        } else {
            setShowTagList(false);
        }
    };

    const getFormattedText = () => {
        let formattedText = content;
        taggedTexts.forEach((item) => {
            formattedText = formattedText.replace(item.text, `<u onClick={}>${item.text}</u>`);
        });
        return formattedText;
    };

    const handleTagClick = (tag) => {
        setTaggedTexts([...taggedTexts, { text: selectedText, tag }]);
        setShowTagList(false);
    };

    const handleDeleteTaggedText = (text) => {
        setTaggedTexts(taggedTexts.filter((item) => item.text !== text));
    };
    // const handleRightItem = () => {
    //     if (content.id !== listContent.length) {
    //         let nextItem = listContent.find((item) => item.id === content.id + 1);
    //         setTag(nextItem.tag);
    //         setContent(nextItem);
    //     }
    // };
    // const handleLeftItem = () => {
    //     if (content.id !== 1) {
    //         let nextItem = listContent.find((item) => item.id === content.id - 1);
    //         setTag(nextItem.tag);
    //         setContent(nextItem);
    //     }
    // };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('card')}>
                    <div
                        className={cx('card-content')}
                        onMouseUp={handleSelect}
                        dangerouslySetInnerHTML={{ __html: getFormattedText() }}
                    >
                        {/* {content} */}
                    </div>
                    {showTagList && (
                        <div
                            className={cx('list-tag')}
                            style={{
                                top: tagListPosition.top,
                                left: tagListPosition.left,
                            }}
                        >
                            <label className={cx('list-tag-title')}>Select a label</label>

                            {tags.map((tag) => (
                                <button
                                    className={cx('button-select-tag')}
                                    key={tag}
                                    onClick={() => handleTagClick(tag)}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    )}
                    <ul>
                        {taggedTexts.map((item, index) => (
                            <li key={index} className={cx('tagged')}>
                                <u>{item.text}</u> - {item.tag}
                                <span className={cx('tag-icon')} onClick={() => handleDeleteTaggedText(item.text)}>
                                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                </span>
                            </li>
                        ))}
                    </ul>
                    {/* <div className={cx('card-action')}>
                        <span className={cx('button-left')} onClick={handleLeftItem}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </span>
                        <span className={cx('button-right')} onClick={handleRightItem}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    </div> */}
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
                        <Button primary>Hoan thanh</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionRealisticLabeling;
