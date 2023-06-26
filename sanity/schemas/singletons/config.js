export default {
    name: 'config',
    title: 'Config',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            readOnly: true
        },
        {
            name: 'whakaahua_s3_bucket',
            title: 'Amazon S3 Base URL',
            type: 'string',
            readOnly: true
        },
        {
            name: 'kiriata_cloudfront',
            title: 'Cloudfront Base URL',
            type: 'string',
            readOnly: true
        }
    ]
}
