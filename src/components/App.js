import * as React from 'react';
import Header from './Header';
import BuildTank from './BuildTank';
import TankCartBuilder from './TankCartBuilder';
import NewFish from './NewFish';
import VideoGalary from './VideoGallary';

export function App({ initialData }) {
  return (
    <div className="mainLayout">
      <Header />
      <BuildTank />
      <TankCartBuilder />
      <NewFish />
      <VideoGalary />
    </div>
  );
}
