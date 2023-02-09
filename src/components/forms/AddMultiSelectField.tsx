import { FC, ReactElement, useState } from 'react';
import { FormControl, InputLabel, Chip, MenuItem, Select, SelectChangeEvent, Box, OutlinedInput } from '@mui/material';

import { IMultiSelectField } from '../interfaces/IMultiSelectField';

const AddMultiSelectField: FC<IMultiSelectField> = ({
  values = [],
  label = 'Default Label',
  name = 'Default Name',
  items = [{value: '' , label: 'Add Options'}],
  disabled = false,
  onChange = (e: SelectChangeEvent<typeof values>) => console.log(e.target.value)
}): ReactElement => {

  const [category, setCategory] = useState<string[]>([]);

  const handleChange = (e: SelectChangeEvent<typeof category>) => {
    const { target: { value } } = e;
    setCategory(typeof value === 'string' ? value.split('') : value);
  }

  return (
    <FormControl fullWidth size='small'>
      <InputLabel id={name}>{label}</InputLabel>
      <Select labelId={name} id={`select-${name}`} multiple value={category}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        onChange={handleChange} label={label} name={name} disabled={disabled} 
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
          )}
        >
        {items.map((item, idx) => (
          <MenuItem key={`${item.value}${idx}`} value={item.value}>{item.label}</MenuItem>))
        }
      </Select>
    </FormControl>
  )
};


export default AddMultiSelectField;
