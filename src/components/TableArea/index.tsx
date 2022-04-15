import * as C from "./styles";
import { Item } from '../../types/Item';

type Props = {
  list: Item[]
};

export const TableArea = ({ list }: Props) => {
  {console.log('table Area', list)}

  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadCollumn width={100}>Data</C.TableHeadCollumn>
          <C.TableHeadCollumn width={130}>Categoria</C.TableHeadCollumn>
          <C.TableHeadCollumn>Título</C.TableHeadCollumn>
          <C.TableHeadCollumn width={150}>Valor</C.TableHeadCollumn>
        </tr>
      </thead>

      <tbody>

      </tbody>
    </C.Table>
  );
};
