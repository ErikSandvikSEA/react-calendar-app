import React from 'react';
import { useState, useEffect } from 'react'
import {
  Frame,
  Header,
  Button,
  Body,
  Day,
} from './styles'



function Calendar() {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const leapDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

  const today = new Date()
  const [date, setDate] = useState(today)
  const [day, setDay] = useState(date.getDate())
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date))

  useEffect(() => {
    setDay(date.getDate())
    setMonth(date.getMonth())
    setYear(date.getFullYear())
    setStartDay(getStartDayOfMonth(date))
  }, [date])

  function getStartDayOfMonth(date){
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  function isLeapYear(year){
    return (year % 4 === 0 && year %100 !== 10) || year % 400 === 0
  }

  const days = isLeapYear ? leapDays : monthDays

  return (
    <Frame>
      <Header>
        <Button onClick={()=> setDate(new Date(year, month - 1, day))}>Previous Month</Button>
        <div>
          {months[month]} {year}
        </div>
        <Button onClick={()=> setDate(new Date(year, month+1, day))}>Next Month</Button>
      </Header>
      <Body>
        {weekDays.map(d => (
          <Day key={d}>
            <strong>{d}</strong>
          </Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2)
            return(
              <Day
                key={index}
                isToday={d === today.getDate()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {d > 0 ? d : ''}
              </Day>
            )
          })
        }
      </Body>
    </Frame>
  );
}

export default Calendar;