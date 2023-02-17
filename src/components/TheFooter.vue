<template>
    <section class="footer">
        <div class="container">
            <div class="footer-list">
                <div class="social-list">
                    <a :href="link" class="social-item" target='_blank' v-for="({ link, image }, index) in social_list"
                        :key="index">
                        <img :src="getImgUrl(image)" alt="yt">
                    </a>
                </div>
                <div class="social-links mt-40">
                    <a href="mailto:hi@gonet.ai" class="social-link"><span itemprop="email">hi@gonet.ai</span></a>
                    <a href="tel:+7 (495) 665-91-24" class="social-link"><span itemprop="telephone">+7 495
                            665-91-24</span></a>
                </div>
                <div class="social-links">
                    <a href="https://yandex.ru/maps/-/CCUBiZE3cD" target="_blank" class="social-link"><span itemprop="postalCode">127006</span>,
                        <span itemprop="addressLocality">Москва</span>, <span itemprop="streetAddress">Долгоруковская улица,
                            7. <br/> БЦ "Садовая Плаза"</span></a>
                </div>
                <img src="@/assets/img/sk.svg" class="mt-40" alt="sk">
                <img src="@/assets/img/logo.svg" class="mt-40" alt="sk">
                <a href="./policy.pdf" target="_blank" class="mt-40 social-link social-policy">Политика обработки персональных данных <br> (Политика
                    конфиденциальности)</a>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
const social_list = ref([
    {
        image: 'yt',
        link: 'https://www.youtube.com/@GoAhead_Channel'
    },
    {
        image: 'in',
        link: 'https://www.linkedin.com/company/86137129/admin/'
    },
    {
        image: 'tg',
        link: 'https://t.me/goaheadgroup'
    },
])
const getImgUrl = (id) => {
    const images = require.context('@/assets/img/social/', false, /\.svg$/)
    return images('./' + id + ".svg")
}

</script>