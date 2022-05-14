export default {
  "address": "0x7f60Ac5fBb7328D17e5f7847C000dFfbFdB0b8C3",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IJBOperatorStore",
          "name": "_operatorStore",
          "type": "address"
        },
        {
          "internalType": "contract IJBProjects",
          "name": "_projects",
          "type": "address"
        },
        {
          "internalType": "contract IJBFundingCycleStore",
          "name": "_fundingCycleStore",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "DUPLICATE_TERMINALS",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_PROJECT_ID_IN_DIRECTORY",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SET_CONTROLLER_NOT_ALLOWED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SET_TERMINALS_NOT_ALLOWED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TOKEN_NOT_ACCEPTED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UNAUTHORIZED",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "contract IJBPaymentTerminal",
          "name": "terminal",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "AddTerminal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "controller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "SetController",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bool",
          "name": "flag",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "SetIsAllowedToSetFirstController",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract IJBPaymentTerminal",
          "name": "terminal",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "SetPrimaryTerminal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "contract IJBPaymentTerminal[]",
          "name": "terminals",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "SetTerminals",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "controllerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fundingCycleStore",
      "outputs": [
        {
          "internalType": "contract IJBFundingCycleStore",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isAllowedToSetFirstController",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "contract IJBPaymentTerminal",
          "name": "_terminal",
          "type": "address"
        }
      ],
      "name": "isTerminalOf",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "operatorStore",
      "outputs": [
        {
          "internalType": "contract IJBOperatorStore",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "primaryTerminalOf",
      "outputs": [
        {
          "internalType": "contract IJBPaymentTerminal",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "projects",
      "outputs": [
        {
          "internalType": "contract IJBProjects",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_controller",
          "type": "address"
        }
      ],
      "name": "setControllerOf",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_flag",
          "type": "bool"
        }
      ],
      "name": "setIsAllowedToSetFirstController",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "contract IJBPaymentTerminal",
          "name": "_terminal",
          "type": "address"
        }
      ],
      "name": "setPrimaryTerminalOf",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "contract IJBPaymentTerminal[]",
          "name": "_terminals",
          "type": "address[]"
        }
      ],
      "name": "setTerminalsOf",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        }
      ],
      "name": "terminalsOf",
      "outputs": [
        {
          "internalType": "contract IJBPaymentTerminal[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "transactionHash": "0xcdf11a5c0b1de5a2be07b4ceed040d071c18a47dfa0599b94d3918168317f6bd",
  "receipt": {
    "to": null,
    "from": "0xE9bE6df23C7f9CaBa3005DA2fa2d8714d340D0aF",
    "contractAddress": "0x7f60Ac5fBb7328D17e5f7847C000dFfbFdB0b8C3",
    "transactionIndex": 0,
    "gasUsed": "1729795",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000020000000000000000800800040000000000000000000000000000400001000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0xbb03f7bf0e8a8724195344fb24d9444d418813654abde365fec24df093369417",
    "transactionHash": "0xcdf11a5c0b1de5a2be07b4ceed040d071c18a47dfa0599b94d3918168317f6bd",
    "logs": [
      {
        "transactionIndex": 0,
        "blockNumber": 10550763,
        "transactionHash": "0xcdf11a5c0b1de5a2be07b4ceed040d071c18a47dfa0599b94d3918168317f6bd",
        "address": "0x7f60Ac5fBb7328D17e5f7847C000dFfbFdB0b8C3",
        "topics": [
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x000000000000000000000000e9be6df23c7f9caba3005da2fa2d8714d340d0af"
        ],
        "data": "0x",
        "logIndex": 0,
        "blockHash": "0xbb03f7bf0e8a8724195344fb24d9444d418813654abde365fec24df093369417"
      },
      {
        "transactionIndex": 0,
        "blockNumber": 10550763,
        "transactionHash": "0xcdf11a5c0b1de5a2be07b4ceed040d071c18a47dfa0599b94d3918168317f6bd",
        "address": "0x7f60Ac5fBb7328D17e5f7847C000dFfbFdB0b8C3",
        "topics": [
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
          "0x000000000000000000000000e9be6df23c7f9caba3005da2fa2d8714d340d0af",
          "0x000000000000000000000000e9be6df23c7f9caba3005da2fa2d8714d340d0af"
        ],
        "data": "0x",
        "logIndex": 1,
        "blockHash": "0xbb03f7bf0e8a8724195344fb24d9444d418813654abde365fec24df093369417"
      }
    ],
    "blockNumber": 10550763,
    "cumulativeGasUsed": "1729795",
    "status": 1,
    "byzantium": true
  },
  "args": [
    "0xcBfa3c6B4D39Eefb5266F7Ebc9278D8D9369Bc5c",
    "0x981fEd011BD441D329Ec63160ce393f8b5c18af1",
    "0xBe956b29cF727F5566CaC0379F55040588fF13D6",
    "0xE9bE6df23C7f9CaBa3005DA2fa2d8714d340D0aF"
  ],
  "numDeployments": 1,
  "solcInputHash": "2d6f35a58bd6d7d54eadea7a0697d07f",
  "metadata": "{\"compiler\":{\"version\":\"0.8.6+commit.11564f7e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract IJBOperatorStore\",\"name\":\"_operatorStore\",\"type\":\"address\"},{\"internalType\":\"contract IJBProjects\",\"name\":\"_projects\",\"type\":\"address\"},{\"internalType\":\"contract IJBFundingCycleStore\",\"name\":\"_fundingCycleStore\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"DUPLICATE_TERMINALS\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"INVALID_PROJECT_ID_IN_DIRECTORY\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SET_CONTROLLER_NOT_ALLOWED\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SET_TERMINALS_NOT_ALLOWED\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TOKEN_NOT_ACCEPTED\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UNAUTHORIZED\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"contract IJBPaymentTerminal\",\"name\":\"terminal\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"AddTerminal\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"SetController\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"bool\",\"name\":\"flag\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"SetIsAllowedToSetFirstController\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract IJBPaymentTerminal\",\"name\":\"terminal\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"SetPrimaryTerminal\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"contract IJBPaymentTerminal[]\",\"name\":\"terminals\",\"type\":\"address[]\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"SetTerminals\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"controllerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fundingCycleStore\",\"outputs\":[{\"internalType\":\"contract IJBFundingCycleStore\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isAllowedToSetFirstController\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBPaymentTerminal\",\"name\":\"_terminal\",\"type\":\"address\"}],\"name\":\"isTerminalOf\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"operatorStore\",\"outputs\":[{\"internalType\":\"contract IJBOperatorStore\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"primaryTerminalOf\",\"outputs\":[{\"internalType\":\"contract IJBPaymentTerminal\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"projects\",\"outputs\":[{\"internalType\":\"contract IJBProjects\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_controller\",\"type\":\"address\"}],\"name\":\"setControllerOf\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_flag\",\"type\":\"bool\"}],\"name\":\"setIsAllowedToSetFirstController\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"contract IJBPaymentTerminal\",\"name\":\"_terminal\",\"type\":\"address\"}],\"name\":\"setPrimaryTerminalOf\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"},{\"internalType\":\"contract IJBPaymentTerminal[]\",\"name\":\"_terminals\",\"type\":\"address[]\"}],\"name\":\"setTerminalsOf\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_projectId\",\"type\":\"uint256\"}],\"name\":\"terminalsOf\",\"outputs\":[{\"internalType\":\"contract IJBPaymentTerminal[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Adheres to - IJBDirectory: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.Inherits from - JBOperatable: Includes convenience functionality for checking a message sender's permissions before executing certain transactions. Ownable: Includes convenience functionality for checking a message sender's permissions before executing certain transactions.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_fundingCycleStore\":\"A contract storing all funding cycle configurations.\",\"_operatorStore\":\"A contract storing operator assignments.\",\"_owner\":\"The address that will own the contract.\",\"_projects\":\"A contract which mints ERC-721's that represent project ownership and transfers.\"}},\"isTerminalOf(uint256,address)\":{\"params\":{\"_projectId\":\"The ID of the project to check within.\",\"_terminal\":\"The address of the terminal to check for.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the specified terminal is a terminal of the specified project.\"}},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"primaryTerminalOf(uint256,address)\":{\"details\":\"The zero address is returned if a terminal isn't found for the specified token.\",\"params\":{\"_projectId\":\"The ID of the project to get a terminal for.\",\"_token\":\"The token the terminal accepts.\"},\"returns\":{\"_0\":\"The primary terminal for the project for the specified token.\"}},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setControllerOf(uint256,address)\":{\"details\":\"A controller can be set if: - the message sender is the project owner or an operator having the correct authorization. - the message sender is the project's current controller. - or, an allowedlisted address is setting a controller for a project that doesn't already have a controller.\",\"params\":{\"_controller\":\"The new controller to set.\",\"_projectId\":\"The ID of the project to set a new controller for.\"}},\"setIsAllowedToSetFirstController(address,bool)\":{\"details\":\"The owner can add addresses which are allowed to change projects' first controllers.  These addresses are known and vetted controllers as well as contracts designed to launch new projects.  A project can set its own controller without it being on the allow list.If you would like an address/contract allowlisted, please reach out to the contract owner.\",\"params\":{\"_address\":\"The address to allow or revoke allowance from.\",\"_flag\":\"Whether allowance is being added or revoked.\"}},\"setPrimaryTerminalOf(uint256,address,address)\":{\"details\":\"The terminal will be set as the primary terminal where ecosystem contracts should route tokens.If setting a newly added terminal and the funding cycle doesn't allow new terminals, the caller must be the current controller.\",\"params\":{\"_projectId\":\"The ID of the project for which a primary token is being set.\",\"_terminal\":\"The terminal to make primary.\",\"_token\":\"The token to set the primary terminal of.\"}},\"setTerminalsOf(uint256,address[])\":{\"details\":\"Only a project owner, an operator, or its controller can set its terminals.\",\"params\":{\"_projectId\":\"The ID of the project having terminals set.\",\"_terminals\":\"The terminal to set.\"}},\"terminalsOf(uint256)\":{\"params\":{\"_projectId\":\"The ID of the project to get terminals of.\"},\"returns\":{\"_0\":\"An array of terminal addresses.\"}},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"controllerOf(uint256)\":{\"notice\":\" For each project ID, the controller that manages how terminals interact with tokens and funding cycles. _projectId The ID of the project to get the controller of.\"},\"fundingCycleStore()\":{\"notice\":\"The contract storing all funding cycle configurations.\"},\"isAllowedToSetFirstController(address)\":{\"notice\":\"Addresses that can set a project's first controller on their behalf. These addresses/contracts have been vetted and verified by this contract's owner. _address The address that is either allowed or not.\"},\"isTerminalOf(uint256,address)\":{\"notice\":\"Whether or not a specified terminal is a terminal of the specified project.\"},\"operatorStore()\":{\"notice\":\" A contract storing operator assignments.\"},\"primaryTerminalOf(uint256,address)\":{\"notice\":\"The primary terminal that is managing funds for a project for a specified token.\"},\"projects()\":{\"notice\":\"Mints ERC-721's that represent project ownership and transfers.\"},\"setControllerOf(uint256,address)\":{\"notice\":\"Update the controller that manages how terminals interact with the ecosystem.\"},\"setIsAllowedToSetFirstController(address,bool)\":{\"notice\":\" Set a contract to the list of trusted addresses that can set a first controller for any project.\\t\"},\"setPrimaryTerminalOf(uint256,address,address)\":{\"notice\":\"Project's can set which terminal should be their primary for a particular token. This is useful in case a project has several terminals connected for a particular token.\"},\"setTerminalsOf(uint256,address[])\":{\"notice\":\" Set a project's terminals.\"},\"terminalsOf(uint256)\":{\"notice\":\"For each project ID, the terminals that are currently managing its funds.\"}},\"notice\":\"Keeps a reference of which terminal contracts each project is currently accepting funds through, and which controller contract is managing each project's tokens and funding cycles.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/JBDirectory.sol\":\"JBDirectory\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (access/Ownable.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../utils/Context.sol\\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * By default, the owner account will be the one that deploys the contract. This\\n * can later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\n     */\\n    constructor() {\\n        _transferOwnership(_msgSender());\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        require(owner() == _msgSender(), \\\"Ownable: caller is not the owner\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions anymore. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby removing any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        require(newOwner != address(0), \\\"Ownable: new owner is the zero address\\\");\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev Required interface of an ERC721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the caller.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool _approved) external;\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external;\\n}\\n\",\"keccak256\":\"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n\",\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"},\"contracts/JBDirectory.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/access/Ownable.sol';\\nimport './abstract/JBOperatable.sol';\\nimport './interfaces/IJBDirectory.sol';\\nimport './libraries/JBFundingCycleMetadataResolver.sol';\\nimport './libraries/JBOperations.sol';\\n\\n/**\\n  @notice\\n  Keeps a reference of which terminal contracts each project is currently accepting funds through, and which controller contract is managing each project's tokens and funding cycles.\\n\\n  @dev\\n  Adheres to -\\n  IJBDirectory: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.\\n\\n  @dev\\n  Inherits from -\\n  JBOperatable: Includes convenience functionality for checking a message sender's permissions before executing certain transactions.\\n  Ownable: Includes convenience functionality for checking a message sender's permissions before executing certain transactions.\\n*/\\ncontract JBDirectory is IJBDirectory, JBOperatable, Ownable {\\n  // A library that parses the packed funding cycle metadata into a friendlier format.\\n  using JBFundingCycleMetadataResolver for JBFundingCycle;\\n\\n  //*********************************************************************//\\n  // --------------------------- custom errors ------------------------- //\\n  //*********************************************************************//\\n  error DUPLICATE_TERMINALS();\\n  error INVALID_PROJECT_ID_IN_DIRECTORY();\\n  error SET_CONTROLLER_NOT_ALLOWED();\\n  error SET_TERMINALS_NOT_ALLOWED();\\n  error TOKEN_NOT_ACCEPTED();\\n\\n  //*********************************************************************//\\n  // --------------------- private stored properties ------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    For each project ID, the terminals that are currently managing its funds.\\n\\n    _projectId The ID of the project to get terminals of.\\n  */\\n  mapping(uint256 => IJBPaymentTerminal[]) private _terminalsOf;\\n\\n  /**\\n    @notice\\n    The project's primary terminal for a token.\\n\\n    _projectId The ID of the project to get the primary terminal of.\\n    _token The token to get the project's primary terminal of.\\n  */\\n  mapping(uint256 => mapping(address => IJBPaymentTerminal)) private _primaryTerminalOf;\\n\\n  //*********************************************************************//\\n  // ---------------- public immutable stored properties --------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Mints ERC-721's that represent project ownership and transfers.\\n  */\\n  IJBProjects public immutable override projects;\\n\\n  /**\\n    @notice\\n    The contract storing all funding cycle configurations.\\n  */\\n  IJBFundingCycleStore public immutable override fundingCycleStore;\\n\\n  //*********************************************************************//\\n  // --------------------- public stored properties -------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    For each project ID, the controller that manages how terminals interact with tokens and funding cycles.\\n\\n    _projectId The ID of the project to get the controller of.\\n  */\\n  mapping(uint256 => address) public override controllerOf;\\n\\n  /**\\n    @notice\\n    Addresses that can set a project's first controller on their behalf. These addresses/contracts have been vetted and verified by this contract's owner.\\n\\n    _address The address that is either allowed or not.\\n  */\\n  mapping(address => bool) public override isAllowedToSetFirstController;\\n\\n  //*********************************************************************//\\n  // ------------------------- external views -------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    For each project ID, the terminals that are currently managing its funds.\\n\\n    @param _projectId The ID of the project to get terminals of.\\n\\n    @return An array of terminal addresses.\\n  */\\n  function terminalsOf(uint256 _projectId)\\n    external\\n    view\\n    override\\n    returns (IJBPaymentTerminal[] memory)\\n  {\\n    return _terminalsOf[_projectId];\\n  }\\n\\n  /**\\n    @notice\\n    The primary terminal that is managing funds for a project for a specified token.\\n\\n    @dev\\n    The zero address is returned if a terminal isn't found for the specified token.\\n\\n    @param _projectId The ID of the project to get a terminal for.\\n    @param _token The token the terminal accepts.\\n\\n    @return The primary terminal for the project for the specified token.\\n  */\\n  function primaryTerminalOf(uint256 _projectId, address _token)\\n    external\\n    view\\n    override\\n    returns (IJBPaymentTerminal)\\n  {\\n    // If a primary terminal for the token was specifically set and its one of the project's terminals, return it.\\n    if (\\n      _primaryTerminalOf[_projectId][_token] != IJBPaymentTerminal(address(0)) &&\\n      isTerminalOf(_projectId, _primaryTerminalOf[_projectId][_token])\\n    ) return _primaryTerminalOf[_projectId][_token];\\n\\n    // Return the first terminal which accepts the specified token.\\n    for (uint256 _i; _i < _terminalsOf[_projectId].length; _i++) {\\n      IJBPaymentTerminal _terminal = _terminalsOf[_projectId][_i];\\n      if (_terminal.acceptsToken(_token)) return _terminal;\\n    }\\n\\n    // Not found.\\n    return IJBPaymentTerminal(address(0));\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- public views --------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Whether or not a specified terminal is a terminal of the specified project.\\n\\n    @param _projectId The ID of the project to check within.\\n    @param _terminal The address of the terminal to check for.\\n\\n    @return A flag indicating whether or not the specified terminal is a terminal of the specified project.\\n  */\\n  function isTerminalOf(uint256 _projectId, IJBPaymentTerminal _terminal)\\n    public\\n    view\\n    override\\n    returns (bool)\\n  {\\n    for (uint256 _i; _i < _terminalsOf[_projectId].length; _i++)\\n      if (_terminalsOf[_projectId][_i] == _terminal) return true;\\n    return false;\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @param _operatorStore A contract storing operator assignments.\\n    @param _projects A contract which mints ERC-721's that represent project ownership and transfers.\\n    @param _fundingCycleStore A contract storing all funding cycle configurations.\\n    @param _owner The address that will own the contract.\\n  */\\n  constructor(\\n    IJBOperatorStore _operatorStore,\\n    IJBProjects _projects,\\n    IJBFundingCycleStore _fundingCycleStore,\\n    address _owner\\n  ) JBOperatable(_operatorStore) {\\n    projects = _projects;\\n    fundingCycleStore = _fundingCycleStore;\\n\\n    _transferOwnership(_owner);\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------------- external transactions ---------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Update the controller that manages how terminals interact with the ecosystem.\\n\\n    @dev\\n    A controller can be set if:\\n    - the message sender is the project owner or an operator having the correct authorization.\\n    - the message sender is the project's current controller.\\n    - or, an allowedlisted address is setting a controller for a project that doesn't already have a controller.\\n\\n    @param _projectId The ID of the project to set a new controller for.\\n    @param _controller The new controller to set.\\n  */\\n  function setControllerOf(uint256 _projectId, address _controller)\\n    external\\n    override\\n    requirePermissionAllowingOverride(\\n      projects.ownerOf(_projectId),\\n      _projectId,\\n      JBOperations.SET_CONTROLLER,\\n      (msg.sender == address(controllerOf[_projectId]) ||\\n        (isAllowedToSetFirstController[msg.sender] && controllerOf[_projectId] == address(0)))\\n    )\\n  {\\n    // The project must exist.\\n    if (projects.count() < _projectId) revert INVALID_PROJECT_ID_IN_DIRECTORY();\\n\\n    // Get a reference to the project's current funding cycle.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n    // Setting controller is allowed if called from the current controller, or if the project doesn't have a current controller, or if the project's funding cycle allows setting the controller. Revert otherwise.\\n    if (\\n      msg.sender != address(controllerOf[_projectId]) &&\\n      controllerOf[_projectId] != address(0) &&\\n      !_fundingCycle.setControllerAllowed()\\n    ) revert SET_CONTROLLER_NOT_ALLOWED();\\n\\n    // Set the new controller.\\n    controllerOf[_projectId] = _controller;\\n\\n    emit SetController(_projectId, _controller, msg.sender);\\n  }\\n\\n  /** \\n    @notice \\n    Set a project's terminals.\\n\\n    @dev\\n    Only a project owner, an operator, or its controller can set its terminals.\\n\\n    @param _projectId The ID of the project having terminals set.\\n    @param _terminals The terminal to set.\\n  */\\n  function setTerminalsOf(uint256 _projectId, IJBPaymentTerminal[] calldata _terminals)\\n    external\\n    override\\n    requirePermissionAllowingOverride(\\n      projects.ownerOf(_projectId),\\n      _projectId,\\n      JBOperations.SET_TERMINALS,\\n      msg.sender == address(controllerOf[_projectId])\\n    )\\n  {\\n    // Get a reference to the project's current funding cycle.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n    // Setting terminals must be allowed if not called from the current controller.\\n    if (msg.sender != address(controllerOf[_projectId]) && !_fundingCycle.setTerminalsAllowed())\\n      revert SET_TERMINALS_NOT_ALLOWED();\\n\\n    // Delete the stored terminals for the project.\\n    _terminalsOf[_projectId] = _terminals;\\n\\n    // Make sure duplicates were not added.\\n    if (_terminals.length > 1)\\n      for (uint256 _i; _i < _terminals.length; _i++)\\n        for (uint256 _j = _i + 1; _j < _terminals.length; _j++)\\n          if (_terminals[_i] == _terminals[_j]) revert DUPLICATE_TERMINALS();\\n\\n    emit SetTerminals(_projectId, _terminals, msg.sender);\\n  }\\n\\n  /**\\n    @notice\\n    Project's can set which terminal should be their primary for a particular token.\\n    This is useful in case a project has several terminals connected for a particular token.\\n\\n    @dev\\n    The terminal will be set as the primary terminal where ecosystem contracts should route tokens.\\n\\n    @dev\\n    If setting a newly added terminal and the funding cycle doesn't allow new terminals, the caller must be the current controller.\\n\\n    @param _projectId The ID of the project for which a primary token is being set.\\n    @param _token The token to set the primary terminal of.\\n    @param _terminal The terminal to make primary.\\n  */\\n  function setPrimaryTerminalOf(\\n    uint256 _projectId,\\n    address _token,\\n    IJBPaymentTerminal _terminal\\n  )\\n    external\\n    override\\n    requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.SET_PRIMARY_TERMINAL)\\n  {\\n    // Can't set the primary terminal for a token if it doesn't accept the token.\\n    if (!_terminal.acceptsToken(_token)) revert TOKEN_NOT_ACCEPTED();\\n\\n    // Add the terminal to the project if it hasn't been already.\\n    _addTerminalIfNeeded(_projectId, _terminal);\\n\\n    // Store the terminal as the primary for the particular token.\\n    _primaryTerminalOf[_projectId][_token] = _terminal;\\n\\n    emit SetPrimaryTerminal(_projectId, _token, _terminal, msg.sender);\\n  }\\n\\n  /** \\n    @notice\\t\\n    Set a contract to the list of trusted addresses that can set a first controller for any project.\\t\\n\\n    @dev\\n    The owner can add addresses which are allowed to change projects' first controllers. \\n    These addresses are known and vetted controllers as well as contracts designed to launch new projects. \\n    A project can set its own controller without it being on the allow list.\\n\\n    @dev\\n    If you would like an address/contract allowlisted, please reach out to the contract owner.\\n\\n    @param _address The address to allow or revoke allowance from.\\n    @param _flag Whether allowance is being added or revoked.\\n  */\\n  function setIsAllowedToSetFirstController(address _address, bool _flag)\\n    external\\n    override\\n    onlyOwner\\n  {\\n    // Set the flag in the allowlist.\\n    isAllowedToSetFirstController[_address] = _flag;\\n\\n    emit SetIsAllowedToSetFirstController(_address, _flag, msg.sender);\\n  }\\n\\n  //*********************************************************************//\\n  // --------------------- private helper functions -------------------- //\\n  //*********************************************************************//\\n\\n  /**\\n    @notice\\n    Add a terminal to a project's list of terminals if it hasn't been already.\\n\\n    @param _projectId The ID of the project having a terminal added.\\n    @param _terminal The terminal to add.\\n  */\\n  function _addTerminalIfNeeded(uint256 _projectId, IJBPaymentTerminal _terminal) private {\\n    // Check that the terminal has not already been added.\\n    if (isTerminalOf(_projectId, _terminal)) return;\\n\\n    // Get a reference to the project's current funding cycle.\\n    JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\\n\\n    // Setting terminals must be allowed if not called from the current controller.\\n    if (msg.sender != address(controllerOf[_projectId]) && !_fundingCycle.setTerminalsAllowed())\\n      revert SET_TERMINALS_NOT_ALLOWED();\\n\\n    // Add the new terminal.\\n    _terminalsOf[_projectId].push(_terminal);\\n\\n    emit AddTerminal(_projectId, _terminal, msg.sender);\\n  }\\n}\\n\",\"keccak256\":\"0x91a90b6e3cf3f195a315e6a5b2df8e4f2e1ffdba0f8b7891b5ab211a9cafddab\",\"license\":\"MIT\"},\"contracts/abstract/JBOperatable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBOperatable.sol';\\n\\n/** \\n  @notice\\n  Modifiers to allow access to functions based on the message sender's operator status.\\n\\n  @dev\\n  Adheres to -\\n  IJBOperatable: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.\\n*/\\nabstract contract JBOperatable is IJBOperatable {\\n  //*********************************************************************//\\n  // --------------------------- custom errors -------------------------- //\\n  //*********************************************************************//\\n  error UNAUTHORIZED();\\n\\n  //*********************************************************************//\\n  // ---------------------------- modifiers ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Only allows the speficied account or an operator of the account to proceed. \\n\\n    @param _account The account to check for.\\n    @param _domain The domain namespace to look for an operator within. \\n    @param _permissionIndex The index of the permission to check for. \\n  */\\n  modifier requirePermission(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) {\\n    _requirePermission(_account, _domain, _permissionIndex);\\n    _;\\n  }\\n\\n  /** \\n    @notice\\n    Only allows the speficied account, an operator of the account to proceed, or a truthy override flag. \\n\\n    @param _account The account to check for.\\n    @param _domain The domain namespace to look for an operator within. \\n    @param _permissionIndex The index of the permission to check for. \\n    @param _override A condition to force allowance for.\\n  */\\n  modifier requirePermissionAllowingOverride(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex,\\n    bool _override\\n  ) {\\n    _requirePermissionAllowingOverride(_account, _domain, _permissionIndex, _override);\\n    _;\\n  }\\n\\n  //*********************************************************************//\\n  // ---------------- public immutable stored properties --------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice \\n    A contract storing operator assignments.\\n  */\\n  IJBOperatorStore public immutable override operatorStore;\\n\\n  //*********************************************************************//\\n  // -------------------------- constructor ---------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @param _operatorStore A contract storing operator assignments.\\n  */\\n  constructor(IJBOperatorStore _operatorStore) {\\n    operatorStore = _operatorStore;\\n  }\\n\\n  //*********************************************************************//\\n  // -------------------------- internal views ------------------------- //\\n  //*********************************************************************//\\n\\n  /** \\n    @notice\\n    Require the message sender is either the account or has the specified permission.\\n\\n    @param _account The account to allow.\\n    @param _domain The domain namespace within which the permission index will be checked.\\n    @param _permissionIndex The permission index that an operator must have within the specified domain to be allowed.\\n  */\\n  function _requirePermission(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) internal view {\\n    if (\\n      msg.sender != _account &&\\n      !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\\n      !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\\n    ) revert UNAUTHORIZED();\\n  }\\n\\n  /** \\n    @notice\\n    Require the message sender is either the account, has the specified permission, or the override condition is true.\\n\\n    @param _account The account to allow.\\n    @param _domain The domain namespace within which the permission index will be checked.\\n    @param _domain The permission index that an operator must have within the specified domain to be allowed.\\n    @param _override The override condition to allow.\\n  */\\n  function _requirePermissionAllowingOverride(\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex,\\n    bool _override\\n  ) internal view {\\n    if (\\n      !_override &&\\n      msg.sender != _account &&\\n      !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\\n      !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\\n    ) revert UNAUTHORIZED();\\n  }\\n}\\n\",\"keccak256\":\"0x9a5781d40c6b8013249653253369cda2047aa35329a1fcd4dc6353cd2dde30a6\",\"license\":\"MIT\"},\"contracts/enums/JBBallotState.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nenum JBBallotState {\\n  Active,\\n  Approved,\\n  Failed\\n}\\n\",\"keccak256\":\"0xadf07fd49f7e0947006fa1921bc7fd8fb532e8fecf3b9266721a8b7e43907461\",\"license\":\"MIT\"},\"contracts/interfaces/IJBDirectory.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './IJBFundingCycleStore.sol';\\nimport './IJBPaymentTerminal.sol';\\nimport './IJBProjects.sol';\\n\\ninterface IJBDirectory {\\n  event SetController(uint256 indexed projectId, address indexed controller, address caller);\\n\\n  event AddTerminal(uint256 indexed projectId, IJBPaymentTerminal indexed terminal, address caller);\\n\\n  event SetTerminals(uint256 indexed projectId, IJBPaymentTerminal[] terminals, address caller);\\n\\n  event SetPrimaryTerminal(\\n    uint256 indexed projectId,\\n    address indexed token,\\n    IJBPaymentTerminal indexed terminal,\\n    address caller\\n  );\\n\\n  event SetIsAllowedToSetFirstController(address indexed addr, bool indexed flag, address caller);\\n\\n  function projects() external view returns (IJBProjects);\\n\\n  function fundingCycleStore() external view returns (IJBFundingCycleStore);\\n\\n  function controllerOf(uint256 _projectId) external view returns (address);\\n\\n  function isAllowedToSetFirstController(address _address) external view returns (bool);\\n\\n  function terminalsOf(uint256 _projectId) external view returns (IJBPaymentTerminal[] memory);\\n\\n  function isTerminalOf(uint256 _projectId, IJBPaymentTerminal _terminal)\\n    external\\n    view\\n    returns (bool);\\n\\n  function primaryTerminalOf(uint256 _projectId, address _token)\\n    external\\n    view\\n    returns (IJBPaymentTerminal);\\n\\n  function setControllerOf(uint256 _projectId, address _controller) external;\\n\\n  function setTerminalsOf(uint256 _projectId, IJBPaymentTerminal[] calldata _terminals) external;\\n\\n  function setPrimaryTerminalOf(\\n    uint256 _projectId,\\n    address _token,\\n    IJBPaymentTerminal _terminal\\n  ) external;\\n\\n  function setIsAllowedToSetFirstController(address _address, bool _flag) external;\\n}\\n\",\"keccak256\":\"0x9e7f0d3590b3ddc3b667fcdacaa53b627e4d2b3a912360597fb0ffa413518167\",\"license\":\"MIT\"},\"contracts/interfaces/IJBFundingCycleBallot.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport './../enums/JBBallotState.sol';\\nimport './IJBFundingCycleStore.sol';\\n\\ninterface IJBFundingCycleBallot is IERC165 {\\n  function duration() external view returns (uint256);\\n\\n  function stateOf(\\n    uint256 _projectId,\\n    uint256 _configuration,\\n    uint256 _start\\n  ) external view returns (JBBallotState);\\n}\\n\",\"keccak256\":\"0xdc8c8bed613f5759c958b7b0d646032b4337a349a8ecea5ffeb167623f2f29f5\",\"license\":\"MIT\"},\"contracts/interfaces/IJBFundingCycleDataSource.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport './../structs/JBPayParamsData.sol';\\nimport './../structs/JBRedeemParamsData.sol';\\nimport './IJBFundingCycleStore.sol';\\nimport './IJBPayDelegate.sol';\\nimport './IJBRedemptionDelegate.sol';\\n\\ninterface IJBFundingCycleDataSource is IERC165 {\\n  function payParams(JBPayParamsData calldata _data)\\n    external\\n    view\\n    returns (\\n      uint256 weight,\\n      string memory memo,\\n      IJBPayDelegate delegate\\n    );\\n\\n  function redeemParams(JBRedeemParamsData calldata _data)\\n    external\\n    view\\n    returns (\\n      uint256 reclaimAmount,\\n      string memory memo,\\n      IJBRedemptionDelegate delegate\\n    );\\n}\\n\",\"keccak256\":\"0x7cba259a6c4177e0977bef12bae28e14ebb7c1fc665e67cd80d71743da4a1e86\",\"license\":\"MIT\"},\"contracts/interfaces/IJBFundingCycleStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../enums/JBBallotState.sol';\\nimport './../structs/JBFundingCycle.sol';\\nimport './../structs/JBFundingCycleData.sol';\\n\\ninterface IJBFundingCycleStore {\\n  event Configure(\\n    uint256 indexed configuration,\\n    uint256 indexed projectId,\\n    JBFundingCycleData data,\\n    uint256 metadata,\\n    uint256 mustStartAtOrAfter,\\n    address caller\\n  );\\n\\n  event Init(uint256 indexed configuration, uint256 indexed projectId, uint256 indexed basedOn);\\n\\n  function latestConfigurationOf(uint256 _projectId) external view returns (uint256);\\n\\n  function get(uint256 _projectId, uint256 _configuration)\\n    external\\n    view\\n    returns (JBFundingCycle memory);\\n\\n  function latestConfiguredOf(uint256 _projectId)\\n    external\\n    view\\n    returns (JBFundingCycle memory fundingCycle, JBBallotState ballotState);\\n\\n  function queuedOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentOf(uint256 _projectId) external view returns (JBFundingCycle memory fundingCycle);\\n\\n  function currentBallotStateOf(uint256 _projectId) external view returns (JBBallotState);\\n\\n  function configureFor(\\n    uint256 _projectId,\\n    JBFundingCycleData calldata _data,\\n    uint256 _metadata,\\n    uint256 _mustStartAtOrAfter\\n  ) external returns (JBFundingCycle memory fundingCycle);\\n}\\n\",\"keccak256\":\"0xf75791cd5b71bc6773cf56c92501e3f255a406eaedea781cb57cea2fa1e4ef20\",\"license\":\"MIT\"},\"contracts/interfaces/IJBOperatable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './IJBOperatorStore.sol';\\n\\ninterface IJBOperatable {\\n  function operatorStore() external view returns (IJBOperatorStore);\\n}\\n\",\"keccak256\":\"0x150097e253a667d2336367445bea019bb3669ef7c82d358befe1f4cdd480e9aa\",\"license\":\"MIT\"},\"contracts/interfaces/IJBOperatorStore.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../structs/JBOperatorData.sol';\\n\\ninterface IJBOperatorStore {\\n  event SetOperator(\\n    address indexed operator,\\n    address indexed account,\\n    uint256 indexed domain,\\n    uint256[] permissionIndexes,\\n    uint256 packed\\n  );\\n\\n  function permissionsOf(\\n    address _operator,\\n    address _account,\\n    uint256 _domain\\n  ) external view returns (uint256);\\n\\n  function hasPermission(\\n    address _operator,\\n    address _account,\\n    uint256 _domain,\\n    uint256 _permissionIndex\\n  ) external view returns (bool);\\n\\n  function hasPermissions(\\n    address _operator,\\n    address _account,\\n    uint256 _domain,\\n    uint256[] calldata _permissionIndexes\\n  ) external view returns (bool);\\n\\n  function setOperator(JBOperatorData calldata _operatorData) external;\\n\\n  function setOperators(JBOperatorData[] calldata _operatorData) external;\\n}\\n\",\"keccak256\":\"0x50a26fddc575a50176df7deb9225ec1816b0158c9e9b8555e7921a3261254ed8\",\"license\":\"MIT\"},\"contracts/interfaces/IJBPayDelegate.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport './../structs/JBDidPayData.sol';\\n\\ninterface IJBPayDelegate is IERC165 {\\n  function didPay(JBDidPayData calldata _data) external;\\n}\\n\",\"keccak256\":\"0xf7a9ef2df665e1c85a461fadb3cd54f6270c181eac96064005bde19e54d0ffa9\",\"license\":\"MIT\"},\"contracts/interfaces/IJBPaymentTerminal.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\n\\ninterface IJBPaymentTerminal is IERC165 {\\n  function acceptsToken(address _token) external view returns (bool);\\n\\n  function currencyForToken(address _token) external view returns (uint256);\\n\\n  function decimalsForToken(address _token) external view returns (uint256);\\n\\n  // Return value must be a fixed point number with 18 decimals.\\n  function currentEthOverflowOf(uint256 _projectId) external view returns (uint256);\\n\\n  function pay(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    address _beneficiary,\\n    uint256 _minReturnedTokens,\\n    bool _preferClaimedTokens,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable returns (uint256 beneficiaryTokenCount);\\n\\n  function addToBalanceOf(\\n    uint256 _projectId,\\n    uint256 _amount,\\n    address _token,\\n    string calldata _memo,\\n    bytes calldata _metadata\\n  ) external payable;\\n}\\n\",\"keccak256\":\"0x9ed8b16aa84675698784e2106d773d99d2ea85242784531a12f57c07ef10b291\",\"license\":\"MIT\"},\"contracts/interfaces/IJBProjects.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/token/ERC721/IERC721.sol';\\nimport './../structs/JBProjectMetadata.sol';\\nimport './IJBTokenUriResolver.sol';\\n\\ninterface IJBProjects is IERC721 {\\n  event Create(\\n    uint256 indexed projectId,\\n    address indexed owner,\\n    JBProjectMetadata metadata,\\n    address caller\\n  );\\n\\n  event SetMetadata(uint256 indexed projectId, JBProjectMetadata metadata, address caller);\\n\\n  event SetTokenUriResolver(IJBTokenUriResolver indexed resolver, address caller);\\n\\n  function count() external view returns (uint256);\\n\\n  function metadataContentOf(uint256 _projectId, uint256 _domain)\\n    external\\n    view\\n    returns (string memory);\\n\\n  function tokenUriResolver() external view returns (IJBTokenUriResolver);\\n\\n  function createFor(address _owner, JBProjectMetadata calldata _metadata)\\n    external\\n    returns (uint256 projectId);\\n\\n  function setMetadataOf(uint256 _projectId, JBProjectMetadata calldata _metadata) external;\\n\\n  function setTokenUriResolver(IJBTokenUriResolver _newResolver) external;\\n}\\n\",\"keccak256\":\"0x602bad7e8cce6e9d53fe5e3532c5d4428d02206f8df48b246aac7ee8a6dcc98d\",\"license\":\"MIT\"},\"contracts/interfaces/IJBRedemptionDelegate.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport '@openzeppelin/contracts/utils/introspection/IERC165.sol';\\nimport './../structs/JBDidRedeemData.sol';\\n\\ninterface IJBRedemptionDelegate is IERC165 {\\n  function didRedeem(JBDidRedeemData calldata _data) external;\\n}\\n\",\"keccak256\":\"0xfc91761a568e60e1a1429ac11b0d1b57c627ef59f4011b17df4f9f540b7dd60d\",\"license\":\"MIT\"},\"contracts/interfaces/IJBTokenUriResolver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\ninterface IJBTokenUriResolver {\\n  function getUri(uint256 _projectId) external view returns (string memory tokenUri);\\n}\\n\",\"keccak256\":\"0xa64ece706d7ce399095f403b08383391c089da4995b5ee000b278d93d242a475\",\"license\":\"MIT\"},\"contracts/libraries/JBConstants.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/**\\n  @notice\\n  Global constants used across Juicebox contracts.\\n*/\\nlibrary JBConstants {\\n  uint256 public constant MAX_RESERVED_RATE = 10000;\\n  uint256 public constant MAX_REDEMPTION_RATE = 10000;\\n  uint256 public constant MAX_DISCOUNT_RATE = 1000000000;\\n  uint256 public constant SPLITS_TOTAL_PERCENT = 1000000000;\\n  uint256 public constant MAX_FEE = 1000000000;\\n  uint256 public constant MAX_FEE_DISCOUNT = 1000000000;\\n}\\n\",\"keccak256\":\"0x31517dfd8accf961f247cefd72bf8a76c20747cd8ed65cedf817dd7aa9a0082f\",\"license\":\"MIT\"},\"contracts/libraries/JBFundingCycleMetadataResolver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleDataSource.sol';\\nimport './../structs/JBFundingCycleMetadata.sol';\\nimport './JBConstants.sol';\\n\\nlibrary JBFundingCycleMetadataResolver {\\n  function reservedRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {\\n    return uint256(uint16(_fundingCycle.metadata >> 8));\\n  }\\n\\n  function redemptionRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {\\n    // Redemption rate is a number 0-10000. It's inverse was stored so the most common case of 100% results in no storage needs.\\n    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 24));\\n  }\\n\\n  function ballotRedemptionRate(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (uint256)\\n  {\\n    // Redemption rate is a number 0-10000. It's inverse was stored so the most common case of 100% results in no storage needs.\\n    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 40));\\n  }\\n\\n  function payPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 56) & 1) == 1;\\n  }\\n\\n  function distributionsPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 57) & 1) == 1;\\n  }\\n\\n  function redeemPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 58) & 1) == 1;\\n  }\\n\\n  function burnPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 59) & 1) == 1;\\n  }\\n\\n  function mintingAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 60) & 1) == 1;\\n  }\\n\\n  function changeTokenAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 61) & 1) == 1;\\n  }\\n\\n  function terminalMigrationAllowed(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 62) & 1) == 1;\\n  }\\n\\n  function controllerMigrationAllowed(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 63) & 1) == 1;\\n  }\\n\\n  function setTerminalsAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 64) & 1) == 1;\\n  }\\n\\n  function setControllerAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 65) & 1) == 1;\\n  }\\n\\n  function shouldHoldFees(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return ((_fundingCycle.metadata >> 66) & 1) == 1;\\n  }\\n\\n  function useTotalOverflowForRedemptions(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return ((_fundingCycle.metadata >> 67) & 1) == 1;\\n  }\\n\\n  function useDataSourceForPay(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\\n    return (_fundingCycle.metadata >> 68) & 1 == 1;\\n  }\\n\\n  function useDataSourceForRedeem(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (bool)\\n  {\\n    return (_fundingCycle.metadata >> 69) & 1 == 1;\\n  }\\n\\n  function dataSource(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (IJBFundingCycleDataSource)\\n  {\\n    return IJBFundingCycleDataSource(address(uint160(_fundingCycle.metadata >> 70)));\\n  }\\n\\n  /**\\n    @notice\\n    Pack the funding cycle metadata.\\n\\n    @param _metadata The metadata to validate and pack.\\n\\n    @return packed The packed uint256 of all metadata params. The first 8 bits specify the version.\\n  */\\n  function packFundingCycleMetadata(JBFundingCycleMetadata memory _metadata)\\n    internal\\n    pure\\n    returns (uint256 packed)\\n  {\\n    // version 1 in the bits 0-7 (8 bits).\\n    packed = 1;\\n    // reserved rate in bits 8-23 (16 bits).\\n    packed |= _metadata.reservedRate << 8;\\n    // redemption rate in bits 24-39 (16 bits).\\n    // redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.\\n    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.redemptionRate) << 24;\\n    // ballot redemption rate rate in bits 40-55 (16 bits).\\n    // ballot redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.\\n    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.ballotRedemptionRate) << 40;\\n    // pause pay in bit 56.\\n    if (_metadata.pausePay) packed |= 1 << 56;\\n    // pause tap in bit 57.\\n    if (_metadata.pauseDistributions) packed |= 1 << 57;\\n    // pause redeem in bit 58.\\n    if (_metadata.pauseRedeem) packed |= 1 << 58;\\n    // pause burn in bit 59.\\n    if (_metadata.pauseBurn) packed |= 1 << 59;\\n    // allow minting in bit 60.\\n    if (_metadata.allowMinting) packed |= 1 << 60;\\n    // pause change token in bit 61.\\n    if (_metadata.allowChangeToken) packed |= 1 << 61;\\n    // allow terminal migration in bit 62.\\n    if (_metadata.allowTerminalMigration) packed |= 1 << 62;\\n    // allow controller migration in bit 63.\\n    if (_metadata.allowControllerMigration) packed |= 1 << 63;\\n    // allow set terminals in bit 64.\\n    if (_metadata.allowSetTerminals) packed |= 1 << 64;\\n    // allow set controller in bit 65.\\n    if (_metadata.allowSetController) packed |= 1 << 65;\\n    // hold fees in bit 66.\\n    if (_metadata.holdFees) packed |= 1 << 66;\\n    // useTotalOverflowForRedemptions in bit 67.\\n    if (_metadata.useTotalOverflowForRedemptions) packed |= 1 << 67;\\n    // use pay data source in bit 68.\\n    if (_metadata.useDataSourceForPay) packed |= 1 << 68;\\n    // use redeem data source in bit 69.\\n    if (_metadata.useDataSourceForRedeem) packed |= 1 << 69;\\n    // data source address in bits 70-229.\\n    packed |= uint256(uint160(address(_metadata.dataSource))) << 70;\\n  }\\n\\n  /**\\n    @notice\\n    Expand the funding cycle metadata.\\n\\n    @param _fundingCycle The funding cycle having its metadata expanded.\\n\\n    @return metadata The metadata object.\\n  */\\n  function expandMetadata(JBFundingCycle memory _fundingCycle)\\n    internal\\n    pure\\n    returns (JBFundingCycleMetadata memory metadata)\\n  {\\n    return\\n      JBFundingCycleMetadata(\\n        reservedRate(_fundingCycle),\\n        redemptionRate(_fundingCycle),\\n        ballotRedemptionRate(_fundingCycle),\\n        payPaused(_fundingCycle),\\n        distributionsPaused(_fundingCycle),\\n        redeemPaused(_fundingCycle),\\n        burnPaused(_fundingCycle),\\n        mintingAllowed(_fundingCycle),\\n        changeTokenAllowed(_fundingCycle),\\n        terminalMigrationAllowed(_fundingCycle),\\n        controllerMigrationAllowed(_fundingCycle),\\n        setTerminalsAllowed(_fundingCycle),\\n        setControllerAllowed(_fundingCycle),\\n        shouldHoldFees(_fundingCycle),\\n        useTotalOverflowForRedemptions(_fundingCycle),\\n        useDataSourceForPay(_fundingCycle),\\n        useDataSourceForRedeem(_fundingCycle),\\n        dataSource(_fundingCycle)\\n      );\\n  }\\n}\\n\",\"keccak256\":\"0x1528b01f3482fcab649ea9d0ff27be74e50fdb9dd6a0947687fa90af048aff73\",\"license\":\"MIT\"},\"contracts/libraries/JBOperations.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nlibrary JBOperations {\\n  uint256 public constant RECONFIGURE = 1;\\n  uint256 public constant REDEEM = 2;\\n  uint256 public constant MIGRATE_CONTROLLER = 3;\\n  uint256 public constant MIGRATE_TERMINAL = 4;\\n  uint256 public constant PROCESS_FEES = 5;\\n  uint256 public constant SET_METADATA = 6;\\n  uint256 public constant ISSUE = 7;\\n  uint256 public constant CHANGE_TOKEN = 8;\\n  uint256 public constant MINT = 9;\\n  uint256 public constant BURN = 10;\\n  uint256 public constant CLAIM = 11;\\n  uint256 public constant TRANSFER = 12;\\n  uint256 public constant REQUIRE_CLAIM = 13;\\n  uint256 public constant SET_CONTROLLER = 14;\\n  uint256 public constant SET_TERMINALS = 15;\\n  uint256 public constant SET_PRIMARY_TERMINAL = 16;\\n  uint256 public constant USE_ALLOWANCE = 17;\\n  uint256 public constant SET_SPLITS = 18;\\n}\\n\",\"keccak256\":\"0x828971de3d07c31e294c188335e250ee0b28919dd86f0dd570f89b97cca13932\",\"license\":\"MIT\"},\"contracts/structs/JBDidPayData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './JBTokenAmount.sol';\\n\\n/** \\n  @member payer The address from which the payment originated.\\n  @member projectId The ID of the project for which the payment was made.\\n  @member amount The amount of the payment. Includes the token being paid, the value, the number of decimals included, and the currency of the amount.\\n  @member projectTokenCount The number of project tokens minted for the beneficiary.\\n  @member beneficiary The address to which the tokens were minted.\\n  @member memo The memo that is being emitted alongside the payment.\\n  @member metadata Extra data to send to the delegate.\\n*/\\nstruct JBDidPayData {\\n  address payer;\\n  uint256 projectId;\\n  JBTokenAmount amount;\\n  uint256 projectTokenCount;\\n  address beneficiary;\\n  string memo;\\n  bytes metadata;\\n}\\n\",\"keccak256\":\"0x1c2cb695993bd3c95f9dd1b164d6db8cb4f9fc2a2f4073005d5b15d8433767a7\",\"license\":\"MIT\"},\"contracts/structs/JBDidRedeemData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './JBTokenAmount.sol';\\n\\n/** \\n  @member holder The holder of the tokens being redeemed.\\n  @member projectId The ID of the project with which the redeemed tokens are associated.\\n  @member projectTokenCount The number of project tokens being redeemed.\\n  @member reclaimedAmount The amount reclaimed from the treasury. Includes the token being reclaimed, the value, the number of decimals included, and the currency of the amount.\\n  @member beneficiary The address to which the reclaimed amount will be sent.\\n  @member memo The memo that is being emitted alongside the redemption.\\n  @member metadata Extra data to send to the delegate.\\n*/\\nstruct JBDidRedeemData {\\n  address holder;\\n  uint256 projectId;\\n  uint256 projectTokenCount;\\n  JBTokenAmount reclaimedAmount;\\n  address payable beneficiary;\\n  string memo;\\n  bytes metadata;\\n}\\n\",\"keccak256\":\"0xc951e07378af3c71e52680615ba974c5a8e5448fa8275988af4caeb53036d13e\",\"license\":\"MIT\"},\"contracts/structs/JBFundingCycle.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleBallot.sol';\\n\\n/** \\n  @member number The funding cycle number for the cycle's project. Each funding cycle has a number that is an increment of the cycle that directly preceded it. Each project's first funding cycle has a number of 1.\\n  @member configuration The timestamp when the parameters for this funding cycle were configured. This value will stay the same for subsequent funding cycles that roll over from an originally configured cycle.\\n  @member basedOn The `configuration` of the funding cycle that was active when this cycle was created.\\n  @member start The timestamp marking the moment from which the funding cycle is considered active. It is a unix timestamp measured in seconds.\\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle's parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn't configured the subsequent funding cycle with an explicit `weight`. If it's 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n  @member metadata Extra data that can be associated with a funding cycle.\\n*/\\nstruct JBFundingCycle {\\n  uint256 number;\\n  uint256 configuration;\\n  uint256 basedOn;\\n  uint256 start;\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n  uint256 metadata;\\n}\\n\",\"keccak256\":\"0x7e1ee378705e677298b955bd82b7c79b962e1c2e20f840eb8c491aba595e4905\",\"license\":\"MIT\"},\"contracts/structs/JBFundingCycleData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleBallot.sol';\\n\\n/** \\n  @member duration The number of seconds the funding cycle lasts for, after which a new funding cycle will start. A duration of 0 means that the funding cycle will stay active until the project owner explicitly issues a reconfiguration, at which point a new funding cycle will immediately start with the updated properties. If the duration is greater than 0, a project owner cannot make changes to a funding cycle's parameters while it is active \\u2013 any proposed changes will apply to the subsequent cycle. If no changes are proposed, a funding cycle rolls over to another one with the same properties but new `start` timestamp and a discounted `weight`.\\n  @member weight A fixed point number with 18 decimals that contracts can use to base arbitrary calculations on. For example, payment terminals can use this to determine how many tokens should be minted when a payment is received.\\n  @member discountRate A percent by how much the `weight` of the subsequent funding cycle should be reduced, if the project owner hasn't configured the subsequent funding cycle with an explicit `weight`. If it's 0, each funding cycle will have equal weight. If the number is 90%, the next funding cycle will have a 10% smaller weight. This weight is out of `JBConstants.MAX_DISCOUNT_RATE`.\\n  @member ballot An address of a contract that says whether a proposed reconfiguration should be accepted or rejected. It can be used to create rules around how a project owner can change funding cycle parameters over time.\\n*/\\nstruct JBFundingCycleData {\\n  uint256 duration;\\n  uint256 weight;\\n  uint256 discountRate;\\n  IJBFundingCycleBallot ballot;\\n}\\n\",\"keccak256\":\"0xfc1c73d1b01782bbdfdd73d5d25f075e6c33dd37414638b63664063a0d1692cc\",\"license\":\"MIT\"},\"contracts/structs/JBFundingCycleMetadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBFundingCycleDataSource.sol';\\n\\n/** \\n  @member reservedRate The reserved rate of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_RESERVED_RATE`.\\n  @member redemptionRate The redemption rate of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_REDEMPTION_RATE`.\\n  @member ballotRedemptionRate The redemption rate to use during an active ballot of the funding cycle. This number is a percentage calculated out of `JBConstants.MAX_REDEMPTION_RATE`.\\n  @member pausePay A flag indicating if the pay functionality should be paused during the funding cycle.\\n  @member pauseDistributions A flag indicating if the distribute functionality should be paused during the funding cycle.\\n  @member pauseRedeem A flag indicating if the redeem functionality should be paused during the funding cycle.\\n  @member pauseBurn A flag indicating if the burn functionality should be paused during the funding cycle.\\n  @member allowMinting A flag indicating if the mint functionality should be allowed during the funding cycle.\\n  @member allowChangeToken A flag indicating if changing tokens should be allowed during this funding cycle.\\n  @member allowTerminalMigration A flag indicating if migrating terminals should be allowed during this funding cycle.\\n  @member allowControllerMigration A flag indicating if migrating controllers should be allowed during this funding cycle.\\n  @member allowSetTerminals A flag indicating if setting terminals should be allowed during this funding cycle.\\n  @member allowSetController A flag indicating if setting a new controller should be allowed during this funding cycle.\\n  @member holdFees A flag indicating if fees should be held during this funding cycle.\\n  @member useTotalOverflowForRedemptions A flag indicating if redemptions should use the project's balance held in all terminals instead of the project's local terminal balance from which the redemption is being fulfilled.\\n  @member useDataSourceForPay A flag indicating if the data source should be used for pay transactions during this funding cycle.\\n  @member useDataSourceForRedeem A flag indicating if the data source should be used for redeem transactions during this funding cycle.\\n  @member dataSource The data source to use during this funding cycle.\\n*/\\nstruct JBFundingCycleMetadata {\\n  uint256 reservedRate;\\n  uint256 redemptionRate;\\n  uint256 ballotRedemptionRate;\\n  bool pausePay;\\n  bool pauseDistributions;\\n  bool pauseRedeem;\\n  bool pauseBurn;\\n  bool allowMinting;\\n  bool allowChangeToken;\\n  bool allowTerminalMigration;\\n  bool allowControllerMigration;\\n  bool allowSetTerminals;\\n  bool allowSetController;\\n  bool holdFees;\\n  bool useTotalOverflowForRedemptions;\\n  bool useDataSourceForPay;\\n  bool useDataSourceForRedeem;\\n  IJBFundingCycleDataSource dataSource;\\n}\\n\",\"keccak256\":\"0xd74a9fc88a934fdda70636f5ea16eca87d651414725ef53c4e699e645cf1e0dd\",\"license\":\"MIT\"},\"contracts/structs/JBOperatorData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member operator The address of the operator.\\n  @member domain The domain within which the operator is being given permissions. A domain of 0 is a wildcard domain, which gives an operator access to all domains.\\n  @member permissionIndexes The indexes of the permissions the operator is being given.\\n*/\\nstruct JBOperatorData {\\n  address operator;\\n  uint256 domain;\\n  uint256[] permissionIndexes;\\n}\\n\",\"keccak256\":\"0xc108ff9bbeef8783e332522b8bd1c17bba071c34051de72dc5bfe38dfd39a3a3\",\"license\":\"MIT\"},\"contracts/structs/JBPayParamsData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBPaymentTerminal.sol';\\nimport './JBTokenAmount.sol';\\n\\n/** \\n  @member terminal The terminal that is facilitating the payment.\\n  @member payer The address from which the payment originated.\\n  @member amount The amount of the payment. Includes the token being paid, the value, the number of decimals included, and the currency of the amount.\\n  @member projectId The ID of the project being paid.\\n  @member weight The weight of the funding cycle during which the payment is being made.\\n  @member reservedRate The reserved rate of the funding cycle during which the payment is being made.\\n  @member memo The memo that was sent alongside the payment.\\n  @member metadata Extra data provided by the payer.\\n*/\\nstruct JBPayParamsData {\\n  IJBPaymentTerminal terminal;\\n  address payer;\\n  JBTokenAmount amount;\\n  uint256 projectId;\\n  uint256 weight;\\n  uint256 reservedRate;\\n  string memo;\\n  bytes metadata;\\n}\\n\",\"keccak256\":\"0x00132a0aee8526841953cfd7d954fc7f00c9976c9a3083cacfb6ed108e8baead\",\"license\":\"MIT\"},\"contracts/structs/JBProjectMetadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/** \\n  @member content The metadata content.\\n  @member domain The domain within which the metadata applies.\\n*/\\nstruct JBProjectMetadata {\\n  string content;\\n  uint256 domain;\\n}\\n\",\"keccak256\":\"0x5ea56d46d07944aacfe540ee9290f10a70d77b537650a0b28975e2e88fa5b9a4\",\"license\":\"MIT\"},\"contracts/structs/JBRedeemParamsData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\nimport './../interfaces/IJBPaymentTerminal.sol';\\nimport './JBTokenAmount.sol';\\n\\n/** \\n  @member terminal The terminal that is facilitating the redemption.\\n  @member holder The holder of the tokens being redeemed.\\n  @member projectId The ID of the project whos tokens are being redeemed.\\n  @member tokenCount The proposed number of tokens being redeemed, as a fixed point number with 18 decimals.\\n  @member totalSupply The total supply of tokens used in the calculation, as a fixed point number with 18 decimals.\\n  @member overflow The amount of overflow used in the reclaim amount calculation.\\n  @member reclaimAmount The amount that should be reclaimed by the redeemer using the protocol's standard bonding curve redemption formula. Includes the token being reclaimed, the reclaim value, the number of decimals included, and the currency of the reclaim amount.\\n  @member useTotalOverflow If overflow across all of a project's terminals is being used when making redemptions.\\n  @member redemptionRate The redemption rate of the funding cycle during which the redemption is being made.\\n  @member ballotRedemptionRate The ballot redemption rate of the funding cycle during which the redemption is being made.\\n  @member memo The proposed memo that is being emitted alongside the redemption.\\n  @member metadata Extra data provided by the redeemer.\\n*/\\nstruct JBRedeemParamsData {\\n  IJBPaymentTerminal terminal;\\n  address holder;\\n  uint256 projectId;\\n  uint256 tokenCount;\\n  uint256 totalSupply;\\n  uint256 overflow;\\n  JBTokenAmount reclaimAmount;\\n  bool useTotalOverflow;\\n  uint256 redemptionRate;\\n  uint256 ballotRedemptionRate;\\n  string memo;\\n  bytes metadata;\\n}\\n\",\"keccak256\":\"0x283deeeb3ef16f41d0002f32690ee6dcd3ac9a250fbee02d3b9e3808e172a875\",\"license\":\"MIT\"},\"contracts/structs/JBTokenAmount.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.6;\\n\\n/* \\n  @member token The token the payment was made in.\\n  @member value The amount of tokens that was paid, as a fixed point number.\\n  @member decimals The number of decimals included in the value fixed point number.\\n  @member currency The expected currency of the value.\\n**/\\nstruct JBTokenAmount {\\n  address token;\\n  uint256 value;\\n  uint256 decimals;\\n  uint256 currency;\\n}\\n\",\"keccak256\":\"0xc606ed3c46a59e2e037897d2d749867919756d01f8e75a495d2dd4e03c3535fc\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x60e06040523480156200001157600080fd5b5060405162001fd238038062001fd28339810160408190526200003491620000d0565b606084901b6001600160601b031916608052620000513362000080565b6001600160601b0319606084811b821660a05283901b1660c052620000768162000080565b5050505062000151565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008060008060808587031215620000e757600080fd5b8451620000f48162000138565b6020860151909450620001078162000138565b60408601519093506200011a8162000138565b60608601519092506200012d8162000138565b939692955090935050565b6001600160a01b03811681146200014e57600080fd5b50565b60805160601c60a05160601c60c05160601c611dfc620001d66000396000818160ff015281816107fe01528181610b7f01526114b50152600081816101ff015281816102fe015281816105e7015281816106f80152610a86015260008181610257015281816112dc015281816113b8015281816116dc01526117b80152611dfc6000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638620265011610097578063ad007d6311610066578063ad007d6314610252578063c5664e2114610279578063d17541531461029c578063f2fde38b146102bc57600080fd5b806386202650146101e75780638b79543c146101fa5780638da5cb5b14610221578063a1ed31751461023f57600080fd5b80636e49181f116100d35780636e49181f14610196578063714e7f32146101b9578063715018a6146101cc578063821b9fd8146101d457600080fd5b8063557e7155146100fa5780635dd8f6aa1461014b57806363d0850a14610181575b600080fd5b6101217f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610121610159366004611aaa565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b61019461018f366004611b01565b6102cf565b005b6101a96101a4366004611adc565b610515565b6040519015158152602001610142565b6101946101c7366004611adc565b6105b8565b6101946109c5565b6101946101e2366004611b43565b610a57565b6101216101f5366004611adc565b610dee565b6101217f000000000000000000000000000000000000000000000000000000000000000081565b60005473ffffffffffffffffffffffffffffffffffffffff16610121565b61019461024d3660046119d4565b610fab565b6101217f000000000000000000000000000000000000000000000000000000000000000081565b6101a9610287366004611993565b60046020526000908152604090205460ff1681565b6102af6102aa366004611aaa565b6110b9565b6040516101429190611c3c565b6101946102ca366004611993565b611132565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018490527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561035557600080fd5b505afa158015610369573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038d91906119b7565b83601061039b838383611262565b6040517f868399a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff868116600483015285169063868399a59060240160206040518083038186803b15801561040257600080fd5b505afa158015610416573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043a9190611a0d565b610470576040517f1f5522f600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047a8685611470565b600086815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8981168086529184529382902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001694891694851790559051338152909189917fc670a502bbb9f8a4315f95eca901a9f99b65f89a2eb5705a58050e5c00f9d672910160405180910390a4505050505050565b6000805b6000848152600160205260409020548110156105ac576000848152600160205260409020805473ffffffffffffffffffffffffffffffffffffffff851691908390811061056857610568611d67565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16141561059a5760019150506105b2565b806105a481611cff565b915050610519565b50600090505b92915050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561063e57600080fd5b505afa158015610652573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067691906119b7565b6000838152600360205260409020548390600e9073ffffffffffffffffffffffffffffffffffffffff163314806106e957503360009081526004602052604090205460ff1680156106e9575060008581526003602052604090205473ffffffffffffffffffffffffffffffffffffffff16155b6106f584848484611658565b857f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166306661abd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561075c57600080fd5b505afa158015610770573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107949190611ac3565b10156107cc576040517f945074a600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018790526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b15801561085657600080fd5b505afa15801561086a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088e9190611a2a565b60008881526003602052604090205490915073ffffffffffffffffffffffffffffffffffffffff1633148015906108e8575060008781526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1615155b8015610900575061010081015160411c600190811614155b15610937576040517fa33db4cb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008781526003602090815260409182902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8a16908117909155915133815289917f7f9a7dcb234c909a09de2f344661ad9e5b24067adb97c908647c2edcbb121c30910160405180910390a350505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b610a556000611871565b565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018490527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015610add57600080fd5b505afa158015610af1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1591906119b7565b6000848152600360205260409020548490600f9073ffffffffffffffffffffffffffffffffffffffff163314610b4d84848484611658565b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018890526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b158015610bd757600080fd5b505afa158015610beb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0f9190611a2a565b60008981526003602052604090205490915073ffffffffffffffffffffffffffffffffffffffff163314801590610c52575061010081015160401c600190811614155b15610c89576040517febfde6be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000888152600160205260409020610ca29088886118e6565b506001861115610da85760005b86811015610da6576000610cc4826001611ce7565b90505b87811015610d9357888882818110610ce157610ce1611d67565b9050602002016020810190610cf69190611993565b73ffffffffffffffffffffffffffffffffffffffff16898984818110610d1e57610d1e611d67565b9050602002016020810190610d339190611993565b73ffffffffffffffffffffffffffffffffffffffff161415610d81576040517f7c70615600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80610d8b81611cff565b915050610cc7565b5080610d9e81611cff565b915050610caf565b505b877fb648241d83df6540fc10f2acc641e4bf80a1e84e7ae2f1f6b0ad204b8fee635b888833604051610ddc93929190611bc2565b60405180910390a25050505050505050565b600082815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff858116855292528220541615801590610e655750600083815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8087168552925290912054610e6591859116610515565b15610ea25750600082815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8086168552925290912054166105b2565b60005b6000848152600160205260409020548110156105ac576000848152600160205260408120805483908110610edb57610edb611d67565b6000918252602090912001546040517f868399a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301529091169150819063868399a59060240160206040518083038186803b158015610f5257600080fd5b505afa158015610f66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8a9190611a0d565b15610f985791506105b29050565b5080610fa381611cff565b915050610ea5565b60005473ffffffffffffffffffffffffffffffffffffffff16331461102c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a42565b73ffffffffffffffffffffffffffffffffffffffff821660008181526004602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591513381529192917f11207664cc48b0fa81c8674795f1d8f642960f38d5d2d305ad813093bed85fab910160405180910390a35050565b60008181526001602090815260409182902080548351818402810184019094528084526060939283018282801561112657602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116110fb575b50505050509050919050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146111b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a42565b73ffffffffffffffffffffffffffffffffffffffff8116611256576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610a42565b61125f81611871565b50565b3373ffffffffffffffffffffffffffffffffffffffff84161480159061135857506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260448201849052606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561131e57600080fd5b505afa158015611332573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113569190611a0d565b155b801561143457506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260006044830152606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b1580156113fa57600080fd5b505afa15801561140e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114329190611a0d565b155b1561146b576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b61147a8282610515565b15611483575050565b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018390526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b15801561150d57600080fd5b505afa158015611521573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115459190611a2a565b60008481526003602052604090205490915073ffffffffffffffffffffffffffffffffffffffff163314801590611588575061010081015160401c600190811614155b156115bf576040517febfde6be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008381526001602081815260408084208054938401815584529281902090910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8616908117909155915133815285917f409bccc07b7cf7807930526a24318212d614c59f2dde05a017a41efee144e7c8910160405180910390a3505050565b8015801561167c57503373ffffffffffffffffffffffffffffffffffffffff851614155b801561175857506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561171e57600080fd5b505afa158015611732573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117569190611a0d565b155b801561183457506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260006044830152606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b1580156117fa57600080fd5b505afa15801561180e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118329190611a0d565b155b1561186b576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b82805482825590600052602060002090810192821561195e579160200282015b8281111561195e5781547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff843516178255602090920191600190910190611906565b5061196a92915061196e565b5090565b5b8082111561196a576000815560010161196f565b805161198e81611d96565b919050565b6000602082840312156119a557600080fd5b81356119b081611d96565b9392505050565b6000602082840312156119c957600080fd5b81516119b081611d96565b600080604083850312156119e757600080fd5b82356119f281611d96565b91506020830135611a0281611db8565b809150509250929050565b600060208284031215611a1f57600080fd5b81516119b081611db8565b60006101208284031215611a3d57600080fd5b611a45611c96565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152611a9160e08401611983565b60e0820152610100928301519281019290925250919050565b600060208284031215611abc57600080fd5b5035919050565b600060208284031215611ad557600080fd5b5051919050565b60008060408385031215611aef57600080fd5b823591506020830135611a0281611d96565b600080600060608486031215611b1657600080fd5b833592506020840135611b2881611d96565b91506040840135611b3881611d96565b809150509250925092565b600080600060408486031215611b5857600080fd5b83359250602084013567ffffffffffffffff80821115611b7757600080fd5b818601915086601f830112611b8b57600080fd5b813581811115611b9a57600080fd5b8760208260051b8501011115611baf57600080fd5b6020830194508093505050509250925092565b6040808252810183905260008460608301825b86811015611c12578235611be881611d96565b73ffffffffffffffffffffffffffffffffffffffff16825260209283019290910190600101611bd5565b50809250505073ffffffffffffffffffffffffffffffffffffffff83166020830152949350505050565b6020808252825182820181905260009190848201906040850190845b81811015611c8a57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611c58565b50909695505050505050565b604051610120810167ffffffffffffffff81118282101715611ce1577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b60008219821115611cfa57611cfa611d38565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611d3157611d31611d38565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461125f57600080fd5b801515811461125f57600080fdfea2646970667358221220d98f51c676e8cad9158c057c1caa16678c5afa7b22229bb745107336bee6570164736f6c63430008060033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100f55760003560e01c80638620265011610097578063ad007d6311610066578063ad007d6314610252578063c5664e2114610279578063d17541531461029c578063f2fde38b146102bc57600080fd5b806386202650146101e75780638b79543c146101fa5780638da5cb5b14610221578063a1ed31751461023f57600080fd5b80636e49181f116100d35780636e49181f14610196578063714e7f32146101b9578063715018a6146101cc578063821b9fd8146101d457600080fd5b8063557e7155146100fa5780635dd8f6aa1461014b57806363d0850a14610181575b600080fd5b6101217f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610121610159366004611aaa565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b61019461018f366004611b01565b6102cf565b005b6101a96101a4366004611adc565b610515565b6040519015158152602001610142565b6101946101c7366004611adc565b6105b8565b6101946109c5565b6101946101e2366004611b43565b610a57565b6101216101f5366004611adc565b610dee565b6101217f000000000000000000000000000000000000000000000000000000000000000081565b60005473ffffffffffffffffffffffffffffffffffffffff16610121565b61019461024d3660046119d4565b610fab565b6101217f000000000000000000000000000000000000000000000000000000000000000081565b6101a9610287366004611993565b60046020526000908152604090205460ff1681565b6102af6102aa366004611aaa565b6110b9565b6040516101429190611c3c565b6101946102ca366004611993565b611132565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018490527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561035557600080fd5b505afa158015610369573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038d91906119b7565b83601061039b838383611262565b6040517f868399a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff868116600483015285169063868399a59060240160206040518083038186803b15801561040257600080fd5b505afa158015610416573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043a9190611a0d565b610470576040517f1f5522f600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047a8685611470565b600086815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8981168086529184529382902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001694891694851790559051338152909189917fc670a502bbb9f8a4315f95eca901a9f99b65f89a2eb5705a58050e5c00f9d672910160405180910390a4505050505050565b6000805b6000848152600160205260409020548110156105ac576000848152600160205260409020805473ffffffffffffffffffffffffffffffffffffffff851691908390811061056857610568611d67565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16141561059a5760019150506105b2565b806105a481611cff565b915050610519565b50600090505b92915050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b15801561063e57600080fd5b505afa158015610652573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067691906119b7565b6000838152600360205260409020548390600e9073ffffffffffffffffffffffffffffffffffffffff163314806106e957503360009081526004602052604090205460ff1680156106e9575060008581526003602052604090205473ffffffffffffffffffffffffffffffffffffffff16155b6106f584848484611658565b857f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166306661abd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561075c57600080fd5b505afa158015610770573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107949190611ac3565b10156107cc576040517f945074a600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018790526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b15801561085657600080fd5b505afa15801561086a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088e9190611a2a565b60008881526003602052604090205490915073ffffffffffffffffffffffffffffffffffffffff1633148015906108e8575060008781526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1615155b8015610900575061010081015160411c600190811614155b15610937576040517fa33db4cb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008781526003602090815260409182902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8a16908117909155915133815289917f7f9a7dcb234c909a09de2f344661ad9e5b24067adb97c908647c2edcbb121c30910160405180910390a350505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b610a556000611871565b565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018490527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e9060240160206040518083038186803b158015610add57600080fd5b505afa158015610af1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1591906119b7565b6000848152600360205260409020548490600f9073ffffffffffffffffffffffffffffffffffffffff163314610b4d84848484611658565b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018890526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b158015610bd757600080fd5b505afa158015610beb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0f9190611a2a565b60008981526003602052604090205490915073ffffffffffffffffffffffffffffffffffffffff163314801590610c52575061010081015160401c600190811614155b15610c89576040517febfde6be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000888152600160205260409020610ca29088886118e6565b506001861115610da85760005b86811015610da6576000610cc4826001611ce7565b90505b87811015610d9357888882818110610ce157610ce1611d67565b9050602002016020810190610cf69190611993565b73ffffffffffffffffffffffffffffffffffffffff16898984818110610d1e57610d1e611d67565b9050602002016020810190610d339190611993565b73ffffffffffffffffffffffffffffffffffffffff161415610d81576040517f7c70615600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80610d8b81611cff565b915050610cc7565b5080610d9e81611cff565b915050610caf565b505b877fb648241d83df6540fc10f2acc641e4bf80a1e84e7ae2f1f6b0ad204b8fee635b888833604051610ddc93929190611bc2565b60405180910390a25050505050505050565b600082815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff858116855292528220541615801590610e655750600083815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8087168552925290912054610e6591859116610515565b15610ea25750600082815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8086168552925290912054166105b2565b60005b6000848152600160205260409020548110156105ac576000848152600160205260408120805483908110610edb57610edb611d67565b6000918252602090912001546040517f868399a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301529091169150819063868399a59060240160206040518083038186803b158015610f5257600080fd5b505afa158015610f66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8a9190611a0d565b15610f985791506105b29050565b5080610fa381611cff565b915050610ea5565b60005473ffffffffffffffffffffffffffffffffffffffff16331461102c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a42565b73ffffffffffffffffffffffffffffffffffffffff821660008181526004602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591513381529192917f11207664cc48b0fa81c8674795f1d8f642960f38d5d2d305ad813093bed85fab910160405180910390a35050565b60008181526001602090815260409182902080548351818402810184019094528084526060939283018282801561112657602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116110fb575b50505050509050919050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146111b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a42565b73ffffffffffffffffffffffffffffffffffffffff8116611256576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610a42565b61125f81611871565b50565b3373ffffffffffffffffffffffffffffffffffffffff84161480159061135857506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260448201849052606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561131e57600080fd5b505afa158015611332573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113569190611a0d565b155b801561143457506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260006044830152606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b1580156113fa57600080fd5b505afa15801561140e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114329190611a0d565b155b1561146b576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b61147a8282610515565b15611483575050565b6040517f43a266c2000000000000000000000000000000000000000000000000000000008152600481018390526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906343a266c2906024016101206040518083038186803b15801561150d57600080fd5b505afa158015611521573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115459190611a2a565b60008481526003602052604090205490915073ffffffffffffffffffffffffffffffffffffffff163314801590611588575061010081015160401c600190811614155b156115bf576040517febfde6be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008381526001602081815260408084208054938401815584529281902090910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8616908117909155915133815285917f409bccc07b7cf7807930526a24318212d614c59f2dde05a017a41efee144e7c8910160405180910390a3505050565b8015801561167c57503373ffffffffffffffffffffffffffffffffffffffff851614155b801561175857506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b15801561171e57600080fd5b505afa158015611732573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117569190611a0d565b155b801561183457506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260006044830152606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9060840160206040518083038186803b1580156117fa57600080fd5b505afa15801561180e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118329190611a0d565b155b1561186b576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b82805482825590600052602060002090810192821561195e579160200282015b8281111561195e5781547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff843516178255602090920191600190910190611906565b5061196a92915061196e565b5090565b5b8082111561196a576000815560010161196f565b805161198e81611d96565b919050565b6000602082840312156119a557600080fd5b81356119b081611d96565b9392505050565b6000602082840312156119c957600080fd5b81516119b081611d96565b600080604083850312156119e757600080fd5b82356119f281611d96565b91506020830135611a0281611db8565b809150509250929050565b600060208284031215611a1f57600080fd5b81516119b081611db8565b60006101208284031215611a3d57600080fd5b611a45611c96565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152611a9160e08401611983565b60e0820152610100928301519281019290925250919050565b600060208284031215611abc57600080fd5b5035919050565b600060208284031215611ad557600080fd5b5051919050565b60008060408385031215611aef57600080fd5b823591506020830135611a0281611d96565b600080600060608486031215611b1657600080fd5b833592506020840135611b2881611d96565b91506040840135611b3881611d96565b809150509250925092565b600080600060408486031215611b5857600080fd5b83359250602084013567ffffffffffffffff80821115611b7757600080fd5b818601915086601f830112611b8b57600080fd5b813581811115611b9a57600080fd5b8760208260051b8501011115611baf57600080fd5b6020830194508093505050509250925092565b6040808252810183905260008460608301825b86811015611c12578235611be881611d96565b73ffffffffffffffffffffffffffffffffffffffff16825260209283019290910190600101611bd5565b50809250505073ffffffffffffffffffffffffffffffffffffffff83166020830152949350505050565b6020808252825182820181905260009190848201906040850190845b81811015611c8a57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611c58565b50909695505050505050565b604051610120810167ffffffffffffffff81118282101715611ce1577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b60008219821115611cfa57611cfa611d38565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611d3157611d31611d38565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461125f57600080fd5b801515811461125f57600080fdfea2646970667358221220d98f51c676e8cad9158c057c1caa16678c5afa7b22229bb745107336bee6570164736f6c63430008060033",
  "devdoc": {
    "details": "Adheres to - IJBDirectory: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.Inherits from - JBOperatable: Includes convenience functionality for checking a message sender's permissions before executing certain transactions. Ownable: Includes convenience functionality for checking a message sender's permissions before executing certain transactions.",
    "kind": "dev",
    "methods": {
      "constructor": {
        "params": {
          "_fundingCycleStore": "A contract storing all funding cycle configurations.",
          "_operatorStore": "A contract storing operator assignments.",
          "_owner": "The address that will own the contract.",
          "_projects": "A contract which mints ERC-721's that represent project ownership and transfers."
        }
      },
      "isTerminalOf(uint256,address)": {
        "params": {
          "_projectId": "The ID of the project to check within.",
          "_terminal": "The address of the terminal to check for."
        },
        "returns": {
          "_0": "A flag indicating whether or not the specified terminal is a terminal of the specified project."
        }
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "primaryTerminalOf(uint256,address)": {
        "details": "The zero address is returned if a terminal isn't found for the specified token.",
        "params": {
          "_projectId": "The ID of the project to get a terminal for.",
          "_token": "The token the terminal accepts."
        },
        "returns": {
          "_0": "The primary terminal for the project for the specified token."
        }
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "setControllerOf(uint256,address)": {
        "details": "A controller can be set if: - the message sender is the project owner or an operator having the correct authorization. - the message sender is the project's current controller. - or, an allowedlisted address is setting a controller for a project that doesn't already have a controller.",
        "params": {
          "_controller": "The new controller to set.",
          "_projectId": "The ID of the project to set a new controller for."
        }
      },
      "setIsAllowedToSetFirstController(address,bool)": {
        "details": "The owner can add addresses which are allowed to change projects' first controllers.  These addresses are known and vetted controllers as well as contracts designed to launch new projects.  A project can set its own controller without it being on the allow list.If you would like an address/contract allowlisted, please reach out to the contract owner.",
        "params": {
          "_address": "The address to allow or revoke allowance from.",
          "_flag": "Whether allowance is being added or revoked."
        }
      },
      "setPrimaryTerminalOf(uint256,address,address)": {
        "details": "The terminal will be set as the primary terminal where ecosystem contracts should route tokens.If setting a newly added terminal and the funding cycle doesn't allow new terminals, the caller must be the current controller.",
        "params": {
          "_projectId": "The ID of the project for which a primary token is being set.",
          "_terminal": "The terminal to make primary.",
          "_token": "The token to set the primary terminal of."
        }
      },
      "setTerminalsOf(uint256,address[])": {
        "details": "Only a project owner, an operator, or its controller can set its terminals.",
        "params": {
          "_projectId": "The ID of the project having terminals set.",
          "_terminals": "The terminal to set."
        }
      },
      "terminalsOf(uint256)": {
        "params": {
          "_projectId": "The ID of the project to get terminals of."
        },
        "returns": {
          "_0": "An array of terminal addresses."
        }
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "controllerOf(uint256)": {
        "notice": " For each project ID, the controller that manages how terminals interact with tokens and funding cycles. _projectId The ID of the project to get the controller of."
      },
      "fundingCycleStore()": {
        "notice": "The contract storing all funding cycle configurations."
      },
      "isAllowedToSetFirstController(address)": {
        "notice": "Addresses that can set a project's first controller on their behalf. These addresses/contracts have been vetted and verified by this contract's owner. _address The address that is either allowed or not."
      },
      "isTerminalOf(uint256,address)": {
        "notice": "Whether or not a specified terminal is a terminal of the specified project."
      },
      "operatorStore()": {
        "notice": " A contract storing operator assignments."
      },
      "primaryTerminalOf(uint256,address)": {
        "notice": "The primary terminal that is managing funds for a project for a specified token."
      },
      "projects()": {
        "notice": "Mints ERC-721's that represent project ownership and transfers."
      },
      "setControllerOf(uint256,address)": {
        "notice": "Update the controller that manages how terminals interact with the ecosystem."
      },
      "setIsAllowedToSetFirstController(address,bool)": {
        "notice": " Set a contract to the list of trusted addresses that can set a first controller for any project.\t"
      },
      "setPrimaryTerminalOf(uint256,address,address)": {
        "notice": "Project's can set which terminal should be their primary for a particular token. This is useful in case a project has several terminals connected for a particular token."
      },
      "setTerminalsOf(uint256,address[])": {
        "notice": " Set a project's terminals."
      },
      "terminalsOf(uint256)": {
        "notice": "For each project ID, the terminals that are currently managing its funds."
      }
    },
    "notice": "Keeps a reference of which terminal contracts each project is currently accepting funds through, and which controller contract is managing each project's tokens and funding cycles.",
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 53,
        "contract": "contracts/JBDirectory.sol:JBDirectory",
        "label": "_owner",
        "offset": 0,
        "slot": "0",
        "type": "t_address"
      },
      {
        "astId": 6405,
        "contract": "contracts/JBDirectory.sol:JBDirectory",
        "label": "_terminalsOf",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_uint256,t_array(t_contract(IJBPaymentTerminal)17683)dyn_storage)"
      },
      {
        "astId": 6413,
        "contract": "contracts/JBDirectory.sol:JBDirectory",
        "label": "_primaryTerminalOf",
        "offset": 0,
        "slot": "2",
        "type": "t_mapping(t_uint256,t_mapping(t_address,t_contract(IJBPaymentTerminal)17683))"
      },
      {
        "astId": 6429,
        "contract": "contracts/JBDirectory.sol:JBDirectory",
        "label": "controllerOf",
        "offset": 0,
        "slot": "3",
        "type": "t_mapping(t_uint256,t_address)"
      },
      {
        "astId": 6435,
        "contract": "contracts/JBDirectory.sol:JBDirectory",
        "label": "isAllowedToSetFirstController",
        "offset": 0,
        "slot": "4",
        "type": "t_mapping(t_address,t_bool)"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_array(t_contract(IJBPaymentTerminal)17683)dyn_storage": {
        "base": "t_contract(IJBPaymentTerminal)17683",
        "encoding": "dynamic_array",
        "label": "contract IJBPaymentTerminal[]",
        "numberOfBytes": "32"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_contract(IJBPaymentTerminal)17683": {
        "encoding": "inplace",
        "label": "contract IJBPaymentTerminal",
        "numberOfBytes": "20"
      },
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_address,t_contract(IJBPaymentTerminal)17683)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => contract IJBPaymentTerminal)",
        "numberOfBytes": "32",
        "value": "t_contract(IJBPaymentTerminal)17683"
      },
      "t_mapping(t_uint256,t_address)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => address)",
        "numberOfBytes": "32",
        "value": "t_address"
      },
      "t_mapping(t_uint256,t_array(t_contract(IJBPaymentTerminal)17683)dyn_storage)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => contract IJBPaymentTerminal[])",
        "numberOfBytes": "32",
        "value": "t_array(t_contract(IJBPaymentTerminal)17683)dyn_storage"
      },
      "t_mapping(t_uint256,t_mapping(t_address,t_contract(IJBPaymentTerminal)17683))": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => mapping(address => contract IJBPaymentTerminal))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_contract(IJBPaymentTerminal)17683)"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}