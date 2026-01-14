import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Tabs, Tab, Button, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { Terminal, Copy, Check, ExternalLink } from 'lucide-react'

const HowToUseSection: React.FC = () => {
    const { t } = useTranslation('TributosCo')
    const [activeTab, setActiveTab] = useState(0)
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
    
    const examples = t('howToUse.examples', { returnObjects: true }) as Array<{
        id: string
        title: string
        description: string
        code: string
    }>

    const handleCopy = (code: string, index: number) => {
        navigator.clipboard.writeText(code)
        setCopiedIndex(index)
        setTimeout(() => setCopiedIndex(null), 2000)
    }

    return (
        <Box
            id="howToUse"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(150deg, rgba(0,0,15,1) 20%, rgba(147, 51, 234, 0.15) 70%)',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            mb: 6,
                            fontWeight: 700,
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #FFFFFF 0%, #9333EA 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {t('howToUse.title')}
                    </Typography>
                </motion.div>

                {/* Installation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Paper
                        sx={{
                            p: 3,
                            mb: 6,
                            background: 'rgba(147, 51, 234, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(147, 51, 234, 0.3)',
                            borderRadius: '16px',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Terminal size={24} color="#9333EA" style={{ marginRight: '12px' }} />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: '#A855F7',
                                }}
                            >
                                {t('howToUse.installation.title')}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                background: '#1a1a1a',
                                p: 2,
                                borderRadius: '12px',
                                fontFamily: 'monospace',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography sx={{ color: '#00ff00', fontSize: '1.1rem' }}>
                                {t('howToUse.installation.command')}
                            </Typography>
                            <Button
                                size="small"
                                onClick={() => handleCopy(t('howToUse.installation.command'), -1)}
                                sx={{
                                    color: copiedIndex === -1 ? '#00ff00' : '#9333EA',
                                    minWidth: 'auto',
                                }}
                            >
                                {copiedIndex === -1 ? <Check size={20} /> : <Copy size={20} />}
                            </Button>
                        </Box>
                    </Paper>
                </motion.div>

                {/* Examples Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Tabs
                        value={activeTab}
                        onChange={(_, newValue) => setActiveTab(newValue)}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            mb: 4,
                            '& .MuiTab-root': {
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontWeight: 600,
                                fontSize: '1rem',
                                '&.Mui-selected': {
                                    color: '#A855F7',
                                },
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#9333EA',
                                height: 3,
                            },
                        }}
                    >
                        {examples.map((example, index) => (
                            <Tab key={example.id} label={example.title} />
                        ))}
                    </Tabs>

                    {examples.map((example, index) => (
                        <Box
                            key={example.id}
                            hidden={activeTab !== index}
                            sx={{
                                animation: activeTab === index ? 'fadeIn 0.5s' : 'none',
                                '@keyframes fadeIn': {
                                    from: { opacity: 0, transform: 'translateY(10px)' },
                                    to: { opacity: 1, transform: 'translateY(0)' },
                                },
                            }}
                        >
                            <Paper
                                sx={{
                                    p: 4,
                                    background: 'rgba(147, 51, 234, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(147, 51, 234, 0.3)',
                                    borderRadius: '16px',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 2,
                                        color: '#FFFFFF',
                                    }}
                                >
                                    {example.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 3,
                                        color: 'rgba(255, 255, 255, 0.8)',
                                    }}
                                >
                                    {example.description}
                                </Typography>
                                <Box
                                    sx={{
                                        background: '#1a1a1a',
                                        p: 3,
                                        borderRadius: '12px',
                                        position: 'relative',
                                        overflow: 'auto',
                                    }}
                                >
                                    <Button
                                        size="small"
                                        onClick={() => handleCopy(example.code, index)}
                                        sx={{
                                            position: 'absolute',
                                            top: 12,
                                            right: 12,
                                            color: copiedIndex === index ? '#00ff00' : '#9333EA',
                                            minWidth: 'auto',
                                        }}
                                    >
                                        {copiedIndex === index ? <Check size={20} /> : <Copy size={20} />}
                                    </Button>
                                    <pre
                                        style={{
                                            margin: 0,
                                            fontFamily: 'monospace',
                                            fontSize: '0.95rem',
                                            color: '#00ff00',
                                            whiteSpace: 'pre-wrap',
                                            wordBreak: 'break-all',
                                        }}
                                    >
                                        {example.code}
                                    </pre>
                                </Box>
                            </Paper>
                        </Box>
                    ))}
                </motion.div>

                {/* Documentation Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Box sx={{ textAlign: 'center', mt: 6 }}>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ExternalLink size={20} />}
                            href="https://www.npmjs.com/package/tributos-co"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                background: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
                                color: 'white',
                                fontWeight: 700,
                                px: 5,
                                py: 2,
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3)',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #7C3AED 0%, #9333EA 100%)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 12px 40px rgba(147, 51, 234, 0.4)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {t('howToUse.docsLink')}
                        </Button>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    )
}

export default HowToUseSection
