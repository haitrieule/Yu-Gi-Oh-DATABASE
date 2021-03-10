import React from 'react'
import './Card.css'
import { Card, Button, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

export default function card(props) {
    return (
        <Card className="card-css" >
            <Card.Img variant="top" src={`https://storage.googleapis.com/ygoprodeck.com/pics/${props.id}.jpg`} />

            <Card.Body>
                <Card.Title className="title">{props.name}</Card.Title>
                <Card.Text className="aaa">
                    {props.desc}
                </Card.Text>
                <Link to={`/detail/${props.id}`} variant="primary">show detail</Link>
            </Card.Body>
        </Card>
    )
}
