import React from 'react';
import PropTypes from 'prop-types';
import {DragSource} from 'react-dnd'
import table_4 from '../img/brown4persontable.png';
import table_6 from '../img/brown6persontable.png';
import {Types} from '../../constants';
import './table.css';

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tablePosition: []
    }
  }
  tableImg = function(table) {
    if (table === 'table_4') {
      return table_4;
    } else {
        return table_6;
    }
  }
  render () {
    const {connectDragSource, src } = this.props
    return connectDragSource (
      <div>
        <figure>
          <img src={this.tableImg(src)} alt={this.props.alt} className="img-thumbnail tableImg" />
          <figcaption className={this.props.figClass}>{this.props.figNumber}</figcaption>
        </figure>
      </div>
    );
  }
}
const tableSource = {
  beginDrag(props) {
    return {};
  },
  endDrag(props) {
     if (props.position) {
       props.removeTablePosition(props.position.x, props.position.y);
     }
    return {};
  }
}
function collect(connect, monitor) {
 return {
   connectDragSource: connect.dragSource(),
   isDragging: monitor.isDragging()
 }
}
Table.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};
export default DragSource(Types.TABLE, tableSource, collect)(Table);
