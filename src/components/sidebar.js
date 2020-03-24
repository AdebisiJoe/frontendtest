import React from 'react'

export default function sidemenu() {
    return (
            <div class="sidebar">
             <button className="sidebarbutton">Generate Invoice</button>   
            <a class="active" href="#home">All Payments</a>
            <a href="#news">Reconcilled Payments</a>
            <a href="#contact">Un-Reconcilled Payments</a>
            <a href="#about">Manual Settlment</a>
            </div>
    )
}

