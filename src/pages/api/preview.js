// https://www.sanity.io/guides/nextjs-live-preview
export default function preview(req, res) {
    res.setPreviewData({})
    res.writeHead(307, { Location: '/' })
    res.end()
}
