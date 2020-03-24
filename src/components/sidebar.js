import React from 'react'

export default function sidemenu() {
    return (
            <div className="sidebar" id="mysidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <button className="sidebarbutton">Generate Invoice</button>   
            <a className="active" href="#home">All Payments</a>
            <a href="#news">Reconcilled Payments</a>
            <a href="#contact">Un-Reconcilled Payments</a>
            <a href="#about">Manual Settlment</a>
            </div>


    )
}

