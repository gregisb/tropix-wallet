import * as C from "./styles";

export const TableArea = () => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadCollumn>Data</C.TableHeadCollumn>
          <C.TableHeadCollumn>Categoria</C.TableHeadCollumn>
          <C.TableHeadCollumn>Título</C.TableHeadCollumn>
          <C.TableHeadCollumn>Valor</C.TableHeadCollumn>
        </tr>
      </thead>

      <tbody></tbody>
    </C.Table>
  );
};
