import React from 'react';
import { Text, Flex } from 'rebass';
import styled from 'styled-components';
import background from './img/nomad-3x.png';
import ChatIcon from './icons/ChatIcon';
import { space } from 'styled-system';

const Wrapper = styled.div`
  background-color: #F1F2F6;
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

const CircleBlack = styled.div`
  background-color: #000;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  ${space}
`;

const Circle = styled.div`
  background-color: #C4C4C4;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  ${space}
`;

const Footer = styled(Flex)`
  height: 50px;
  background-color: #fff;
  && {
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
  }
`

const App = () => {
  return (
    <Wrapper>
      <Img src={background} />
      <Footer>
        <Text>Close</Text>
        <Flex>
          <CircleBlack />
          <Circle ml='5px' />
          <Circle ml='5px' />
          <Circle ml='5px' />
        </Flex>
        <ChatIcon />
      </Footer>
    </Wrapper>
  );
}

export default App;