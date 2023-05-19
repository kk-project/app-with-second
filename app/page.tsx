
"use client";

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Page() {
  // tailwind shadow
  const boxShadowStyle = '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)';

  return (
    <>
      <Box
        display="flex" 
        justifyContent="center"
        alignItems="center"
        marginTop={7}
        
      >
        <Paper elevation={6} sx={{ width: 600, padding:7, borderRadius: 4, boxShadow: boxShadowStyle, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Hello!
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
