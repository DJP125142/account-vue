// common.js
import cookies from "vue-cookies";

export function formatDate(date) {
    // Your date formatting logic here
}

export function capitalize(str) {
    // Your capitalize logic here
}

// 判断是否登录
export function isLogin() {
    var token = cookies.get("token");
    if (token && token != '') {
        return true;
    }
    return false;
}
