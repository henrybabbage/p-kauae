import { Box, Text } from '@chakra-ui/react'

export default function MoonPhaseDisplay() {
    const phaseNames = [
        'New Moon',
        'Waxing Crescent',
        'First Quarter',
        'Waxing Gibbous',
        'Full Moon',
        'Waning Gibbous',
        'Last Quarter',
        'Waning Crescent'
    ]
    return (
        <Box>
            <Text
                text="white"
                fontFamily="subheading"
                fontSize="14px"
                lineHeight="1"
                textAlign="left"
                color="white"
                pb="2"
            >
                {phaseNames[0]}
            </Text>
        </Box>
    )
}
