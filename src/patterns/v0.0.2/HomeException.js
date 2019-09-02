/**
 * @brief api properties
 * @param Object res 응답값 { status: <Number>, results: <String> }
 * @param Func aciton 예외처리 후 실행 할 액션 함수
 * @return Bool
 */
function HomeException(res, actions) {
  console.log('HomeException', actions);
  try {
    if (res.status === -10000) {
      console.log('서버통신 오류');
    }
    if (res.status === 1100) {
      console.log(res);
    }
    if (res.status === 1161) {
      console.log(res);
      actions.props.history.push('/login');
    }
  } catch (e) {
    console.log('HomeException 자체 에러 발생', e);
  }
}

export default HomeException;
