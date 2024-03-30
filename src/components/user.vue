<template>
  <div class="user">
    <div class="userbox">
      <img src="@/assets/common/logo.png" />
      <fieldset>
        <legend>用户</legend>
      </fieldset>
      <el-avatar :size="80" :src="head_url"></el-avatar>
      <div class="user_name">{{ username }}</div>
      <el-button type="danger" size="small" @click="exitLogin"
        >退出登录</el-button
      >
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "user",
  metaInfo: {
    title: "用户", // 设置页面标题
    meta: [
      { name: "description", content: "SSO单点登录，用户信息" }, // 设置页面描述
    ],
  },
  data() {
    return {
      username: "",
      head_url: "",
    };
  },
  mounted() {
    this.toRedirect();
    this.getUserInfo();
  },
  computed: {},
  methods: {
    // 获取用户信息
    getUserInfo() {
      var token = $cookies.get("token");
      if (token != null) {
        this.username = $cookies.get("username");
        var head_url = $cookies.get("head_url");
        if (head_url == null) {
          // 默认头像
          head_url = require("@/assets/common/head_default.png");
        }
        this.head_url = head_url;
      } else {
        this.$router.push({ path: "/login" });
      }
    },

    // 退出登录
    exitLogin() {
      $cookies.remove("token");
      $cookies.remove("username");
      $cookies.remove("head_url");
      this.$router.push({ path: "/login" });
    },

    // 回到业务测
    toRedirect() {
      // 已登录且有回调地址的话
      var redirect_url = localStorage.getItem("redirect_url");
      if ($cookies.get("token") && redirect_url && redirect_url != "") {
        // 调用 API 请求，拿 token 去换取 code
        api.createCodeApi().then((res) => {
          const { code, data } = res;
          if (code == 200) {
            localStorage.removeItem("redirect_url");
            // 构建新的查询参数对象，包含原有的参数和新的code参数
            var jump_url = new URL(redirect_url);
            var params = new URLSearchParams(jump_url.search);
            params.append("code", data);
            jump_url.search = params.toString();
            // 使用 window.location.href 进行外部链接跳转
            window.location.href = jump_url;
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../assets/images/background.webp") no-repeat;
  background-size: cover;
}
.userbox {
  padding: 20px;
  border-radius: 4px;
  width: 340px;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user_name {
  margin: 12px 0;
  line-height: 32px;
  font-size: 16px;
  color: #fff;
  // text-shadow: -1px -1px #fff, 1px -1px #fff, -1px 1px #fff, 1px 1px #fff;
}
.user fieldset {
  width: 100%;
  margin: 10px 0 20px;
  border-width: 1px 0 0;
  text-align: center;
}
.user legend {
  text-align: center;
  padding: 0 10px;
  font-size: 20px;
  font-weight: 300;
  color: whitesmoke;
}
/* 最大宽度是700px时 */
@media (max-width: 700px) {
  .userbox {
    width: 75%;
  }
}
</style>
