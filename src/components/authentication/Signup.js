import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import { database, auth } from "../../firebase"

export default function Signup() {
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [company, setcompany] = useState("")
  const [industry, setindustry] = useState("")
  const [job, setjob] = useState("")
  
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value).then( () => {
        return database.profiles.doc(auth.currentUser.uid).set({
          firstName: firstName,
          lastName: lastName,
          company: company,
          industry: industry,
          job: job,
          initials: firstName[0] + lastName[0],
          createdAt: database.getCurrentTimestamp(),
          })
      }).then(() => {
        history.push("/")
      })
      
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="firstname">
            <Form.Label>First Name*</Form.Label>
              <Form.Control 
                type="text"
                required
                value={firstName}
                onChange={e => setfirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="lastname">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control 
                type="text"
                required
                value={lastName}
                onChange={e => setlastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="company">
              <Form.Label>Company Name</Form.Label>
              <Form.Control 
                type="text"
                value={company}
                onChange={e => setcompany(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="industry">
              <Form.Label>Industry*</Form.Label>
              <Form.Control 
                type="text"
                required
                value={industry}
                onChange={e => setindustry(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="job">
              <Form.Label>Job Description*</Form.Label>
              <Form.Control 
                type="text"
                required
                value={job}
                onChange={e => setjob(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password*</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation*</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </CenteredContainer>
  )
}
