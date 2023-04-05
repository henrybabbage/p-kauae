import { MotionBox } from './MotionBox'

export default function CircularText() {
    return (
        <MotionBox
            position="absolute"
            h={['100px', '100px', '100px', '198px', '198px', '198px']}
            w={['100px', '100px', '100px', '198px', '198px', '198px']}
            borderRadius="100%"
            backgroundColor="transparent"
            animate={{ rotate: 360 }}
            transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'linear'
            }}
            textAlign="center"
            width="100%"
        >
            <svg viewBox="0 0 200 200">
                <text
                    x="200"
                    y="200"
                    fill="white"
                    font-size="14px"
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
                    d="M 100, 100 m -60, 0 a 60,60 0 1,0 120,0 a 60,60 0 1,0 -120,0"
                    fill="transparent"
                    stroke="transparent"
                    strokeWidth="1"
                />
            </svg>
        </MotionBox>
    )
}
