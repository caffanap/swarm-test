import Image from "next/image";
import PlaceholderWallet from "@/assets/images/wallet/wallet-placeholder.png";
import ButtonWallet from "@/components/button/wallet";
import MetamaskLogo from "@/assets/icons/wallet/metamask.svg";
import CoinbaseLogo from "@/assets/icons/wallet/coinbase.svg";
import WalletConnectLogo from "@/assets/icons/wallet/wallet-connect.svg";


export default function ConnectWalletPage() {

    return (
        <div className="w-full h-full flex">
            <Image src={PlaceholderWallet} className="object-cover object-center" alt="placeholder-register" />
            <div className="flex-grow flex flex-col justify-center px-14 space-y-6">
                <h2 className="text-white font-work-sans-extrabold text-6xl">
                    Connect wallet
                </h2>
                <div className="text-white text-xl max-w-md leading-relaxed">
                    Choose a wallet you want to connect. There are several wallet providers.
                </div>
                <div className="space-y-4 max-w-sm pt-4">
                    <ButtonWallet>
                        <Image src={MetamaskLogo} alt="metamask" width={32} height={32} />
                        <span> Metamask </span>
                    </ButtonWallet>
                    <ButtonWallet>
                        <Image src={WalletConnectLogo} alt="wallet connect" width={32} height={32} />
                        <span> Wallet Connect </span>
                    </ButtonWallet>
                    <ButtonWallet>
                        <Image src={CoinbaseLogo} alt="coinbase" width={32} height={32} />
                        <span> Coinbase </span>
                    </ButtonWallet>
                </div>
            </div>
        </div>
    )
}