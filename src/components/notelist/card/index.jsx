import React from 'react';
import './index.less'

const Card = () => <div className='card shadow'>
    <div className="head">
        <span className="title">标题</span>
        <span className="time">12秒前</span>
    </div>
    <p className="brief">简介</p>
</div>

export default Card;
