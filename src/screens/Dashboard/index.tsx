import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { HightlightCard } from '../../components/HightlightCard';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HightLightCards
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

          <Icon name="power"/>
        </UserWrapper>      

      </Header>

      <HightLightCards>
        <HightlightCard 
          type='up'
          title='Entradas' 
          amount='R$ 17.400,00' 
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HightlightCard 
          type='down'
          title='Saídas' 
          amount='R$ 1.259,00' 
          lastTransaction='Última saída dia 03 de abril'
        />
        <HightlightCard 
          type='total'
          title='Total' 
          amount='R$ 16.141,00' 
          lastTransaction='01 à 16 de abril'
        />
      </HightLightCards>
    </Container>
  )
}

