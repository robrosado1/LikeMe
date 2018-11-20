import React from 'react';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const todayDate = new Date();
const todayDay = todayDate.getDate();
const todayMonth = todayDate.getMonth();
const todayYear = todayDate.getFullYear();

const days = [...Array(31).keys()].map(idx => idx + 1);
const currYear = new Date().getFullYear();
const range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);

const years = range(currYear - 99, currYear + 1).reverse();

export const monthOptions = months.map((month, i) => {
  month = String(month).slice(0,3);
  return (
    <option key={`month-${i}`} value={months[i]} defaultValue={i === 0}>{month}</option>
  );
});

export const dayOptions = days.map((day, i) => {
  day = String(day);
  return (
    <option key={`day-${i}`} value={day} defaultValue={i === 0}>{day}</option>
  );
});

export const yearOptions = years.map((year, i) => {
  year = String(year);
  return (
    <option key={`year-${i}`} value={year} defaultValue={year === todayYear}>{year}</option>
  );
});
