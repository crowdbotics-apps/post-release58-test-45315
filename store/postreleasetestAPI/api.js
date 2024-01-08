import axios from "axios"
const postreleasetestAPI = axios.create({
  baseURL: "https://post-release58-test-45315.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return postreleasetestAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return postreleasetestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return postreleasetestAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_suma_list(payload) {
  return postreleasetestAPI.get(`/api/v1/suma/`)
}
function api_v1_suma_create(payload) {
  return postreleasetestAPI.post(`/api/v1/suma/`, payload)
}
function api_v1_suma_retrieve(payload) {
  return postreleasetestAPI.get(`/api/v1/suma/${payload.id}/`)
}
function api_v1_suma_update(payload) {
  return postreleasetestAPI.put(`/api/v1/suma/${payload.id}/`, payload)
}
function api_v1_suma_partial_update(payload) {
  return postreleasetestAPI.patch(`/api/v1/suma/${payload.id}/`, payload)
}
function api_v1_suma_destroy(payload) {
  return postreleasetestAPI.delete(`/api/v1/suma/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return postreleasetestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return postreleasetestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return postreleasetestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return postreleasetestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return postreleasetestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return postreleasetestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return postreleasetestAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return postreleasetestAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return postreleasetestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return postreleasetestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return postreleasetestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_suma_list,
  api_v1_suma_create,
  api_v1_suma_retrieve,
  api_v1_suma_update,
  api_v1_suma_partial_update,
  api_v1_suma_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
