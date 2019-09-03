import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findKey } from 'lodash/object';

import { ButtonContainer } from '../containers';
import { loadUser } from '../actions';

class Home extends PureComponent {
  componentDidMount() {
    const { getUserData, login } = this.props;

    const res = getUserData(login);

    console.log('did', login, res);
  }

  render() {
    const { user, login } = this.props;

    console.log('user', user, 'login', login);

    return (
      <Fragment>
        <ButtonContainer />
      </Fragment>
    );
  }
}

Home.propTypes = {
  login: PropTypes.string.isRequired,
  user: PropTypes.shape({
    // state: PropTypes.object,
  }),
  getUserData: PropTypes.func.isRequired,
};

Home.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => {
  const login = 'cj4luv';

  const { entities: { users } } = state;

  console.log('users', users);

  console.log('state', state);

  const userid = findKey(users, user => user.login === login);

  console.log('userid', userid);

  return {
    login,
  };
};

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  getUserData: login => dispatch(loadUser(login)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
