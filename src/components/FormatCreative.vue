<template>
    <section class="format">
        <div class="format-content format-left">
            <h1 class="text-title format-left-title">Форматы креативов в Go NET</h1>
            <p class="format-left__text text-prime">
                Постоянно подстраиваемся под тренды на рынке за счет возможностей технологии. Это позволяет нам работать
                как со стандартными форматами, которые давно зарекомендовали себя, так и тестировать новые и создавать
                собственные
            </p>
            <div class="format-list mt-40">
                <div class="format-item" v-for="i in format" :key="i.id" @click="active(i.id)">
                    <div class="format-item__box">
                        <img :src="getImgUrl(i.icon, 'svg')" alt="format">
                    </div>
                    <div class="format-item__title text-prime">{{ i.title }}</div>
                </div>
            </div>
            <button class="btn btn-light mt-60">Обсудить запуск</button>
        </div>
        <div class="format-content format-right">
            <h1 class="text-title format-right-title">{{ current.title }}</h1>
            <p class="format-right__text text-prime">
                {{ current.text }}
            </p>
            <img class="format-right__img" :src="getImgUrl(current.icon, 'png')" alt="format">
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
const format = ref([
    {
        icon: 'rich',
        title: 'Rich-Media',
        id: 'rich',
    }, {
        icon: 'banner',
        title: 'Баннеры',
        id: 'banner',
    }, {
        icon: 'native',
        title: 'Нативная реклама',
        id: 'native',
    }, {
        icon: 'dco',
        title: 'DCO',
        id: 'dco',
    }, {
        icon: 'olv',
        title: 'OLV cross-stream',
        id: 'olv',
    }, {
        icon: 'reward',
        title: 'Rewarded Video',
        id: 'reward',
    }, {
        icon: 'tv',
        title: 'In-Stream в Smart TV',
        id: 'tv',
    }, {
        icon: 'dooh',
        title: 'DOOH(Digital out-of-home)',
        id: 'dooh',
    },
])
const format_content = ref([
    {
        icon: 'rich',
        title: 'Rich-Media',
        text: 'Реклама, которая побуждает пользователя взаимодействовать с интерактивом. Пользователь машинально «вступает в игру» и выполняет предложенные действия',
        id: 'rich',
    }, {
        icon: 'banner',
        title: 'Баннеры',
        text: 'Универсальный и наиболее востребованный формат',
        id: 'banner',
    }, {
        icon: 'native',
        title: 'Нативная реклама',
        text: 'Размещается в виде текстово-графического блока в рекомендательных блоках и в ленте сайтов и приложений',
        id: 'native',
    }, {
        icon: 'dco',
        title: 'DCO',
        text: 'Динамический креатив позволяет показывать разные рекламные сообщения в зависимости от того, какой пользователь смотрит рекламу, и генерировать изображения в реальном времени',
        id: 'dco',
    }, {
        icon: 'olv',
        title: 'OLV cross-stream',
        text: 'Разнообразные форматы видеорекламы: Video In-Stream, Video Out-Stream, In-Banner Video',
        id: 'olv',
    }, {
        icon: 'reward',
        title: 'Rewarded Video',
        text: 'Просмотр рекламного ролика за вознаграждение (пользователь переходит на другой уровень в игре, получает виртуальные монеты и т. д.)',
        id: 'reward',
    }, {
        icon: 'tv',
        title: 'In-Stream в Smart TV',
        text: 'Показ рекламы на премиальном трафике. Пользователь видит рекламу как в потоке видеофайла, так и просто находясь на площадке',
        id: 'tv',
    }, {
        icon: 'dooh',
        title: 'DOOH(Digital out-of-home)',
        text: 'Показ рекламы на премиальном трафике. Пользователь видит рекламу как в потоке видеофайла, так и просто находясь на площадке',
        id: 'dooh',
    },
])
const current = ref({
    icon: 'rich',
    title: 'Rich-Media',
    text: 'Реклама, которая побуждает пользователя взаимодействовать с интерактивом. Пользователь машинально «вступает в игру» и выполняет предложенные действия',
    id: 'rich',
})
const getImgUrl = (id, icon) => {
    const images = require.context('@/assets/img/format/', false,)
    return images('./' + id + `.${icon}`)
}
const active = (id) => {
    const cur = format_content.value.filter((el)=>el.id == id)
    current.value = cur[0]
}
</script>