import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
import './Product.css'
import { Pagination } from 'react-bootstrap'

// import PropTypes from 'prop-types'

// Product.propTypes = {
//     todos: PropTypes.string
// };
// Product.defaultProps ={
//     todos: "Name"
// };

export default function Product() {
    const [Items, setItems] = useState([])

    const [SoftWith, setSoftWith] = useState(['ATK', 'DEF', 'Type', 'Level', 'New', 'Relevance'])
    const [Soft, setSoft] = useState("Name")

    const [Type, setType] = useState("Normal Monster")
    const [Typewith, setTypewith] = useState(['Skill Card', 'Spell Card', 'Trap Card', 'Normal Monster', 'Normal Tuner Monster', 'Effect Monster', 'Tuner Monster', 'Flip Monster', 'Flip Effect Monster', 'Flip Tuner Effect Monster', 'Spirit Monster', 'Union Effect Monster', 'Gemini Monster', 'Pendulum Effect Monster', 'Pendulum Normal Monster', 'Pendulum Tuner Effect Monster', 'Ritual Monster', 'Ritual Effect Monster', 'Toon Monster', 'Fusion Monster', 'Synchro Monster', 'Synchro Tuner Monster', 'Synchro Pendulum Effect Monster', 'XYZ Monster', 'XYZ Pendulum Effect Monster', 'Link Monster', 'Pendulum Flip Effect Monster', 'Pendulum Effect Fusion Monster', 'token'])

    const [Level, setLevel] = useState(4)
    const [Levelwith, setLevelwith] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'])

    const [Page, setPage] = useState(0)
    const [Active, setActive] = useState(1)
    const [Offset, setOffset] = useState(0)

    useEffect(() => {
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?sort=${Soft}&type=${Type}&level=${Level}&offset=${Offset}&num=40`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.data);
                    setPage(result.meta.total_pages);
                    setOffset(result.meta.next_page_offset);
                },
            )
            .catch(error=>console.log('ERROR'))

    },[Active,Soft,Type,Level])
    let items = []
    for (let number = 1; number <= Page; number++) {
        items.push(

            <Pagination.Item key={number} onClick={()=>{setActive(number); setOffset(40*number)}} active={number === Active}>

                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
            <div className="dropdown">
                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        Sort By
                </Dropdown.Toggle>
                    <Dropdown.Menu className="type">
                        {SoftWith.map(softwith => (
                            <Dropdown.Item key={softwith} onClick={() => setSoft(softwith)}>{softwith}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        Type
                </Dropdown.Toggle>
                    <Dropdown.Menu className="type">
                        {Typewith.map(typewith => (
                            <Dropdown.Item className="item-type" key={typewith} onClick={() => setType(typewith)}>{typewith}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        Level
                </Dropdown.Toggle>
                    <Dropdown.Menu className="type">
                        {Levelwith.map(levelwith => (
                            <Dropdown.Item key={levelwith} onClick={() => setLevel(levelwith)}>{levelwith}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="App-card">
                {Items.map(item => (
                    <div key={item.id} className="card-id">
                        <Card id={item.id} name={item.name} type={item.type} desc={item.desc}>

                        </Card>
                    </div>
                ))}
            </div>
            <Pagination>
                <Pagination.First onClick={()=>{setActive(1); setOffset(0)}} />
                <Pagination.Prev onClick={()=>{setActive(Active-1); setOffset(Offset-80)}}/>
                {items}
                <Pagination.Next onClick={()=>setActive(Active+1)} />
                <Pagination.Last onClick={()=>{setActive(Page);setOffset(Page*40)}} />
            </Pagination>
        </div>

    )
}
