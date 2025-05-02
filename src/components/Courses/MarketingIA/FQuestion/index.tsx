import React, { useState } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  styled
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ChevronDown, HelpCircle } from 'lucide-react'

// Custom styled accordion
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 15, 0.8)',
  color: '#fff',
  marginBottom: theme.spacing(1),
  borderRadius: '8px !important',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:before': {
    display: 'none', // Remove the default divider
  },
  '&.Mui-expanded': {
    margin: theme.spacing(1, 0),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  }
}))

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderRadius: '8px',
  '&.Mui-expanded': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  '.MuiAccordionSummary-content': {
    margin: theme.spacing(1.5, 0),
  },
  '&.Mui-expanded .MuiAccordionSummary-content': {
    color: '#F4CE2C',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  }
}))

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
}));

const FQuestion: React.FC = () => {
  const { t } = useTranslation('CurseWeb')
  const [expanded, setExpanded] = useState<string | false>(false)
  
  // Extract FAQ items from translation file
  const faqItems = t('faq.questions', { returnObjects: true }) as { question: string; answer: string }[]
  
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  };
  
  return (
    <Box 
      component="section" 
      sx={{ 
        py: 8, 
        background: 'linear-gradient(180deg, #00000F 0%, #2A002B 100%)'
      }}
      id="FrecuentQuestions"
    >
      <Container>
        {/* Icon above title */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <HelpCircle size={48} className="text-[#F4CE2C]" />
        </Box>
        
        <Typography variant="h3" component="h2" align="center" className="text-[#F4CE2C]" sx={{ mb: 6 }}>
          {t('faq.title')}
        </Typography>
        
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqItems.map((item, index) => (
            <StyledAccordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <StyledAccordionSummary
                expandIcon={<ChevronDown color="#F4CE2C" />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'medium', fontSize: '1.1rem' }}>
                  {item.question}
                </Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: item.answer }}>
                </Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default FQuestion;
