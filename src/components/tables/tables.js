import React from 'react';
import Table from './table.js';
import TableSection from './table-section.js';
import {setTablePosition} from '../../actions/table';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './tables.css';

export class Tables extends React.Component {
  canMove = (x, y) => {
    // const {propx, propy} = this.props.position;
    //TODO temporary, will replace with logic later
    return true;
  }
  moveTable = (x, y) => {
    if (!this.canMove(x, y))
      return false;
    this.props.setTablePosition(x, y);
  }
  renderTable = (x, y) => {
    const {tx, ty} = this.props.position;
    if (x === tx && y === ty) {
      return <Table/>
    }
  }
  renderTableSection = (i) => {
    const x = i % 12;
    const y = Math.floor(i/12);
    return (
      <TableSection canMoveTable={this.canMove}
        moveTable={this.moveTable} position={{x, y}} key={i}>
        {this.renderTable(x, y)}
      </TableSection>
    );
  }
  render() {
    const sections = [];
    for (let i = 0; i < 60; i++) {
      sections.push(this.renderTableSection(i));
    }
    return (
      <section className="container">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 table-grid">
            <Table src="../img/brown4persontable.png" alt="round table pic"
            figClass="one-digit" figNumber="1" />
          </div>
        </div>
        <div className="row">
        {sections}
        </div>
      </section>
    );
  }
}
//allows subcription to redux updates and access to data stored in redux store
const mapStateToProps = state => ({
  position: state.table.position
});
const mapDispatchToProps = (dispatch, props) => ({
  setTablePosition: (x, y) => {
    dispatch(setTablePosition(x, y));
  }
});
Tables.propTypes = {
  position: PropTypes.objectOf(PropTypes.number),
  setTablePosition: PropTypes.func
};
Tables = DragDropContext(HTML5Backend)(Tables);
Tables = connect(mapStateToProps, mapDispatchToProps)(Tables);
export default Tables;
