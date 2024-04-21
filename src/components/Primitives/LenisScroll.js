import { ReactLenis } from '@studio-freight/react-lenis'

export default function LenisScroll({ children }) {
    return (
        <ReactLenis root options={{ lerp: 0.05, smoothTouch: true }}>
            {children}
        </ReactLenis>
    )
}
