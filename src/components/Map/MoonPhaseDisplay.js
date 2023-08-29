import { Box, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function MoonPhaseDisplay() {
    const [moonPhase, setMoonPhase] = useState(null)

    useEffect(() => {
        async function fetchMoonPhase() {
            try {
                const response = await fetch('/api/moonphase')
                const data = await response.json()
                setMoonPhase(data.moonPhase)
            } catch (error) {
                console.error(error)
            }
        }

        fetchMoonPhase()
    }, [])

    const quarterlyPhases = {
        0: 'Whiro',
        0.25: 'Tamatea ā ngana',
        0.5: 'Ōturu',
        0.75: 'Tangaroa ā roto'
    }

    function getMoonPhaseName(moonPhase) {
        if (moonPhase >= 0 && moonPhase < 0.25) {
            return 'Ōkoro'
        } else if (moonPhase >= 0.25 && moonPhase < 0.5) {
            return 'Tamatea whakapau'
        } else if (moonPhase >= 0.5 && moonPhase < 0.75) {
            return 'Korekore piri kī Tangaroa'
        } else if (moonPhase >= 0.75 && moonPhase < 1) {
            return 'Ōtāne'
        } else {
            return null
        }
    }

    const moonPhaseName = moonPhase !== null ? getMoonPhaseName(moonPhase) || quarterlyPhases[moonPhase] : null

    return (
        <>
            {moonPhaseName !== null ? (
                <Text fontFamily="subheading" fontSize="14px" lineHeight="1" textAlign="left" color="#FFD233" pb="2">
                    {moonPhaseName}
                </Text>
            ) : null}
        </>
    )
}
