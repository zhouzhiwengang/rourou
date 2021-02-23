<template>
  <div>
        登入页
  </div>
</template>

<script>
import { emailCheck, pwdCheck } from '@/util/util';
import { Toast } from 'vant';
export default {
   name: "login",
   data() {
    return {
      userName: 'zhouzhiwengang@163.com',
      password: '123456',
      userNameErr: '',
      passwordErr: '',
      loading: false,
      redirect: this.$route.query.redirect
    };
  },
  mounted() {
    if (this.redirect) {
      Toast({
        position: 'bottom',
        message: '未登录或登陆过期，请重新登陆~'
      });
    }
  },
  methods: {
    login() {
      this.userNameErr = '';
      this.passwordErr = '';
      this.loading = true;
      if (!emailCheck(this.userName)) {
        this.userNameErr = '邮箱格式不正确';
        this.loading = false;
        return;
      }
      if (!pwdCheck(this.password)) {
        this.passwordErr = '密码格式不正确';
        this.loading = false;
        return;
      }

      if (this.userName ==='root' && this.password ==='123456'){
        this.loading = false;
        this.$router.push('/home');
      } else {
        this.loading = false;
        Toast.fail("用户或密码错误");
      }
    },
    reg() {
      this.$router.push('/reg');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.login
  width 100%
  height 100%
  text-align center
  background url('./../../images/bgc/bgc.jpg')
  background-repeat no-repeat
  background-size cover
  overflow hidden

  h1
    margin-top 40%

.login-from
  width 80%
  text-align center
  padding 10px
  margin 0 auto
  box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19)

  .btn
    text-align center
    margin-top 10px

.slide-enter-active, .slide-leave-active
  transition all 0.5s

.slide-enter, .slide-leave-to
  opacity 0
  transform translate3d(100%, 0, 0)
</style>
