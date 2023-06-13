import styled from "styled-components";

export const AsteroidListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Set a minimum width */
  grid-gap: 10px;
  max-width: 100%; /* Set a maximum width */
  margin: 0 auto; /* Center the list */
  padding: 20px;
  
  @media (max-width: 600px) {
    max-height: 300px;
  }
`;