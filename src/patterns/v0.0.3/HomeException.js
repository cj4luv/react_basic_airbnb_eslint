/**
 * @brief api properties
 * @param Object res 응답값 { status: <Number>, results: <String> }
 */
function HomeException(res) {
  console.log('HomeException', res);
  try {
    if (res.status === -10000) {
      console.log('서버통신 오류');
    }
    if (res.status === 1100) {
      console.log('HomeException 1100');
    }
    if (res.status === 1161) {
      console.log('HomeException 1161');
    }
  } catch (e) {
    console.log('HomeException 자체 에러 발생', e);
  }
}

export default HomeException;
