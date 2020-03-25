import React,{ Component } from 'react';
import Sidebar from './components/sidebar';
import Searchbar from './components/searchbar';
import Summary from './components/summary';
import Chart from './components/chart';


import './App.css';
import './styles/Sidebar.css';
import './styles/searchbar.css';
import './styles/summary.css';
import './styles/charts.css';
const summarydata=[
  {name:"Daily Transaction Volume",value:2342},
  {name:"Daily Transaction Value",value:4000000},
  {name:"Total Transaction Volume",value:452000},
  {name:"Total Transaction Value",value:4000000},
];

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const orderssummary={pendingorders:20,reconciledorders:80,total:100}
const paymentssummary={unreconciledpayments:20,reconciledpayments:80,totalpayments:100}
class App extends Component {
  render() {
    return (
    <div>
     <Searchbar />
     <Sidebar />
     <Summary summarydata={summarydata} />
     <Chart data={data} orders={orderssummary} payments={paymentssummary} />
    </div>
    )
  }
}








export default App;
