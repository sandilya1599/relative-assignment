interface TrendingAsset{
    assetIcon: string,
    name: string,
    price: string,
    percentageChangeOfPrice: string,
    totalValueLocked: string,
    popularPairings: Array<string>
}
export default TrendingAsset;