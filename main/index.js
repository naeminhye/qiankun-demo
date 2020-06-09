import { loadMicroApp } from 'qiankun';
import './index.less';

import render from './render';

render({ loading: true });

const loader = (loading) => render({ loading });

loadMicroApp({
  name: 'team-blue',
  entry: '//localhost:7103',
  container: '#team-blue',
  loader,
});

loadMicroApp({
  name: 'team-yellow',
  entry: '//localhost:7101',
  container: '#team-yellow',
  loader,
});

loadMicroApp({
  name: 'team-purple',
  entry: '//localhost:7102',
  container: '#team-purple',
  loader,
});
