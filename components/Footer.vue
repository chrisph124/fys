<template>
    <footer class="footer">
        <div class="container is-fluid">
            <div class="columns is-12">
                <div class="column is-3 has-text-centered">
                    <p class="title">Headquarters</p>
                    <p class="heading">Techmaster Vietnam</p>
                    <p class="heading">Số 14 ngõ 4 Nguyễn Đình Chiểu, Hà Nội</p>
                </div>
                <div class="column is-3 has-text-centered">
                    <p class="title">Chính sách</p>
                    <p class="heading">
                        <a href="/privacy-policy">Chính sách bảo mật</a>
                    </p>
                    <p class="heading">
                        <a href="/security-policy">Quyền riêng tư</a>
                    </p>
                </div>
                <div class="column is-3 has-text-centered">
                    <p class="title">Hỗ trợ</p>
                    <p class="heading">
                        <a href="/faq">Câu hỏi thường gặp</a>
                    </p>
                    <p class="heading">
                        <a href="/terms-of-use">Điều khoản sử dụng</a>
                    </p>
                </div>
                <div class="column is-3 has-text-centered">
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
            <div class="columns is-12">
                <div class="column is-4">
                    <p>
                        © 2017 - FYS. All Rights Reserved
                    </p>
                </div>
                <div class="column is-4">
                    <img src="~assets/img/fys-logo-symbol.png" />
                </div>
                <div class="column is-4">
                    <a class="icon is-pulled-right" href="https://github.com/jgthms/bulma">
                        <i class="fa fa-github-square fa-3x" aria-hidden="true"></i>
                    </a>
                    <a class="icon is-pulled-right" href="https://github.com/jgthms/bulma">
                        <i class="fa fa-facebook-square fa-4x" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #212121;
    padding: 0;
    margin-top: 2.5rem
}

p,
a {
    text-align: center;
    font-weight: 500;
    color: #FFF;
    font-size: 0.9rem;
}

.is-4 img {
    width: 1.2rem
}

.column .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #00d1b2;
}

.is-12:not(:last-child) {
    padding-top: 2rem
}
.is-12:not(:first-child) {
    padding-bottom: 2rem
}

.is-4 {
    color: white;
    float: left;
}

.is-4 .icon .fa {
    color: white;
    font-size: 1.8rem;
}

.is-4 p {
    text-align: left
}

.is-4 a {
    text-align: right
}

.is-4 .icon:first-child {
    margin-left: 1rem
}
</style>
