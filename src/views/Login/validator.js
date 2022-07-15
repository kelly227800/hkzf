import { Toast } from 'vant'
export const validator1 = (val) => {
  const reg1 = /^[\s\S]*.*[^\s][\s\S]*$/
  const reg2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,8}$/
  const flag1 = reg1.test(val)
  const flag2 = reg2.test(val)
  if (!flag1) {
    Toast('用户名和密码不能为空')
  } else if (!flag2) {
    Toast('用户格式5-8位的字母和数字')
  }
  const flag = flag1 && flag2
  return flag
}

export const validator2 = (val2) => {
  const reg1 = /^[\s\S]*.*[^\s][\s\S]*$/
  const reg2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,12}$/
  const flag1 = reg1.test(val2)
  const flag2 = reg2.test(val2)
  if (!flag1) {
    Toast('用户名和密码不能为空')
  } else if (!flag2) {
    Toast('密码格式5-12位的字母和数字')
  }
  const flag = flag1 && flag2
  return flag
}
