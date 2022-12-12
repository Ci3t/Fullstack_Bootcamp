import {useState} from 'react';
import { useContext } from 'react';

const val = useContext(data)
export default function ListItem({ itemData }) {
  const [item, setItem] = useState(itemData);
  return <h3>{item.name}</h3>;
}
