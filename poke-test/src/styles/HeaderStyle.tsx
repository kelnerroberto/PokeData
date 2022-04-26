import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-content: center;
  background-image: #0A285F;
  align-items: center;
  flex-wrap: wrap;
  transition: all 0.4s;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  border: 1px solid transparent;
  &:focus {
    border-color: rgba(0, 0, 0, 0);
  }
`;

export const SearchButton = styled.button`
  position: relative;
  border: none;
  z-index: 1;
  cursor: pointer;
  background: none;
  &:hover {
    color: #white;
    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: inline;
  background-color: #FFDE56;
  padding: 0.7rem;
  border-radius: 5px;
`;
