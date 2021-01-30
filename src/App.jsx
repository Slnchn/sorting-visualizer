import React from 'react';

import Header from 'components/Header';
import SortingVisualizer from 'components/SortingVisualizer';
import Sidebar from 'components/Sidebar';

function App() {
  return (
    <>
      <Header />

      <Sidebar />

      <SortingVisualizer />
    </>
  );
}

export default App;
