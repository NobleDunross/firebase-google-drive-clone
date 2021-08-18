import React, { useState, Component }  from 'react'
import './Home.css';
import { useHistory, Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import { Button } from "@material-ui/core";
import AccountButton from '../../components/Buttons/AccountButton';
import AboutButton from '../../components/Buttons/AboutButton';

class Home extends Component {

    render () {
        
        return (
            <div className='home'>
                <div className='home__header'> 
                    <div className='home__headerLeft'>
                        <AboutButton />
                    </div>
                    <div className='home__headerRight'>
                        <AccountButton />
                    </div>
                </div>

                <div className='home__body'>
                    <img src="/210425_Logo_TAU.png" alt= "TV" />
                    < div className='home__inputContainer'>
                        <Search />
                    </div>
                    <div className='signup__button'>
                        <Link to= "/signup"> <Button >Sign Up!</Button> </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home
