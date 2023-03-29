import { Box, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function DigitalClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const nzstOffset = 12

    const nzstTime = new Date(time.getTime() + nzstOffset * 60 * 60 * 1000)

    const hours = nzstTime.getHours().toString().padStart(2, '0')
    const minutes = nzstTime.getMinutes().toString().padStart(2, '0')
    const seconds = nzstTime.getSeconds().toString().padStart(2, '0')

    return (
        <Box>
            <Text
                pb="2"
                fontSize="14px"
                lineHeight="1"
                textAlign="left"
                color="white"
                fontFamily="subheading"
                dangerouslySetInnerHTML={{
                    __html: `${hours}:${minutes}:${seconds}`
                }}
            />
        </Box>
    )
}
