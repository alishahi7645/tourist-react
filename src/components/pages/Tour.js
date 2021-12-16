import React from 'react'
import Button from '../UI/button'
import CardsGuide from '../Tour/Cards'
import Card from '../cards/card'
import '../../App.css'

const Tour =()=>{
    return(
        <>
        <div className="tourism" style={{backgroundImage:`url(images/4.jpg) ` , backgroundAttachment:'fixed', backgroundPosition:'center', backgroundSize:'cover'}}>
           
            <div className="tourism-box">
                <input className="search-input" type="text" placeholder="نام شهر یا کشور" autocomplete="off" />
                <Button className="btn" buttonStyle="btn--search--place" btnSize="btn--large">
                   جستجوی تور
                </Button>
            </div>
        </div>
        <CardsGuide />
        <Card />
        </>
       
    )
}
export default Tour
