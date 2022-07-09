import React, {FC} from 'react'

import './App.css';
import bsc from './images/bsc.svg';
import eth from './images/eth.svg';
import polygon from './images/polygon.svg';
import fantom from './images/fantom.svg';
import usdt from './images/usdt.svg';
import avalanche from './images/avalanche.svg';
import arbitrum from './images/arbitrum.svg';
 import { Addresses } from './App';

type Props = {
  handleChange: (value: Addresses) => void;
};

const Networks: FC<Props> = ({ handleChange }) => {
  return (
    <div className="network">
    <div>
      <div className="imagediv">
        <button className="button" value="ethmatic" onClick={() => handleChange('ethmatic')}>
          Bridge from Ethereum to Polygon
        </button>
        <img src={eth} alt="" className="images" />
        <img src={polygon} className="images" alt="" />
      </div>
      <div className="imagediv">
        <button className="button" value="maticeth" onClick={() => handleChange('maticeth')}>
          Bridge from Polygon to Ethereum
        </button>
        <img src={polygon} className="images" alt="" />
        <img src={eth} className="images" alt="" />
      </div>
    </div>

    <div>
      <div className="imagediv">
        <button className="button" value="ethbsc" onClick={() => handleChange('ethbsc')}>
          Bridge from Ethereum to BNB chain
        </button>
        <img src={eth} className="images" alt="" />
        <img src={bsc} className="images" alt="" />
      </div>
      <div className="imagediv">
        <button className="button" value="bsceth" onClick={() => handleChange('bsceth')}>
          Bridge from BNB chain to Ethereum{' '}
        </button>
        <img src={bsc} className="images" alt="" />
        <img src={eth} className="images" alt="" />
      </div>
    </div>

    <div>
      <div className="imagediv">
        <button className="button" value="ethavax" onClick={() => handleChange('ethavax')}>
          Bridge from Ethereum to Avalanche
        </button>
        <img className="images" src={eth} alt="" />
        <img className="images" src={avalanche} alt="" />
      </div>
      <div className="imagediv">
        <button className="button" value="avaxeth" onClick={() => handleChange('avaxeth')}>
          Bridge from Avalanche to Ethereum
        </button>
        <img className="images" src={avalanche} alt="" />
        <img className="images" src={eth} alt="" />
      </div>
    </div>

    <div>
      <div className="imagediv">
        <button className="button" value="ethftm" onClick={() => handleChange('ethftm')}>
          Bridge from Ethereum to Fantom
        </button>
        <img className="images" src={eth} alt="" />
        <img className="images" src={fantom} alt="" />
      </div>
      <div className="imagediv">
        <button className="button" value="ftmeth" onClick={() => handleChange('ftmeth')}>
          Bridge from Fantom to Ethereum
        </button>
        <img className="images" src={fantom} alt="" />
        <img className="images" src={eth} alt="" />
      </div>
    </div>

    <div>
      <div className="imagediv">
        <button className="button" value="etharb" onClick={() => handleChange('etharb')}>
          Bridge from Ethereum to Arbitrum
        </button>
        <img className="images" src={eth} alt="" />
        <img className="images" src={arbitrum} alt="" />
      </div>
      <div className="imagediv">
        <button className="button" value="arbeth" onClick={() => handleChange('arbeth')}>
          Bridge from Arbitrum to Ethereum
        </button>
        <img className="images" src={arbitrum} alt="" />
        <img className="images" src={eth} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Networks