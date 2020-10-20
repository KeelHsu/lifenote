import React from 'react';
import cx from 'classnames';
import './index.less'

const Card = (props) => {
    const { color } = props

    return <div className='card shadow'>
        <div className={cx('head', color)}>
            <span className="title">标题</span>
            <span className="time">12秒前</span>
        </div>
        <p className="brief">简介</p>
    </div>
}

export default Card;
