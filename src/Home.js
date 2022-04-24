// import logo from './logo.svg';
import React from 'react';
import './App.css';
import testImg from './img/logo192.png';

const json = {
  type: 'page',
  body: {
    type: 'form',
    debug: true,
    mode: 'horizontal',
    api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm',
    body: [
      {
        type: 'combo',
        name: 'combo',
        label: '拖拽排序',
        multiple: true,
        value: [
          {
            text: '1',
            select: 'a',
          },
          {
            text: '2',
            select: 'b',
          },
        ],
        draggable: true,
        items: [
          {
            name: 'text',
            type: 'input-text',
          },
          {
            name: 'select',
            type: 'select',
            options: ['a', 'b', 'c'],
          },
        ],
      },
    ],
  },
};
function Home() {
  return (
    <div className="App">
      react 子应用 home
      <img src={testImg} />
    </div>
  );
}

export default Home;
