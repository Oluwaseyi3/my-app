import React , {useState, useEffect }from 'react'
import Networks from "./Networks"
import Web3 from 'web3'
import Assests from "./Assests"
import Web3Modal from 'web3modal';
import './App.css';

import { BigNumber } from "bignumber.js";
import {Modal, Box} from '@mui/material';
import {  useWeb3Context } from './web3/web3-context';
import {useAddress} from "./web3/web3-context"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ethers, BigNumber as BIGNumber} from "ethers" 
import bsc from './images/bsc.svg';
import eth from './images/eth.svg';
import polygon from './images/polygon.svg';
import fantom from './images/fantom.svg';
import usdt from './images/usdt.svg';
import avalanche from './images/avalanche.svg';
import arbitrum from './images/arbitrum.svg';

import {NETWORK_EXPLORERS_TRANSACTIONS, CHAIN_DETAILS, ROUTE_SUPPORTED_ASSETS, CONTRACT_FUNCTIONALITY_PROVIDERS
  , ROUTE_CHAIN_ID, NETWORK_API_NAMES, NETWORK_NATIVE_ASSETS, BRIDGE_ADDRESSES, ASSET_PRECISION_DECIMALS, WEB3_PROVIDERS
  
   
  } from "./Constants"
import { connected } from 'process';




  export type Addresses =
  | 'ethmatic'
  | 'maticeth'
  | 'ethbsc'
  | 'bsceth'
  | 'ethavax'
  | 'avaxeth'
  | 'ethftm'
  | 'ftmeth'
  | 'arbeth'
  | 'etharb';

  export type AssetVal =

  | 'eth'
  | 'matic'
  | 'usdt'
  | 'usdc';
 

  // interface ConnectProps {
  //   connect: (() => Promise<void>) | null
  // }
  // const ConnectButton = () => {
  //   return  (
  //      <div>
  //      <button> jjjss</button>
  //      </div>
  //   )
  // }
const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 500,
  height: 700,
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 200,
  height: 300,
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {}

type Big = {
  
}

