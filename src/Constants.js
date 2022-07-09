import Web3 from "web3"
import { AbiItem } from 'web3-utils'


	export const CHAIN_DETAILS =
	[
	  {
	    "name": "Ethereum Mainnet",
	    "chainId": 1,
	    "shortName": "eth",
	    "commonName":"ethereum",
	    "chain": "ETH",
	    "network": "mainnet",
	    "networkId": 1,
	    "nativeCurrency": {"name":"Ether","symbol":"ETH","decimals":18},
	    "rpc": ["https://api.mycryptoapi.com/eth","https://cloudflare-eth.com"],
	    "faucets": [],
	    "explorers": [{"name":"etherscan","url":"https://etherscan.io","standard":"EIP3091"}],
	    "infoURL": "https://ethereum.org"
	  },
	  {
	    "name": "Arbitrum One",
	    "chainId": 42161,
	    "shortName": "arb",
	    "commonName":"arbitrum",
	    "chain": "ARB",
	    "network": "mainnet",
	    "networkId": 10,
	    "nativeCurrency": {"name":"Ether","symbol":"ETH","decimals":18},
	    "rpc": ["https://arb1.arbitrum.io/rpc"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://arbiscan.io"
	  },
	  {
	    "name": "Optimistic Ethereum",
	    "chainId": 10,
	    "shortName": "oeth",
	    "chain": "ETH",
	    "network": "mainnet",
	    "networkId": 10,
	    "nativeCurrency": {"name":"Ether","symbol":"OETH","decimals":18},
	    "rpc": ["https://mainnet.optimism.io/"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://optimism.io"
	  },
	  {
	    "name": "xDAI Chain",
	    "chainId": 100,
	    "shortName": "xdai",
	    "chain": "XDAI",
	    "network": "mainnet",
	    "networkId": 100,
	    "nativeCurrency": {"name":"xDAI","symbol":"xDAI","decimals":18},
	    "rpc": ["https://rpc.xdaichain.com","https://xdai.poanetwork.dev","wss://rpc.xdaichain.com/wss","wss://xdai.poanetwork.dev/wss","http://xdai.poanetwork.dev","https://dai.poa.network","ws://xdai.poanetwork.dev:8546"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://forum.poa.network/c/xdai-chain"
	  },
	  {
	    "name": "Smart Bitcoin Cash",
	    "chainId": 10000,
	    "shortName": "smartbch",
	    "chain": "smartBCH",
	    "network": "mainnet",
	    "networkId": 10000,
	    "nativeCurrency": {"name":"Bitcoin Cash","symbol":"BCH","decimals":18},
	    "rpc": ["https://rpc-mainnet.smartbch.org"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "http://smartbch.org/"
	  },
	  {
	    "name": "Smart Bitcoin Cash Testnet",
	    "chainId": 10001,
	    "shortName": "smartbchtest",
	    "chain": "smartBCHTest",
	    "network": "testnet",
	    "networkId": 10001,
	    "nativeCurrency": {"name":"Bitcoin Cash Test Token","symbol":"BCHT","decimals":18},
	    "rpc": ["https://rpc-testnet.smartbch.org"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "http://smartbch.org/"
	  },
	  {
	    "name": "Klaytn Testnet Baobab",
	    "chainId": 1001,
	    "shortName": "Baobab",
	    "chain": "KLAY",
	    "network": "baobab",
	    "networkId": 1001,
	    "nativeCurrency": {"name":"KLAY","symbol":"KLAY","decimals":18},
	    "rpc": ["https://node-api.klaytnapi.com/v1/klaytn"],
	    "faucets": ["https://baobab.wallet.klaytn.com/access?next=faucet"],
	    "explorers": [],
	    "infoURL": "https://www.klaytn.com/"
	  },
	  {
	    "name": "Newton Testnet",
	    "chainId": 1007,
	    "shortName": "tnew",
	    "chain": "NEW",
	    "network": "testnet",
	    "networkId": 1007,
	    "nativeCurrency": {"name":"Newton","symbol":"NEW","decimals":18},
	    "rpc": ["https://rpc1.newchain.newtonproject.org"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.newtonproject.org/"
	  },
	  {
	    "name": "EtherInc",
	    "chainId": 101,
	    "shortName": "eti",
	    "chain": "ETI",
	    "network": "mainnet",
	    "networkId": 1,
	    "nativeCurrency": {"name":"EtherInc Ether","symbol":"ETI","decimals":18},
	    "rpc": ["https://api.einc.io/jsonrpc/mainnet"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://einc.io"
	  },
	  {
	    "name": "Evrice Network",
	    "chainId": 1010,
	    "shortName": "EVC",
	    "chain": "EVC",
	    "network": "Evrice",
	    "networkId": 1010,
	    "nativeCurrency": {"name":"Evrice","symbol":"EVC","decimals":18},
	    "rpc": ["https://meta.evrice.com"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://evrice.com"
	  },
	  {
	    "name": "Newton",
	    "chainId": 1012,
	    "shortName": "new",
	    "chain": "NEW",
	    "network": "mainnet",
	    "networkId": 1012,
	    "nativeCurrency": {"name":"Newton","symbol":"NEW","decimals":18},
	    "rpc": ["https://global.rpc.mainnet.newtonproject.org"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.newtonproject.org/"
	  },
	  {
	    "name": "Web3Games Testnet",
	    "chainId": 102,
	    "shortName": "w3g",
	    "chain": "Web3Games",
	    "network": "testnet",
	    "networkId": 102,
	    "nativeCurrency": {"name":"Web3Games","symbol":"W3G","decimals":18},
	    "rpc": ["https://substrate.org.cn"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://web3games.org/"
	  },
	  {
	    "name": "Clover Testnet",
	    "chainId": 1023,
	    "shortName": "tclv",
	    "chain": "Clover",
	    "network": "clover testnet",
	    "networkId": 1023,
	    "nativeCurrency": {"name":"Clover","symbol":"CLV","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://clover.finance"
	  },
	  {
	    "name": "Clover Mainnet",
	    "chainId": 1024,
	    "shortName": "clv",
	    "chain": "Clover",
	    "network": "clover mainnet",
	    "networkId": 1024,
	    "nativeCurrency": {"name":"Clover","symbol":"CLV","decimals":18},
	    "rpc": ["https://rpc-ivy.clover.finance","https://rpc-ivy-2.clover.finance","https://rpc-ivy-3.clover.finance"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://clover.finance"
	  },
	  {
	    "name": "ThunderCore Mainnet",
	    "chainId": 108,
	    "shortName": "TT",
	    "chain": "TT",
	    "network": "mainnet",
	    "networkId": 108,
	    "nativeCurrency": {"name":"ThunderCore Mainnet Ether","symbol":"TT","decimals":18},
	    "rpc": ["https://mainnet-rpc.thundercore.com"],
	    "faucets": ["https://faucet.thundercore.com"],
	    "explorers": [],
	    "infoURL": "https://thundercore.com"
	  },
	  {
	    "name": "Metadium Mainnet",
	    "chainId": 11,
	    "shortName": "meta",
	    "chain": "META",
	    "network": "mainnet",
	    "networkId": 11,
	    "nativeCurrency": {"name":"Metadium Mainnet Ether","symbol":"META","decimals":18},
	    "rpc": ["https://api.metadium.com/prod"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://metadium.com"
	  },
	  {
	    "name": "IPOS Network",
	    "chainId": 1122334455,
	    "shortName": "ipos",
	    "chain": "IPOS",
	    "network": "mainnet",
	    "networkId": 1122334455,
	    "nativeCurrency": {"name":"IPOS Network Ether","symbol":"IPOS","decimals":18},
	    "rpc": ["https://rpc.iposlab.com","https://rpc2.iposlab.com"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://iposlab.com"
	  },
	  {
	    "name": "MathChain",
	    "chainId": 1139,
	    "shortName": "MATH",
	    "chain": "MATH",
	    "network": "mainnet",
	    "networkId": 1139,
	    "nativeCurrency": {"name":"MathChain","symbol":"MATH","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://mathchain.org"
	  },
	  {
	    "name": "MathChain Testnet",
	    "chainId": 1140,
	    "shortName": "tMATH",
	    "chain": "MATH",
	    "network": "testnet",
	    "networkId": 1140,
	    "nativeCurrency": {"name":"MathChain","symbol":"MATH","decimals":18},
	    "rpc": ["https://galois-hk.maiziqianbao.net/rpc"],
	    "faucets": ["https://scan.boka.network/#/Galois/faucet"],
	    "explorers": [],
	    "infoURL": "https://mathchain.org"
	  },
	  {
	    "name": "Metadium Testnet",
	    "chainId": 12,
	    "shortName": "kal",
	    "chain": "META",
	    "network": "testnet",
	    "networkId": 12,
	    "nativeCurrency": {"name":"Metadium Testnet Ether","symbol":"KAL","decimals":18},
	    "rpc": ["https://api.metadium.com/dev"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://metadium.com"
	  },
	  {
	    "name": "Fuse Mainnet",
	    "chainId": 122,
	    "shortName": "fuse",
	    "chain": "FUSE",
	    "network": "mainnet",
	    "networkId": 122,
	    "nativeCurrency": {"name":"Fuse","symbol":"FUSE","decimals":18},
	    "rpc": ["https://rpc.fuse.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://fuse.io/"
	  },
	  {
	    "name": "Huobi ECO Chain Mainnet",
	    "chainId": 128,
	    "shortName": "heco",
	    "chain": "Heco",
	    "network": "mainnet",
	    "networkId": 128,
	    "nativeCurrency": {"name":"Huobi ECO Chain Native Token","symbol":"HT","decimals":18},
	    "rpc": ["https://http-mainnet.hecochain.com","wss://ws-mainnet.hecochain.com"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://hecoinfo.com"
	  },
	  {
	    "name": "Moonbeam Polkadot",
	    "chainId": 1284,
	    "shortName": "mbeam",
	    "chain": "MOON",
	    "network": "moonbeam",
	    "networkId": 1284,
	    "nativeCurrency": {"name":"Glimmer","symbol":"GLMR","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://moonbeam.network/networks/moonbeam/"
	  },
	  {
	    "name": "Moonriver Kusama",
	    "chainId": 1285,
	    "shortName": "mriver",
	    "chain": "MOON",
	    "network": "moonriver",
	    "networkId": 1285,
	    "nativeCurrency": {"name":"River","symbol":"RIVER","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://moonbeam.network/networks/moonriver/"
	  },
	  {
	    "name": "Moonrock Rococo",
	    "chainId": 1286,
	    "shortName": "mrock",
	    "chain": "MOON",
	    "network": "moonrock",
	    "networkId": 1286,
	    "nativeCurrency": {"name":"Rocs","symbol":"ROC","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": ""
	  },
	  {
	    "name": "Moonbeam Testnet Moonbase Alpha",
	    "chainId": 1287,
	    "shortName": "mbase",
	    "chain": "MOON",
	    "network": "moonbase",
	    "networkId": 1287,
	    "nativeCurrency": {"name":"Dev","symbol":"DEV","decimals":18},
	    "rpc": ["https://rpc.testnet.moonbeam.network","wss://wss.testnet.moonbeam.network"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://docs.moonbeam.network/networks/testnet/"
	  },
	  {
	    "name": "Diode Testnet Staging",
	    "chainId": 13,
	    "shortName": "dstg",
	    "chain": "DIODE",
	    "network": "testnet",
	    "networkId": 13,
	    "nativeCurrency": {"name":"Staging Diodes","symbol":"sDIODE","decimals":18},
	    "rpc": ["https://staging.diode.io:8443/","wss://staging.diode.io:8443/ws"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://diode.io/staging"
	  },
	  {
	    "name": "Ether-1",
	    "chainId": 1313114,
	    "shortName": "etho",
	    "chain": "ETHO",
	    "network": "mainnet",
	    "networkId": 1313114,
	    "nativeCurrency": {"name":"Ether-1 Ether","symbol":"ETHO","decimals":18},
	    "rpc": ["https://rpc.ether1.org"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://ether1.org"
	  },
	  {
	    "name": "NEAR MainNet",
	    "chainId": 1313161554,
	    "shortName": "near",
	    "chain": "NEAR",
	    "network": "mainnet",
	    "networkId": 1313161554,
	    "nativeCurrency": {"name":"NEAR","symbol":"NEAR","decimals":24},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://near.org/"
	  },
	  {
	    "name": "NEAR TestNet",
	    "chainId": 1313161555,
	    "shortName": "neart",
	    "chain": "NEAR",
	    "network": "testnet",
	    "networkId": 1313161555,
	    "nativeCurrency": {"name":"NEAR","symbol":"tNEAR","decimals":24},
	    "rpc": [],
	    "faucets": ["https://wallet.testnet.near.org"],
	    "explorers": [],
	    "infoURL": "https://near.org/"
	  },
	  {
	    "name": "NEAR BetaNet",
	    "chainId": 1313161556,
	    "shortName": "nearb",
	    "chain": "NEAR",
	    "network": "betanet",
	    "networkId": 1313161556,
	    "nativeCurrency": {"name":"NEAR","symbol":"bNEAR","decimals":24},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://near.org/"
	  },
	  {
	    "name": "Xerom",
	    "chainId": 1313500,
	    "shortName": "xero",
	    "chain": "XERO",
	    "network": "mainnet",
	    "networkId": 1313500,
	    "nativeCurrency": {"name":"Xerom Ether","symbol":"XERO","decimals":18},
	    "rpc": ["https://rpc.xerom.org"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://xerom.org"
	  },
	  {
	    "name": "PepChain Churchill",
	    "chainId": 13371337,
	    "shortName": "tpep",
	    "chain": "PEP",
	    "network": "testnet",
	    "networkId": 13371337,
	    "nativeCurrency": {"name":"PepChain Churchill Ether","symbol":"TPEP","decimals":18},
	    "rpc": ["https://churchill-rpc.pepchain.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://pepchain.io"
	  },
	  {
	    "name": "Matic Mainnet",
	    "chainId": 137,
	    "shortName": "matic",
		    "commonName":"matic",
	    "chain": "Matic",
	    "network": "mainnet",
	    "networkId": 137,
	    "nativeCurrency": {"name":"Matic","symbol":"MATIC","decimals":18},
	    "rpc": ["https://rpc-mainnet.matic.network","wss://ws-mainnet.matic.network"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://matic.network/"
	  },
	  {
	    "name": "Flare Mainnet",
	    "chainId": 14,
	    "shortName": "flr",
	    "chain": "FLR",
	    "network": "flare",
	    "networkId": 14,
	    "nativeCurrency": {"name":"Spark","symbol":"FLR","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://flare.xyz"
	  },
	  {
	    "name": "Diode Prenet",
	    "chainId": 15,
	    "shortName": "diode",
	    "chain": "DIODE",
	    "network": "mainnet",
	    "networkId": 15,
	    "nativeCurrency": {"name":"Diodes","symbol":"DIODE","decimals":18},
	    "rpc": ["https://prenet.diode.io:8443/","wss://prenet.diode.io:8443/ws"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://diode.io/prenet"
	  },
	  {
	    "name": "Flare Testnet Coston",
	    "chainId": 16,
	    "shortName": "cflr",
	    "chain": "FLR",
	    "network": "coston",
	    "networkId": 16,
	    "nativeCurrency": {"name":"Coston Spark","symbol":"CFLR","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://github.com/flare-eng/coston"
	  },
	  {
	    "name": "Lightstreams Testnet",
	    "chainId": 162,
	    "shortName": "tpht",
	    "chain": "PHT",
	    "network": "sirius",
	    "networkId": 162,
	    "nativeCurrency": {"name":"Lightstreams PHT","symbol":"PHT","decimals":18},
	    "rpc": ["https://node.sirius.lightstreams.io"],
	    "faucets": ["https://discuss.lightstreams.network/t/request-test-tokens"],
	    "explorers": [],
	    "infoURL": "https://explorer.sirius.lightstreams.io"
	  },
	  {
	    "name": "Atheios",
	    "chainId": 1620,
	    "shortName": "ath",
	    "chain": "ATH",
	    "network": "mainnet",
	    "networkId": 11235813,
	    "nativeCurrency": {"name":"Atheios Ether","symbol":"ATH","decimals":18},
	    "rpc": ["https://wallet.atheios.com:8797"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://atheios.com"
	  },
	  {
	    "name": "Lightstreams Mainnet",
	    "chainId": 163,
	    "shortName": "pht",
	    "chain": "PHT",
	    "network": "mainnet",
	    "networkId": 163,
	    "nativeCurrency": {"name":"Lightstreams PHT","symbol":"PHT","decimals":18},
	    "rpc": ["https://node.mainnet.lightstreams.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://explorer.lightstreams.io"
	  },
	  {
	    "name": "Harmony Mainnet Shard 0",
	    "chainId": 1666600000,
	    "shortName": "hmy-s0",
	    "chain": "Harmony",
	    "network": "mainnet",
	    "networkId": 1666600000,
	    "nativeCurrency": {"name":"ONE","symbol":"ONE","decimals":18},
	    "rpc": ["https://api.harmony.one"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.harmony.one/"
	  },
	  {
	    "name": "Harmony Mainnet Shard 1",
	    "chainId": 1666600001,
	    "shortName": "hmy-s1",
	    "chain": "Harmony",
	    "network": "mainnet",
	    "networkId": 1666600001,
	    "nativeCurrency": {"name":"ONE","symbol":"ONE","decimals":18},
	    "rpc": ["https://s1.api.harmony.one"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.harmony.one/"
	  },
	  {
	    "name": "Harmony Mainnet Shard 2",
	    "chainId": 1666600002,
	    "shortName": "hmy-s2",
	    "chain": "Harmony",
	    "network": "mainnet",
	    "networkId": 1666600002,
	    "nativeCurrency": {"name":"ONE","symbol":"ONE","decimals":18},
	    "rpc": ["https://s2.api.harmony.one"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.harmony.one/"
	  },
	  {
	    "name": "Harmony Mainnet Shard 3",
	    "chainId": 1666600003,
	    "shortName": "hmy-s3",
	    "chain": "Harmony",
	    "network": "mainnet",
	    "networkId": 1666600003,
	    "nativeCurrency": {"name":"ONE","symbol":"ONE","decimals":18},
	    "rpc": ["https://s3.api.harmony.one"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.harmony.one/"
	  },
	  {
	    "name": "Harmony Testnet Shard 0",
	    "chainId": 1666700000,
	    "shortName": "hmy-b-s0",
	    "chain": "Harmony",
	    "network": "testnet",
	    "networkId": 1666700000,
	    "nativeCurrency": {"name":"ONE","symbol":"ONE","decimals":18},
	    "rpc": ["https://api.s0.b.hmny.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.harmony.one/"
	  },
	  {
	    "name": "Harmony Testnet Shard 1",
	    "chainId": 1666700001,
	    "shortName": "hmy-b-s1",
	    "chain": "Harmony",
	    "network": "testnet",
	    "networkId": 1666700001,
	    "nativeCurrency": {"name":"ONE","symbol":"ONE","decimals":18},
	    "rpc": ["https://api.s1.b.hmny.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.harmony.one/"
	  },
	  {
	    "name": "Harmony Testnet Shard 2",
	    "chainId": 1666700002,
	    "shortName": "hmy-b-s2",
	    "chain": "Harmony",
	    "network": "testnet",
	    "networkId": 1666700002,
	    "nativeCurrency": {"name":"ONE","symbol":"ONE","decimals":18},
	    "rpc": ["https://api.s2.b.hmny.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.harmony.one/"
	  },
	  {
	    "name": "Harmony Testnet Shard 3",
	    "chainId": 1666700003,
	    "shortName": "hmy-b-s3",
	    "chain": "Harmony",
	    "network": "testnet",
	    "networkId": 1666700003,
	    "nativeCurrency": {"name":"ONE","symbol":"ONE","decimals":18},
	    "rpc": ["https://api.s3.b.hmny.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.harmony.one/"
	  },
	  {
	    "name": "ThaiChain 2.0 ThaiFi",
	    "chainId": 17,
	    "shortName": "tfi",
	    "chain": "TCH",
	    "network": "thaifi",
	    "networkId": 17,
	    "nativeCurrency": {"name":"Thaifi Ether","symbol":"TFI","decimals":18},
	    "rpc": ["https://rpc.thaifi.com"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://exp.thaifi.com"
	  },
	  {
	    "name": "HOO Smart Chain Testnet",
	    "chainId": 170,
	    "shortName": "hoosmartchain",
	    "chain": "ETH",
	    "network": "testnet",
	    "networkId": 170,
	    "nativeCurrency": {"name":"HOO","symbol":"HOO","decimals":18},
	    "rpc": ["https://http-testnet.hoosmartchain.com"],
	    "faucets": ["https://faucet-testnet.hscscan.com/"],
	    "explorers": [],
	    "infoURL": "https://www.hoosmartchain.com"
	  },
	  {
	    "name": "ThunderCore Testnet",
	    "chainId": 18,
	    "shortName": "TST",
	    "chain": "TST",
	    "network": "testnet",
	    "networkId": 18,
	    "nativeCurrency": {"name":"ThunderCore Testnet Ether","symbol":"TST","decimals":18},
	    "rpc": ["https://testnet-rpc.thundercore.com"],
	    "faucets": ["https://faucet-testnet.thundercore.com"],
	    "explorers": [],
	    "infoURL": "https://thundercore.com"
	  },
	  {
	    "name": "IOLite",
	    "chainId": 18289463,
	    "shortName": "ilt",
	    "chain": "ILT",
	    "network": "mainnet",
	    "networkId": 18289463,
	    "nativeCurrency": {"name":"IOLite Ether","symbol":"ILT","decimals":18},
	    "rpc": ["https://net.iolite.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://iolite.io"
	  },
	  {
	    "name": "Teslafunds",
	    "chainId": 1856,
	    "shortName": "tsf",
	    "chain": "TSF",
	    "network": "mainnet",
	    "networkId": 1,
	    "nativeCurrency": {"name":"Teslafunds Ether","symbol":"TSF","decimals":18},
	    "rpc": ["https://tsfapi.europool.me"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://teslafunds.io"
	  },
	  {
	    "name": "EtherGem",
	    "chainId": 1987,
	    "shortName": "egem",
	    "chain": "EGEM",
	    "network": "mainnet",
	    "networkId": 1987,
	    "nativeCurrency": {"name":"EtherGem Ether","symbol":"EGEM","decimals":18},
	    "rpc": ["https://jsonrpc.egem.io/custom"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://egem.io"
	  },
	  {
	    "name": "Expanse Network",
	    "chainId": 2,
	    "shortName": "exp",
	    "chain": "EXP",
	    "network": "mainnet",
	    "networkId": 1,
	    "nativeCurrency": {"name":"Expanse Network Ether","symbol":"EXP","decimals":18},
	    "rpc": ["https://node.expanse.tech"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://expanse.tech"
	  },
	  {
	    "name": "ELA-ETH-Sidechain Mainnet",
	    "chainId": 20,
	    "shortName": "elaeth",
	    "chain": "ETH",
	    "network": "mainnet",
	    "networkId": 20,
	    "nativeCurrency": {"name":"Elastos","symbol":"ELA","decimals":18},
	    "rpc": ["https://mainrpc.elaeth.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.elastos.org/"
	  },
	  {
	    "name": "Akroma",
	    "chainId": 200625,
	    "shortName": "aka",
	    "chain": "AKA",
	    "network": "mainnet",
	    "networkId": 200625,
	    "nativeCurrency": {"name":"Akroma Ether","symbol":"AKA","decimals":18},
	    "rpc": ["https://remote.akroma.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://akroma.io"
	  },
	  {
	    "name": "420coin",
	    "chainId": 2020,
	    "shortName": "420",
	    "chain": "420",
	    "network": "mainnet",
	    "networkId": 2020,
	    "nativeCurrency": {"name":"Fourtwenty","symbol":"420","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://420integrated.com"
	  },
	  {
	    "name": "Edgeware Mainnet",
	    "chainId": 2021,
	    "shortName": "edg",
	    "chain": "EDG",
	    "network": "mainnet",
	    "networkId": 2021,
	    "nativeCurrency": {"name":"Edge","symbol":"EDG","decimals":18},
	    "rpc": ["https://mainnet1.edgewa.re"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "http://edgewa.re"
	  },
	  {
	    "name": "Beresheet Testnet",
	    "chainId": 2022,
	    "shortName": "edgt",
	    "chain": "EDG",
	    "network": "beresheet",
	    "networkId": 2022,
	    "nativeCurrency": {"name":"Testnet Edge","symbol":"tEDG","decimals":18},
	    "rpc": ["https://beresheet1.edgewa.re"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "http://edgewa.re"
	  },
	  {
	    "name": "ELA-ETH-Sidechain Testnet",
	    "chainId": 21,
	    "shortName": "elaetht",
	    "chain": "ETH",
	    "network": "testnet",
	    "networkId": 21,
	    "nativeCurrency": {"name":"Elastos","symbol":"tELA","decimals":18},
	    "rpc": ["https://rpc.elaeth.io"],
	    "faucets": ["https://faucet.elaeth.io/"],
	    "explorers": [],
	    "infoURL": "https://elaeth.io/"
	  },
	  {
	    "name": "Freight Trust Network",
	    "chainId": 211,
	    "shortName": "EDI",
	    "chain": "EDI",
	    "network": "freight & trade network",
	    "networkId": 0,
	    "nativeCurrency": {"name":"Freight Trust Native","symbol":"0xF","decimals":18},
	    "rpc": ["http://13.57.207.168:3435","https://app.freighttrust.net/ftn/${API_KEY}"],
	    "faucets": ["http://faucet.freight.sh"],
	    "explorers": [],
	    "infoURL": "https://freighttrust.com"
	  },
	  {
	    "name": "ELA-DID-Sidechain Mainnet",
	    "chainId": 22,
	    "shortName": "eladid",
	    "chain": "ETH",
	    "network": "mainnet",
	    "networkId": 22,
	    "nativeCurrency": {"name":"Elastos","symbol":"ELA","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.elastos.org/"
	  },
	  {
	    "name": "ELA-DID-Sidechain Testnet",
	    "chainId": 23,
	    "shortName": "eladidt",
	    "chain": "ETH",
	    "network": "testnet",
	    "networkId": 23,
	    "nativeCurrency": {"name":"Elastos","symbol":"tELA","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://elaeth.io/"
	  },
	  {
	    "name": "Webchain",
	    "chainId": 24484,
	    "shortName": "web",
	    "chain": "WEB",
	    "network": "mainnet",
	    "networkId": 37129,
	    "nativeCurrency": {"name":"Webchain Ether","symbol":"WEB","decimals":18},
	    "rpc": ["https://node1.webchain.network"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://webchain.network"
	  },
	  {
	    "name": "Energy Web Chain",
	    "chainId": 246,
	    "shortName": "ewt",
	    "chain": "Energy Web Chain",
	    "network": "mainnet",
	    "networkId": 246,
	    "nativeCurrency": {"name":"Energy Web Token","symbol":"EWT","decimals":18},
	    "rpc": ["https://rpc.energyweb.org","wss://rpc.energyweb.org/ws"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://energyweb.org"
	  },
	  {
	    "name": "ARTIS sigma1",
	    "chainId": 246529,
	    "shortName": "ats",
	    "chain": "ARTIS",
	    "network": "sigma1",
	    "networkId": 246529,
	    "nativeCurrency": {"name":"ARTIS sigma1 Ether","symbol":"ATS","decimals":18},
	    "rpc": ["https://rpc.sigma1.artis.network"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://artis.eco"
	  },
	  {
	    "name": "ARTIS Testnet tau1",
	    "chainId": 246785,
	    "shortName": "atstau",
	    "chain": "ARTIS",
	    "network": "tau1",
	    "networkId": 246785,
	    "nativeCurrency": {"name":"ARTIS tau1 Ether","symbol":"tATS","decimals":18},
	    "rpc": ["https://rpc.tau1.artis.network"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://artis.network"
	  },
	  {
	    "name": "MintMe.com Coin",
	    "chainId": 24734,
	    "shortName": "mintme",
	    "chain": "MINTME",
	    "network": "mainnet",
	    "networkId": 37480,
	    "nativeCurrency": {"name":"MintMe.com Coin","symbol":"MINTME","decimals":18},
	    "rpc": ["https://node1.mintme.com"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.mintme.com"
	  },
	  {
	    "name": "Fantom Opera",
	    "chainId": 250,
	    "shortName": "ftm",
	    "commonName" : "fantom",
	    "chain": "FTM",
	    "network": "mainnet",
	    "networkId": 250,
	    "nativeCurrency": {"name":"Fantom","symbol":"FTM","decimals":18},
	    "rpc": ["https://rpcapi.fantom.network"],
	    "faucets": [],
	    "explorers": [{"name":"ftmscan","url":"https://ftmscan.com","icon":"ftmscan","standard":"EIP3091"}],
	    "infoURL": "https://fantom.foundation"
	  },
	  {
	    "name": "Huobi ECO Chain Testnet",
	    "chainId": 256,
	    "shortName": "hecot",
	    "chain": "Heco",
	    "network": "testnet",
	    "networkId": 256,
	    "nativeCurrency": {"name":"Huobi ECO Chain Test Native Token","symbol":"htt","decimals":18},
	    "rpc": ["https://http-testnet.hecochain.com","wss://ws-testnet.hecochain.com"],
	    "faucets": ["https://scan-testnet.hecochain.com/faucet"],
	    "explorers": [],
	    "infoURL": "https://testnet.hecoinfo.com"
	  },
	  {
	    "name": "High Performance Blockchain",
	    "chainId": 269,
	    "shortName": "hpb",
	    "chain": "HPB",
	    "network": "mainnet",
	    "networkId": 100,
	    "nativeCurrency": {"name":"High Performance Blockchain Ether","symbol":"HPB","decimals":18},
	    "rpc": ["https://hpb.app"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://hpbscan.org/"
	  },
	  {
	    "name": "Auxilium Network Mainnet",
	    "chainId": 28945486,
	    "shortName": "auxi",
	    "chain": "AUX",
	    "network": "mainnet",
	    "networkId": 28945486,
	    "nativeCurrency": {"name":"Auxilium coin","symbol":"AUX","decimals":18},
	    "rpc": ["https://rpc.auxilium.global"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://auxilium.global"
	  },
	  {
	    "name": "Ethereum Testnet Ropsten",
	    "chainId": 3,
	    "shortName": "rop",
	    "chain": "ETH",
	    "network": "ropsten",
	    "networkId": 3,
	    "nativeCurrency": {"name":"Ropsten Ether","symbol":"ROP","decimals":18},
	    "rpc": ["https://ropsten.infura.io/v3/${INFURA_API_KEY}","wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}"],
	    "faucets": ["https://faucet.ropsten.be?${ADDRESS}"],
	    "explorers": [],
	    "infoURL": "https://github.com/ethereum/ropsten"
	  },
	  {
	    "name": "RSK Mainnet",
	    "chainId": 30,
	    "shortName": "rsk",
	    "chain": "RSK",
	    "network": "mainnet",
	    "networkId": 30,
	    "nativeCurrency": {"name":"RSK Mainnet Ether","symbol":"RBTC","decimals":18},
	    "rpc": ["https://public-node.rsk.co","https://mycrypto.rsk.co"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://rsk.co"
	  },
	  {
	    "name": "RSK Testnet",
	    "chainId": 31,
	    "shortName": "trsk",
	    "chain": "RSK",
	    "network": "testnet",
	    "networkId": 31,
	    "nativeCurrency": {"name":"RSK Testnet Ether","symbol":"tRBTC","decimals":18},
	    "rpc": ["https://public-node.testnet.rsk.co","https://mycrypto.testnet.rsk.co"],
	    "faucets": ["https://faucet.testnet.rsk.co"],
	    "explorers": [],
	    "infoURL": "https://rsk.co"
	  },
	  {
	    "name": "Ethersocial Network",
	    "chainId": 31102,
	    "shortName": "esn",
	    "chain": "ESN",
	    "network": "mainnet",
	    "networkId": 1,
	    "nativeCurrency": {"name":"Ethersocial Network Ether","symbol":"ESN","decimals":18},
	    "rpc": ["https://api.esn.gonspool.com"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://ethersocial.org"
	  },
	  {
	    "name": "Pirl",
	    "chainId": 3125659152,
	    "shortName": "pirl",
	    "chain": "PIRL",
	    "network": "mainnet",
	    "networkId": 3125659152,
	    "nativeCurrency": {"name":"Pirl Ether","symbol":"PIRL","decimals":18},
	    "rpc": ["https://wallrpc.pirl.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://pirl.io"
	  },
	  {
	    "name": "KuCoin Community Chain Testnet",
	    "chainId": 322,
	    "shortName": "kcc",
	    "chain": "KCC",
	    "network": "testnet",
	    "networkId": 322,
	    "nativeCurrency": {"name":"KuCoin Testnet Token","symbol":"KCS","decimals":18},
	    "rpc": ["https://rpc-testnet.kucoin.one"],
	    "faucets": ["https://faucet-testnet.kucoin.one"],
	    "explorers": [{"name":"kcc-scan","url":"https://scan-testnet.kucoin.one","standard":"EIP3091"}],
	    "infoURL": "https://scan-testnet.kucoin.one"
	  },
	  {
	    "name": "Fusion Mainnet",
	    "chainId": 32659,
	    "shortName": "fsn",
	    "chain": "FSN",
	    "network": "mainnet",
	    "networkId": 32659,
	    "nativeCurrency": {"name":"Fusion","symbol":"FSN","decimals":18},
	    "rpc": ["https://mainnet.anyswap.exchange","https://fsn.dev/api"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.fusion.org/"
	  },
	  {
	    "name": "GoodData Mainnet",
	    "chainId": 33,
	    "shortName": "GooD",
	    "chain": "GooD",
	    "network": "mainnet",
	    "networkId": 33,
	    "nativeCurrency": {"name":"GoodData Mainnet Ether","symbol":"GooD","decimals":18},
	    "rpc": ["https://rpc.goodata.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.goodata.org"
	  },
	  {
	    "name": "TBWG Chain",
	    "chainId": 35,
	    "shortName": "tbwg",
	    "chain": "TBWG",
	    "network": "mainnet",
	    "networkId": 35,
	    "nativeCurrency": {"name":"TBWG Ether","symbol":"TBG","decimals":18},
	    "rpc": ["https://rpc.tbwg.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://tbwg.io"
	  },
	  {
	    "name": "Joys Digital Mainnet",
	    "chainId": 35855456,
	    "shortName": "JOYS",
	    "chain": "JOYS",
	    "network": "mainnet",
	    "networkId": 35855456,
	    "nativeCurrency": {"name":"JOYS","symbol":"JOYS","decimals":18},
	    "rpc": ["https://node.joys.digital"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://joys.digital"
	  },
	  {
	    "name": "Valorbit",
	    "chainId": 38,
	    "shortName": "val",
	    "chain": "VAL",
	    "network": "mainnet",
	    "networkId": 38,
	    "nativeCurrency": {"name":"Valorbit","symbol":"VAL","decimals":18},
	    "rpc": ["https://rpc.valorbit.com/v2"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://valorbit.com"
	  },
	  {
	    "name": "Lisinski",
	    "chainId": 385,
	    "shortName": "lisinski",
	    "chain": "CRO",
	    "network": "mainnet",
	    "networkId": 385,
	    "nativeCurrency": {"name":"Lisinski Ether","symbol":"LISINSKI","decimals":18},
	    "rpc": ["https://rpc-bitfalls1.lisinski.online"],
	    "faucets": ["https://pipa.lisinski.online"],
	    "explorers": [],
	    "infoURL": "https://lisinski.online"
	  },
	  {
	    "name": "Energi Mainnet",
	    "chainId": 39797,
	    "shortName": "nrg",
	    "chain": "NRG",
	    "network": "mainnet",
	    "networkId": 39797,
	    "nativeCurrency": {"name":"Energi","symbol":"NRG","decimals":18},
	    "rpc": ["https://nodeapi.gen3.energi.network"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.energi.world/"
	  },
	  {
	    "name": "Ethereum Testnet Rinkeby",
	    "chainId": 4,
	    "shortName": "rin",
	    "chain": "ETH",
	    "network": "rinkeby",
	    "networkId": 4,
	    "nativeCurrency": {"name":"Rinkeby Ether","symbol":"RIN","decimals":18},
	    "rpc": ["https://rinkeby.infura.io/v3/${INFURA_API_KEY}","wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}"],
	    "faucets": ["https://faucet.rinkeby.io"],
	    "explorers": [],
	    "infoURL": "https://www.rinkeby.io"
	  },
	  {
	    "name": "Telos EVM Mainnet",
	    "chainId": 40,
	    "shortName": "Telos EVM",
	    "chain": "TLOS",
	    "network": "mainnet",
	    "networkId": 40,
	    "nativeCurrency": {"name":"Telos","symbol":"TLOS","decimals":18},
	    "rpc": ["https://mainnet.telos.net/evm"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://telos.net"
	  },
	  {
	    "name": "Telos EVM Testnet",
	    "chainId": 41,
	    "shortName": "Telos EVM Testnet",
	    "chain": "TLOS",
	    "network": "testnet",
	    "networkId": 41,
	    "nativeCurrency": {"name":"Telos","symbol":"TLOS","decimals":18},
	    "rpc": ["https://testnet.telos.net/evm"],
	    "faucets": ["https://app.telos.net/testnet/developers"],
	    "explorers": [],
	    "infoURL": "https://telos.net"
	  },
	  {
	    "name": "Ethereum Testnet Kovan",
	    "chainId": 42,
	    "shortName": "kov",
	    "chain": "ETH",
	    "network": "kovan",
	    "networkId": 42,
	    "nativeCurrency": {"name":"Kovan Ether","symbol":"KOV","decimals":18},
	    "rpc": ["https://kovan.poa.network","http://kovan.poa.network:8545","https://kovan.infura.io/v3/${INFURA_API_KEY}","wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}","ws://kovan.poa.network:8546"],
	    "faucets": ["https://faucet.kovan.network","https://gitter.im/kovan-testnet/faucet"],
	    "explorers": [],
	    "infoURL": "https://kovan-testnet.github.io/website"
	  },
	  {
	    "name": "Optimistic Ethereum Testnet Goerli",
	    "chainId": 420,
	    "shortName": "ogor",
	    "chain": "ETH",
	    "network": "goerli",
	    "networkId": 420,
	    "nativeCurrency": {"name":"Görli Ether","symbol":"GOR","decimals":18},
	    "rpc": ["https://goerli.optimism.io/"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://optimism.io"
	  },
	  {
	    "name": "pegglecoin",
	    "chainId": 42069,
	    "shortName": "PC",
	    "chain": "42069",
	    "network": "mainnet",
	    "networkId": 42069,
	    "nativeCurrency": {"name":"pegglecoin","symbol":"peggle","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://teampeggle.com"
	  },
	  {
	    "name": "Celo Mainnet",
	    "chainId": 42220,
	    "shortName": "CELO",
	    "chain": "CELO",
	    "network": "Mainnet",
	    "networkId": 42220,
	    "nativeCurrency": {"name":"CELO","symbol":"CELO","decimals":18},
	    "rpc": ["https://forno.celo.org","wss://forno.celo.org/ws"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://docs.celo.org/"
	  },
	  {
	    "name": "Darwinia Pangolin Testnet",
	    "chainId": 43,
	    "shortName": "darwinia",
	    "chain": "pangolin",
	    "network": "free testnet",
	    "networkId": 43,
	    "nativeCurrency": {"name":"Pangolin RING","symbol":"PRING","decimals":9},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://darwinia.network/"
	  },
	  {
	    "name": "Athereum",
	    "chainId": 43110,
	    "shortName": "avaeth",
	    "chain": "ATH",
	    "network": "athereum",
	    "networkId": 43110,
	    "nativeCurrency": {"name":"Athereum Ether","symbol":"ATH","decimals":18},
	    "rpc": ["https://ava.network:21015/ext/evm/rpc"],
	    "faucets": ["http://athfaucet.ava.network//?address=${ADDRESS}"],
	    "explorers": [],
	    "infoURL": "https://athereum.ava.network"
	  },
	  {
	    "name": "Avalanche Fuji Testnet",
	    "chainId": 43113,
	    "shortName": "Fuji",
	    "chain": "AVAX",
	    "network": "testnet",
	    "networkId": 1,
	    "nativeCurrency": {"name":"Avalanche","symbol":"AVAX","decimals":18},
	    "rpc": ["https://api.avax-test.network/ext/bc/C/rpc"],
	    "faucets": ["https://faucet.avax-test.network/"],
	    "explorers": [],
	    "infoURL": "https://cchain.explorer.avax-test.network"
	  },
	  {
	    "name": "Avalanche Mainnet",
	    "chainId": 43114,
	    "shortName": "avax",
	    "commonName" : "avax",
	    "chain": "AVAX",
	    "network": "mainnet",
	    "networkId": 1,
	    "nativeCurrency": {"name":"Avalanche","symbol":"AVAX","decimals":18},
	    "rpc": ["https://api.avax.network/ext/bc/C/rpc"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://cchain.explorer.avax.network/"
	  },
	  {
	    "name": "Darwinia Crab Network",
	    "chainId": 44,
	    "shortName": "crab",
	    "chain": "crab",
	    "network": "Crab network",
	    "networkId": 44,
	    "nativeCurrency": {"name":"Crab Token","symbol":"CRING","decimals":9},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://crab.network/"
	  },
	  {
	    "name": "Celo Alfajores Testnet",
	    "chainId": 44787,
	    "shortName": "ALFA",
	    "chain": "CELO",
	    "network": "Alfajores",
	    "networkId": 44787,
	    "nativeCurrency": {"name":"CELO","symbol":"CELO","decimals":18},
	    "rpc": ["https://alfajores-forno.celo-testnet.org","wss://alfajores-forno.celo-testnet.org/ws"],
	    "faucets": ["https://celo.org/developers/faucet","https://cauldron.pretoriaresearchlab.io/alfajores-faucet"],
	    "explorers": [],
	    "infoURL": "https://docs.celo.org/"
	  },
	  {
	    "name": "IoTeX Network Mainnet",
	    "chainId": 4689,
	    "shortName": "iotex-mainnet",
	    "chain": "IOTX",
	    "network": "mainnet",
	    "networkId": 4689,
	    "nativeCurrency": {"name":"IoTeX","symbol":"IOTX","decimals":18},
	    "rpc": ["https://babel-api.mainnet.iotex.one"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://iotex.io"
	  },
	  {
	    "name": "IoTeX Network Testnet",
	    "chainId": 4690,
	    "shortName": "iotex-testnet",
	    "chain": "IOTX",
	    "network": "testnet",
	    "networkId": 4690,
	    "nativeCurrency": {"name":"IoTeX","symbol":"IOTX","decimals":18},
	    "rpc": ["https://babel-api.testnet.iotex.one"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://iotex.io"
	  },
	  {
	    "name": "Energi Testnet",
	    "chainId": 49797,
	    "shortName": "tnrg",
	    "chain": "NRG",
	    "network": "testnet",
	    "networkId": 49797,
	    "nativeCurrency": {"name":"Energi","symbol":"tNRG","decimals":18},
	    "rpc": ["https://nodeapi.test3.energi.network"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.energi.world/"
	  },
	  {
	    "name": "Rupaya",
	    "chainId": 499,
	    "shortName": "rupx",
	    "chain": "RUPX",
	    "network": "mainnet",
	    "networkId": 499,
	    "nativeCurrency": {"name":"Rupaya","symbol":"RUPX","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.rupx.io"
	  },
	  {
	    "name": "Ethereum Testnet Görli",
	    "chainId": 5,
	    "shortName": "gor",
	    "chain": "ETH",
	    "network": "goerli",
	    "networkId": 5,
	    "nativeCurrency": {"name":"Görli Ether","symbol":"GOR","decimals":18},
	    "rpc": ["https://rpc.goerli.mudit.blog/","https://rpc.slock.it/goerli ","https://goerli.prylabs.net/"],
	    "faucets": ["https://goerli-faucet.slock.it/?address=${ADDRESS}","https://faucet.goerli.mudit.blog"],
	    "explorers": [],
	    "infoURL": "https://goerli.net/#about"
	  },
	  {
	    "name": "XinFin Network Mainnet",
	    "chainId": 50,
	    "shortName": "xdc",
	    "chain": "XDC",
	    "network": "mainnet",
	    "networkId": 50,
	    "nativeCurrency": {"name":"XinFin","symbol":"XDC","decimals":18},
	    "rpc": ["https://rpc.xinfin.network"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://xinfin.org"
	  },
	  {
	    "name": "XinFin Apothem Testnet",
	    "chainId": 51,
	    "shortName": "TXDC",
	    "chain": "TXDC",
	    "network": "testnet",
	    "networkId": 51,
	    "nativeCurrency": {"name":"XinFinTest","symbol":"TXDC","decimals":18},
	    "rpc": ["https://rpc.apothem.network"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://xinfin.org"
	  },
	  {
	    "name": "CoinEx Smart Chain Mainnet",
	    "chainId": 52,
	    "shortName": "cet",
	    "chain": "CSC",
	    "network": "mainnet",
	    "networkId": 52,
	    "nativeCurrency": {"name":"CoinEx Chain Native Token","symbol":"cet","decimals":18},
	    "rpc": ["https://rpc-mainnet.coinex.net"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "http://www.coinex.org/"
	  },
	  {
	    "name": "CoinEx Smart Chain Testnet",
	    "chainId": 53,
	    "shortName": "tcet",
	    "chain": "CSC",
	    "network": "testnet",
	    "networkId": 53,
	    "nativeCurrency": {"name":"CoinEx Chain Test Native Token","symbol":"cett","decimals":18},
	    "rpc": ["https://rpc-testnet.coinex.net"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "http://www.coinex.org/"
	  },
	  {
	    "name": "Tao Network",
	    "chainId": 558,
	    "shortName": "tao",
	    "chain": "TAO",
	    "network": "core",
	    "networkId": 558,
	    "nativeCurrency": {"name":"Tao","symbol":"TAO","decimals":18},
	    "rpc": ["https://rpc.testnet.tao.network","http://rpc.testnet.tao.network:8545","https://rpc.tao.network","wss://rpc.tao.network"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://tao.network"
	  },
	  {
	    "name": "Binance Smart Chain Mainnet",
	    "chainId": 56,
	    "shortName": "binancesmartchain",
	    "chain": "binancesmartchain",
	    "network": "mainnet",
	    "commonName":"binancesmartchain",
	    "networkId": 56,
	    "nativeCurrency": {"name":"Binance Chain Native Token","symbol":"BNB","decimals":18},
	    "rpc": ["https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","wss://bsc-ws-node.nariox.org"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.binance.org"
	  },
	  {
	    "name": "Wegochain Rubidium Mainnet",
	    "chainId": 5869,
	    "shortName": "rbd",
	    "chain": "RBD",
	    "network": "mainnet",
	    "networkId": 5869,
	    "nativeCurrency": {"name":"Rubid","symbol":"RBD","decimals":18},
	    "rpc": ["https://proxy.wegochain.io","http://wallet.wegochain.io:7764"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "http://wegochain.io"
	  },
	  {
	    "name": "Acala Mandala Testnet",
	    "chainId": 595,
	    "shortName": "maca",
	    "chain": "mACA",
	    "network": "testnet",
	    "networkId": 595,
	    "nativeCurrency": {"name":"Acala Mandala Token","symbol":"mACA","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://acala.network"
	  },
	  {
	    "name": "Ethereum Classic Testnet Kotti",
	    "chainId": 6,
	    "shortName": "kot",
	    "chain": "ETC",
	    "network": "kotti",
	    "networkId": 6,
	    "nativeCurrency": {"name":"Kotti Ether","symbol":"KOT","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://explorer.jade.builders/?network=kotti"
	  },
	  {
	    "name": "GoChain",
	    "chainId": 60,
	    "shortName": "go",
	    "chain": "GO",
	    "network": "mainnet",
	    "networkId": 60,
	    "nativeCurrency": {"name":"GoChain Ether","symbol":"GO","decimals":18},
	    "rpc": ["https://rpc.gochain.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://gochain.io"
	  },
	  {
	    "name": "Ethereum Classic Mainnet",
	    "chainId": 61,
	    "shortName": "etc",
	    "chain": "ETC",
	    "network": "mainnet",
	    "networkId": 1,
	    "nativeCurrency": {"name":"Ethereum Classic Ether","symbol":"ETC","decimals":18},
	    "rpc": ["https://ethereumclassic.network"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://ethereumclassic.org"
	  },
	  {
	    "name": "Aquachain",
	    "chainId": 61717561,
	    "shortName": "aqua",
	    "chain": "AQUA",
	    "network": "mainnet",
	    "networkId": 61717561,
	    "nativeCurrency": {"name":"Aquachain Ether","symbol":"AQUA","decimals":18},
	    "rpc": ["https://c.onical.org","https://tx.aquacha.in/api"],
	    "faucets": ["https://aquacha.in/faucet"],
	    "explorers": [],
	    "infoURL": "https://aquachain.github.io"
	  },
	  {
	    "name": "Ethereum Classic Testnet Morden",
	    "chainId": 62,
	    "shortName": "tetc",
	    "chain": "ETC",
	    "network": "testnet",
	    "networkId": 2,
	    "nativeCurrency": {"name":"Ethereum Classic Testnet Ether","symbol":"TETC","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://ethereumclassic.org"
	  },
	  {
	    "name": "Celo Baklava Testnet",
	    "chainId": 62320,
	    "shortName": "BKLV",
	    "chain": "CELO",
	    "network": "Baklava",
	    "networkId": 62320,
	    "nativeCurrency": {"name":"CELO","symbol":"CELO","decimals":18},
	    "rpc": ["https://baklava-forno.celo-testnet.org"],
	    "faucets": ["https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform","https://cauldron.pretoriaresearchlab.io/baklava-faucet"],
	    "explorers": [],
	    "infoURL": "https://docs.celo.org/"
	  },
	  {
	    "name": "Ethereum Classic Testnet Mordor",
	    "chainId": 63,
	    "shortName": "metc",
	    "chain": "ETC",
	    "network": "testnet",
	    "networkId": 7,
	    "nativeCurrency": {"name":"Mordor Classic Testnet Ether","symbol":"METC","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://github.com/eth-classic/mordor/"
	  },
	  {
	    "name": "Ellaism",
	    "chainId": 64,
	    "shortName": "ella",
	    "chain": "ELLA",
	    "network": "mainnet",
	    "networkId": 64,
	    "nativeCurrency": {"name":"Ellaism Ether","symbol":"ELLA","decimals":18},
	    "rpc": ["https://jsonrpc.ellaism.org"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://ellaism.org"
	  },
	  {
	    "name": "OKExChain Testnet",
	    "chainId": 65,
	    "shortName": "tokt",
	    "chain": "okexchain",
	    "network": "testnet",
	    "networkId": 65,
	    "nativeCurrency": {"name":"OKExChain Global Utility Token in testnet","symbol":"OKT","decimals":18},
	    "rpc": ["https://exchaintestrpc.okex.org"],
	    "faucets": ["https://www.okex.com/drawdex"],
	    "explorers": [],
	    "infoURL": "https://www.okex.com/okexchain"
	  },
	  {
	    "name": "OKExChain Mainnet",
	    "chainId": 66,
	    "shortName": "okt",
	    "chain": "okexchain",
	    "network": "mainnet",
	    "networkId": 66,
	    "nativeCurrency": {"name":"OKExChain Global Utility Token","symbol":"OKT","decimals":18},
	    "rpc": ["https://exchainrpc.okex.org"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.okex.com/okexchain"
	  },
	  {
	    "name": "DBChain Testnet",
	    "chainId": 67,
	    "shortName": "dbm",
	    "chain": "DBM",
	    "network": "testnet",
	    "networkId": 67,
	    "nativeCurrency": {"name":"DBChain Testnet","symbol":"DBM","decimals":18},
	    "rpc": ["http://test-rpc.dbmbp.com"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "http://test.dbmbp.com"
	  },
	  {
	    "name": "SoterOne Mainnet",
	    "chainId": 68,
	    "shortName": "SO1",
	    "chain": "SOTER",
	    "network": "mainnet",
	    "networkId": 68,
	    "nativeCurrency": {"name":"SoterOne Mainnet Ether","symbol":"SOTER","decimals":18},
	    "rpc": ["https://rpc.soter.one"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.soterone.com"
	  },
	  {
	    "name": "Karura Network",
	    "chainId": 686,
	    "shortName": "kar",
	    "chain": "KAR",
	    "network": "mainnet",
	    "networkId": 686,
	    "nativeCurrency": {"name":"Karura Token","symbol":"KAR","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://karura.network"
	  },
	  {
	    "name": "Optimistic Ethereum Testnet Kovan",
	    "chainId": 69,
	    "shortName": "okov",
	    "chain": "ETH",
	    "network": "kovan",
	    "networkId": 69,
	    "nativeCurrency": {"name":"Kovan Ether","symbol":"KOR","decimals":18},
	    "rpc": ["https://kovan.optimism.io/"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://optimism.io"
	  },
	  {
	    "name": "ThaiChain",
	    "chainId": 7,
	    "shortName": "tch",
	    "chain": "TCH",
	    "network": "mainnet",
	    "networkId": 7,
	    "nativeCurrency": {"name":"ThaiChain Ether","symbol":"TCH","decimals":18},
	    "rpc": ["https://rpc.dome.cloud"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://thaichain.io"
	  },
	  {
	    "name": "Energy Web Volta Testnet",
	    "chainId": 73799,
	    "shortName": "vt",
	    "chain": "Volta",
	    "network": "testnet",
	    "networkId": 73799,
	    "nativeCurrency": {"name":"Volta Token","symbol":"VT","decimals":18},
	    "rpc": ["https://volta-rpc.energyweb.org","wss://volta-rpc.energyweb.org/ws"],
	    "faucets": ["https://voltafaucet.energyweb.org"],
	    "explorers": [],
	    "infoURL": "https://energyweb.org"
	  },
	  {
	    "name": "Mix",
	    "chainId": 76,
	    "shortName": "mix",
	    "chain": "MIX",
	    "network": "mainnet",
	    "networkId": 76,
	    "nativeCurrency": {"name":"Mix Ether","symbol":"MIX","decimals":18},
	    "rpc": ["https://rpc2.mix-blockchain.org:8647"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://mix-blockchain.org"
	  },
	  {
	    "name": "POA Network Sokol",
	    "chainId": 77,
	    "shortName": "poa",
	    "chain": "POA",
	    "network": "sokol",
	    "networkId": 77,
	    "nativeCurrency": {"name":"POA Sokol Ether","symbol":"POA","decimals":18},
	    "rpc": ["https://sokol.poa.network","wss://sokol.poa.network/wss","ws://sokol.poa.network:8546"],
	    "faucets": ["https://faucet-sokol.herokuapp.com"],
	    "explorers": [],
	    "infoURL": "https://poa.network"
	  },
	  {
	    "name": "Musicoin",
	    "chainId": 7762959,
	    "shortName": "music",
	    "chain": "MUSIC",
	    "network": "mainnet",
	    "networkId": 7762959,
	    "nativeCurrency": {"name":"Musicoin","symbol":"MUSIC","decimals":18},
	    "rpc": ["https://mewapi.musicoin.tw"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://musicoin.tw"
	  },
	  {
	    "name": "Ethermint Testnet",
	    "chainId": 777,
	    "shortName": "emint",
	    "chain": "ETHERMINT",
	    "network": "testnet",
	    "networkId": 777,
	    "nativeCurrency": {"name":"Photon","symbol":"Photon","decimals":18},
	    "rpc": ["http://54.210.246.165:8545"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://docs.ethermint.zone"
	  },
	  {
	    "name": "PrimusChain mainnet",
	    "chainId": 78,
	    "shortName": "primuschain",
	    "chain": "PC",
	    "network": "mainnet",
	    "networkId": 78,
	    "nativeCurrency": {"name":"Primus Ether","symbol":"PETH","decimals":18},
	    "rpc": ["https://ethnode.primusmoney.com/mainnet"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://primusmoney.com"
	  },
	  {
	    "name": "Firenze test network",
	    "chainId": 78110,
	    "shortName": "firenze",
	    "chain": "ETH",
	    "network": "testnet",
	    "networkId": 78110,
	    "nativeCurrency": {"name":"Firenze Ether","symbol":"FIN","decimals":18},
	    "rpc": ["https://ethnode.primusmoney.com/firenze"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://primusmoney.com"
	  },
	  {
	    "name": "Acala Network",
	    "chainId": 787,
	    "shortName": "aca",
	    "chain": "ACA",
	    "network": "mainnet",
	    "networkId": 787,
	    "nativeCurrency": {"name":"Acala Token","symbol":"ACA","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://acala.network"
	  },
	  {
	    "name": "Ubiq Network Mainnet",
	    "chainId": 8,
	    "shortName": "ubq",
	    "chain": "UBQ",
	    "network": "mainnet",
	    "networkId": 88,
	    "nativeCurrency": {"name":"Ubiq Ether","symbol":"UBQ","decimals":18},
	    "rpc": ["https://rpc.octano.dev","https://pyrus2.ubiqscan.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://ubiqsmart.com"
	  },
	  {
	    "name": "Matic Testnet Mumbai",
	    "chainId": 80001,
	    "shortName": "maticmum",
	    "chain": "Matic",
	    "network": "testnet",
	    "networkId": 80001,
	    "nativeCurrency": {"name":"Matic","symbol":"tMATIC","decimals":18},
	    "rpc": ["https://rpc-mumbai.matic.today","wss://ws-mumbai.matic.today"],
	    "faucets": ["https://faucet.matic.network/"],
	    "explorers": [],
	    "infoURL": "https://matic.network/"
	  },
	  {
	    "name": "MDGL Testnet",
	    "chainId": 8029,
	    "shortName": "mdgl",
	    "chain": "MDGL",
	    "network": "testnet",
	    "networkId": 8029,
	    "nativeCurrency": {"name":"MDGL Token","symbol":"MDGLT","decimals":18},
	    "rpc": ["https://testnet.mdgl.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://mdgl.io"
	  },
	  {
	    "name": "Meter Mainnet",
	    "chainId": 82,
	    "shortName": "Meter",
	    "chain": "METER",
	    "network": "mainnet",
	    "networkId": 82,
	    "nativeCurrency": {"name":"Meter","symbol":"MTR","decimals":18},
	    "rpc": ["https://rpc.meter.io"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.meter.io"
	  },
	  {
	    "name": "Callisto Mainnet",
	    "chainId": 820,
	    "shortName": "clo",
	    "chain": "CLO",
	    "network": "mainnet",
	    "networkId": 1,
	    "nativeCurrency": {"name":"Callisto Mainnet Ether","symbol":"CLO","decimals":18},
	    "rpc": ["https://clo-geth.0xinfra.com"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://callisto.network"
	  },
	  {
	    "name": "Callisto Testnet",
	    "chainId": 821,
	    "shortName": "tclo",
	    "chain": "CLO",
	    "network": "testnet",
	    "networkId": 2,
	    "nativeCurrency": {"name":"Callisto Testnet Ether","symbol":"TCLO","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://callisto.network"
	  },
	  {
	    "name": "Klaytn Mainnet Cypress",
	    "chainId": 8217,
	    "shortName": "Cypress",
	    "chain": "KLAY",
	    "network": "cypress",
	    "networkId": 8217,
	    "nativeCurrency": {"name":"KLAY","symbol":"KLAY","decimals":18},
	    "rpc": ["https://node-api.klaytnapi.com/v1/klaytn"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.klaytn.com/"
	  },
	  {
	    "name": "KorthoTest",
	    "chainId": 8285,
	    "shortName": "Kortho",
	    "chain": "Kortho",
	    "network": "Test",
	    "networkId": 8285,
	    "nativeCurrency": {"name":"Kortho Test","symbol":"KTO","decimals":11},
	    "rpc": ["https://www.krotho-test.net"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.kortho.io/"
	  },
	  {
	    "name": "TomoChain",
	    "chainId": 88,
	    "shortName": "tomo",
	    "chain": "TOMO",
	    "network": "mainnet",
	    "networkId": 88,
	    "nativeCurrency": {"name":"TomoChain Ether","symbol":"TOMO","decimals":18},
	    "rpc": ["https://rpc.tomochain.com"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://tomocoin.io"
	  },
	  {
	    "name": "Wanchain",
	    "chainId": 888,
	    "shortName": "wan",
	    "chain": "WAN",
	    "network": "mainnet",
	    "networkId": 888,
	    "nativeCurrency": {"name":"Wancoin","symbol":"WAN","decimals":18},
	    "rpc": ["https://gwan-ssl.wandevs.org:56891/"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://www.wanscan.org"
	  },
	  {
	    "name": "bloxberg",
	    "chainId": 8995,
	    "shortName": "berg",
	    "chain": "bloxberg",
	    "network": "mainnet",
	    "networkId": 8995,
	    "nativeCurrency": {"name":"BERG","symbol":"U+25B3","decimals":18},
	    "rpc": ["https://core.bloxberg.org"],
	    "faucets": ["https://faucet.bloxberg.org/"],
	    "explorers": [],
	    "infoURL": "https://bloxberg.org"
	  },
	  {
	    "name": "Ubiq Network Testnet",
	    "chainId": 9,
	    "shortName": "tubq",
	    "chain": "UBQ",
	    "network": "mainnet",
	    "networkId": 2,
	    "nativeCurrency": {"name":"Ubiq Testnet Ether","symbol":"TUBQ","decimals":18},
	    "rpc": [],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://ethersocial.org"
	  },
	  {
	    "name": "Binance Smart Chain Testnet",
	    "chainId": 97,
	    "shortName": "bnbt",
	    "chain": "binancesmartchain",
	    "network": "Chapel",
	    "networkId": 97,
	    "nativeCurrency": {"name":"Binance Chain Native Token","symbol":"tBNB","decimals":18},
	    "rpc": ["https://data-seed-prebsc-1-s1.binance.org:8545","https://data-seed-prebsc-2-s1.binance.org:8545","https://data-seed-prebsc-1-s2.binance.org:8545","https://data-seed-prebsc-2-s2.binance.org:8545","https://data-seed-prebsc-1-s3.binance.org:8545","https://data-seed-prebsc-2-s3.binance.org:8545"],
	    "faucets": ["https://testnet.binance.org/faucet-smart"],
	    "explorers": [],
	    "infoURL": "https://testnet.binance.org/"
	  },
	  {
	    "name": "Nepal Blockchain Network",
	    "chainId": 977,
	    "shortName": "yeti",
	    "chain": "YETI",
	    "network": "mainnet",
	    "networkId": 977,
	    "nativeCurrency": {"name":"Nepal Blockchain Network Ether","symbol":"YETI","decimals":18},
	    "rpc": ["https://api.nepalblockchain.dev","https://api.nepalblockchain.network"],
	    "faucets": ["https://faucet.nepalblockchain.network"],
	    "explorers": [],
	    "infoURL": "https://nepalblockchain.network"
	  },
	  {
	    "name": "POA Network Core",
	    "chainId": 99,
	    "shortName": "skl",
	    "chain": "POA",
	    "network": "core",
	    "networkId": 99,
	    "nativeCurrency": {"name":"POA Network Core Ether","symbol":"SKL","decimals":18},
	    "rpc": ["https://core.poanetwork.dev","http://core.poanetwork.dev:8545","https://core.poa.network","ws://core.poanetwork.dev:8546"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://poa.network"
	  },
	  {
	    "name": "Joys Digital TestNet",
	    "chainId": 99415706,
	    "shortName": "TOYS",
	    "chain": "TOYS",
	    "network": "testnet",
	    "networkId": 99415706,
	    "nativeCurrency": {"name":"TOYS","symbol":"TOYS","decimals":18},
	    "rpc": ["https://toys.joys.cash/"],
	    "faucets": ["https://faucet.joys.digital/"],
	    "explorers": [],
	    "infoURL": "https://joys.digital"
	  },
	  {
	    "name": "Wanchain Testnet",
	    "chainId": 999,
	    "shortName": "twan",
	    "chain": "WAN",
	    "network": "testnet",
	    "networkId": 999,
	    "nativeCurrency": {"name":"Wancoin","symbol":"WAN","decimals":18},
	    "rpc": ["https://gwan-ssl.wandevs.org:46891/"],
	    "faucets": [],
	    "explorers": [],
	    "infoURL": "https://testnet.wanscan.org"
	  }
	];

    export const ABIs = 
	{
		"usdt": 
		[
			{
				"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"
			}
		],
		
		"umbr": 
		[
			{
				"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"
			}
		],
		
		"matic": 
		[
			{
				"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isPauser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"totalSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"
			}
		],

		"usdc":
		[
			{
				"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"unBlacklist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"minter","type":"address"}],"name":"removeMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_currency","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"_masterMinter","type":"address"},{"name":"_pauser","type":"address"},{"name":"_blacklister","type":"address"},{"name":"_owner","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"masterMinter","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newPauser","type":"address"}],"name":"updatePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"minter","type":"address"}],"name":"minterAllowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pauser","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"blacklister","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currency","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"blacklist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isBlacklisted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":false,"name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"UnBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newAddress","type":"address"}],"name":"PauserChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"
			}
		],

		"eth": //wrapped eth
		[
			{
				"inputs":[{"internalType":"address","name":"childChainManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CHILD_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"
			}
		],

		"wbtc":
		[
			{
				"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"reclaimToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"
			}
		],

		"ghst":
		[
			{
				"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"creationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_blockNumber","type":"uint256"}],"name":"balanceOfAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_cloneTokenName","type":"string"},{"name":"_cloneDecimalUnits","type":"uint8"},{"name":"_cloneTokenSymbol","type":"string"},{"name":"_snapshotBlock","type":"uint256"},{"name":"_transfersEnabled","type":"bool"}],"name":"createCloneToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"parentToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"generateTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_blockNumber","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"parentSnapShotBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroyTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenFactory","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_transfersEnabled","type":"bool"}],"name":"enableTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_tokenFactory","type":"address"},{"name":"_parentToken","type":"address"},{"name":"_parentSnapShotBlock","type":"uint256"},{"name":"_tokenName","type":"string"},{"name":"_decimalUnits","type":"uint8"},{"name":"_tokenSymbol","type":"string"},{"name":"_transfersEnabled","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_token","type":"address"},{"indexed":true,"name":"_controller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"ClaimedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_cloneToken","type":"address"},{"indexed":false,"name":"_snapshotBlock","type":"uint256"}],"name":"NewCloneToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Approval","type":"event"
			}
		],

		"bnb":
		[
			{
				"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"unfreeze","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"freezeOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"freeze","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Freeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Unfreeze","type":"event"
			}
		]
	}

	export const TOKEN_CONTRACT_ADDRESSES = 
	{
		//network
		"0x1"	: {
			"eth" 	: 	"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", //wrapped
			"bnb"	: 	"0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
			"ghst"	: 	"0x3F382DbD960E3a9bbCeaE22651E88158d2791550", 
			"matic" : 	"0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
			"umbr" 	: 	"0xa4bbe66f151b22b167127c770016b15ff97dd35c",
			"usdt" 	: 	"0xdac17f958d2ee523a2206206994597c13d831ec7",
			"usdc"	: 	"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", 
			"wbtc"	: 	"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
		},

		//network
		"0x89" : {
			"eth" 	: 	"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
			"ghst"	: 	"0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7", 
			"matic" : 	"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", //wrapped
			"umbr" 	: 	"0x2e4b0fb46a46c90cb410fe676f24e466753b469f",
			"usdt" 	: 	"0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
			"usdc"	: 	"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", 
			"wbtc"	: 	"0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6", 
		},

		"0x38"	: {
			"eth" 		: 	"0x2170ed0880ac9a755fd29b2688956bd959f933f8", 	//Binance-Peg Ethereum Token
			"bnb"		: 	"0xBNB",										
			//"matic" 	: 	"0xcc42724c6683b7e57334c4e856f4c9965ed682bd",
			//"umbr" 	: 	"0x0000",
			//"usdt" 	: 	"0x55d398326f99059ff775485246999027b3197955",
			//"usdc" 	: 	"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
			//"wbtc"	: 	"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", 
		},

		"0xa86a" : {
			"eth"	: 	"0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab"
		},

		"0xfa" : {
			"eth" : "0x74b23882a30290451A17c44f4F05243b6b58C76d"
		},
		"0xa4b1" : {
			"eth" : "0x82af49447d8a07e3bd95bd0d56f35241523fbab1" //wrapped - native arb is ETH
		}
	}
	
	export const BRIDGE_ADDRESSES =
	{
		"ethmatic" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
		"maticeth"	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
		"ethbsc"	: "0xA88902d6E93922893EE77234ED1C3ba4Bec90224",
		"bsceth"	: "0xA88902d6E93922893EE77234ED1C3ba4Bec90224",
		"ethavax"	: "0xCe473D30bB1DFda0747EdCCDaeb3DE30042cE948",
		"avaxeth"	: "0xCe473D30bB1DFda0747EdCCDaeb3DE30042cE948",
		"ethftm"	: "0x9021A2F42087bBf1ebB77639e010164BEbd01e37",
		"ftmeth"	: "0x9021A2F42087bBf1ebB77639e010164BEbd01e37",
		"arbeth"	: "0x158353A7601c7ba9BFDEA6C77E571557267Cd03B",
		"etharb"	: "0x158353A7601c7ba9BFDEA6C77E571557267Cd03B",  

		//network
		"bsc"	: {
			"eth" 	: "0xA88902d6E93922893EE77234ED1C3ba4Bec90224",
			"bnb" 	: "0xA88902d6E93922893EE77234ED1C3ba4Bec90224",
			"ghst"	: "0xA88902d6E93922893EE77234ED1C3ba4Bec90224", 
			"matic" : "0xA88902d6E93922893EE77234ED1C3ba4Bec90224",
			"umbr" 	: "0xA88902d6E93922893EE77234ED1C3ba4Bec90224",
			"usdt" 	: "0xA88902d6E93922893EE77234ED1C3ba4Bec90224",
			"usdc" 	: "0xA88902d6E93922893EE77234ED1C3ba4Bec90224",
			"wbtc" 	: "0xA88902d6E93922893EE77234ED1C3ba4Bec90224",
		},

		//network
		"eth"	: {
			"eth" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
			"bnb" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
			"ghst"	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422", 
			"matic" : "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
			"umbr" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
			"usdt" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
			"usdc" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
			"wbtc" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
		},

		//network
		"matic" : {
			"eth" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
			"ghst"	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422", 
			"matic" : "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
			"umbr" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
			"usdt" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
			"usdc" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
			"wbtc" 	: "0x4103c267Fba03A1Df4fe84Bc28092d629Fa3f422",
		},

		"avax"  : {
			"eth" 	: "0xCe473D30bB1DFda0747EdCCDaeb3DE30042cE948"
		},

		"ftm"  : {
			"eth"	: "0x9021A2F42087bBf1ebB77639e010164BEbd01e37"
		},

		"arb"  : {
			"eth"	: "0x158353A7601c7ba9BFDEA6C77E571557267Cd03B"
		}
	}

	export const NETWORK_EXPLORERS_ADDRESSES =
	{
		//network
		"0x1"	: "https://etherscan.io/address/",
		"0x89"	: "https://explorer-mainnet.maticvigil.com/address/",
		"0x38"	: "https://bscscan.com/address/",
		"0xa86a" 	: "https://snowtrace.io/address/",
		"0xfa"	: "https://ftmscan.com/address",
		"0xa4b1"	: "https://arbiscan.io/address",
	}

    export	const NETWORK_EXPLORERS_TRANSACTIONS =
	{
		//network
		"0x1"		: "https://etherscan.io/tx/",
		"0x89"		: "https://explorer-mainnet.maticvigil.com/tx/",
		"0x38"		: "https://bscscan.com/tx/",
		"0xa86a" 	: "https://snowtrace.io/tx/",
		"0xfa"		: "https://ftmscan.com/tx/",
		"0xa4b1"	: "https://arbiscan.io/tx/",
	}

	export const COIN_ICONS = 
	{
		"eth" 	: "https://bridge.umbria.network/assets/images/icon/ethicon.png",
		"ghst" 	: "https://bridge.umbria.network/assets/images/svg/ghst.svg?v1",
		"matic" : "https://bridge.umbria.network/assets/images/svg/polygon.svg?v1",
		"umbr" 	: "https://bridge.umbria.network/assets/images/icon/umbricon.png",
		"usdc" 	: "https://bridge.umbria.network/assets/images/svg/usdc.svg",
		"usdt" 	: "https://bridge.umbria.network/assets/images/svg/usdt.svg",
		"wbtc" 	: "https://bridge.umbria.network/assets/images/svg/wbtc.svg",
		"bnb" 	: "https://bridge.umbria.network/assets/images/svg/bnb.svg",
		"ftm"	: "https://bridge.umbria.network/assets/images/svg/fantom.svg"
	}

	export const NETWORK_ICONS = 
	{
		"0x1"		: "https://bridge.umbria.network/assets/images/svg/eth.svg", 
		"0x89"		: "https://bridge.umbria.network/assets/images/svg/polygon.svg", 
		"0x38"		: "https://bridge.umbria.network/assets/images/svg/bsc.svg", 
		"0xa86a"	: "https://bridge.umbria.network/assets/images/svg/avalanche.svg", 
		"0xfa"		: "https://bridge.umbria.network/assets/images/svg/fantom.svg", 
		"0xa4b1"	: "https://bridge.umbria.network/assets/images/svg/arbitrum.svg", 
	}

    export	const METAMASK_ERROR_CODES = 
	{
  		'-32700': 
  		{
    		standard: 'JSON RPC 2.0',
    		message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
  		},
	  	'-32600': 
	  	{
	    	standard: 'JSON RPC 2.0',
	    	message: 'The JSON sent is not a valid Request object.',
	  	},
	  	'-32601': 
	  	{
	    	standard: 'JSON RPC 2.0',
	    	message: 'The method does not exist / is not available.',
	  	},
	  	'-32602': 
	  	{
	    	standard: 'JSON RPC 2.0',
	    	message: 'Invalid method parameter(s).',
	  	},
	  	'-32603': 
	  	{
	    	standard: 'JSON RPC 2.0',
	    	message: 'Internal JSON-RPC error.',
	  	},
	  	'-32000': 
	  	{
	    	standard: 'EIP-1474',
	    	message: 'Invalid input.',
	  	},
	  	'-32001': 
	  	{
	    	standard: 'EIP-1474',
	    	message: 'Resource not found.',
	  	},
	  	'-32002': 
	  	{
	    	standard: 'EIP-1474',
	    	message: 'Resource unavailable.',
	  	},
	  	'-32003': 
	  	{
	    	standard: 'EIP-1474',
	    	message: 'Transaction rejected.',
	  	},
	  	'-32004': 
	  	{
	    	standard: 'EIP-1474',
	    	message: 'Method not supported.',
	  	},
	  	'-32005': 
	  	{
	    	standard: 'EIP-1474',
	    	message: 'Request limit exceeded.',
	  	},
	  	'4001': 
	  	{
	    	standard: 'EIP-1193',
	    	message: 'User rejected the request.',
	  	},
	  	'4100': 
	  	{
	    	standard: 'EIP-1193',
	    	message: 'The requested account and/or method has not been authorized by the user.',
	  	},
	  	'4200': 
	  	{
	    	standard: 'EIP-1193',
	    	message: 'The requested method is not supported by this Ethereum provider.',
	  	},
	  	'4900': 
	  	{
	    	standard: 'EIP-1193',
	    	message: 'The provider is disconnected from all chains.',
	  	},
	  	'4901': 
	  	{
	    	standard: 'EIP-1193',
	    	message: 'The provider is disconnected from the specified chain.',
	  	},
	}

    export	const FEE_MULTIPLIER_ESTIMATED_TRANSACTION_TIMES =
	{
		"eth" : 
		{
			"1" 	: ">15 Minutes",
			"1.4" 	: "~10 Minutes",
			"1.8" 	: "~5 Minutes",
			"2.2" 	: "~2 Minutes",
			"2.6" 	: "<2 Minutes"
		},
		"matic" :
		{
			"1" 	: ">5 Minutes",
			"1.4" 	: "~4 Minutes",
			"1.8" 	: "~3 Minutes",
			"2.2" 	: "~2 Minutes",
			"2.6" 	: "<2 Minutes"
		},
		"bsc" :
		{
			"1" 	: ">5 Minutes",
			"1.4" 	: "~4 Minutes",
			"1.8" 	: "~3 Minutes",
			"2.2" 	: "~2 Minutes",
			"2.6" 	: "<2 Minutes"
		},
		"avax" :
		{
			"1" 	: ">5 Minutes",
			"1.4" 	: "~4 Minutes",
			"1.8" 	: "~3 Minutes",
			"2.2" 	: "~2 Minutes",
			"2.6" 	: "<2 Minutes"
		},
		"ftm" :
		{
			"1" 	: ">5 Minutes",
			"1.4" 	: "~4 Minutes",
			"1.8" 	: "~3 Minutes",
			"2.2" 	: "~2 Minutes",
			"2.6" 	: "<2 Minutes"
		},
		"arb" :
		{
			"1" 	: ">5 Minutes",
			"1.4" 	: "~4 Minutes",
			"1.8" 	: "~3 Minutes",
			"2.2" 	: "~2 Minutes",
			"2.6" 	: "<2 Minutes"
		}
	}

	export const ASSET_PRECISION_DECIMALS = 
	{
		"eth" 	: 18,
		"ghst" 	: 18,
		"matic" : 18,
		"usdt" 	: 6,
		"usdc" 	: 6,
		"umbr" 	: 18,
		"wbtc"	: 8,
		"bnb" 	: 18,
		"avax"	: 18,
		"ftm"	: 18
	}

	export const ASSET_DISPLAY_TICKER = 
	{
		"eth" 	: "eth",
		"ghst" 	: "ghst",
		"matic" : "matic",
		"usdt" 	: "usdt",
		"usdc" 	: "usdc",
		"umbr" 	: "umbr",
		"wbtc"	: "wbtc",
		"bsc" 	: "bnb",
		"bnb"	: "bnb",
		"avax"	: "avax", 
		"ftm"	: "ftm"
	}

	export const NETWORK_NATIVE_ASSETS = 
	{
		"0x1" 	: 	"eth",
		"0x89" 	: 	"matic",
		"0x38" 	: 	"bnb",
		"0xa86a":   "avax",
		"0xfa"	:   "ftm", 
		"0xa4b1":   "eth", 
	}

	export const URL_BUILDER_NAMES = 
	{
		"eth" 	: "ethereum",
		"matic" : "polygon",
		"bsc"	: "bsc",
		"avax" 	: "avalanche",
		"ftm"	: "fantom",
		"arb"	: "arbitrum", 
	}

	export const NETWORK_API_NAMES =
	{
		//network
		"eth"	: "ethereum",
		"matic"	: "matic",
		"bsc"	: "binancesmartchain",
		"avax"	: "avax",
		"ftm"	: "fantom",
		"arb"	: "arbitrum"
	}

	export const NETWORK_FRIENDLY_NAMES = 
	{
		"0x1" 		: "Ethereum Mainnet",
		"0x89"		: "Polygon PoS Chain",
		"0x38"		: "Binance Smart Chain Mainnet",
		"0xa86a" 	: "Avalanche Mainnet C-Chain",
		"0xfa"		: "Fantom Opera",
		"0xa4b1"	: "Arbitrum One"
	}

	export const NETWORK_TEXT_COLOURS = 
	{
		"0x1" 		: "#8c8c8c",
		"0x89"		: "#8247e5",
		"0x38"		: "#f3ba2f",
		"0xa86a" 	: "#e84142",
		"0xfa"		: "#13b5ec",
		"0xa4b1"	: "#78b3dd"
	}

	export const BRIDGED_NETWORKS = 
	[
		"ethmatic", //Ethereum to Polygon
		"maticeth", //Polygon to Ethereum
		"bsceth",	//BNB Chain to Ethereum
		"ethbsc",	//Ethereum to BNB Chain
		"ethavax",	//Ethereum to Avalanche
		"avaxeth",	//Avalanche to Ethereum
		"ethftm",	//Ethereum to Fantom
		"ftmeth",	//Fantom to Ethereum
		"arbeth",	//Arbitrum to Ethereum
		"etharb"	//Ethereum to Arbitrum
	];

	export const ROUTE_SUPPORTED_ASSETS = 
	{
		"ethmatic" 	: ["eth", "usdc", "usdt", "matic", "umbr", "ghst", "wbtc"], //Ethereum to Polygon
		"maticeth" 	: ["eth", "usdc", "usdt", "matic", "umbr", "ghst", "wbtc"], //Polygon to Ethereum
		"bsceth"	: ["eth"],	//BNB Chain to Ethereum
		"ethbsc"	: ["eth"],	//Ethereum to BNB Chain
		"ethavax"	: ["eth"],	//Ethereum to Avalanche
		"avaxeth"	: ["eth"],	//Avalanche to Ethereum
		"ethftm"	: ["eth"],	//Ethereum to Fantom
		"ftmeth"	: ["eth"],	//Fantom to Ethereum
		"arbeth"	: ["eth"],	//Arbitrum to Ethereum
		"etharb"	: ["eth"]	//Ethereum to Arbitrum
	}

	export const ROUTE_CHAIN_ID = 
	{
	    "ethmatic"  : 
	    {
	    	"start_chain"	: "0x1",
	    	"destination"	: "0x89"
	    },

	    "maticeth"  : 
	    {
	    	"start_chain"	: "0x89",
	    	"destination"	: "0x1"
	    }, 

	    "ethbsc"	: 
	    {
	    	"start_chain"	: "0x1",
	    	"destination"	: "0x38"
	    },
	    
	    "bsceth"	: 
	    {
	    	"start_chain"	: "0x38",
	    	"destination"	: "0x1"
	    }, 

	    "ethavax"	: 
	    {
	    	"start_chain"	: "0x1",
	    	"destination"	: "0xa86a"
	    },
	    
	    "avaxeth"	: 
	    {
	    	"start_chain"	: "0xa86a",
	    	"destination"	: "0x1"
	    },

	    "ethftm"	: 
	    {
	    	"start_chain"	: "0x1",
	    	"destination"	: "0xfa"
	    },
	    "ftmeth"	: 
	    {
	    	"start_chain"	: "0xfa",
	    	"destination"	: "0x1"
	    },  

	    "etharb"	: 
	    {
	    	"start_chain"	: "0x1",
	    	"destination"	: "0xa4b1"
	    },

	    "arbeth"	: 
	    {
	    	"start_chain"	: "0xa4b1",
	    	"destination"	: "0x1"
	    },  
    };

   export let WEB3_PROVIDERS = 
	{
		"0x1" 	: new Web3("https://public-rpc-eth.umbria.network/"), 	//Ethereum Mainnet
		"0x89"  : new Web3("https://polygon-rpc.com"),					//Polygon Mainnet
		"0x38" 	: new Web3("https://bsc-dataseed.binance.org/"),		//BNB Chain Mainnet
		"0xa86a": new Web3("https://api.avax.network/ext/bc/C/rpc"),	//Avalanche Mainnet
		"0xfa"	: new Web3("https://public-rpc-fantom.umbria.network/"),//Fantom Mainnet
		"0xa4b1": new Web3("https://api.mycryptoapi.com/eth")			//Arbitrum Mainnet
	}

    export let CONTRACT_FUNCTIONALITY_PROVIDERS = 
	{
		"0x1" : //Ethereum Mainnet
		{
			"usdt" 	: new WEB3_PROVIDERS["0x1"].eth.Contract(ABIs["usdt"], TOKEN_CONTRACT_ADDRESSES["0x1"]["usdt"]),
			"usdc" 	: new WEB3_PROVIDERS["0x1"].eth.Contract(ABIs["usdt"], TOKEN_CONTRACT_ADDRESSES["0x1"]["usdc"]),
			"umbr" 	: new WEB3_PROVIDERS["0x1"].eth.Contract(ABIs["umbr"], TOKEN_CONTRACT_ADDRESSES["0x1"]["umbr"]),
			"matic" : new WEB3_PROVIDERS["0x1"].eth.Contract(ABIs["matic"],TOKEN_CONTRACT_ADDRESSES["0x1"]["matic"]),
			"wbtc" 	: new WEB3_PROVIDERS["0x1"].eth.Contract(ABIs["wbtc"], TOKEN_CONTRACT_ADDRESSES["0x1"]["wbtc"]),
			"ghst" 	: new WEB3_PROVIDERS["0x1"].eth.Contract(ABIs["ghst"], TOKEN_CONTRACT_ADDRESSES["0x1"]["ghst"]),
			"bnb" 	: new WEB3_PROVIDERS["0x1"].eth.Contract(ABIs["bnb"], 	TOKEN_CONTRACT_ADDRESSES["0x1"]["bnb"]),
		},

		"0x89" : //Polygon Mainnet
		{
			"usdt" 	: new WEB3_PROVIDERS["0x89"].eth.Contract(ABIs["usdt"], TOKEN_CONTRACT_ADDRESSES["0x89"]["usdt"]),
			"usdc" 	: new WEB3_PROVIDERS["0x89"].eth.Contract(ABIs["usdt"], TOKEN_CONTRACT_ADDRESSES["0x89"]["usdc"]),
			"umbr" 	: new WEB3_PROVIDERS["0x89"].eth.Contract(ABIs["umbr"], TOKEN_CONTRACT_ADDRESSES["0x89"]["umbr"]),
			"eth"	: new WEB3_PROVIDERS["0x89"].eth.Contract(ABIs["eth"], TOKEN_CONTRACT_ADDRESSES["0x89"]["eth"]),
			"wbtc" 	: new WEB3_PROVIDERS["0x89"].eth.Contract(ABIs["wbtc"], TOKEN_CONTRACT_ADDRESSES["0x89"]["wbtc"]),
			"ghst" 	: new WEB3_PROVIDERS["0x89"].eth.Contract(ABIs["ghst"], TOKEN_CONTRACT_ADDRESSES["0x89"]["ghst"]),
		},

		"0x38" : //BNB Chain Mainnet
		{
			"usdc" 	: new WEB3_PROVIDERS["0x38"].eth.Contract(ABIs["usdt"], TOKEN_CONTRACT_ADDRESSES["0x38"]["usdc"]),
			"eth"	: new WEB3_PROVIDERS["0x38"].eth.Contract(ABIs["eth"], TOKEN_CONTRACT_ADDRESSES["0x38"]["eth"]),
		},
		
		"0xa86a": //Avalanche Mainnet
		{
			"eth" 	: new WEB3_PROVIDERS["0xa86a"].eth.Contract(ABIs["eth"], TOKEN_CONTRACT_ADDRESSES["0xa86a"]["eth"]),
		},

		"0xfa": //Fantom Mainnet
		{
			"eth" 	: new WEB3_PROVIDERS["0xfa"].eth.Contract(ABIs["eth"], TOKEN_CONTRACT_ADDRESSES["0xfa"]["eth"]),
		},
		"0xa4b1": //Arbitrum Mainnet
		{
			//eth is native on arb
		}
	}