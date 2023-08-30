import { Drawer } from 'vaul'

export default function MapDrawer() {
    return (
        <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>Open</Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content>
                    <p>Content</p>
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>
    )
}
