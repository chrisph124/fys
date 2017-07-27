<template>
  <div class="columns is-marginless is-hidden-mobile is-hidden-tablet-only grey">
    
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
        <!-- Bảo mật thông tin cá nhân -->
    
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
        <!-- Hỗ trợ xem nhà nhanh chóng -->
    
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
        <!-- Dịch vụ hoàn toàn miễn phí -->
    
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
        <!-- Tư vấn khách hàng mọi lúc -->
    
    </div>
</template>

<style scoped>
@media screen and (min-width: 999px) {
    .box:not(.is-desktop) {
        padding-left: 15%;
    }
    .fa-stack-2x:not(.is-desktop) {
        color: white;
        left: 0;
        top: 27%;
        font-size: 1rem;
    }
    .fa-square:not(.is-desktop) {
        font-size: 2.5rem;
    }

    .media-content:not(.is-desktop)  {
        font-size: 0.5rem;
        padding-left: 0
    }
}

@media screen and (min-width: 1239px) {
    .box:not(.is-desktop) {
        padding-left: 15%;
    }
    .fa-stack-2x:not(.is-desktop) {
        color: white;
        left: 5%;
        top: 20%;
        font-size: 1.5rem;
    }
    .fa-square:not(.is-desktop) {
        font-size: 3.5rem;
    }

    .media-content:not(.is-desktop)  {
        font-size: 0.7rem;
        padding-left: 0
    }
}

@media screen and (min-width: 1366px) {
    .box:not(.is-desktop) {
        padding-left: 10%;
    }
    .fa-stack-2x:not(.is-desktop) {
        color: white;
        left: 0;
        top: 25%;
        font-size: 1.2rem;
    }
    .fa-square:not(.is-desktop) {
        font-size: 3rem;
    }

    .media-content:not(.is-desktop)  {
        font-size: 0.8rem;
        padding-left: 5%
    }
}

@media screen and (min-width: 1440px) {
    .box:not(.is-desktop) {
        padding-left: 20%;
    }
    .fa-stack-2x:not(.is-desktop) {
        color: white;
        left: 5%;
        top: 20%;
        font-size: 1.5rem;
    }
    .fa-square:not(.is-desktop) {
        font-size: 3.5rem;
    }

    .media-content:not(.is-desktop)  {
        font-size: 0.9em
    }
}

.media-content {
    line-height: 43px;
}

.box {
    background-color: transparent;
    border-radius: 0;
    box-shadow: none
}

.red {
    color: #D32F2F
}

.green {
    color: #1fa67a
}

.blue {
    color: #039BE5
}

.pink {
    color: #E91E63
}
</style>