const App = (props: Props) => {
  
  const { provider, address, connect, connected, disconnect, chainID, checkNetworkStatus, switchToPolygonMainnet } = useWeb3Context();


 

  
  const MAX_AVAILABLE_TRANSFER_FACTOR = 0.2; //Max 20% of available funds per transaction
  const UPDATE_FUNDS_AVAILABLE_INTERVAL = 5000; //Interval to see the balance of the current bridge address
  const UPDATE_TRANSACTION_PROGRESS_INTERVAL = 5000; //Interval to see the progress of the transaction which has been sent
  const TRANSACTION_TIMEOUT_SECONDS = 15 * 60; //Metamask times out transaction after 15 minutes
  const FEE_FACTOR = 0.995;

  const BRIDGE_TRANSACTION_API_URL = 'https://bridgeapi.umbria.network'; //Api URL for tracking current bridge transactions

  const BRIDGE_TRANSACTION_API_ENDPOINT = '/api/getTransactionInfo/?'; //Endpoint for querying the state of a bridge transaction
  //PA
  const BRIDGE_AVAILABILITY_API_ENDPOINT = '/api/getAvailability/?'; //Endpoint for querying whether the bridge is online
  //PARAMS:
  const BRIDGE_GET_TVL_API_ENDPOINT = '/api/pool/getTvlAll/?'; //Endpoint for getting total value locked of a network
  //PARAMS: network"
  const BRIDGE_FEE_ESTIMATION_ENDPOINT = '/api/bridge/getGasToTransfer/?network=ethereum'; ///api/bridge/getAssetTxPrice/?network=ethereum&contractAddress=0x

  const BRIDGE_GET_ASSET_VALUES_ENDPOINT = '/api/getAllPrices/?';
  
 
   const [currentAccount, setcurrentAccount] = useState(null)
  const [selected_route, setselected_route] = useState<Addresses>('ethmatic');
  const [selected_asset, setselected_asset] = useState<AssetVal>("eth")
  const [connected_chain_id, setconnected_chain_id] = useState()
  const [wallet_balance, setwallet_balance] = useState<BIGNumber>(BIGNumber.from(0))
  const [receive_amount, setreceive_amount] = useState(new BigNumber(0))
  const [send_amount_valid, setsend_amount_valid] = useState(false)
  const [available_funds_updater, setavailable_funds_updater] = useState(null)
  const [transaction_progress_updater, settransaction_progress_updater] = useState(null)
  const [transaction_timout_counter, settransaction_timout_counter] = useState(0)
  const [network_fee, setnetwork_fee] = useState<string|number>(0)
  
  const [account, setAccounts] = useState("0")
  const [open, setOpen] = React.useState(false);
  const [opener, setOpener] = useState(false);
  const [data, setData]  = useState("")
  const [inputbox, setinputbox] = useState(false)
  const [errorModal, seterrorModal] = useState(false)
  const [abort, setabort] = useState(false)
  const [success, setSuccess] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleOpener = () => setOpener(true);
  const handleCloser = () => setOpener(false);
	const notify = () => toast.error('no txhash found', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

    const notifySuccess = () => toast.success('Bridge successfully sent!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    const notifyAbort = () => toast.error('This bridge transaction was aborted because the send amount did not cover the gas fee. This can happen when network congestion increases unepectedly, increasing the gas price.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
 

  









  
  let network_available_funds = {
    //network
    '0x1': {
      usdt: new BigNumber(-1),
      usdc: new BigNumber(-1),
      umbr: new BigNumber(-1),
      matic: new BigNumber(-1),
      eth: new BigNumber(-1),
      bsc: new BigNumber(-1),
    },

    //network
    '0x89': {
      usdt: new BigNumber(-1),
      usdc: new BigNumber(-1),
      umbr: new BigNumber(-1),
      matic: new BigNumber(-1),
      eth: new BigNumber(-1),
      bsc: new BigNumber(-1),
    },

    '0x38': {
      usdt: new BigNumber(-1),
      usdc: new BigNumber(-1),
      umbr: new BigNumber(-1),
      matic: new BigNumber(-1),
      eth: new BigNumber(-1),
      bnb: new BigNumber(-1),
    },

    '0xa86a': {
      eth: new BigNumber(-1),
    },

    '0xfa': {
      eth: new BigNumber(-1),
    },

    '0xa4b1': {
      eth: new BigNumber(-1),
    },
  };

  const web3 = new Web3(Web3.givenProvider );

  // const loadWeb3 = async() => {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum)
  //     await window.ethereum.enable()
  //   }
  //   else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider)
  //     console.log(window.web3);
      
  //   }
  //   else {
  //     window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  //   }
  // }

  const getAl = async () => {
    const accounts = await web3.eth.requestAccounts()

  setAccounts( accounts[0] )
  }
  
  
  /* UPDATER VARIABLES */

  let asset_usd_values = {
    eth: new BigNumber(-1),
    bnb: new BigNumber(-1),
    ghst: new BigNumber(-1),
    matic: new BigNumber(-1),
    usdt: new BigNumber(-1),
    usdc: new BigNumber(-1),
    umbr: new BigNumber(-1),
    avax: new BigNumber(-1),
  };
  const handleClose = () => {
    setOpen(false) 

    setinputbox(true)
  }

  const newButton = () => {
   
    console.log(selected_asset);
  };

  const handleData = (e) =>{
	
    setData(e.target.value)
    }

  const handleChange = (value: Addresses) => {
    setselected_route(value);
    console.log(value);
    
    handleClose();

  };
const netder = (value: Addresses) => {

}
  const handleAsset = (value: AssetVal) => {
    setselected_asset(value)

    console.log(ROUTE_CHAIN_ID[selected_route].start_chain);
  }

  	 async function get_network_available_funds_native(wallet_address, network)
     	 {
     		 let _RPC_PROVIDER = WEB3_PROVIDERS[network]

   		 let balance = await _RPC_PROVIDER.eth.getBalance(wallet_address);
        console.log(balance);
   		 return balance;
      
       
   	 }

     const getval  = () =>{
      get_network_available_funds_native("0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422", "0x89")
     }

  
      // BRIDGE_ADDRESSES[selected_route], ROUTE_CHAIN_ID[selected_route].destination
 
  //      async function get_gas_price(web3_provider)
  //  {
  //  	return web3_provider.eth.getGasPrice().then((result) => {
  //  		return web3_provider.utils.fromWei(result);
  //  	})
  //  }

  //    const get_gas_price = async(provider) =>{
  //      const result = await provider.eth.getGasPrice()
  //      return result;
  //    }


  function create_bridge_transaction_progress_updater(transaction_hash)
	{
		get_bridge_transaction_progress(transaction_hash);
		return setInterval(async function(){
			await get_bridge_transaction_progress(transaction_hash).then((response) => {

			});				
		}, UPDATE_TRANSACTION_PROGRESS_INTERVAL);
	}

  
  const get_wallet_balance = async(selected_asset) =>
	{
     let selected_balance_token_contract
     console.log(address);
		if(!address) return;

		// let _wallet_balance = new BigNumber(0);

        if(selected_asset === NETWORK_NATIVE_ASSETS[selected_asset]) {

            //get native balance
          //  let _wallet_balance = await provider.getBalance(address)
          // let _RPC_PROVIDER = WEB3_PROVIDERS[chainID]
          //   let balance = await _RPC_PROVIDER.eth.getBalance(address);
          //   console.log(balance)
          // setwallet_balance(balance)
        
         
          const balance = await web3.eth.getBalance(address)
        console.log(balance);
   
        
     
          
        } else {
          selected_balance_token_contract = network_available_funds[chainID][selected_asset]
          //  let  selected_balance_token_contract  =CONTRACT_FUNCTIONALITY_PROVIDERS[chainID][selected_asset];
     
          setwallet_balance (await selected_balance_token_contract.methods.balanceOf(account).call().then(function (bal) {
            return bal;
        }));    
         
            // _wallet_balance = await selected_balance_token_contract.methods.balanceOf(address).call().then(function (bal) {
            //     return bal;
            // });
        }

        let asset_precision = ASSET_PRECISION_DECIMALS[selected_asset];

        let padded_zeros = 18 - asset_precision;

        //Pad it out with 0s if necessary
        for(let i = padded_zeros; i > 0; i--) 
        {
          setwallet_balance(wallet_balance.add(BIGNumber.from(0)));
        }

        let _formatted_balance = Number(ethers.utils.formatEther(wallet_balance));

        if(Number(_formatted_balance < 0.00000001))
        {
        	// $(".balance_text").text("0.00000000 " + selected_asset.toUpperCase());
        	return _formatted_balance.toFixed(8);
        } 

        // //_formatted_balance = 
       	// // 	_formatted_balance.toString().substr(0, _formatted_balance.toString().indexOf('.')) 
        // //+  	_formatted_balance.toString().substr(_formatted_balance.toString().indexOf('.'), 9); //Extremely evil to substr out of bounds, but javascript allows it

        // // $(".balance_text").text(_formatted_balance + " " + selected_asset.toUpperCase());
         console.log( _formatted_balance.toFixed(8));
         
        return _formatted_balance.toFixed(8);
    }

   
  const get_bridge_transaction_progress = async(transaction_hash)=> {
     try {
      const res = await fetch( BRIDGE_TRANSACTION_API_URL + BRIDGE_TRANSACTION_API_ENDPOINT + "txhash=" + transaction_hash, {
        method: "GET"
      }) 

       const responseObject = await res.json()

        if (responseObject && responseObject.error != "no txhash found") {
           // code to toggle annd set responseObject.error
           console.log(responseObject.error);
           
           return;
        } else {
          
        }
      // Remove transaction pending spinner
      // $("#transaction_send_pending_spinner").css("display", "none");
      
      // //Add tick
      // $("#sent_to_bridge_tick").css("display", "inherit");
      
      let bridgetxhash = responseObject.bridgetxhash;
      
      if(!bridgetxhash || bridgetxhash == "")
      {
        return;
      }
      
      if(bridgetxhash == "ABORTED")
      {
        clearInterval(transaction_progress_updater);
      //   $(".modal").modal("hide");
          setabort(true)
          !abort && notifyAbort()
      //   $("#send_error_modal_text").text("This bridge transaction was aborted because the send amount did not cover the gas fee. This can happen when network congestion increases unepectedly, increasing the gas price.");
      
      //   $("#send_error_modal").modal("show");
      
      //   //Remove transaction pending spinner
      // $("#transaction_send_pending_spinner").css("display", "inline");
      
      // //Add tick
      // $("#sent_to_bridge_tick").css("display", "none");
      
        return;
      }
      // Bridge has definitely sent the funds
      
      // Hide pending spinner
          // $("#bridge_send_pending_spinner").css("display", "none");
      
          // //Show bridge sent tick
          // $("#bridge_send_pending_tick").css("display", "inherit");
      
          // //Show the transaction explorer link
          // $("#bridge_sent_transaction_explorer_link").css("display", "inherit");
      
          // $("#bridge_sent_transaction_explorer_link_text").text(bridgetxhash.substring(0,3) + "..." + bridgetxhash.substring(bridgetxhash.length - 3, bridgetxhash.length - 1))
      
          // //Set the transaction URL
          // $("#bridge_sent_transaction_explorer_link").attr("href", NETWORK_EXPLORERS_TRANSACTIONS[ROUTE_CHAIN_ID[selected_route].destination] + obj.bridgetxhash);
             setSuccess(true)
             !success && notifySuccess()
          return responseObject;
          
     } catch (err) {
        console.log(err.message);
        
     }
  }

  async function changeChain(_chainId) 
	{

        if(_chainId == 0x1) {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x1' }],
            });
            return;
        } 

        let _chain_id_decimal = parseInt(_chainId);
        let _chain_details;
        let _break = false;

        for(let i = 0; i < CHAIN_DETAILS.length; i++)
        {
        	if(_break) break;

        	if(CHAIN_DETAILS[i].chainId == _chain_id_decimal)
        	{
        		_chain_details = CHAIN_DETAILS[i];
        		_break = true;
        	}
        }

       

        await  window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: 
            [
                {
                    "chainId": _chainId,
                    "chainName": _chain_details.name,
                    "rpcUrls": [
                        _chain_details.rpc[0],
                    ],
                    "iconUrls": [
                        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png"
                    ],
                    "nativeCurrency": _chain_details.nativeCurrency
                }
            ]
        });
    }


    const changeId =()=>{
      changeChain(ROUTE_CHAIN_ID[selected_route].start_chain);
    }
  
  const get_asset_usd_values = async() => {
     try {
      const response = await fetch(BRIDGE_TRANSACTION_API_URL + BRIDGE_GET_ASSET_VALUES_ENDPOINT, {
        method: "GET",
       mode: "cors",
        headers:{
          Accept: "application/json"
        }
      })
      let obj = await response.json()
      console.log(obj);
      
      for(let i = 0; i < obj.length; i++)
      {
        let _asset = obj[i].ticker.toLowerCase();
        asset_usd_values[_asset] = new BigNumber(obj[i].currentPrice);
     
 }    } catch (error) {
        console.log(error);
        
     }

      }

      // get_asset_usd_values()
  const get_fee_estimate = async(network, currency) => {
      try {
         let networks = NETWORK_API_NAMES[network];
        const response = await fetch(`https://bridgeapi.umbria.network/api/bridge/getGasPrice/?network=${networks}`
         , {
          method: "GET",
          mode: "cors",
          headers:{
            Accept: "application/json"
          },
          // body: JSON.stringify({
          //   network: network,
          //   ticker: currency
          // })
      
        })
        // console.log(response);
        let obj = await response.json()
        console.log(obj);
         const fee = Number(obj.getGasPrice).toFixed(8)
          setnetwork_fee(fee)
  
        console.log(network_fee);
      } catch (error){
      console.log(error)
      
    	}
    }


    

    const display = () =>{
      for(let i = 0; i < ROUTE_SUPPORTED_ASSETS[selected_route].length; i++)
      {
        let _asset = ROUTE_SUPPORTED_ASSETS[selected_route][i];
          console.log(_asset);
          
      }
  
    }

    // get_fee_estimate("0x1", "ethmatic")

 useEffect(() => {
  getAl()
  // loadWeb3()
 }, [])
 
