import React from 'react';
import './App.css';
import Notification, { notify } from '../components/notifications/notification'

// export default class 

function App() {
  return (
    <React.Fragment>
      <button onClick={() => notify('het werrrkt')}>click me</button>
      <Notification />
    </React.Fragment>
  );
}

export default App;
