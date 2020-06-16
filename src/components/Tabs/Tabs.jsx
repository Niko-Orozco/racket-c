import React from 'react';
import Tab from '../Tab/Tab';
import './Tabs.scss';

export default function Tabs({
  setCurrentActive,
  currentActive,
  direction,
  type,
  index,
}) {
  const TABS_QUANTITY = index;
  let tabs = new Array();
  for (let i = 1; i <= TABS_QUANTITY; i++) {
    tabs.push(
      <Tab
        onClick={setCurrentActive}
        name={`${i}. ${type} `}
        index={i}
        currentActive={currentActive}
      />
    );
  }
  return <div className={`tabs--${direction}`}>{tabs}</div>;
}
