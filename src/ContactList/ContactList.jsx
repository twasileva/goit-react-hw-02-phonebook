import React from "react";
import { ItemContactList } from "./ItemContactList";


export const ContactList = ({ value, onDeleteContact }) => {
  return <ul>
        {value.map(({id, name, number}) => {
          return <ItemContactList key={id} id={id} name={name} number={number} onDeleteContact={ onDeleteContact}/>
          })}
      </ul>
}