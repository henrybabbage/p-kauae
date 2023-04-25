import fetch from 'node-fetch'

export default async function handler(req, res) {
    const apiKey = process.env.NEXT_PUBLIC_VISUALCROSSING_API_KEY
    const location = 'Taranaki'

    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&include=moonphase`

    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        const moonPhase = data.days[0].moonphase

        res.status(200).json({ moonPhase })
        console.error(res.status)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Something went wrong: check api key and query params'
        })
    }
}
