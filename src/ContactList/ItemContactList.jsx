import React from "react";

export const ItemContactList = ({id, name, number}) => {
  return <li>{`${name}: ${number}`}</li>
}