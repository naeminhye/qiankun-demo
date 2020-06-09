import React from 'react';
import ReactDOM from 'react-dom';

function Render(props) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="team-blue" />
      <div id="team-yellow" />
      <div id="team-purple" />
    </>
  );
}

export default function render({ loading }) {
  const container = document.getElementById('main-container');
  ReactDOM.render(<Render loading={loading} />, container);
}
