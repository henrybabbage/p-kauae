import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({ href, children, isSiteTitle = false }) {
    const router = useRouter()
    const isActive = router.pathname === href
    const hoverColor = 'pink.200'
    const activeColor = 'pink.200'
    return (
        <ChakraLink
            as={NextLink}
            href={href}
            color={isActive && !isSiteTitle ? activeColor : 'white'}
            _hover={{
                color: hoverColor
            }}
            scroll={false}
            position="fixed"
        >
            {children}
        </ChakraLink>
    )
}
