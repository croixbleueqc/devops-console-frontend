import React, { ChangeEventHandler, HTMLAttributes, ReactHTML, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, AutocompleteProps, Box, CircularProgress, TextField } from '@mui/material';
import { Overwrite } from '@croixbleue/devops.devops-console.types';

export type SearchOption = { label: string; value: number };

export type SearchProps = {
  value: SearchOption | null;
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
