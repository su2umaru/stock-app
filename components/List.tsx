import { App } from '../interfaces'
import ListItem from './ListItem'

type Props = {
  items: App[]
}

const List = ({ items }: Props): JSX.Element => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
