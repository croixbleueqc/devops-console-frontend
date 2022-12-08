import React, { ChangeEventHandler, HTMLAttributes, ReactHTML, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, AutocompleteProps, Box, CircularProgress, TextField } from '@mui/material';

export type SearchOption = { label: string; value: number };

export type SearchProps = {
  options?: SearchOption[];
  onChange: (value: number | null) => void;
};

export function Search({ options = [], onChange, ...props }: SearchProps) {
  const loading = options.length === 0;

  const handleChange = (e: React.SyntheticEvent, v: unknown) => {
    const value: SearchOption | null = v as any as SearchOption;
    onChange(value ? value.value : null);
  };

  return (
    <Autocomplete
      {...props}
      disablePortal
      options={options}
      sx={{ width: 300 }}
      onChange={handleChange}
      renderInput={(params) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <TextField
            {...params}
            disabled={loading}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
            label="Search..."
            size="small"
          />
        </Box>
      )}
    />
  );
}
