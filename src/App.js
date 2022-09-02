import { Button, Chip, ListItem, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useRef } from 'react';
import Avatar from '@mui/material/Avatar';

function App() {
  const form = useRef(null);
  const [chipData, setChipData] = React.useState([]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setChipData([...chipData, {
      key: chipData.length,
      label: data.get('chip-name'),
    }]);
    form.current.reset();
  };
  return (
    <div className="main-container">
      <Box
        component="form"
        onSubmit={handleSubmit}
        ref={form}
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction="row" justifyContent="center">
          <TextField name="chip-name" label="Outlined" variant="outlined"
            sx={{
              '& > :not(style)': { background: 'white' },
            }} />
          <Button
            type='submit'
            variant='contained'
            sx={{
              '& > :not(style)': {
                color: 'yellow',
              }
            }}
          > Add </Button>
        </Stack>
        <Stack spacing={1} direction="row">
          {chipData.map((data) => {
            return (
                <Chip
                key={data.key}
                  icon={<Avatar
                    sx={{ width: 24, height: 24 }}
                    alt="Avatar" src="img/avatar.png" />}
                  label={data.label}
                  onDelete={handleDelete(data)}
                />
            )
          })}
        </Stack>

      </Box>
    </div>
  );
}

export default App;
