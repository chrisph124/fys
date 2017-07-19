<template>
    <section class="hero columns is-hidden-tablet-only is-hidden-mobile is-marginless">
        <div class="hero-body level">
            <div class="column">
                <h1 class="title has-text-centered is-2">
                    Tìm kiếm ngôi nhà bạn yêu thích
                </h1>
                <div class="box level-item">
                    <div class="select is-large">
                        <select>
                            <option>Mua</option>
                            <option>Thuê</option>
                        </select>
                    </div>
                    <input class="input is-expanded is-large" type="text" placeholder="Tên thành phố, địa chỉ, quận, huyện, ...">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.column {
    margin: 50px 100px;
    padding: 0;
}


.hero-body {
    position: relative;
}

.hero-body>div {
    position: relative;
    z-index: 99;
}

.hero-body:after {
    content: "";
    opacity: 0.6;
    background-image: url('~assets/img/nav_banner.jpg');
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
}

.title {
    color: white
}

.hero {
    background-color: black;
    margin-top: 0
}

.input {
    width: 30%;
    border-left: none;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.select select {
    background-color: #00d1b2;
    color: white;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #00d1b2;
}

.select::after {
    background-color: #00d1b2;
    border-color: white
}

.select::after:hover {
    border-color: white
}

.box {
    background-color: transparent
}
</style>
