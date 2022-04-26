import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsComponent } from '../components/DetailsComponent';
import { BackToHomePageButton, DetailedHeader } from '../styles/DetailedStyle';

export const DetailedPokemon: React.FC = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
  }

  return (
    <div>
      <DetailedHeader>
        <nav>
          <BackToHomePageButton onClick={() => returnHome()}><span>Voltar à tela inicial</span></BackToHomePageButton>
        </nav>
      </DetailedHeader>
      <DetailsComponent />
    </div>
  );
}