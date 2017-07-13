<template>
    <footer class="footer">
        <div class="container is-fluid">
            <div class="columns">
                <div class="column text-left">
                    <p class="title">Headquarters</p>
                    <p class="heading">Techmaster Vietnam</p>
                    <p class="heading">Số 14 ngõ 4 Nguyễn Đình Chiểu, Hà Nội</p>
                </div>
                <div class="column text-left">
                    <p class="title">Chính sách</p>
                    <p class="heading">
                        <a href="/privacy-policy">Chính sách bảo mật</a>
                    </p>
                    <p class="heading">
                        <a href="/security-policy">Quyền riêng tư</a>
                    </p>
                </div>
                <div class="column text-right">
                    <p class="title">Hỗ trợ</p>
                    <p class="heading">
                        <a href="/faq">Câu hỏi thường gặp</a>
                    </p>
                    <p class="heading">
                        <a href="/terms-of-use">Điều khoản sử dụng</a>
                    </p>
                </div>
                <div class="column text-right">
                    <p class="title">Chúng tôi</p>
                    <p class="heading">
                        <a href="/about">Giới thiệu FYS</a>
                    </p>
                    <p class="heading">
                        <a href="/members">Đội ngũ</a>
                    </p>
                    <p class="heading">
                        <a href="/contact">Liên hệ</a>
                    </p>
                </div>
            </div>
            <hr/>
            <div class="level">
                <div class="level-left">
                    <p>
                        © 2017 - FYS. All Rights Reserved
                    </p>
                </div>
                <div class="level-left">
                    <img src="~assets/img/fys-logo-symbol-white.png" />
                </div>
                <div class="level-right">
                    <a class="icon" href="https://github.com/jgthms/bulma">
                        <i class="fa fa-github-square fa-3x" aria-hidden="true"></i>
                    </a>
                    <a class="icon" href="https://github.com/jgthms/bulma">
                        <i class="fa fa-facebook-square fa-4x" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #00d1b2;
    padding: 0
}

.container {
    padding: 30px 0
}

.level-left img {
    width: 1.2rem
}

.column .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
}

.column .heading {
    color: antiquewhite;
    font-size: 0.8rem;
}

.column .heading a {
    text-align: left;
    color: antiquewhite;
    font-size: 0.8rem;
}

.level {
    color: white
}

.level .icon .fa {
    color: white;
    font-size: 1.8rem;
}

.level .icon:first-child {
    margin-right: 15px
}
</style>
