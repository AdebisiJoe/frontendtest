import React,{ Component } from 'react';
import Sidebar from './components/sidebar';
import Searchbar from './components/searchbar';
import Summary from './components/summary';

import './App.css';
import './styles/Sidebar.css';
import './styles/searchbar.css';
import './styles/summary.css';
const summarydata=[
  {name:"Daily Transaction Volume",value:2342},
  {name:"Daily Transaction Value",value:4000000},
  {name:"Total Transaction Volume",value:452000},
  {name:"Total Transaction Value",value:4000000},
]

class App extends Component {
  render() {
    return (
      <div>
     <Searchbar   />
     <Sidebar />
     <Summary summarydata={summarydata} />
      </div>
    )
  }
}








export default App;
