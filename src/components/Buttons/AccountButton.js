import React, { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button } from "@material-ui/core";
import { Row } from 'reactstrap'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { auth } from "../../firebase"


export default function AccountButton ({inis}) {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    // check if user is loggedin or not 
    const [Checklog, setChecklog] = useState(false)
    
    auth.onAuthStateChanged(function(user) {
        if (user) {
            // if logged in 
            setChecklog(true)
        } else {
            // if logged out
            setChecklog(false)
        }
    });

    const profileButton = Checklog 
        ? (
            <div className="profileButtons" >
                <Row> <Link to= "/profile"> <Button >Profile</Button> </Link> </Row>
                <Row> <Button >Porfolio</Button> </Row>
                <Row> <Button >Settings</Button> </Row>
                <Row> <Button onClick={ handleLogout }>Log Out</Button> </Row>
            </div>
            )
        :   <div className="profileButtons" >
                <Row> <Button >Settings</Button> </Row>
                <Row> <Button onClick={ handleLogin }>Log In</Button> </Row>
            </div>;

    function handleLogin() {
        history.push("/login")
    }

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/")
        } catch {
          setError("Failed to log out")
        }
      }

    return (
        <div>
            <OverlayTrigger
                trigger="click"
                placement="bottom"  
                overlay={ profileButton }
            >
                {/* <AccountBoxSharpIcon /> */}
                <Button className="initials">
                    { inis }
                </Button>
            </OverlayTrigger>
        </div>
    )
};