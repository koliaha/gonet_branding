<template>
    <nav class="nav">
        <div class="container">
            <div class="nav-content">
                <div class="nav-list">
                    <router-link  to="/" >
                        <img src="@/assets/img/logo_nav.svg" alt="logo_nav"></router-link>
                </div>
                <div class="nav-list">
                    <router-link class="nav-item" exact-active-class="active" to="/" v-for="(i, index) in nav_list"
                        :key="index">
                        <span class="nav-item_link">{{ i.name }}</span>
                        <div class="arrow-down"></div>
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
        list: [
            {
                name: 'Клиентский сервис',
                link: ''
            }, {
                name: 'Возможности Go NET',
                link: ''
            }, {
                name: 'Форматы креативов',
                link: ''
            }, {
                name: 'Достижения',
                link: ''
            }, {
                name: 'Кейсы',
                link: ''
            }, {
                name: 'Отзывы',
                link: ''
            }, {
                name: 'Контакты',
                link: ''
            }, {
                name: 'Оставить заявку',
                link: ''
            },
        ]
    },
    {
        id: 'ssp',
        name: 'SSP',
        list: [
            {
                name: 'Возможности Go NET',
                link: ''
            }, {
                name: 'Контакты',
                link: ''
            }, {
                name: 'Оставить заявку',
                link: ''
            },
        ]
    },
])
</script>
