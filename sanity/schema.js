import wahine from './schemas/documents/wahine'
import kiriata from './schemas/objects/kiriata'
import wahi from './schemas/objects/wahi'
import whakaahua from './schemas/objects/whakaahua'
import config from './schemas/singletons/config'
import kaiwhakaahua from './schemas/singletons/kaiwhakaahua'
import korero from './schemas/singletons/korero'

export const schema = {
    types: [config, whakaahua, kiriata, korero, wahine, kaiwhakaahua, wahi]
}
