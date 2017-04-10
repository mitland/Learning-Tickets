import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const SideAddButton = ({ onClick }) => {
  return <FloatingActionButton style={SideAddButton.style} secondary={true} onClick={onClick}>
				      <ContentAdd />
		</FloatingActionButton>;
            
};

SideAddButton.style = {
	position: 'fixed',
	right: '1%',
	bottom: '5%'
}

SideAddButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SideAddButton;
