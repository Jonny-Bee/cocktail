import TopNav from "../../components/nav-bar/nav-bar.component";
import {Outlet} from 'react-router-dom';
import { Fragment } from "react";
const NavigationBar = () =>{
    return(
        <Fragment>
            <TopNav />
            <Outlet/>
        </Fragment>
    )
}
export default NavigationBar;