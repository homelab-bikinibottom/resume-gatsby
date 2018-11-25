import React, { PureComponent } from 'react';
import SectionItem from './SectionItem';

export default function Section({ data, id, title }) {
  if ( data.length === 0 ) return null
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <h2 id={id}>{title}</h2>
        </div>
      </div>
      {
        data.map((data, key) => (
          <SectionItem data={data} key={key} />
        ))
      }
    </div>
  )
}
