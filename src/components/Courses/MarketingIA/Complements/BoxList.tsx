import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

interface BoxListProps {
  items: string[];
  title: string;
  subtitle?: string;
}

const BoxList: React.FC<BoxListProps> = ({ items, title, subtitle }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h3" align="center" className="text-[#F4CE2C]" sx={{ mb: 2 }}>
        {title}
      </Typography>
      
      {subtitle && (
        <Typography variant="h6" align="center" className="text-white" sx={{ mb: 4 }}>
          {subtitle}
        </Typography>
      )}
      
      <Grid container spacing={3} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  borderColor: '#00AAFF'
                }
              }}
            >
              <Typography variant="body1" align="center" dangerouslySetInnerHTML={{ __html: item }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BoxList;
