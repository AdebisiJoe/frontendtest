import React from 'react';
import Sidebar from './components/sidebar';
import Searchbar from './components/searchbar';

import './App.css';
import './styles/Sidebar.css';
import './styles/searchbar.css';


function App() {
  return (
    <div>
     <Searchbar/>
     <Sidebar/>
    </div> 
  );
}

export default App;
