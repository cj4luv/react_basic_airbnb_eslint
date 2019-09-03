// https://github.com/axios/axios#request-config
import endpoints from './endpoints';
import * as request from './request';

export const loginApi = (config) => {
  const url = endpoints.auth.login;
  const res = request.Put(url, config);
  return res;
};

export const getMyWelletApi = (config) => {
  const url = endpoints.point.get_my_wallet;
  const res = request.Get(url, config);
  return res;
};

export const getNhcHashDataApi = (config) => {
  const url = endpoints.loan.nhc;
  const res = request.Get(url, config);
  return res;
};

export const getNhcLoanIsSuccessApi = (config) => {
  const url = endpoints.loan.loan_result;
  const res = request.Get(url, config);
  return res;
};

export const getMobilePaymentStatusApi = (config) => {
  const url = endpoints.loan.credit_info;
  const res = request.Get(url, config);
  return res;
};

export const getAccountPaymentStatusApi = (config) => {
  const url = endpoints.bank.kftc_check;
  const res = request.Get(url, config);
  return res;
};

export const postNhcLoanPageApi = async (body) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = 'https://nm.nhcapital.co.kr/mobile/financial/personal/hipay/mselectInHipay.nh';

  const config = {
    method: 'POST',
    headers,
    body,
  };

  const response = await fetch(url, config);

  return response;
};

export const postDepositBankAccApi = async (config) => {
  const url = endpoints.bank.kftc_deposit_bankacc;
  const res = request.Post(url, config);
  return res;
};

export const getBellCountsApi = async (config) => {
  const url = endpoints.user.get_noti_unread_cnt;
  const res = request.Get(url, config);
  return res;
};

export const getAutoPayApi = async (config) => {
  const url = endpoints.user.get_autopay;
  const res = request.Get(url, config);
  return res;
};

export const getRefundStatusApi = async (config) => {
  const url = endpoints.bank.refund_status;
  const res = request.Get(url, config);
  return res;
};

export const getGiftyconGetSeqApi = async (config) => {
  const url = endpoints.giftycon.get_seq;
  const res = request.Get(url, config);
  return res;
};
