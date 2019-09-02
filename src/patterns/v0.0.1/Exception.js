/**
 * @brief api properties
 * @param Object res 응답값 { status: <Number>, results: <String> }
 * @param String jsFileName 호출 된 파일 명
 * @param String callFucName 호출 된 함수 명
 * @param Func aciton 예외처리 후 실행 할 액션 함수
 * @return Bool
 */
function Exception(res, acitons) {
  console.log('Exception', acitons.props);
  try {
    if (res.status === -10000) {
      console.log('서버통신 오류');
      return true;
    }
    if (res.status === 1100) {
      console.log(res);
      return true;
    }
    if (res.status === 1161) {
      console.log(res);
      return true;
    }
    return false;
  } catch (e) {
    console.log('Exception 자체 에러 발생', e);
    return true;
  }
}

export default Exception;
