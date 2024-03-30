<template>
  <div class="login">
    <div class="loginbox">
      <div class="loginmain">
        <img src="@/assets/common/logo.png" />
        <fieldset>
          <legend>登录</legend>
        </fieldset>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="0"
          class="login_form"
        >
          <el-form-item label="" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入昵称"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-button
            class="login_btn"
            type="primary"
            @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <div class="login_tips">
            还没有账号？
            <span @click="$router.push({ path: '/register' })">立即注册»</span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "login",
  metaInfo: {
    title: "登录", // 设置页面标题
    meta: [
      { name: "description", content: "SSO单点登录，统一登录" }, // 设置页面描述
    ],
  },
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: { required: true, message: "请输入昵称", trigger: "blur" },
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {
    var token = $cookies.get("token");
    if (token != "") {
      // this.$router.push({ path: "/user" });
    }
  },
  computed: {},
  methods: {
    subLogin() {
      let _this = this;
      api.loginApi(this.ruleForm).then((res) => {
        const { code, data, msg } = res;
        if (code == 200) {
          $cookies.set("token", data.token, 60 * 60 * 24 * 7);
          $cookies.set("username", data.username, 60 * 60 * 24 * 7);
          $cookies.set("head_url", data.head_url, 60 * 60 * 24 * 7);
          this.$message({
            message: "登录成功",
            type: "success",
            duration: 1000,
            onClose() {
              _this.$router.push({ path: "/user" });
            },
          });
        } else if (code == 400) {
          if (data.name && data.name != "") {
            this.$message.error(data.name);
          }
          if (data.password && data.password != "") {
            this.$message.error(data.password);
          }
        } else {
          this.$message.error(msg);
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.subLogin();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../assets/images/background.webp") no-repeat;
  background-size: cover;
}
.loginbox {
  padding: 20px;
  border-radius: 4px;
  width: 340px;
  background: rgba(0, 0, 0, 0.45);
}
.loginmain {
  display: flex;
  flex-direction: column;
}
.loginmain fieldset {
  margin: 10px 0 20px;
  border-width: 1px 0 0;
  text-align: center;
}
.loginmain legend {
  text-align: center;
  padding: 0 10px;
  font-size: 20px;
  font-weight: 300;
  color: whitesmoke;
}
.login_btn {
  width: 100%;
  height: 38px;
  line-height: 38px;
  padding: 0 18px;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  background-color: #1e9fff;
  border-radius: 100px;
  font-size: 14px;
  border: none;
}
.login_tips {
  width: 100%;
  text-align: center;
  color: #fff;
  line-height: 32px;
  font-size: 14px;
}
.login_tips span {
  cursor: pointer;
  color: cornflowerblue;
}
/* 最大宽度是700px时 */
@media (max-width: 700px) {
  .loginbox {
    width: 75%;
  }
}
</style>
