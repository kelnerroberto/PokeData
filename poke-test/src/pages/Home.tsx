import React from 'react';
import { HeaderComponent } from '../components/Header';
import { HomeComponent } from '../components/HomeComponent';
import { BodyHomeStyle } from '../styles/MainCardsStyle';

export const Home: React.FC = () => {
  return (
    <BodyHomeStyle>
      <HeaderComponent />
      <HomeComponent />
    </BodyHomeStyle>
  );
}