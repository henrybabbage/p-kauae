import { useEffect, useState } from 'react'
export function useCountdown(mins, timerStarted) {
    const [secs, decrement] = useState(mins * 60)
    const [progress, increment] = useState(0)
    useEffect(() => {
        if (timerStarted && secs > 0) {
            const progressLevel = setInterval(() => {
                increment(progress + 100 / (mins * 60))
                decrement(secs - 1)
            }, 200) // progress track updates every 200ms
            return () => clearInterval(progressLevel)
        }
        setTimeout(() => {
            if (secs === 0) {
                increment(0)
            }
        }, 1000)
    }, [timerStarted, progress, secs, mins])
    return [progress]
}
