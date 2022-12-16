import React, { ReactNode, useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import { Search, SearchOption } from '@croixbleue/devops.devops-console.ui.search';
import { ProjectSelect } from '@croixbleue/devops.devops-console.ui.project-select';
import { ProjectMap, RepositoryDescription } from '@croixbleue/devops.devops-console.types';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export type HeaderBarProps = {
  appName?: string;
  children?: ReactNode;
  projects: ProjectMap;
  repositories: RepositoryDescription[];
  onSearch?: (repoIdx: number | null) => void;
  onProjectChange?: (projectKey: string) => void;
};

export function HeaderBar({ appName, projects, repositories, children }: HeaderBarProps) {
  const searchOptions: SearchOption[] = repositories
    .sort(({ name: a }, { name: b }) => a.localeCompare(b))
    .map(({ name, slug }) => ({ label: name, value: slug }));
  const navigate = useNavigate();
  const onSearch = (repoSlug: string) => navigate(`/repository/${repoSlug}`);
  const onProjectChange = (projectKey: string) => navigate(`/project/${projectKey}`);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSettingsOpen = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);
  const settingsMenuId = 'settings-menu';
  const anchorEl = useRef(null);
  const renderSettingsMenu = (
    <Menu
      anchorEl={anchorEl.current}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={settingsMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          // navigation.navigate('/settings');
        }}
      >
        Settings
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          // navigation.navigate('/projects');
        }}
      >
        Projects
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            {appName ?? 'DevOps Console'}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <ProjectSelect projects={projects} onChange={onProjectChange} />
          <Search options={searchOptions} onChange={onSearch} />
          {children}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              ref={anchorEl}
              aria-haspopup="true"
              aria-controls={settingsMenuId}
              onClick={handleSettingsOpen}
              color="inherit"
            >
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderSettingsMenu}
    </Box>
  );
}
