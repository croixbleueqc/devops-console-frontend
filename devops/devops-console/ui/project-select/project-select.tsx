import { Overwrite, ProjectMap } from '@croixbleue/devops.devops-console.types';
import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';
import React from 'react';

export type ProjectSelectProps = Overwrite<
  SelectProps,
  {
    projects: ProjectMap;
    selectedProjectKey?: string;
    onChange: (projectKey: string) => void;
  }
>;

export function ProjectSelect({
  selectedProjectKey,
  projects,
  onChange,
  ...props
}: ProjectSelectProps) {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    onChange?.(value);
  };

  return Object.keys(projects).length > 0 ? (
    <Box sx={{ width: 200 }}>
      <FormControl fullWidth size="small">
        <InputLabel>Projects</InputLabel>
        <Select
          {...props}
          id="project-select"
          value={selectedProjectKey ?? ''}
          size="small"
          onChange={handleChange}
          label="Projects"
        >
          <MenuItem key="none" value="">
            -
          </MenuItem>
          {Object.entries(projects).map(([key, p]) => (
            <MenuItem key={key} value={key}>
              {p.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  ) : (
    <CircularProgress size="1em" />
  );
}
