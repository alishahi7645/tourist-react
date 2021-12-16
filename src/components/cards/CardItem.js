import React from 'react'
import {Link} from 'react-router-dom'
import './card.css'
function CardItem(props) {
    const {src, text,    label, pathname} = props
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={pathname}>
                    <figure className="cards__item__pic__wrap"data-category={label}>
                        <img src={src} alt="Travel Picture" className="cards__item__img">

                        </img>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
