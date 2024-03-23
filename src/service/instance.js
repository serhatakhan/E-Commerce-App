import axios from 'axios';
import {BASE_URL} from './urls';

// axios istemcisi oluşturduk, isteği artık axiosClient ile atacağız
const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASE_URL;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

// * INTERCEPTORS --> ÇIKAN BÜTÜN İSTEKLERİN ATILMADAN ÖNCE
// KONTROL EDİLDİĞİ YAPI !!!

// * interceptorlar, istek gönderilmeden veya yanıt işlenmeden 
// önce belirli noktalarda çalışan işlevlerdir. Bu, isteği veya 
// yanıtı manipüle etmek, başlık eklemek, hata işlemek veya isteği 
// iptal etmek gibi çeşitli görevleri gerçekleştirmemizi sağlar.
// * axiosClient.interceptors.request.use kullanılarak bir istek interceptor'ı eklenmişse, 
// her istek gönderilmeden önce belirtilen işlev çalışır. 
// * axiosClient.interceptors.response.use kullanılarak bir yanıt interceptor'ı eklenmişse, 
// her yanıt alındıktan sonra belirtilen işlev çalışır.
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export {axiosClient}


/* interceptor örnek:

 * mesela dil parametresi var veya bir login işlemi var ve
 token eklemek gerekiyor. bütün isteklerde bu olsun isteniyor mesela.
 biz tüm isteklerde bu token'ı çağırırsak olmaz. !
 * interceptors'ın içinde bu işlemi gerçekleştireceğiz. zaten istek 
 çıkmadan önce tüm istekler interceptors üzerinden geçtiği için
 bu token'ı veya istenen parametreyi eklemiş olacağız.

*/