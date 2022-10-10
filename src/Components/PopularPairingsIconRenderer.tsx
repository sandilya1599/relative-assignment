import styles from './PopularPairingsIconRenderer.module.css';

function PopularPairingsIconRenderer({assetIcon}: {assetIcon:string}){

    return (
        <img src={assetIcon} className={styles["icon-renderer"]}/>
    );
}

export default PopularPairingsIconRenderer;
