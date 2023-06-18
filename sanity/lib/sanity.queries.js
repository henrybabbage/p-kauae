import { groq } from 'next-sanity'

export const kiriataQuery = groq`*[_type == 'config'][0].kiriata_cloudfront`

export const wahineQuery = groq`*[_type == 'wahine']{
    id,
    ingoa,
    korero_pukauae,
    korero_wahi,
    whakapapa,
    tohunga_ta_moko,
    wa_tiki_whakaahua,
    whakaahua{
        alternative_text,
        asset->{
        ...,
        },
    },
    kiriata{
        ingoa,
        poster{
        asset->{
            ...,
        },
        alternative_text,
        },
        url_1080p,
    },
    wahi{
        ingoa,
        ahuahanga{
            lng,
            lat,
        }
    }
}`

export const kaiwhakaahuaQuery = groq`*[_type == 'kaiwhakaahua']{
    ingoa,  
    korero,
        whakapapa,
        whakaahua{
        asset->{
            ...,
        }
    }
}[0]`

export const koreroQuery = groq`*[_type == 'korero']{
    whakataukii,
    tangata_mihia,
    tuhinga_timatanga,
    ropu,
    tuhinga_whakaraapopoto,
    mihi,
    tuhinga_tauaakii_whakamaunga_atu,
    opening_video,
    haerenga_korero,
    opening_video_korero,
    opening_video_title,
    tuhinga_whakamutunga,
}[0]`
