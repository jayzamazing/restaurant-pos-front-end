import React from 'react';

export default function Table(props) {
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <figure>
        <img src={props.src} alt={props.alt} class="img-responsive" />
        <figcaption className={props.figClass}>{props.figNumber}</figcaption>
      </figure>
    </div>
  );
}
