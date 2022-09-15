import TopNav from "../../components/nav-bar/nav-bar.component";
import {Outlet} from 'react-router-dom';
import { Fragment } from "react";
import MainFooter from "../../components/footer/footer.component";
import React, { Component }  from 'react';
const NavigationBar = () =>{
    return(
        <Fragment>
            <TopNav />
            <Outlet/>
            <MainFooter />
        </Fragment>
    )
}
export default NavigationBar;