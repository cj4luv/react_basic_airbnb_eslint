import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ButtonContainer } from '../containers';
import { loadUser } from '../actions';

class Home extends PureComponent {
  componentDidMount() {
    const { getUserData } = this.props;

    const res = getUserData('cj4luv');

    console.log('did', res);
  }

  render() {
    const { users } = this.props;

    console.log('users', users);

    return (
      <Fragment>
        <ButtonContainer />
      </Fragment>
    );
  }
}

Home.propTypes = {
  users: PropTypes.shape({}),
  getUserData: PropTypes.func.isRequired,
};

Home.defaultProps = {
  users: null,
};

const mapStateToProps = (state) => {
  const { entities: { users } } = state;

  return {
    users,
  };
};

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  getUserData: id => dispatch(loadUser(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
