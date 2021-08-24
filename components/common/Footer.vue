<template>
  <div
    class="row mt-2 p-2 footer bg-component"
    :class="{ _ismobile: $device.isMobile }"
  >
    <div class="footer--border col-md-12 contaier px-0">
      <div class="row mx-0 px-0">
        <div class="_policy col-md-9 col-12">
          <a class="_link text-white text-hover-yellow" href="/">XEM PHIM</a>
          <nuxt-link
            class="_link text-white text-hover-yellow"
            to="/language-anime"
            >LIÊN HỆ</nuxt-link
          >
          <nuxt-link
            class="_link text-white text-hover-yellow"
            to="/privacy-policy"
            >CHÍNH SÁCH RIÊNG TƯ</nuxt-link
          >
          <nuxt-link
            class="_link text-white text-hover-yellow"
            to="/terms-of-use"
            >ĐIỀU KHOẢN SỬ DỤNG</nuxt-link
          >
        </div>
        <div class="_contact col-md-3 col-12">
          <a
            class="_contact--icon text-hover-yellow"
            href="https://www.facebook.com/HHTQAnimation/"
            ><i class="fab fa-facebook-square"></i
          ></a>
          <a class="_contact--icon text-hover-yellow" href=""
            ><i class="fab fa-twitter-square"></i
          ></a>
          <a
            class="_contact--icon text-hover-yellow"
            href="https://www.youtube.com/channel/UCY9Ew7Ma9OCSXKvt-uAzjQg"
            ><i class="fab fa-youtube-square"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="col-md-12 p-2 _content-intro text-center">
      Để mang đến những bộ phim mới nhất, đội ngũ quản trị viên, biên tập viên
      cũng như cộng tác viên của Website hhtq.tv sẽ đảm bảo cập nhật, việt hóa
      những phim mới nhất một cách nhanh chóng và chính xác nhất. Nếu các bạn
      không tìm thấy bộ phim ưa thích, hãy liên hệ với bọn mình qua fanpage
      https://www.facebook.com/HHTQAnimation hoặc email ads@hhtq.tv nhé.
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  &--border {
    border-bottom: 2px solid var(--mainbackground);
  }
  ._policy {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  ._contact {
    display: flex;
    justify-content: flex-end;
    &--icon {
      color: var(--white);
      font-size: 45px;
      margin: 0 5px;
    }
  }
  ._web-description {
    display: flex;
    justify-content: center;
    a {
      color: var(--gray2);
      transition: 0.3s ease;
      &:hover {
        color: var(--white);
      }
    }
  }
  ._content-intro {
    color: var(--yellow1);
  }
  ._copy {
    text-align: center;
    ._content {
      padding-top: 10px;
      font-size: 11px;
      color: var(--gray2);
      transition: 0.3s ease;
      &:hover {
        color: var(--white);
      }
    }
  }
  &._ismobile {
    .footer--border {
      justify-content: center;
    }
    ._policy {
      flex-direction: column;
      justify-content: stretch;
      ._link {
        width: 100%;
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #78909c;
      }
    }
  }
}
</style>
