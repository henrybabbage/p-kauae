import { Link as ChakraLink, useTheme } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({ href, children, isSiteTitle = false }) {
    const router = useRouter()
    const isActive = router.pathname === href
    const hoverColor = 'pink.200'
    const activeColor = 'pink.200'
    const { colors } = useTheme()
    const underlineColor = colors.pink[200]
    return (
        <ChakraLink
            as={NextLink}
            href={href}
            color={isActive && !isSiteTitle ? activeColor : 'white'}
            textDecoration={isActive && !isSiteTitle && `${underlineColor} underline solid 2px`}
            textUnderlineOffset="5px"
            _hover={{
                color: hoverColor,
                textDecoration: `${underlineColor} underline solid 2px`,
                textUnderlineOffset: '5px'
            }}
            scroll={false}
            position="fixed"
        >
            {children}
        </ChakraLink>
    )
}
