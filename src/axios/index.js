import axios from 'axios';

const baseUrl = "https://www.helloc.xyz/api"

export function login(params) {
  return axios({
    method: 'post',
    url: `${baseUrl}/login`,
    data: params
  })
}
export function regist(params) {
  return axios({
    method: 'post',
    url: `${baseUrl}/regist`,
    data: params
  })
}
export function updateUserName(params) {
  return axios({
    method: 'post',
    url: `${baseUrl}/updateUserName`,
    data: params
  })
}
export function quitGroup(params) {
  return axios({
    method: 'post',
    url: `${baseUrl}/quitGroup`,
    data: params
  })
}
export function findAllGroupInfo(params) {
  return axios({
    method: 'post',
    url: `${baseUrl}/findAllGroupInfo`,
    data: params
  })
}
export function group(params) {
  return axios({
    method: 'post',
    url: `${baseUrl}/group`,
    data: params
  })
}
export function submit(params) {
  return axios({
    method: 'post',
    url: `${baseUrl}/submit`,
    data: params
  })
}
export function leave(params) {
  return axios({
    method: 'post',
    url: `${baseUrl}/leave`,
    data: params
  })
}
export function viewReport(params) {
  return axios({
    method: 'post',
    url: `${baseUrl}/viewReport`,
    data: params
  })
}