import React from 'react';

import { BackTop } from 'antd';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const App = ({ children }) => {
  return (
    <div style={{ minHeight: '200vh', padding: 8 }}>
      {children}
      <BackTop visibilityHeight={100}>
        <div style={style}>UP</div>
      </BackTop>
    </div>
  );
};
export default App;
