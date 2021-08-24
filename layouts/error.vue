<template>
  <div class="row error-wrap">
    <div class="box">
      <div class="btn btn-warning">
        <NuxtLink class="_goHome text-white" to="/">Ôi Không !!!</NuxtLink>
      </div>
      <p v-if="error.statusCode === 404">
        <span>error 404 !</span> Xin lỗi! không tìm thấy trang bạn chọn <br />
        Vui lòng trở về
        <NuxtLink class="text-white" to="/">Trang chủ</NuxtLink>.
      </p>
      <h2 v-else class="mt-5 text-warning">
        Đã có lỗi xãy ra. Chúng tôi rất xin lỗi!!. <br />
        Vui lòng trở về
        <NuxtLink class="text-white" to="/">Trang chủ</NuxtLink>.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  // layout: 'error', // you can set a custom layout for the error page
}
</script>

<style lang="css" scoped>
.error-wrap {
  margin: 0;
  padding: 0;
  height: 750px;
}

.box {
  text-align: center;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.box ._goHome {
  font-size: 35px;
  font-weight: bold;
}
.box .btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box div {
  width: 250px;
  height: 80px;
  line-height: 80px;
  color: #ffc900;
  background-color: #ffc900;
  font-size: 280%;
  position: absolute;
  top: 490px;
  text-transform: capitalize;
  animation: moving 8s linear infinite;
  -webkit-animation: moving 8s linear infinite;
  -moz-animation: moving 8s linear infinite;
  -o-animation: moving 8s linear infinite;
  transform-origin: 50% -400%;
}

.box div::before {
  content: '';
  width: 25px;
  height: 25px;
  background-color: #ffc900;
  border-radius: 50%;
  display: block;
  position: absolute;
  left: 45%;
  top: -350px;
}

.box div::after {
  content: '';
  width: 3px;
  height: 335px;
  background-color: #ffc900;
  display: block;
  position: absolute;
  left: 50%;
  top: -330px;
}

.box p {
  position: absolute;
  top: 560px;
  left: 38%;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  width: 300px;
}

.box p span {
  display: block;
  font-size: 300%;
}

@keyframes moving {
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
}

@-webkit-keyframes moving {
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
}

@-moz-keyframes moving {
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
}

@-o-keyframes moving {
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
}
</style>
