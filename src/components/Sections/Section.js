import React from 'react';
import SectionItem from './SectionItem';

export default function Section({ data, filters, id, title }) {
  const filtered = getFiltered({ data, filters })
  return (
    <div id={id}>
      <div className="row">
        <div className="col-lg-12">
          <h2>{title}</h2>
        </div>
      </div>
      {
        filtered.map((node, key) => (
          <SectionItem data={node} key={key} />
        ))
      }
    </div>
  )
}

const getFiltered = ({ data, filters }) => {
  if (filters.length === 0) {
    return data
  }
  const filtered = []
  data.forEach(function(d) {
    if(d.hasOwnProperty('keywords')) {
      for(let i = 0; i < filters.length; i++){
        if(d.keywords.some(elem => elem === filters[i])) {
          filtered.push(d)
          break
        }
      }
    }
  })
  return filtered
}
