import React from 'react';
import table_4 from '../img/brown4persontable.png';
import table_6 from '../img/brown6persontable.png';
import './table.css';

export default function Table(props) {
  let tableImg = function(table) {
    if (table == 'table_4')
      return table_4;
    else
      return table_6
  }
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <figure>
        <img src={tableImg()} alt={props.alt} className="img-thumbnail tableImg" />
        <figcaption className={props.figClass}>{props.figNumber}</figcaption>
      </figure>
    </div>
  );
}
