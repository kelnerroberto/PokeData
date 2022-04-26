import React from 'react';
import { DetailsComponent } from '../components/DetailsComponent';
import { HeaderComponent } from '../components/Header';

export const DetailedPokemon: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <DetailsComponent />
    </div>
  );
}