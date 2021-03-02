import React from 'react';

import Adventures from './Adventures';
import AEMPage from './AEMPage';

/***
 * Displays a grid of current adventures
 */
function Home() {
  return (
    <div className="Home">
      <h2>Current Adventures</h2>
      <Adventures />
      <AEMPage
        pagePath='/content/editorxpdevelopment/us/en' />
    </div>
  );
}

export default Home;
