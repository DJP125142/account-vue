<template>
  <div class="login">
    <div class="loginbox">
      <div class="loginmain">
        <img src="@/assets/common/logo.png" />
        <fieldset>
          <legend>注册</legend>
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
          <el-form-item label="" prop="email">
            <el-input
              v-model="ruleForm.email"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="checkPass">
            <el-input
              placeholder="请确认密码"
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <div class="login_item">
            <el-form-item label="" prop="code">
              <el-input
                placeholder="请输入验证码"
                type="text"
                v-model="ruleForm.code"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <div class="login_code" @click="startCountdown('ruleForm')">
              <span style="width: 100px">{{ countdown }}</span>
            </div>
          </div>
          <el-button
            class="login_btn"
            type="primary"
            @click="submitForm('ruleForm')"
            >注册</el-button
          >
          <div class="login_tips">
            已有账号？
            <span @click="$router.push({ path: '/login' })">点此登录»</span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "register",
  metaInfo: {
    title: "注册", // 设置页面标题
    meta: [
      { name: "description", content: "SSO单点登录，统一注册" }, // 设置页面描述
    ],
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "" || !value) {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "" || !value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      countdown: "发送验证码", // 初始化倒计时为0
      timerId: null, // 保存定时器ID
      canClick: false,
      ruleForm: {
        name: "",
        email: "",
        password: "",
        checkPass: "",
        code: "",
      },
      rules: {
        name: { required: true, message: "请输入昵称", trigger: "blur" },
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  mounted() {},
  methods: {
    getCode() {
      let params = {
        email: this.ruleForm.email,
      };
      api.sendEmailApi(params).then((res) => {
        if (res.code == 200) {
          this.$message({
            message: "发送成功",
            type: "success",
          });
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    startCountdown(formName) {
      this.$refs.ruleForm.validateField("email", (value) => {
        if (value) return;
        this.getCode();
        let nowTime = 60;
        if (this.timerId) return; // 如果已经有定时器则清除之前的定时器
        this.countdown = nowTime + "s"; // 设置初始倒计时为60秒
        this.timerId = setInterval(() => {
          if (nowTime > 1) {
            nowTime--; // 每次减少1秒
            this.countdown = nowTime + "s"; // 设置初始倒计时为60秒
          } else {
            clearInterval(this.timerId); // 当倒计时结束时清除定时器
            nowTime = 60;
            this.countdown = "重新发送"; // 设置初始倒计时为60秒
          }
        }, 1000); // 每隔1秒更新一次倒计时
      });
    },
    submitForm(formName) {
      let _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            name: this.ruleForm.name,
            email: this.ruleForm.email,
            password: this.ruleForm.password,
            code: this.ruleForm.code,
          };
          api.registerApi(params).then((res) => {
            const { code, data, msg } = res;
            if (code == 200) {
              this.$message({
                message: "注册成功",
                type: "success",
                duration: 1000,
                onClose() {
                  _this.$router.push({ path: "/login" });
                },
              });
            } else if (code == 400) {
              if (data != null){
                if (data.name && data.name != "") {
                  this.$message.error(data.name);
                }
                if (data.password && data.password != "") {
                  this.$message.error(data.password);
                }
                if (data.code && data.code != "") {
                  this.$message.error(data.code);
                }
              }else{
                this.$message.error(msg);
              }
            }else {
              this.$message.error(msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  created() {},
  beforeRouteLeave(to, from, next) {
    next();
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
.login_form {
}
.login_item {
  position: relative;
  margin-bottom: 15px;
}
.login_input {
  width: calc(100% - 10px);
  height: 38px;
  line-height: 1.3;
  border: 1px solid #fff;
  border-radius: 2px;
  display: block;
  padding-left: 10px;
  outline: 0;
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
.login_code {
  height: 40px;
  position: absolute;
  right: -1px;
  top: 0;
  cursor: pointer;
}
.login_code span {
  display: block;
  height: 40px;
  line-height: 40px;
  padding: 0 18px;
  background-color: #1e9fff;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  font-size: 14px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  outline: 0;
}
/* 最大宽度是700px时 */
@media (max-width: 700px) {
  .loginbox {
    width: 75%;
  }
}
</style>
