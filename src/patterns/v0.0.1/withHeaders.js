import React, { Component } from 'react';
import { USER_DATA_STORAGE_NAME } from '../../common/Constants';
import { getItem } from '../../common/StorageUtils';
import { Android as Dump } from '../../common/CordovaPluginDumpData';

const token = getItem(USER_DATA_STORAGE_NAME);

const withHeaders = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: null,
    };
  }

  componentDidMount() {
    this.initialize();
    document.addEventListener('deviceready', this.onDeviceReady, false);
  }

  componentWillUnmount() {
    document.removeEventListener('deviceready', this.onDeviceReady, false);
  }

  // 웹에서 동작 가능하기 위한 임시
  initialize = () => {
    if (!window.cordova) {
      this.setState({
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          id: Dump.Device.uuid,
          dv_uuid: Dump.Device.uuid,
          dv_serial: Dump.Device.serial,
          token,
        },
      });
    }
  };

  onDeviceReady = () => {
    this.setState({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        id: window.device.uuid,
        dv_uuid: window.device.uuid,
        dv_serial: window.device.serial,
        token,
      },
    });
  };

  render() {
    const { headers } = this.state;
    if (!headers) return null;
    return <WrappedComponent {...this.props} headers={headers} />;
  }
};

export default withHeaders;
