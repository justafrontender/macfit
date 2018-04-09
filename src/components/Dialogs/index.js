import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { close } from 'actions/dialogs';
import Alert from 'components/Alert';
import Popup from 'components/Popup';
import Btn from 'components/Btn';

const Dialogs = ({ dialogs, closeDialog }) => {
  if (!dialogs.length) return null;
  return (
    <Popup onClose={closeDialog}>
      <Alert buttons={<Btn onClick={closeDialog}>Закрыть</Btn>}>
        {dialogs[dialogs.length - 1].children}
      </Alert>
    </Popup>
  );
};

Dialogs.propTypes = {
  // number: PropTypes.number,
};

Dialogs.defaultProps = {
  // classMix: ''
};

const mapStateToProps = ({ dialogs }) => ({ dialogs });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(close());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
