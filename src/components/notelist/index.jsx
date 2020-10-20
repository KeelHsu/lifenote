import React from 'react';
import './index.less';

import Card from './card';

const colors = ['c1', 'c2', 'c3', 'c4'];

let x = [1, 2]

const Notelist = () => <div id='notelist'>
    {
        x.map((item, i) => <Card color={colors[i % colors.length]} key={item} />)
    }
</div>

export default Notelist;
