import React from 'react'
import { X } from 'lucide-react'
import { Box, Typography, Button, Collapse, Alert, IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Banner: React.FC = () => {
    const [openBanner, setOpenBanner] = React.useState(true)
    const { t } = useTranslation('CurseWeb')
    const hotmartUrl = "https://hotmart.com/your-course-url"
    return (
        <>
            {/* Promotional Banner */}
            <Collapse in={openBanner}>
                <Alert
                    severity="info"
                    className="bg-blue-900 text-white"
                    icon={false}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => setOpenBanner(false)}
                        >
                            <X />
                        </IconButton>
                    }
                >
                    <Box className="flex items-center justify-center gap-4 py-1">
                        <Typography variant="body1" className="font-medium">
                            {t('banner.title')}
                        </Typography>
                        <Button
                            variant="contained"
                            size="small"
                            className="bg-white text-blue-900 hover:bg-blue-50"
                            href={hotmartUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('banner.btnCta')}
                        </Button>
                    </Box>
                </Alert>
            </Collapse>
        </>
    )
}

export default Banner
