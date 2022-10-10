import TrendingAssetRenderer from "./TrendingAssetRenderer";
import styles from "./TrendingAssetListRenderer.module.css";
import TrendingAsset from "../resources/TrendingAsset";

type TrendingAssetsListProps = {
    assetsToRender: Array<TrendingAsset>
};

function TrendingAssetsListRenderer(props: TrendingAssetsListProps) {
    return (
        <div className={styles["list-alignment"]}>
            <div className={styles["list-heading"]}>
                <img src="https://cdn-icons-png.flaticon.com/512/1784/1784665.png" className={styles["trending-image"]} />
                <span className={styles["list-heading-content"]}>Trending Assets</span>
            </div>
            <div className={styles.list}>
                {
                    props.assetsToRender.map(assetToRender => (
                        <TrendingAssetRenderer assetIcon={assetToRender.assetIcon}
                            name={assetToRender.name}
                            price={assetToRender.price}
                            percentageChangeOfPrice={assetToRender.percentageChangeOfPrice}
                            totalValueLocked={assetToRender.totalValueLocked}
                            popularPairings={assetToRender.popularPairings}
                        />
                    ))
                }
            </div>
        </div>
    );
}
export default TrendingAssetsListRenderer;