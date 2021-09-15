import React from 'react';
import logo from './logo.svg';
import './App.less';
import { Button } from 'antd';
import PokeList from './components/list'

const App: React.FC = () => {
  return (
    <PokeList></PokeList>
  );
}

export default App;
