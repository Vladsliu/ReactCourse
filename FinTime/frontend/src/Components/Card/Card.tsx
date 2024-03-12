import React from 'react'
import "./Card.css";

interface Props {
productName: string;
ticker:string;
price: number;

}

const Card: React.FC<Props> = ({productName, ticker, price}: Props): JSX.Element => {
  return (
    <div className="card">
        <img
            src="https://content1.rozetka.com.ua/goods/images/big/314354489.jpg"
        />
        <div className="details">
            <h2>{productName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, nesciunt?</p>
    </div>
  )
}

export default Card;