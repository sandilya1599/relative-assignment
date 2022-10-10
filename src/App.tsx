import React from 'react';
import './App.css';
import TrendingAssets from './resources/TrendingAssetList';
import TrendingAssetsListRenderer from './Components/TrendingAssetsListRenderer';
import TrendingAsset from './resources/TrendingAsset';


function App() {
  const trendingAssets: Array<TrendingAsset> = TrendingAssets;
  return (
    <>
      <TrendingAssetsListRenderer assetsToRender={trendingAssets}/>
    </>
  );
}

export default App;
