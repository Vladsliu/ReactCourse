import React from 'react';
import Card from '../Card/Card';


interface Props {}

const CardList : React.FC<Props> = (props: Props):JSX.Element => {
  return (
    <div>
        <Card productName='Gold' ticker='GLD' price={120} />
        <Card productName='Oil' ticker='OIL' price={145}/>
        <Card productName='Silver' ticker='SLV' price={40}/>
    </div>
  )
}

export default CardList;