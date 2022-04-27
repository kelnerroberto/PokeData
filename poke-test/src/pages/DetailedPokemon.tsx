import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsComponent } from '../components/DetailsComponent';
import { BackToHomePageButton, DetailedHeader } from '../styles/DetailedStyle';
import { RiArrowGoBackFill } from 'react-icons/ri';

export const DetailedPokemon: React.FC = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
  }

  return (
    <div>
      <DetailedHeader>
        <BackToHomePageButton onClick={() => returnHome()}>
          <span><RiArrowGoBackFill /> Voltar à tela inicial</span>
        </BackToHomePageButton>
      </DetailedHeader>
      <DetailsComponent />
    </div>
  );
}