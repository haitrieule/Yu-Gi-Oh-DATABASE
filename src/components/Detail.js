import React, { useState, useEffect } from 'react'
import './Detail.css'

export default function Detail({ match }) {
    const [Itiems, setItiems] = useState([])
    useEffect(() => {
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${match.params.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItiems(result.data);
                },
            )
    }, [])
    console.log(Itiems)
    return (
        <div className="background">
            {Itiems.map(item => (
                <div>
                    <img src={`https://storage.googleapis.com/ygoprodeck.com/pics/${item.id}.jpg`}></img>
                    <div>NAME: {item.name}</div>
                    <div>Level: {item.level}</div>
                    <div>Race: {item.race}</div>
                    <div>Type: {item.type}</div>
                    <div>Attribute: {item.attribute}</div>
                    <div>ATK: {item.atk}</div>
                    <div>DEF: {item.def}</div>
                    <div>Description: {item.desc}</div>
                </div>
            ))}
        </div>
    )
}
