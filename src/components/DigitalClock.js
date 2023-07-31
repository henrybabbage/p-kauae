import { Box } from '@chakra-ui/react'
import Clock from 'react-live-clock'

export default function DigitalClock() {
    return (
        <Box id="clock" fontFamily="subheading" fontSize="14px" lineHeight="1" textAlign="left" color="white" pb={['2', '2', '2', '2', '2', '2']}>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'NZ'} noSsr={true} />
        </Box>
    )
}
