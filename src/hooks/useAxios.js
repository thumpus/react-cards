import  React, {useState, useEffect}  from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

function useAxios(url) {
    const [cards, setCards] = useState([]);

    const addCard = async (restOfUrl = "") => {
            const response = await axios.get(`${url}${restOfUrl}`);
            setCards(cards => [...cards, { ...response.data, id: uuidv4() }]);
      };

    return [cards, addCard];
}

export default useAxios;