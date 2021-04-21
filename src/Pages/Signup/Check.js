export function isId(asValue) {
  var regExp = /[A-Za-z0-9]\w{4,}/;
  return regExp.test(asValue) ? true : false; //형식에 맞는 경우 true 리턴
}
export function isPassword(asValue) {
  var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
  return regExp.test(asValue) ? true : false; //형식에 맞는 경우 true 리턴
}
export function isEmail(asValue) {
  var regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  return regExp.test(asValue) ? true : false;
}
