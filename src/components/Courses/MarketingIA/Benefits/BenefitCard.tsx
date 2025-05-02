import React from 'react'
import { Card, CardContent, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  list: string[]; // Changed from description: string
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, list }) => {
  return (
    <Card 
      className="h-full shadow-md hover:shadow-xl transition-shadow"
      sx={{ 
        backgroundColor: '#00000F',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#fff',
          opacity: 0.1,
          zIndex: 1
        },
        transition: 'all 0.3s ease',
        border: '1px solid transparent',
        '&:hover': {
          border: '1px solid #fff',
          backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), #00000F)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
        }
      }}
    >
      <CardContent sx={{ 
        position: 'relative', 
        zIndex: 2,
        color: '#fff'
      }}>
        <Box className="flex justify-center mb-4">{icon}</Box>
        <Typography variant="h6" align="center" className="text-[#CCA70A]" sx={{ mb: 1, fontWeight: 'bold'}}>
          {title}
        </Typography>
        <List>
          {list.map((item, index) => (
            <ListItem 
              key={index} 
              disableGutters
              sx={{ py: '1px' }} // Reduce padding top and bottom to 1px
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>
                <CheckIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={item}/>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default BenefitCard