import React from "react";
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import LifeNote from './components/home';
import './index.less'

ReactDOM.render(
  // <React.StrictMode>
  <RecoilRoot>
    <LifeNote />
  </RecoilRoot>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);