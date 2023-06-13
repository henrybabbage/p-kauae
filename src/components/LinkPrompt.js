import { Link as ChakraLink, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { MotionBox } from './MotionBox'

export default function LinkPrompt() {
    return (
        <ChakraLink
            variant="menu"
            as={NextLink}
            href="/haerenga"
            scroll={false}
        >
            <MotionBox
                cursor="pointer"
                ransform="translate(-50%, -50%)"
                left="50%"
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2
                    }
                }}
                whileTap={{
                    scale: 1.3,
                    transition: {
                        duration: 0.2
                    }
                }}
            >
                <MotionBox
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 1,
                        delay: 2.8
                    }}
                    className="scroll"
                    h={['80px', '80px', '80px', '140px', '140px', '140px']}
                    w={['80px', '80px', '80px', '140px', '140px', '140px']}
                    backgroundColor="white"
                    borderRadius="50%"
                    position="relative"
                    display="flex"
                    justifyContent="center"
                    boxShadow="0px 0px 200px 50px rgba(249,171,171,0.3)"
                >
                    <MotionBox
                        alignSelf="center"
                        textAlign="center"
                        position="relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1,
                            delay: 1.8
                        }}
                    >
                        <Text
                            color="grey.900"
                            fontFamily="subheading"
                            fontSize={[
                                '8px',
                                '8px',
                                '8px',
                                '14px',
                                '14px',
                                '14px'
                            ]}
                            textTransform="uppercase"
                        >
                            Explore
                        </Text>
                        <Text
                            color="grey.900"
                            fontFamily="subheading"
                            fontSize={[
                                '8px',
                                '8px',
                                '8px',
                                '14px',
                                '14px',
                                '14px'
                            ]}
                            textTransform="uppercase"
                        >
                            Map
                        </Text>
                    </MotionBox>
                </MotionBox>
            </MotionBox>
        </ChakraLink>
    )
}
