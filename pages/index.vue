<template>
    <div>
        <div class="columns is-marginless is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only">
            <div class="column">
                <div class="box">
                    <article class="media">
                        <div class="media-left">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-square fa-stack-1x red"></i>
                                <i class="fa fa-shield fa-stack-2x"></i>
                            </span>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Bảo mật thông tin cá nhân</strong>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <article class="media">
                        <div class="media-left">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-square fa-stack-1x green"></i>
                                <i class="fa fa-clock-o fa-stack-2x"></i>
                            </span>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Hỗ trợ xem nhà nhanh chóng</strong>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <article class="media">
                        <div class="media-left">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-square fa-stack-1x blue"></i>
                                <i class="fa fa-money fa-stack-2x"></i>
                            </span>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Dịch vụ hoàn toàn miễn phí</strong>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <article class="media">
                        <div class="media-left">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-square fa-stack-1x pink"></i>
                                <i class="fa fa-phone fa-stack-2x"></i>
                            </span>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Tư vấn khách hàng mọi lúc</strong>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.columns {
    background-color: #EEE;
    padding: 1% 0
}

.box {
    background-color: transparent;
    border-radius: 0;
    padding-left: 20%;
    box-shadow: none
}


.fa-stack-2x {
    color: white;
    left: 15%;
    top: 15%;
    font-size: 2rem;
}

.red {
    color: #D32F2F
}

.green {
    color: #1fa67a 
    /* 1fa67a */
}

.blue {
    color: #039BE5
}

.pink {
    color: #E91E63
}

.fa-square {
    font-size: 4rem;
}

.media-content {
    line-height: 43px;
    padding-left: 10px
}
</style>
