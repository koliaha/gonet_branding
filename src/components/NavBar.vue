<template>
    <nav class="nav">
        <div class="container">
            <div class="nav-content">
                <div class="nav-list">
                    <router-link to="/">
                        <img src="@/assets/img/logo_nav.svg" alt="logo_nav"></router-link>
                </div>
                <div class="nav-list">
                    <router-link class="nav-item dropdown" exact-active-class="active" :to="i.route"
                        v-for="(i, index) in nav_list" :key="index">
                        <span class="nav-item_link">{{ i.name }}</span>
                        <div class="arrow-down"></div>
                        <div class="dropdown-content text-prime">
                            <div class="dropdown-list" :class="i.id">
                                <a v-for="(it, id) in i.list" :key="id" :href="`${i.route}/${it.link}`">{{ it.name }}</a>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue'
const nav_list = ref([
    {
        id: 'dsp',
        name: 'DSP Media Programmatic',
        route: '/',
        list: [
            {
                name: 'Клиентский сервис',
                link: 'service'
            }, {
                name: 'Возможности Go NET',
                link: 'possible'
            }, {
                name: 'Форматы креативов',
                link: 'format'
            }, {
                name: 'Достижения',
                link: 'achive'
            }, {
                name: 'Кейсы',
                link: 'cases'
            }, {
                name: 'Отзывы',
                link: 'rate'
            }, {
                name: 'Контакты',
                link: 'contact'
            }, {
                name: 'Оставить заявку',
                link: 'form'
            },
        ]
    },
    {
        id: 'ssp',
        name: 'SSP',
        route: '/ssp',
        list: [
            {
                name: 'Возможности Go NET',
                link: 'possible'
            }, {
                name: 'Контакты',
                link: 'contact'
            }, {
                name: 'Оставить заявку',
                link: 'form'
            },
        ]
    },
])
</script>
