import { Button, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Balancer from 'react-wrap-balancer'
import { MotionBox } from '../Primitives/MotionBox'

export default function Stepper({ onClose }) {
    let [step, setStep] = useState(1)

    const handleFinish = () => {
        setStep(step > 3 ? step : step + 1)
        if (step === 3) {
            setTimeout(() => {
                onClose()
            }, 300)
        }
    }

    return (
        <>
            <Flex flexDirection="column" justifyContent="center" alignItems="center" h="90vh" w="100vw">
                <Balancer>
                    <Text
                        as="h1"
                        fontFamily="subheading"
                        fontSize={['24px', '24px', '24px', '36px', '36px', '36px']}
                        color="white"
                        lineHeight="1.3"
                        textAlign="center"
                        textColor="white"
                    >
                        {step === 1 &&
                            'This map highlights the relationship between each woman and the land they are connected to.'}
                        {step === 2 &&
                            'Click the names on the map to move around Taranaki and engage with stories of reclamation.'}
                        {step === 3 &&
                            'At each location a window will open presenting a film of the whenua, a portrait and kōrero from each wahine.'}
                    </Text>
                </Balancer>
            </Flex>
            <Flex
                w="100%"
                position="fixed"
                bottom="20"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="20"
            >
                <Flex mt="20" w="40vw" justifyContent="space-between" p="6">
                    <Step step={1} currentStep={step} />
                    <Step step={2} currentStep={step} />
                    <Step step={3} currentStep={step} />
                </Flex>

                <Flex w="20vw" justifyContent="space-between">
                    <Button
                        variant="callToAction"
                        isDisabled={step === 1 ? true : false}
                        onClick={() => setStep(step < 2 ? step : step - 1)}
                    >
                        <Text fontSize={['16px', '16px', '16px', '20px', '20px', '20px']}>{'Back'}</Text>
                    </Button>
                    <Button variant="callToAction" onClick={handleFinish}>
                        <Text fontSize={['16px', '16px', '16px', '20px', '20px', '20px']}>
                            {step <= 3 ? 'Continue' : 'Begin'}
                        </Text>
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}

function Step({ step, currentStep }) {
    let status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete'

    return (
        <MotionBox animate={status} initial={false} position="relative">
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
                bg="rgba(249, 171, 171, 0.5)"
            ></MotionBox>

            <MotionBox
                initial={false}
                variants={{
                    inactive: {
                        backgroundColor: 'var(--chakra-colors-white)',
                        borderColor: 'rgba(0, 0, 0, 0.36)'
                    },
                    active: {
                        backgroundColor: 'var(--chakra-colors-white)',
                        borderColor: 'var(--chakra-colors-pink-200)'
                    },
                    complete: {
                        backgroundColor: 'var(--chakra-colors-pink-200)',
                        borderColor: 'var(--chakra-colors-pink-200)'
                    }
                }}
                transition={{ duration: 0.2 }}
                position="relative"
                display="flex"
                h="6"
                w="6"
                alignItems="center"
                justifyContent="center"
                rounded="full"
                border="2px"
            ></MotionBox>
        </MotionBox>
    )
}
