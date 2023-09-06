// import React, { useState, useEffect } from 'react';
import React from 'react';
import Titulo from '../../components/Titulo/index';
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Miguel Leal</Titulo>
      <Paragrafo tipo='secundario' fontSize={16}>miguel11065</Paragrafo>
      <Descricao tipo='principal' fontSize={16}>Estudante de TI</Descricao>
      <BotaoTema>trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
