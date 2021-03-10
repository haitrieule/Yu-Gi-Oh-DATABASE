import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                    <Link to="/" variant="primary">
                        <img className="img-logo" src="/yugi-logo.png" alt='Logo' />
                    </Link>

                <img className="img-logo-right" src="/konami.png" alt="komami" />
            </Navbar>

        </>
    )
}
