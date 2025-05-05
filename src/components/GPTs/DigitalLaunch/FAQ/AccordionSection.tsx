import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { ChevronDown } from 'lucide-react'

interface AccordionSectionProps {
    question: string
    answer: string
    index: number
    expanded: string | false
    handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ question, answer, index, expanded, handleChange }) => {

    return (
        <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            elevation={0}
            disableGutters
            sx={{
                mb: 2,
                backgroundColor: 'rgba(0, 150, 155, 0.8)',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '12px !important',
                '&:before': {
                    display: 'none',
                },
                '&.Mui-expanded': {
                    margin: 0,
                    mb: 2,
                },
            }}
        >
            <AccordionSummary
                expandIcon={<ChevronDown />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                sx={{
                    borderRadius: '12px',
                    '&.Mui-expanded': {
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                    },
                }}
            >
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
                <Typography variant="body1" color="text.secondary">
                    {answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionSection