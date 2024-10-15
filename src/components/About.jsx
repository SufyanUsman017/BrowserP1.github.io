import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import '../App.css'
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <center>
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
    </center>
    
    
  );
}
