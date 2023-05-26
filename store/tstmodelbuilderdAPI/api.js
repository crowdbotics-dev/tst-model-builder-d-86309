import axios from "axios"
const tstmodelbuilderdAPI = axios.create({
  baseURL: "https://tst-model-builder-d-86309.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_hi_list(payload) {
  return tstmodelbuilderdAPI.get(`/api/v1/hi/`)
}
function api_v1_hi_create(payload) {
  return tstmodelbuilderdAPI.post(`/api/v1/hi/`, payload.data)
}
function api_v1_hello_list(payload) {
  return tstmodelbuilderdAPI.get(`/api/v1/hello/`)
}
function api_v1_hello_create(payload) {
  return tstmodelbuilderdAPI.post(`/api/v1/hello/`, payload.data)
}
function api_v1_login_create(payload) {
  return tstmodelbuilderdAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return tstmodelbuilderdAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_hi_retrieve(payload) {
  return tstmodelbuilderdAPI.get(`/api/v1/hi/${payload.id}/`)
}
function api_v1_hi_update(payload) {
  return tstmodelbuilderdAPI.put(`/api/v1/hi/${payload.id}/`, payload.data)
}
function api_v1_hi_partial_update(payload) {
  return tstmodelbuilderdAPI.patch(`/api/v1/hi/${payload.id}/`, payload.data)
}
function api_v1_hi_destroy(payload) {
  return tstmodelbuilderdAPI.delete(`/api/v1/hi/${payload.id}/`)
}
function rest_auth_user_retrieve(payload) {
  return tstmodelbuilderdAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstmodelbuilderdAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return tstmodelbuilderdAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return tstmodelbuilderdAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return tstmodelbuilderdAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return tstmodelbuilderdAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstmodelbuilderdAPI.post(`/rest-auth/logout/`)
}
function api_v1_hello_retrieve(payload) {
  return tstmodelbuilderdAPI.get(`/api/v1/hello/${payload.id}/`)
}
function api_v1_hello_update(payload) {
  return tstmodelbuilderdAPI.put(`/api/v1/hello/${payload.id}/`, payload.data)
}
function api_v1_hello_partial_update(payload) {
  return tstmodelbuilderdAPI.patch(`/api/v1/hello/${payload.id}/`, payload.data)
}
function api_v1_hello_destroy(payload) {
  return tstmodelbuilderdAPI.delete(`/api/v1/hello/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return tstmodelbuilderdAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return tstmodelbuilderdAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return tstmodelbuilderdAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstmodelbuilderdAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return tstmodelbuilderdAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_hi_list,
  api_v1_hi_create,
  api_v1_hello_list,
  api_v1_hello_create,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_hi_retrieve,
  api_v1_hi_update,
  api_v1_hi_partial_update,
  api_v1_hi_destroy,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_hello_retrieve,
  api_v1_hello_update,
  api_v1_hello_partial_update,
  api_v1_hello_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
