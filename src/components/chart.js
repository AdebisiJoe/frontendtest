import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  } from 'recharts';

export default function chart(props) {
    return (
        <div className="chartsection">
            <div className="mainchart">
            <AreaChart
          width={500}
          height={200}
          data={props.data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
            </div>
            <div className="chartsummary">
               <div className="orderssummary">
                <h5>Orders</h5>
                <p>Pending Orders :{props.orders.pendingorders}</p>
                <p>Reconciled Orders :{props.orders.reconciledorders}</p>
                <p>Total :{props.orders.total}</p>
               </div>

              <div className="paymentssummary">
                <h5>Payments</h5>
                <p>Unreconciled Payments:{props.payments.unreconciledpayments}</p>
                <p>Reconciled Payments :{props.payments.reconciledpayments}</p>
                <p>Total Payments{props.payments.totalpayments}</p>
              </div>

                
            </div>
        </div>
    )
}
