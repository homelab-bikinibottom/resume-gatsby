import React from 'react';

export default function FaIcon({ type }) {
  const style = ['android', 'github'].includes(type) ? 'fab' : 'fa'
  return (
    <span className={style + " fa-" + type}></span>
  )
}
