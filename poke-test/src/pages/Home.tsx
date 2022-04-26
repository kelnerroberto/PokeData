import React from 'react';
import { HeaderComponent } from '../components/Header';
import { HomeComponent } from '../components/HomeComponent';

export const Home: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <HomeComponent />
    </div>
  );
}