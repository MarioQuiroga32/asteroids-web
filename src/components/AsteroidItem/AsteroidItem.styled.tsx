import styled from "styled-components";

export const AsteroidItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  position: relative;
  border: ${({isHazardous}) => isHazardous ? '1px solid red' : 'none'};
  color: black;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #e0e0e0;
    transform: translateY(-3px);
  }
`;
export const AsteroidName = styled.div`
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 20px;
`;
export const SizeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;
export const SizeLabel = styled.div`
  margin-right: 5px;
`;
export const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 1;
  
  :hover {
    transform: scale(1.1);
    }
`;