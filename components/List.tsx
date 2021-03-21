import { App } from '../interfaces'

type Props = {
  items: App[]
}

const List = ({ items }: Props): JSX.Element => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
)

export default List
