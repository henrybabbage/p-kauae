import { Box, Button, Text } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'
import { useRef, useState } from 'react'
import { Drawer } from 'vaul'

export default function MapDrawer({ wahines, selectedWahineIndex, handleNextClick, handlePrevClick }) {
    const [open, setOpen] = useState(true)
    const [snap, setSnap] = useState('148px')

    const captureDate = wahines[selectedWahineIndex].wa_tiki_whakaahua
    const formattedDate = format(parseISO(captureDate), 'do MMMM, yyyy')

    const getPreviousWahine = (selectedWahineIndex) => {
        if (selectedWahineIndex === wahines.length - 1) {
            return wahines[0]?.ingoa || 'Previous'
        } else {
            return wahines[selectedWahineIndex + 1]?.ingoa || 'Previous'
        }
    }

    const getNextWahine = (selectedWahineIndex) => {
        if (selectedWahineIndex === 0) {
            return wahines[wahines.length - 1]?.ingoa || 'Next'
        } else {
            return wahines[selectedWahineIndex - 1]?.ingoa || 'Next'
        }
    }

    const playerRef = useRef(null)
    return (
        <Drawer.Root
            defaultOpen
            shouldScaleBackground
            snapPoints={['148px', '355px', 1]}
            activeSnapPoint={snap}
            setActiveSnapPoint={setSnap}
        >
            <Drawer.Trigger asChild onClick={() => setOpen(true)}>
                <Button variant="prompt">
                    <Text
                        color="white"
                        fontWeight="regular"
                        fontFamily="subheading"
                        fontSize={['10px', '10px', '10px', '20px', '20px', '20px']}
                    >
                        Open
                    </Text>
                </Button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="DialogOverlay" />
                <Drawer.Content className="DialogContent">
                    <Box className="DialogBody">
                        <Box mx="auto" w="12" h="1.5" flexShrink="0" rounded="xl" bg="grey.400" mb="8" />
                    </Box>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}
