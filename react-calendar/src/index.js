import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Calendar';
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`




ReactDOM.render(
  <React.StrictMode>
    <Container>
      <h1>React Calendar App</h1>
    <Calendar />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
