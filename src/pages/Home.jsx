import React from 'react'
import styled from "styled-components";
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';


const Container = styled.div`
padding: 30px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  background: ${({ theme }) => theme.background};
`;
const HeadLine = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home = () => {
  const item = {
    photo: "https://th.bing.com/th/id/OIP.QVBY30VqTi-tlYt_BaoGqAHaEo?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    author: "",
    prompt:""
  }
  return (
    <Container>
      <HeadLine>
        Explore popular posts in the community!
        <Span>Generated with AI</Span>
      </HeadLine>
      <SearchBar/>
      <Wrapper>
        <CardWrapper>
          <ImageCard item={item} />
        </CardWrapper>
      </Wrapper>
    </Container>
     
  )
}

export default Home