// function name() {
//    if (selected_route == "etharb" ) {
    
//    }
// }

const handleWallet = () =>{
 get_wallet_balance(selected_asset)

  
}

const getestimate =() =>{
   get_fee_estimate(selected_asset, ROUTE_CHAIN_ID[selected_route].start_chain)
   display()
}
 
  
  return (
    <div className="App">
     <div className="card">
     {  address.substr(0,6) + "..." + address.substr(address.length -4,4)}
   
      {selected_route == "ethmatic" ? <button className="buttons-route">Bridge from Ethereum to Polygon <span ><img className="span" src={eth}/><img className="span"src={polygon}/></span> </button> : null}
      {selected_route == "maticeth" && <button className="buttons-route">Bridge from  Polygon to Ethereum <span ><img className="span" src={polygon}/><img className="span"src={eth}/></span> </button> }
      {selected_route == "ethbsc" && <button className="buttons-route"> Bridge from Ethereum to BNB chain<span ><img className="span" src={eth}/><img className="span"src={bsc}/></span> </button> }
      {selected_route == "bsceth" && <button className="buttons-route">  Bridge from BNB chain to Ethereum <span ><img className="span" src={bsc}/><img className="span"src={eth}/></span> </button> }
      {selected_route == "ethavax" && <button className="buttons-route">   Bridge from Ethereum to Avalanche <span ><img className="span" src={eth}/><img className="span"src={avalanche}/></span> </button> }
      {selected_route == "avaxeth" && <button className="buttons-route">    Bridge from Avalanche to Ethereum<span ><img className="span" src={avalanche}/><img className="span"src={eth}/></span> </button> }
      {selected_route == "ethftm" && <button className="buttons-route">    Bridge from Ethereum to Fantom<span ><img className="span" src={eth}/><img className="span"src={fantom}/></span> </button> }
      {selected_route == "ftmeth" && <button className="buttons-route">    Bridge from Fantom to Ethereum<span ><img className="span" src={fantom}/><img className="span"src={eth}/></span> </button> }
      {selected_route == "etharb" && <button className="buttons-route">    Bridge from Ethereum to Arbitrum<span ><img className="span" src={eth}/><img className="span"src={arbitrum}/></span> </button> }
      {selected_route == "arbeth" && <button className="buttons-route">    Bridge from Arbitrum to Ethereum<span ><img className="span" src={arbitrum}/><img className="span"src={eth}/></span> </button> }
      {!connected && <> <button className="buttons" onClick={()=>connect()}>Connect wallet</button>
      
        </>
    }
       <button onClick={handleWallet}> Get Bal </button>
    <button onClick={notify}>Notify !</button>
        <ToastContainer />
    {connected && <> <button  className="buttons" onClick={changeId}>Change Networks</button>
  

    // </>
    } 
      {
		inputbox && <> <div className="inputbutton">
		<button>MAX</button><input placeholder="0" className="inputbody" onChange={handleData}/> 

    {
      selected_route == "ethmatic" ?
     ( <>
      <button onClick={handleOpener}>Ethereum (ETH)</button>
	
      <Modal open={opener} onClose={handleCloser}>
           <Box sx={styles}>
              <Assests handleAsset={handleAsset}/>
           </Box>
            </Modal>
      </>)
       :    selected_route == "maticeth" ?
       (<>
      
        <button onClick={handleOpener}>Ethereum (ETH)</button>
    
        <Modal open={opener} onClose={handleCloser}>
             <Box sx={styles}>
                <Assests handleAsset={handleAsset}/>
             </Box>
              </Modal>
        </>
     
        ) : null
     
    }
  
 
		</div> 
    // </>
	  }
    
     <button className='links' onClick={handleOpen}>Choose Which Networks to Bridge Between</button>
     <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
     <Box sx={style}>
        <Networks handleChange={handleChange} />
    </Box>
    </Modal>
     <button className='links'>Bridge</button>
     </div>
    
    </div>
  )
}

export default App
