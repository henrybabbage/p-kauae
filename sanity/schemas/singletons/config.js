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
            title: 'AmazonS3BaseURL',
            type: 'string'
        },
        {
            name: 'kiriata_cloudfront',
            title: 'CloudfrontBaseURL',
            type: 'string'
        }
    ]
}
