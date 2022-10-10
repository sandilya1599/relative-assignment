import PopularPairingsIconRenderer from './PopularPairingsIconRenderer';
import styles from './TrendingAssetRenderer.module.css';

type TrendingAsset = {
    assetIcon: string,
    name: string,
    price: string,
    percentageChangeOfPrice: string,
    totalValueLocked: string,
    popularPairings: Array<string>
}

function TrendingAssetRenderer(props: TrendingAsset) {
    return (
        <div className={styles.card}>
            <div className={styles["card-icon-header"]}>
                <img src={props.assetIcon} className={styles["card-icon"]} />
            </div>
            <div>
                <span className={styles["card-heading"]}>{props.name}</span>
                <p className={styles["card-item"]}>
                    <span className={styles["card-price-align"]}>
                        <span className={styles["price"]}>{props.price} </span>
                        <span
                            style={{ color: props.percentageChangeOfPrice[0] === '+' ? "green" : "red" }}
                            className={styles["price-percentage"]}>
                            {props.percentageChangeOfPrice}%
                        </span>
                    </span>
                </p>
                <span className={styles["card-heading"]}>Price <br /></span>
                <p className={styles["card-item"]}>{props.totalValueLocked}</p>
                <span className={styles["card-heading"]}>TVL <br /></span>
                <p className={styles["card-popular-pairings"]}>
                    {
                        props.popularPairings.map(assetIcon => (<PopularPairingsIconRenderer assetIcon={assetIcon} />))
                    }
                </p>
                <span className={styles["card-heading"]}>Popular Pairings<br /></span>
            </div>
        </div>
    );
}
export default TrendingAssetRenderer;