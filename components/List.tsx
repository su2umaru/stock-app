import { App } from '../interfaces'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

type Props = {
  items: App[]
}

const List = ({ items }: Props): JSX.Element => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={item.name}
        />
      </li>
    ))}
  </ul>
)

export default List
