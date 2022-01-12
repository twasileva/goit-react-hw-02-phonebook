import React from "react";

export const ItemContactList = ({ id, name, number, onDeleteContact }) => {
  return <li>{`${name}: ${number}`}
          <button type="button" onClick={() => onDeleteContact(id)}>Удалить
          </button>
        </li>
}