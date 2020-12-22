import * as React from 'react';
import Header from './Header';
import BuildTank from './BuildTank';
import TankCartBuilder from './TankCartBuilder';

export function App({ initialData }) {
  return (
    <div className="mainLayout">
      <Header />
      <BuildTank />
      <TankCartBuilder />
    </div>
  );
}
