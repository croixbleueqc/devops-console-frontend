import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React from 'react';

export type SearchOption = { label: string; value: string };

export type SearchProps = {
  options?: SearchOption[];
  onChange: (value: string) => void;
};

export function Search({ options = [], onChange, ...props }: SearchProps) {
  const loading = options.length === 0;

  const handleChange = (e: React.SyntheticEvent, value: SearchOption | null) => {
    onChange(value != null ? value.value : '');
  };

  return (
    <Autocomplete
      {...props}
      disablePortal
      options={options}
      sx={{ width: 300, ml: 2, mr: 2 }}
      onChange={handleChange}
      renderInput={(params) => (
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
      )}
    />
  );
}
