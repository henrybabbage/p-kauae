import { Box, Button, Flex, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MotionBox } from '../Primitives/MotionBox'

const steps = [
    {
        title: 'First',
        description: 'This map highlights the relationship between each woman and the land they are connected to.'
    },
    {
        title: 'Second',
        description: 'Use the arrows to move around Taranaki and engage with stories of reclamation.'
    },
    {
        title: 'Third',
        description: 'Begin the journey around the map'
    }
]

export default function StepsComponent() {
    let [step, setStep] = useState(1)

    useEffect(() => {
        let x = setInterval(() => {
            setStep((step) => {
                return step !== 5 ? step + 1 : 1
            })
        }, 1000)

        return () => clearInterval(x)
    }, [step])

    return (
        <Box mx="auto" maxH="full" w="full" maxW="md" rounded="sm" bg="white" boxShadow="md">
            <Box display="flex" justifyContent="space-between" rounded="sm" p={8}>
                <Step step={1} currentStep={step} />
                <Step step={2} currentStep={step} />
                <Step step={3} currentStep={step} />
                <Step step={4} currentStep={step} />
            </Box>
            <Box px={8} pb={8}>
                <Box>
                    <VStack mt={0} spacing={2}>
                        <Box h="4" w="5/6" rounded="sm" bg="gray.100" />
                        <Box h="4" rounded="sm" bg="gray.100" />
                        <Box h="4" w="4/6" rounded="sm" bg="gray.100" />
                    </VStack>
                </Box>

                <Flex mt="10" justifyContent="space-between">
                    <Button
                        variant="prompt"
                        onClick={() => setStep(step < 2 ? step : step - 1)}
                        rounded="sm"
                        px="2"
                        py="1"
                        text="neutral.400"
                        hover="neutral.700"
                    >
                        Back
                    </Button>
                    <Button
                        variant="prompt"
                        onClick={() => setStep(step > 4 ? step : step + 1)}
                        className={`${
                            step > 4 ? 'pointer-events-none opacity-50' : ''
                        } bg flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-blue-600 active:bg-blue-700`}
                    >
                        Continue
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}

function Step({ step, currentStep }) {
    let status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete'

    return (
        <MotionBox animate={status} position="relative">
            <MotionBox
                variants={{
                    active: {
                        scale: 1,
                        transition: {
                            delay: 0,
                            duration: 0.2
                        }
                    },
                    complete: {
                        scale: 1.25
                    }
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.2,
                    type: 'tween',
                    ease: 'circOut'
                }}
                position="absolute"
                inset="0"
                rounded="full"
                bg="blue-200"
            ></MotionBox>

            <MotionBox
                initial={false}
                variants={{
                    inactive: {
                        backgroundColor: 'var(--white)',
                        borderColor: 'var(--neutral-200)',
                        color: 'var(--neutral-400)'
                    },
                    active: {
                        backgroundColor: 'var(--white)',
                        borderColor: 'var(--blue-500)',
                        color: 'var(--blue-500)'
                    },
                    complete: {
                        backgroundColor: 'var(--blue-500)',
                        borderColor: 'var(--blue-500)',
                        color: 'var(--blue-500)'
                    }
                }}
                transition={{ duration: 0.2 }}
                position="relative"
                display="flex"
                h="10"
                w="10"
                alignItems="center"
                justifyContent="center"
                rounded="sm"
                border="2"
            >
                <Flex alignItems="center" justifyContent="center">
                    {status === 'complete' ? <CheckIcon h="6" w="6" color="white" /> : <span>{step}</span>}
                </Flex>
            </MotionBox>
        </MotionBox>
    )
}

function CheckIcon(props) {
    return (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    delay: 0.2,
                    type: 'tween',
                    ease: 'easeOut',
                    duration: 0.3
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
            />
        </svg>
    )
}
