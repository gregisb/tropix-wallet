import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter'

type Props = {
    item: Item
};

export const TableItem = ({item}: Props) => {
    return (
        <C.TableLine>
            <C.TableCollumn>{formatDate(item.date)}</C.TableCollumn>
            <C.TableCollumn>{item.category}</C.TableCollumn>
            <C.TableCollumn>{item.title}</C.TableCollumn>
            <C.TableCollumn>$ {item.value}</C.TableCollumn>
        </C.TableLine>
    );
}