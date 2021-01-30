import React from 'react';

import Header from 'components/Header';
import SortingVisualizer from 'components/SortingVisualizer';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Header />

      <Sidebar />

      <SortingVisualizer />

      <Footer />
    </>
  );
}

export default App;
