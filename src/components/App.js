


import {
  ThirdwebSDK,
  Web3Button,
  useSigner
} from '@thirdweb-dev/react'
import abi  from './abi.json'
import abiToken  from './abiToken.json'
import { useRef } from 'react';
import { ethers } from "ethers";

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const handleMint = () => {
    console.log("Minting NFTs...");
    // Aquí va la lógica para el proceso de minting
  };

  const amount = useRef()
  const signer = useSigner()
  return (
    <div className="wrapper">
 <ToastContainer />

      <ul
        className="scene unselectable"
        data-friction-x="0.1"
        data-friction-y="0.1"
        data-scalar-x="25"
        data-scalar-y="15"
        id="scene"
      >
        <li className="layer" data-depth="0.00"></li>
        <li className="layer" data-depth="0.10">
          <div className="background"></div>
        </li>

        <li className="layer" data-depth="0.20">
          <img src="images/logo.png" alt="Logo" />
        </li>

        <li className="layer" data-depth="0.30">
          <div className="hero">
            <p className="sub-title"></p>
          </div>
        </li>

        <li className="layer" data-depth="0.40">
          <div className="depth-1 flake1">
            <img alt="flake" src="images/flakes/depth1/flakes1.png" />
          </div>
          <div className="depth-1 flake2">
            <img alt="flake" src="images/flakes/depth1/flakes2.png" />
          </div>
          <div className="depth-1 flake3">
            <img alt="flake" src="images/flakes/depth1/flakes3.png" />
          </div>
          <div className="depth-1 flake4">
            <img alt="flake" src="images/flakes/depth1/flakes4.png" />
          </div>
        </li>

        <li className="layer" data-depth="0.50">
          <div className="depth-2 flake1">
            <img alt="flake" src="images/flakes/depth2/flakes1.png" />
          </div>
          <div className="depth-2 flake2">
            <img alt="flake" src="images/flakes/depth2/flakes2.png" />
          </div>
        </li>

        <li className="layer" data-depth="0.60">
          <div className="depth-3 flake1">
            <img alt="flake" src="images/flakes/depth3/flakes1.png" />
          </div>
          <div className="depth-3 flake2">
            <img alt="flake" src="images/flakes/depth3/flakes2.png" />
          </div>
          <div className="depth-3 flake3">
            <img alt="flake" src="images/flakes/depth3/flakes3.png" />
          </div>
          <div className="depth-3 flake4">
            <img alt="flake" src="images/flakes/depth3/flakes4.png" />
          </div>
        </li>

        <li className="layer" data-depth="0.80">
          <div className="depth-4">
            <img alt="flake" src="images/flakes/depth4/flakes.png" />
          </div>
        </li>

        <li className="layer" data-depth="1.00">
          <div className="depth-5">
            <img alt="flake" src="images/flakes/depth5/flakes.png" />
          </div>
        </li>

        <li className="layer" data-depth="0.20">
          <div className="contact">
            <ul className="icons">
              <input
                style={{
                  color: "black",
                  borderRadius: "15px",
                  padding: "5px",
                }}
                ref={amount}
                placeholder="Cantidad de NFTs"
                min="1"
              />
              <br />
              <Web3Button
                  contractAddress={"0xEeB533dAcCF1D0eC1EeeE9C78B3e740e7D9f4ef2"}
                  contractAbi={abiToken}
                  action={async (contract) => {
                    await contract.call("approve", ["0x73c78eF7a90D4798e44E1431F33dcfd582cC1D38", ethers.constants.MaxUint256]);
                    console.log("Aprobado")
                    const sdk = ThirdwebSDK.fromSigner(signer, 137);
                    const contractAccount = await sdk.getContract("0x73c78eF7a90D4798e44E1431F33dcfd582cC1D38",abi);
                    await contractAccount.call("mint", [amount.current.value]);
                  }}
                  onSuccess={(result) => {
                    toast.success('Mint realizado con exito!', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                      });
                    console.log("Mint con extio")
                  }}
                  onError={(error) => {
                    alert("ERROR")
                  }}
                  className="buttonPrimary"
                >
                  {"Mint"}
                </Web3Button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <li>
                <a href="#">
                  <img src="images/discord.png" alt="Discord" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hybridbots_nft/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/instagram.png" alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://opensea.io/HybridBots"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/opensea.png" alt="Opensea" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/HybridBots_NFT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/twitter.png" alt="Twitter" />
                </a>
              </li>
            </ul>
            <a>Hybridbots 2022 Copyright</a>
            <a className="mail" href="mailto:info@example.com">
              info@hybridbots.pro
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
