import React from 'react';
import Sandbox from './Components/Sandbox';
import styled from 'styled-components';

// new test comment

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;

function App() {
  return (
    <Wrapper className="App">
      <Sandbox></Sandbox>
    </Wrapper>
  );
}

export default App;
