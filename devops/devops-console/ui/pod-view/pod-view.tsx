import { Pod } from '@croixbleue/devops.devops-console.types';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

export type PodViewProps = {
  pods: Pod[];
  onDeletePod?: (pod_name: string) => void;
};

export function PodsView({ pods, onDeletePod }: PodViewProps) {
  const readyCount = (pod: Pod) => pod.containers.filter((c) => c.ready).length;
  const readyColor = (pod: Pod) =>
    // eslint-disable-next-line no-nested-ternary
    {
      /* eslint-disable-next-line no-nested-ternary*/
      const count = readyCount(pod);
      return count === pod.containers.length ? 'green' : count > 0 ? 'orange' : 'red';
    };

  const handleDeletePod = (pod: Pod) => {
    if (onDeletePod != null) onDeletePod(pod.name);
  };
  const disableDelete = onDeletePod == null;
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        {pods.map((pod, i) => (
          <TableRow key={i}>
            <TableCell>{pod.name}</TableCell>
            <TableCell sx={{ color: readyColor(pod) }}>
              {readyCount(pod)}/{pod.containers.length}
            </TableCell>
            <TableCell>
              <Tooltip title="Delete pod" arrow>
                <IconButton
                  onClick={() => handleDeletePod(pod)}
                  aria-label="delete"
                  color="warning"
                  disabled={disableDelete}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  );
}
