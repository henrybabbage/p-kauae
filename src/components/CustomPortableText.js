import { PortableText } from '@portabletext/react'

export function CustomPortableText({ paragraphClasses, value }) {
    const components = {
        block: {
            normal: ({ children }) => {
                return <p className={paragraphClasses}>{children}</p>
            }
        }
    }

    return <PortableText components={components} value={value} />
}
