import React, { useState, useEffect } from 'react'
import { Pagination } from 'react-bootstrap'

export default function Home() {
    const [Itiems, setItiems] = useState([])
    const [Page, setPage] = useState(0)
    const [Active, setActive] = useState(1)
    const [Offset, setOffset] = useState(0)

    useEffect(() => {
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?level=7&offset=${Offset}&num=40`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItiems(result.data);
                    setPage(result.meta.total_pages);
                    setOffset(result.meta.next_page_offset);
                    console.log(Itiems);
                    console.log(Page);
                    console.log(Active);
                    console.log(Offset);
                },
            )
    },[Active])

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
            <div>
                {Itiems.map(item=>(
                    <div>{item.name}</div>
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

