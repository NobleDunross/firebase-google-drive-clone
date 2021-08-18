import React, { useState} from 'react';
import { Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useProfile } from "../../hooks/useProfile"
import { useHistory } from "react-router-dom";
import { Col } from 'reactstrap';

import AccountButton from '../../components/Buttons/AccountButton';
import AboutButton from '../../components/Buttons/AboutButton';
import a5 from '../../images/people/AaronNagelLinkedIn.jpeg';

import s from './Profile.css';

export default function Profile () {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const profileInfo = useProfile(currentUser.uid).profile

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
      <div className="profile">
        <div className="profile__header">
          <div className='home__headerLeft'>
              <AboutButton />
          </div>
          <div className="profile__headerMiddle" >
            <img onlclick = {history.push("/")} src="/210425_Logo_TAU.png" alt= "TV" />
          </div>
          <div className='home__headerRight'>
              <AccountButton inis = {"PE"}/>
          </div>
        </div>
        
        <div className="profile__body">
          <Container
          className="d-flex align-items-center justify-content-center"
          style={{ 
            minHeight: "50vh",
            minWidth: "50vw",
          }}
          >
            <Col md={5}>
              <div className="profileInfo">
              <div className={s.profileContactContainer}>
                <span className="thumb-xl mb-3">
                  <img className={[s.profileAvatar, 'rounded-circle'].join(' ')} src={a5} alt="..." />
                </span>
              </div>
              </div>
            </Col>
            <Col md={7}>
              <div className="profileInfo">
              <h5 className="fw-normal"> {profileInfo.firstName} <span className="fw-semi-bold">{profileInfo.lastName}</span></h5>
              <p> {profileInfo.job} </p>
              <p>
              {/* eslint-disable-next-line */}
                <a href="#" className="badge badge-info rounded-0 mb-2 mr-2">{profileInfo.company}</a>
                <a href="#" className="badge badge-success rounded-0 mb-2 mr-2">{profileInfo.industry}</a>
              </p>
              <p className="lead mt-xlg">
                <strong>Email:</strong> {currentUser.email}
              </p>
              </div>
            </Col>
          </Container>
        </div>
      </div>
  )
};
