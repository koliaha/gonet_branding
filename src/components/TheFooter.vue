<template>
    <section class="footer">
        <div class="container">
            <div class="footer-list">
                <div class="social-list" >
                    <a :href="link" class="social-item" target='_blank' v-for="({ link, image }, index) in social_list" :key="index">
                        <img :src="getImgUrl(image)" alt="yt">
                    </a>
                </div>
                <div class="social-links mt-40">
                    <a href="" class="social-link">hi@gonet.ai</a>
                    <a href="" class="social-link">+7 (495) 665 91 24</a>
                </div>
                <div class="social-links">
                    <a href="" class="social-link">127006, Москва, Долгоруковская улица, 7. <br>БЦ "Садовая Плаза"</a>
                </div>
               <img src="@/assets/img/sk.svg" class="mt-40" alt="sk">
               <img src="@/assets/img/logo.svg" class="mt-40" alt="sk">
               <a href="" class="mt-40 social-link social-policy">Политика обработки персональных данных <br> (Политика конфиденциальности)</a>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
const social_list = ref([
    {
        image: 'yt',
        link: 'yt'
    },
    {
        image: 'in',
        link: 'in'
    },
    {
        image: 'tg',
        link: 'tg'
    },
])
const getImgUrl = (id) => {
    const images = require.context('@/assets/img/social/', false, /\.svg$/)
    return images('./' + id + ".svg")
}
</script>