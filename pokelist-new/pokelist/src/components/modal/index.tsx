import React from "react";
import { Modal, Card } from "antd";
import "./style.css";
import { Pokemon } from "../../interfaces/interfaces";
import { convertToFirstLetterUpperCase } from "../../utils/string-utils";

interface IProps {
  showModal: boolean;
  pokemon: Pokemon;
  closeModal: () => void;
}

const MyModal = ({ showModal, pokemon, closeModal }: IProps) => {
  return (
    <Modal
      className="modal-box"
      okButtonProps={{}}
      title={convertToFirstLetterUpperCase(pokemon.name)}
      visible={showModal}
      onOk={() => closeModal()}
      onCancel={() => closeModal()}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Card
        hoverable
        style={{ width: "50%" }}
        cover={
          <img
            alt="example"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/160.png"
          />
        }
      ></Card>
    </Modal>
  );
};

export default MyModal;
