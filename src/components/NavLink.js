import { Link as ChakraLink, Heading, useTheme } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({
    href,
    children,
    isSiteTitle = false,
    englishText,
    reoText,
    isHovered
}) {
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
            textDecoration={
                isActive &&
                !isSiteTitle &&
                `${underlineColor} underline solid 2px`
            }
            textUnderlineOffset="5px"
            _hover={{
                color: hoverColor,
                textDecoration: `${underlineColor} underline solid 2px`,
                textUnderlineOffset: '5px'
            }}
            scroll={false}
            position="fixed"
        >
            <Heading
                as="h2"
                fontSize={['10px', '10px', '10px', '20px', '20px', '20px']}
                lineHeight="1.36"
                fontWeight="bold"
                fontFamily="subheading"
            >
                {isHovered ? englishText : reoText}
            </Heading>
        </ChakraLink>
    )
}
