import React, { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button } from "@material-ui/core";
import { Row } from 'reactstrap'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function AccountButton ({ inis }) {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/")
        } catch {
          setError("Failed to log out")
        }
      }

    const profileButton = (
        <div className="profileButtons" >
            <Row> <Link to= "/profile"> <Button >Profile</Button> </Link> </Row>
            <Row> <Link > <Button >Porfolio</Button> </Link> </Row>
            <Row> <Link > <Button >Settings</Button> </Link> </Row>
            <Row> <Link > <Button onClick={ handleLogout }>Log Out</Button> </Link> </Row>
        </div>
        );

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