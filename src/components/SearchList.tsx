import React from "react";
import Card from "./Card";
import { ListItem } from "../data/index";

interface IProps {
  items: Array<ListItem>;
}

function SearchList(props: IProps) {
  const { items } = props;

  return (
    <div className="flex flex-wrap m-auto justify-center">
      {items.map((item) => (
        <Card key={item.name} item={item} />
      ))}
    </div>
  );
}

export default SearchList;
