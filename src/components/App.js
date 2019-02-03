import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Repos from './Repos';

const App = () => (
  <div className="pinned-repos-viewer">
    <Header />
    <Repos />
    <Footer />
  </div>
);

export default App;