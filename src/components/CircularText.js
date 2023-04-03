import { Box } from '@chakra-ui/react'
import { MotionBox } from './MotionBox'

export default function CircularText() {
    return (
        <Box
            position="relative"
            h={['110px', '110px', '110px', '150px', '150px', '150px']}
            w={['110px', '110px', '110px', '150px', '150px', '150px']}
            borderRadius="50%"
            backgroundColor="transparent"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
        >
            <MotionBox
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: 'linear'
                }}
                position="absolute"
                textAlign="center"
                width="100%"
            >
                <svg viewBox="0 0 200 200">
                    <text
                        x="220"
                        y="220"
                        fill="white"
                        font-size="16px"
                        font-family="SohneBreit_Buch"
                        textAnchor="middle"
                        dominantBaseline="central"
                        letterSpacing="1em"
                    >
                        <textPath xlinkHref="#circle-text-path">
                            {'SCROLL DOWN'}
                        </textPath>
                    </text>
                    <path
                        id="circle-text-path"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        fill="none"
                        stroke="transparent"
                        strokeWidth="1"
                    />
                </svg>
            </MotionBox>
        </Box>
    )
}
