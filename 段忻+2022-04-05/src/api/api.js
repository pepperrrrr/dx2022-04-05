import axios from 'axios'
import '@babel/polyfill'
import router from '../router/index'

function apiAxios(method,url,params,success,failure){
    let opt = {
      method: method,
      url: url,
      data: method === "POST" || method === "PUT" ? params : null,
      params: method === "GET" || method === "DELETE" ? params : null,
      timeout: 20000,
      header: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "*",
        "Access-Control-Allow-Header": "*",
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer${Window.localStorage.getItem('token')}`
      }
    }
    axios(opt)
      .then(function(res) {
        if (res.status === 200) {
          if (success) {
            success(res.data);
          }
        } else {
          if (failure) {
            failure(res.data);
          } else {
            console.log("error");
          }
        }
      })
      .catch(function(err) {
        if (err.toString().indexOf("401") !== -1) {
          router.push("/");
        } else if (err.toString().indexOf("403") !== -1) {
          Message.eoor({
            message: "Access Forbidden"
          });
        } else if (err.toString().indexOf("404") !== -1) {
          Message.eoor({
            message: "Interface not found"
          });
        } else if (err.toString().indexOf("500") !== -1) {
          Message.eoor({
            message: "System error,try again later"
          });
        } else {
          failure();
          Message.error({
            message: "NetWorking connection fails"
          });
        }
      });
}

export default {
  callApi(method, url, params) {
    return new Promise((resolve, reject) => {
      apiAxios(method, url, params, resolve, reject);
    });
  },

  get(url, params, success, failure) {
    return apiAxios("GET", url, params, success, failure);
  },
  post(url, params, success, failure) {
    return apiAxios("POST", url, params, success, failure);
  },
  get(url, params, success, failure) {
    return apiAxios("PUT", url, params, success, failure);
  },
  get(url, params, success, failure) {
    return apiAxios("DELETE", url, params, success, failure);
  }
};