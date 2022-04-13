import { useState, useEffect } from "react";

import * as C from "./App.styles";

//import Types
import { Item } from "./types/Item";
import { Category } from "./types/Category";

//Import Data
import { categories } from "./data/categories";
import { items } from "./data/items";

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

import { TableArea } from './components/TableArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); //atualiza o estado com o mês atual

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Tropix Wallet</C.HeaderText>
      </C.Header>

      <C.Body>
        {/* Info area */}

        {/* insert area */}

        <TableArea />
      </C.Body>
    </C.Container>
  );
};

export default App;
