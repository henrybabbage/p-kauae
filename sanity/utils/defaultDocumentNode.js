/* eslint-disable indent */
import Iframe from 'sanity-plugin-iframe-pane'

export const defaultDocumentNode = (S, { schemaType }) => {
    switch (schemaType) {
        case `wahine`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        URL: (doc) =>
                            doc?.slug?.current
                                ? `http://localhost:3000/api/preview?slug=${doc.slug.current}`
                                : `http://localhost:3000/api/preview`
                    })
                    .title('Preview')
            ])
        default:
            return S.document().views([S.view.form()])
    }
}
