import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/direcory.selectors'

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
)

const mapStateProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateProps)(Directory);
