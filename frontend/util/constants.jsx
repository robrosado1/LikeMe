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

const days = [...Array(31).keys()].map(idx => idx + 1);
const currYear = new Date().getFullYear();
const range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);

const years = range(currYear - 99, currYear + 1);

const mapOptions = (type, arr) => arr.map(el => {
  el = String(el);
  return (
    <option key={`${type}-${el}`} value={el}>{el}</option>
  );
});

export const monthOptions = mapOptions('month', months);
export const dayOptions = mapOptions('day', days);
export const yearOptions = mapOptions('year', years);
