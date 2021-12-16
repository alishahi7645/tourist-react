import React from 'react'
import Button from '../UI/button'
import CardsGuide from '../Tourism/Cards'
import Card from '../cards/card'
import '../../App.css'

const Tourism =()=>{
    return(
        <>
        <div className="tourism" style={{backgroundImage:`url(images/tourism.jpg)`, backgroundAttachment:'fixed', backgroundPosition:'center', backgroundSize:'cover'}}>
            <h1 style={{color:'#FFF',fontSize:'46px'}} > پرتال جامع گردش و سفر </h1>
            <p>پرتال جامع گردش و سفر</p>
            <div className="tourism-box">
                <input className="search-input" type="text" placeholder="جستجوی مکان، شهر، کشور و..." autocomplete="off" />
                <Button className="btn" buttonStyle="btn--search--place" btnSize="btn--large">
                   جستجوی    
                </Button>
            </div>
        </div>
        <CardsGuide />
        <Card />
        </>
       
    )
}
export default Tourism
