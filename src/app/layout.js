// app/layout.tsx
'use client'

import Header from '@/components/Header'
import theme from '@/styles/ChakraTheme'
import Fonts from '@/styles/Fonts'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import styles from '@/styles/globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body className={styles.background}>
                <CacheProvider>
                    <ChakraProvider theme={theme}>
                        <Fonts />
                        <Header />
                        <AnimatePresence
                            mode="wait"
                            initial={true}
                            onExitComplete={() => {
                                window.scrollTo(0, 0)
                            }}
                        >
                            {children}
                        </AnimatePresence>
                    </ChakraProvider>
                </CacheProvider>
            </body>
        </html>
    )
}
