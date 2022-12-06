import React, { ChangeEventHandler, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Box, CircularProgress, TextField } from '@mui/material';

export type SearchProps = {
  /**
   * a node to be rendered in the special component.
   */
  options?: { label: string; value: string }[];
  handleChange?: (value: string) => void;
};

export function Search({ options = [], handleChange = () => {} }: SearchProps) {
  let [loading, setLoading] = React.useState(options.length === 0);

  useEffect(() => {
    if (options.length > 0) {
      setLoading(false);
    }
  }, [options]);

  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 300 }}
      onChange={(e, v) => handleChange(v?.value || '')}
      renderInput={(params) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
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
