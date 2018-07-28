import React from 'react';
import { DropTarget } from 'react-dnd';
import './table-section.css';
import {Types} from '../../constants';
import PropTypes from 'prop-types';
import SquareSection from './square-section';

export class TableSection extends React.Component {
  render() {
    const {connectDropTarget} = this.props;
    return connectDropTarget (
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 table-grid">
        <SquareSection>
          {this.props.children}
        </SquareSection>
      </div>
    );
  }
}
const tableTarget = {
  drop(props) {
    const {moveTable, position: {x, y}} = props;
    moveTable(x, y);
  },
  canDrop(props) {
    const {canMoveTable, position: {x, y}} = props;
    return canMoveTable(x, y);
  }
};
function collect(connect, monitor) {
  const info = {
   connectDropTarget: connect.dropTarget(),
   isOver: monitor.isOver(),
   canDrop: monitor.canDrop()
 }
 return info;
}
TableSection.propTypes = {
  position: PropTypes.objectOf(PropTypes.number),
  isOver: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func,
  movePiece: PropTypes.func
};
export default DropTarget(Types.TABLE, tableTarget, collect)(TableSection);
