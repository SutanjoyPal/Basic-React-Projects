import TicTacToe from "../TicTacToe"
import QRCodeGenerator from "../QR"
import GithubProfileFinder from "../GithubProfileFinder"
import { useContext } from "react"
import { FeatureFlagContext } from "./Context"

export default function FeatureFlags(){

    const {loading , enabledFlags} = useContext(FeatureFlagContext)


    const componentsToRender = [
        {
            key :'showTicTaeToe',
            component : <TicTacToe/>

        },
        {
            key : 'showQRCodeGenerater',
            component : <QRCodeGenerator/>
        },
        {
            key : 'showGithubProfileFinder',
            component : <GithubProfileFinder/>
        }

    ]

    if(loading) return <div>Loading Data! Please Wait</div>

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }



    return(
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map((componentItem) =>
                    checkEnabledFlags(componentItem.key) ? componentItem.component : null
                )
            }
        </div>
    )
}