import { useState, useEffect } from "react";
import Logo from '../../assets/logo.png'
import { Loading } from "./style";

export function LoadingScreen() {
    const [loadingPercentage, setLoadingPercentage] = useState(0);
    useEffect(() => {

        const intervalId = setInterval(() => {
            setLoadingPercentage((prevPercentage) =>
                prevPercentage < 100 ? prevPercentage + 1 : prevPercentage
            );
        }, 50);

        return () => clearInterval(intervalId);
    }, []);

    const isLoadingComplete = loadingPercentage >= 100;

    if (!isLoadingComplete) {
        return (
            <Loading
                style={{
                    backgroundColor: isLoadingComplete ? "white" : "#F0131E",
                }}
            >
                <img src={Logo} alt="" width={220} height={90} style={{ opacity: `${loadingPercentage + 20}%`, filter: 'drop-shadow(0px 4px 4px #00000040)' }} />
            </Loading>
        )
    }
    return (
        <div></div>
    )
};

export default LoadingScreen;
