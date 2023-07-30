// https://www.sanity.io/guides/nextjs-live-preview
export default function exit(req, res) {
    res.setDraftMode({ enable: false })
    res.writeHead(307, { Location: '/' })
    res.end('Draft mode is disabled')
}
