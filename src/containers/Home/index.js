import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DocumentTitle from '../../components/DocumentTitle';

import { colorPrimary } from '../../assets/styles/variables';
import { vw } from '../../assets/styles/helpers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${vw(48)};
  color: ${colorPrimary};
`;

const Button = styled.button`
  border: 0;
  border-radius: ${vw(10)};
  padding: ${vw(20)};
  background-color: ${colorPrimary};
  color: #ffffff;
`;

function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <Container>
      <DocumentTitle>Home</DocumentTitle>
      <Button onClick={handleClick}>click {count}</Button>
      <Title>Home</Title>
      <Link to="/auth/login">
        <Button>Logout</Button>
      </Link>
    </Container>
  );
}

export default Home;
