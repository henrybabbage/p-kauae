import { Button, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Client } from 'react-hydration-provider'
import { useMediaQuery } from 'react-responsive'
import Balancer from 'react-wrap-balancer'
import { MotionBox } from '../Primitives/MotionBox'

export default function Stepper({ onClose, haerenga }) {
    let [step, setStep] = useState(1)

    const handleFinish = () => {
        setStep(step > 3 ? step : step + 1)
        if (step === 3) {
            setTimeout(() => {
                onClose()
            }, 300)
        }
    }

    const isDesktop = useMediaQuery({ minWidth: 992 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 991 })

    const { slide_1, slide_2, slide_3, slide_1_mobile, slide_2_mobile, slide_3_mobile } = haerenga

    return (
        <>
            <Flex flexDirection="column" justifyContent="center" alignItems="center" h="90vh" w="100vw">
                <Balancer ratio={0.5}>
                    <Client>
                        <Text
                            as="h1"
                            fontFamily="subheading"
                            fontWeight="regular"
                            fontSize={['28px', '28px', '28px', '36px', '36px', '36px']}
                            color="white"
                            lineHeight="1.3"
                            textAlign="center"
                            textColor="white"
                        >
                            {step === 1 && isDesktop && slide_1}
                            {step === 1 && isTabletOrMobile && slide_1_mobile}
                            {step === 2 && isDesktop && slide_2}
                            {step === 2 && isTabletOrMobile && slide_2_mobile}
                            {step === 3 && isDesktop && slide_3}
                            {step === 3 && isTabletOrMobile && slide_3_mobile}
                        </Text>
                    </Client>
                </Balancer>
            </Flex>
            <Flex
                mt={['4', '4', '4', '0', '0', '0']}
                w="100%"
                position="fixed"
                bottom={['16', '16', '16', '20', '20', '20']}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={['16', '16', '16', '20', '20', '20']}
            >
                <Flex
                    w={['60vw', '60vw', '60vw', '40vw', '40vw', '40vw']}
                    justifyContent="space-between"
                    p={['2', '2', '2', '6', '6', '6']}
                >
                    <Step step={0} currentStep={step} />
                    <Step step={1} currentStep={step} />
                    <Step step={2} currentStep={step} />
                </Flex>

                <Flex
                    h={['2', '2', '2', 'auto', 'auto', 'auto']}
                    w={['60vw', '60vw', '60vw', '20vw', '20vw', '20vw']}
                    justifyContent="space-between"
                >
                    <Button
                        variant="callToAction"
                        isDisabled={step === 1 ? true : false}
                        onClick={() => setStep(step < 2 ? step : step - 1)}
                    >
                        <Text fontSize={['16px', '16px', '16px', '20px', '20px', '20px']}>{'Back'}</Text>
                    </Button>
                    <Button variant="callToAction" onClick={handleFinish}>
                        <Text fontSize={['16px', '16px', '16px', '20px', '20px', '20px']}>
                            {step <= 2 ? 'Continue' : 'Begin'}
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
                        backgroundColor: 'var(--chakra-colors-grey-400)',
                        borderColor: 'rgba(0, 0, 0, 0.36)'
                    },
                    active: {
                        backgroundColor: 'var(--chakra-colors-grey-400)',
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
                h={['4', '4', '4', '6', '6', '6']}
                w={['4', '4', '4', '6', '6', '6']}
                alignItems="center"
                justifyContent="center"
                rounded="full"
                border={['2px', '2px', '2px', '2px', '2px', '2px']}
            ></MotionBox>
        </MotionBox>
    )
}
