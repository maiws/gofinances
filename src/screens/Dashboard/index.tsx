import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName
} from './styles';

export function Dashboard (){
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/25993071?v=4'}}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Maiara </UserName>
            </User>
          </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  )
}

