/* eslint-disable prettier/prettier */
import { Box, Flex, Step, StepIndicator, StepSeparator, StepStatus, Stepper, Text, useSteps } from '@chakra-ui/react'
import Balancer from 'react-wrap-balancer'
import { CircleIcon } from '../Common/Icons/CircleIcon'

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

export default function ChakraOnboarding() {
    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: steps.length
    })

    const activeStepText = steps[activeStep].description
    return (
        <>
            <Flex flexDir="column" justifyContent="center" alignItems="center" position="relative" w="40vw">
                <Balancer>
                    <Text
                        as="h1"
                        fontFamily="subheading"
                        fontSize={['14px', '14px', '14px', '36px', '36px', '36px']}
                        color="white"
                        lineHeight="1.3"
                        textAlign="center"
                        textColor="white"
                    >
                        {activeStepText}
                    </Text>
                </Balancer>
            </Flex>
            <Box w="40vw">
                <Stepper colorScheme="state" size="sm" index={activeStep} gap="0" mt="24">
                    {steps.map((step, index) => (
                        <Step key={index} gap="0">
                            <StepIndicator>
                                <StepStatus
                                    complete={<CircleIcon boxSize={6} color="pink.200" />}
                                    incomplete={<CircleIcon boxSize={6} color="transparent" />}
                                    active={<CircleIcon boxSize={6} color="pink.200" />}
                                />
                            </StepIndicator>
                            <StepSeparator _horizontal={{ ml: '0' }} />
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </>
    )
}
