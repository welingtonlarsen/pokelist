import React, { useState, useEffect, MouseEvent } from "react";
import { List, Avatar, Alert } from "antd";
import { UserOutlined } from "@ant-design/icons";

import MyInput from "../common/input";
import MyModal from "../modal";
import { fetchAllPokemons } from "../../services/PokemonsHttpService";
import { convertToFirstLetterUpperCase } from "../../utils/string-utils";

import { Pokemon } from "../../interfaces/interfaces";
import "./style.css";

const PokeList: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pokemonModal, setPokemonModal] = useState<Pokemon>({
    name: "",
    url: "",
  });
  const [filter, setFilter] = useState<string>("");
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);

  useEffect(() => {
    fetchAllPokemons().then((pokemons) => {
      setPokemons(pokemons.data.results);
    });
  }, []);

  const filterPokemons = (): Pokemon[] => {
    return pokemons
      ? pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];
  };

  const handlePokemonClick = (
    event: MouseEvent<HTMLDivElement>,
    pokemon: Pokemon
  ) => {
    setPokemonModal(pokemon);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderPokemonItem = (pokemon: Pokemon): JSX.Element => {
    return (
      <List.Item
        onClick={(event) => handlePokemonClick(event, pokemon)}
        className="list-item"
      >
        <div>
          <Avatar className="avatar" size="large" icon={<UserOutlined />} />
          {convertToFirstLetterUpperCase(pokemon.name)}
        </div>
        <Alert
          className="alert"
          message="New!"
          type="success"
          showIcon
          closeText="Ok!"
        />
      </List.Item>
    );
  };

  return (
    <>
      <MyModal
        showModal={showModal}
        pokemon={pokemonModal}
        closeModal={closeModal}
      />
      <MyInput inputCallBack={setFilter} />
      <List
        className="list"
        size="large"
        bordered
        dataSource={filterPokemons()}
        renderItem={(pokemon) => renderPokemonItem(pokemon)}
      />
    </>
  );
};

export default PokeList;
