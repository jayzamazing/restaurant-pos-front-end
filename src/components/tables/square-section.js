import React from 'react';
import './square-section.css';

export default function SquareSection(props) {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 square-section">
      {props.children}
    </div>
  );
}
