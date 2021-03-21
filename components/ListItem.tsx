import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import { App } from '../interfaces'

type Props = {
  data: App
}

const ListItem = ({ data }: Props): JSX.Element => (
  <FormControlLabel control={<Checkbox color="primary" />} label={data.name} />
)

export default ListItem
