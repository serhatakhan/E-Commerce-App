import {axiosClient} from './instance';

// axios isteklerini düzenliyoruz
export async function getRequest(URL, params) {
  const response = await axiosClient.get(`${URL}`, {params: params});
  return response;
}
// paylaod yani post isteğiyle göndereceğimiz veriler
export async function postRequest(URL, payload) {
  const response = await axiosClient.post(`${URL}`, payload);
  return response;
}

export async function putRequest(URL, payload) {
  const response = await axiosClient.put(`${URL}`, payload);
  return response;
}

export async function patchRequest(URL, payload) {
  const response = await axiosClient.patch(`${URL}`, payload);
  return response;
}

export async function deleteRequest(URL, params) {
  const response = await axiosClient.delete(`${URL}`, {params: params});
  return response;
}
