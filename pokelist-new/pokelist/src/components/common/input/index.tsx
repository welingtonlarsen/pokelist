import { Input } from "antd";
import React from "react";
import "./style.css";

interface IProps {
  inputCallBack: (value: string) => void;
}

const MyInput = ({ inputCallBack: toggle }: IProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggle(e.target.value);
  };

  return (
    <Input
      className="input"
      placeholder="Filter by name"
      onChange={handleInput}
    />
  );
};

export default MyInput;
