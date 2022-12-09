import React, { ReactNode, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import { Search, SearchOption } from '@croixbleue/devops.devops-console.ui.search';
import { ProjectSelect } from '@croixbleue/devops.devops-console.ui.project-select';
import { ProjectMap, RepositoryDefinition } from '@croixbleue/devops.devops-console.types';
import { Badge, Box, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

export type HeaderBarProps = {
  appName?: string;
  children?: ReactNode;
  projects: ProjectMap;
  selectedProjectKey?: string;
  repositories: RepositoryDefinition[];
  selectedRepoIdx: number | null;
  onSearch?: (repoIdx: number | null) => void;
  onProjectChange?: (projectKey: string) => void;
  navigation: any;
};

export function HeaderBar({
  appName,
  projects,
  selectedProjectKey,
  repositories,
  selectedRepoIdx,
  onSearch = () => {},
  onProjectChange = (projectKey: string) => console.log('project changed', projectKey),
  navigation,
  children,
}: HeaderBarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const anchorEl = useRef(null);
  const searchOptions: SearchOption[] = repositories
    .sort(({ name: a }, { name: b }) => a.localeCompare(b))
    .map(({ name }, idx) => ({ label: name, value: idx }));

  const handleSettingsOpen = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);
  const settingsMenuId = 'settings-menu';
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
          <ProjectSelect
            selectedProjectKey={selectedProjectKey ?? ''}
            projects={projects}
            onChange={onProjectChange}
          />
          <Search
            value={searchOptions.find((o) => o.value == selectedRepoIdx) ?? null}
            options={searchOptions}
            onChange={onSearch}
          />
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
