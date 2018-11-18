import React from 'react';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
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
  month = String(month);
  return (
    <option key={`month-${i}`} value={i} defaultValue={todayMonth === i}>{month}</option>
  );
});

export const dayOptions = days.map((day, i) => {
  day = String(day);
  return (
    <option key={`day-${i}`} value={day} defaultValue={todayDay === day}>{day}</option>
  );
});

export const yearOptions = years.map((year, i) => {
  year = String(year);
  return (
    <option key={`year-${i}`} value={year} defaultValue={todayYear === year}>{year}</option>
  );
});
