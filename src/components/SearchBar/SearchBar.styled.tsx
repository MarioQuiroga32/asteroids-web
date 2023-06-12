import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
  }

  @media (max-width: 768px) {
    flex: 100%;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 768px) {
    flex: 100%;
    margin-top: 10px;
    gap: 5px;
  }
`;

export const DateLabel = styled.label`
  font-weight: bold;
`;

export const DateInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const OrderSelect = styled.select`
  padding: 10px;
  padding-right: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("arrow-down.svg");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: calc(100%) center;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
  }

  @media (max-width: 768px) {
    flex: 100%;
    margin-top: 10px;
  }
`;