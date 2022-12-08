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
import React, { useState } from 'react';

export type ProjectSelectProps = Overwrite<
  SelectProps,
  {
    projects: ProjectMap;
    onChange: (projectKey: string) => void;
  }
>;

export function ProjectSelect({ projects, onChange, ...props }: ProjectSelectProps) {
  const [project, setProject] = useState('');
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    onChange?.(value);
    setProject(value);
  };

  return Object.keys(projects).length > 0 ? (
    <Box sx={{ width: 150 }}>
      <FormControl fullWidth size="small">
        <InputLabel>Projects</InputLabel>
        <Select
          {...props}
          id="project-select"
          value={project}
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
