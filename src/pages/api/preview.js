// https://www.sanity.io/guides/nextjs-live-preview

export default function preview(req, res) {
    res.setDraftMode({ enable: true })
    res.writeHead(307, { Location: '/' })
    res.end('Draft mode is enabled')
}
