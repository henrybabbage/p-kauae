import { Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function MonthDisplay() {
    const [currentMonth, setCurrentMonth] = useState('')

    useEffect(() => {
        const months = {
            January: 'Kohitātea',
            February: 'Hui-tanguru',
            March: 'Poutū-te-rangi',
            April: 'Paenga-whāwhā',
            May: 'Haratua',
            June: 'Pipiri',
            July: 'Hōngongoi',
            August: 'Here-turi-kōkā',
            September: 'Mahuru',
            October: 'Whiringa-ā-nuku',
            November: 'Whiringa-ā-rangi',
            December: 'Hakihea'
        }
        const currentDate = new Date()
        const monthIndex = currentDate.getMonth()
        const monthName = Object.keys(months)[monthIndex]
        const maoriMonthName = months[monthName]
        setCurrentMonth(maoriMonthName)
    }, [])

    return (
        <>
            <Text fontFamily="subheading" fontSize="14px" lineHeight="1" textAlign="left" color="#FFD233" pb="2">
                {currentMonth}
            </Text>
        </>
    )
}
