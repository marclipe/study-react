import { UserActionTypes } from "./action-types"

export const LoginUser = (payload) => ({
  //action sendo despachada
  type: UserActionTypes.LOGIN,
  payload,
})

export const LogoutUser = () => ({
  type: UserActionTypes.LOGOUT,
})