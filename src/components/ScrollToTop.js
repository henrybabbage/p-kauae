import { isBrowser } from '@/utils/helpers'
import { Button } from '@chakra-ui/react'

export default function ScrollToTop() {
    function scrollToTop() {
        if (!isBrowser()) return
        let element = document.getElementById('top')
        element.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <Button variant="menu" onClick={scrollToTop}>
            Scroll to top
        </Button>
    )
}
