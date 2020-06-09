/**
 * @author Kuitos
 * @since 2019-05-16
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './public-path';

import 'antd/dist/antd.min.css';
import './index.css';

export async function bootstrap() {
  console.log('[team-purple] react app bootstraped');
}

export async function mount(props) {
  console.log('[team-purple] props from main framework', props);
  const { container } = props;
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector('#purpleRoot')
      : document.getElementById('purpleRoot')
  );
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#purpleRoot')
      : document.getElementById('purpleRoot')
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  bootstrap().then(mount);
}
