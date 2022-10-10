/*
The below list contains the required List of Assets and their details to be rendered.
Each list item contains an asset data. 
    - assetIcon: the icon to be rendered for that particular asset
    - name: the name of the asset
    - price: the price of the asset
    - percentageChangeOfPrice: the price changed for that asset in percentage
    - popularPairings: List of Icons.
*/

import TrendingAsset from "./TrendingAsset";

const TrendingAssetList: Array<TrendingAsset> = [
    {
        assetIcon: "https://cdn-icons-png.flaticon.com/512/1490/1490849.png",
        name: "Bitcoin (BTC)",
        price: "$31,812.80",
        percentageChangeOfPrice: "+10",
        totalValueLocked: "$60,000",
        popularPairings: ["https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
            "https://cdn-icons-png.flaticon.com/512/6001/6001524.png",
            "https://cdn-icons-png.flaticon.com/512/6001/6001399.png"]
    },
    {
        assetIcon: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
        name: "Solana (SOL)",
        price: "$32.83",
        percentageChangeOfPrice: "-12.32",
        totalValueLocked: "$60,000",
        popularPairings: ["https://cdn-icons-png.flaticon.com/512/1490/1490849.png",
            "https://cdn-icons-png.flaticon.com/512/6001/6001524.png",
            "https://cdn-icons-png.flaticon.com/512/6001/6001399.png"]
    },
    {
        assetIcon: "https://cdn-icons-png.flaticon.com/512/6001/6001524.png",
        name: "Ethereum (ETH)",
        price: "$1,446.45",
        percentageChangeOfPrice: "-11.93",
        totalValueLocked: "$60,000",
        popularPairings: ["https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
            "https://cdn-icons-png.flaticon.com/512/1490/1490849.png",
            "https://cdn-icons-png.flaticon.com/512/6001/6001399.png"]
    },
    {
        assetIcon: "https://cdn-icons-png.flaticon.com/512/6001/6001399.png",
        name: "Binance (BUSD)",
        price: "$1.00",
        percentageChangeOfPrice: "+0.26",
        totalValueLocked: "$60,000",
        popularPairings: ["https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
            "https://cdn-icons-png.flaticon.com/512/6001/6001524.png",
            "https://cdn-icons-png.flaticon.com/512/6001/6001399.png"]
    },
    {
        assetIcon: "https://cdn-icons-png.flaticon.com/512/4600/4600417.png",
        name: "Shiba Inu (SHIB)",
        price: "$0.00000001948",
        percentageChangeOfPrice: "-8.1",
        totalValueLocked: "$60,000",
        popularPairings: ["https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
            "https://cdn-icons-png.flaticon.com/512/6001/6001524.png",
            "https://cdn-icons-png.flaticon.com/512/6001/6001399.png"]
    }
];

export default TrendingAssetList;