<template>
    <section class="achive">
        <div class="container achive-container">
            <img class="achive-cube" src="@/assets/img/cube.png" alt="cube">
            <div class="achive-title text-title">Достижения</div>
            <div class="achive-wrapper">
                <div class="achive-content achive-content__left">
                    <div v-for="({ year, list }, index) in achive_list" :key="index" class="achive-item mt-60">
                        <div class="achive-item__title">
                            Adindex Technology Index {{ year }}
                        </div>
                        <div class="achive-item__content text-prime">
                            <div v-for="(item, id) in list" :key="id" class="achive-item__content-item">
                                <a :href="item.link" target="_blank" class="achive-item__content-link">#{{ item.place }}
                                    место <img src="@/assets/img/arrow_up.svg" alt="arrow_up"></a>
                                <div class="achive-item__content-text">{{ item.text }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="achive-content achive-content__right">
                    <div lass="achive-item mt-60">
                        <div class="achive-item__title">
                            Go NET на картах партнерств IAB Russia, АКАР и Adindex
                        </div>
                        <div class="achive-item__content text-prime">
                            <div v-for="(item, id) in partners_list" :key="id" class="achive-item__content-item">
                                <a :href="item.link" target="_blank" class="achive-item__content-link">{{ item.text }}
                                    <img src="@/assets/img/arrow_up.svg" alt="arrow_up"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
const achive_list = ref([
    {
        year: 2022,
        list: [
            {
                link: 'https://adindex.ru/ratings/tech/2022/305482/#305483',
                place: 1,
                text: 'Программатические закупки в интернете. DSP (Качество)'
            },
            {
                link: 'https://adindex.ru/ratings/tech/2022/305482/#305550',
                place: 3,
                text: 'CPI сети (Сотрудничество)'
            },
        ]
    },
    {
        year: 2021,
        list: [
            {
                link: 'https://adindex.ru/ratings/tech/2021/#296967',
                place: 1,
                text: 'Программатические закупки в интернете. DSP (Качество)'
            },
            {
                link: 'https://adindex.ru/ratings/tech/2021/#296970',
                place: 1,
                text: 'Рекламные видеосети (Качество)'
            }, {
                link: 'https://adindex.ru/ratings/tech/2021/#296973',
                place: 2,
                text: 'Мобильные видеосети (Качество)'
            },
        ]
    },
    {
        year: 2020,
        list: [
            {
                link: 'https://adindex.ru/ratings/154042/154043/#154048',
                place: 1,
                text: 'Лидогенерация CPI'
            },
            {
                link: 'https://adindex.ru/ratings/154042/154043/#154057',
                place: 1,
                text: 'Программатические закупки в интернете. DSP (Качество)'
            },
            {
                link: 'https://adindex.ru/ratings/154042/154043/#154046',
                place: 3,
                text: 'Сети мобильной видеорекламы'
            },
        ]
    }
])
const partners_list = ref([
    {
        link: 'https://arirmaps.ru/14-russia-performance-ecosystem-2021',
        text: 'Adindex Technology Map 2020'
    },
    {
        link: 'https://arirmaps.ru/6-russia-mobile-ad-ecosystem-2020',
        text: 'Performance Ecosystem (Technologies) 2021'
    }, {
        link: 'https://maps.akarussia.ru/go-mobile-3/',
        text: 'Mobile Ad Ecosystem (Technologies) 2020'
    }, {
        link: 'https://adindex.ru/maps/digital-matrix/technologymap2020/content/go-net/',
        text: 'Карта рынка АКАР AdTech 2021'
    },
])
</script>
