import  React, {FC, useState} from 'react'
import './App.css';
import eth from "./images/eth.svg"
import polygon from "./images/polygon.svg"
import fantom from "./images/fantom.svg"
import usdt from "./images/usdt.svg"
import usdc from "./images/usdc.svg"
import { AssetVal } from './App';

type Props = {
  handleAsset:  (value: AssetVal) => void;
}

const Assets : FC<Props> = ({handleAsset}) => {
  return (
    <div className="assets">
       <>
       <div className="assets-div">
       <img src={eth} alt="" className="assets-images"/> <button value="eth" className="assets-icons"  onClick={() => handleAsset('eth')}>Ethereum (ETH)</button>
       </div>

       <div className="assets-div">
       <img src={polygon} alt="" className="assets-images"/><button value="matic" className="assets-icons" onClick={() => handleAsset('matic')}>Polygon (MATIC)</button>
       </div>
      
       <div className="assets-div">
      
       <img src={usdt} alt="" className="assets-images"/><button value="usdt"  className="assets-icons" onClick={() => handleAsset('usdt')}>Tether (USDT)</button>
       </div>
      
       <div className="assets-div">
       <img src={usdc} alt="" className="assets-images"/><button value="usdc" className="assets-icons" onClick={() => handleAsset('usdt')}>USD Coin (USDC)</button>
       </div>
     
      </>
    </div>
  )
}

export default Assets