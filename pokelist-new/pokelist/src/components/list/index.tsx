import React from "react";
import { List, Avatar, Button, Alert } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./style.css"

interface Pokemon {
  name: string;
}

const PokeList: React.FC = () =>{
  const pokemons: Pokemon[] = [
    {'name': 'Bulbasaur'},
    {'name': 'Ivysaur'},
    {'name': 'Venusaur'},
    {'name': 'Charmander'},
    {'name': 'Squirtle'},
  ];

  return(
    <List
      className="list"
      size="large"
      bordered
      dataSource={pokemons}
      renderItem={pokemon => <List.Item className="list-item">
        <div>
          <Avatar className="avatar" size="large" icon={<UserOutlined />} />
          {pokemon.name}
        </div>
        <Alert className="alert" message="New!" type="success" showIcon closeText="Ok!"/>
        </List.Item>}
    />
  )
}

export default PokeList