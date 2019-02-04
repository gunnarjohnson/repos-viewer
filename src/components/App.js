import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Search from './Search';

const App = () => (
  <div className="pinned-repos-viewer">
    <Header />
    <Search />
    <Footer />
  </div>
);

export default App;