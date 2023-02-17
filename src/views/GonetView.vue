<template>
  <section class="brand" id="service">
    <GonetHeader />
  </section>
  <section class="gonet-second">
    <div class="container">
      <div class="gonet-second__content">
        <div class="gonet-second__content-left">
          <p class="gonet-second__content-left-text"><b>Go NET</b> — независимая programmatic-экосистема для закупки
            трафика. Аккумулируем агентский опыт, адаптируем инвентарь под клиентов и постоянно совершенствуем
            технологию</p>
          <button class="gonet-link btn btn-light mt-60">Протестировать Go NET</button>
        </div>
        <div class="gonet-second__content-right">
          <img src="@/assets/img/gonet.svg" alt="gonet">
        </div>
      </div>
    </div>
  </section>
  <section class="brand-sec">
    <div class="container">
      <h1 class="text-title text-center">Почему Go NET</h1>
      <div class="brand-sec-list mt-60">
        <div class="brand-sec-card bg-border" v-for="i in list" :key="i.id">
          <div class="brand-sec-card__counter">{{ i.id }}</div>
          <div class="brand-sec-card__title text-prime">{{ i.title }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="brand-sec" id="possible">
    <div class="container">
      <h1 class="text-title text-center">Возможности Go NET</h1>
      <div class="brand-sec-list mt-60">
        <div class="brand-sec-card posible-card bg-border text-center" v-for="({ count, title }, index) in posibile_list"
          :key="index">
          <div class="posible-counter">{{ count }}</div>
          <div class="posible-title text-prime">{{ title }}</div>
        </div>
        <div class="brand-sec-card posible-card-second bg-border">
          <ul class="text-prime">
            <li v-for="(i, index) in posible_list_ul" :key="index">{{ i }}</li>
          </ul>
        </div>
        <div class="brand-sec-card posible-card-second posible-card-second-wide bg-border">
          <div class="card-pie-list">
            <img src="@/assets/img/pie1.svg" alt="pie1">
            <img src="@/assets/img/pie2.svg" alt="pie1">
          </div>
        </div>
      </div>
    </div>
  </section>
  <FormatCreative id="format" />
  <section class="gonet-dark prestart-sec">
    <div class="container">
      <div class="prestart-content text-center">
        <p class="prestart-text prestart-text-first">Можно использовать платформу
          самостоятельно </p>
        <p class="prestart-text prestart-text-second">или</p>
        <p class="prestart-text prestart-text-third">делегировать весь процесс ведения рекламной кампании нашей команде
        </p>
      </div>
    </div>
    <div class="prestart-arrow">
      <img src="@/assets/img/arrow_down.svg" alt="arrow_down">
    </div>
  </section>


  <section class="brand-sec start-sec">
    <div class="container">
      <h1 class="text-title text-center">Запуск с помощью нашей команды</h1>
      <div class="brand-sec-list mt-60">
        <div class="brand-sec-card start-sec-card bg-border" v-for="(i, index) in start_list" :key="index">
          <img class="start-sec__img" :src="getImgUrl(i.img)" alt="1">
          <div class="start-sec__title text-prime text-center"><b>{{ i.title }}</b></div>
          <div class="start-sec__text text-prime">{{ i.text }}</div>
        </div>
      </div>
      <button class="btn start-sec-btn">Оценить сервис</button>
    </div>
  </section>

  <section class="brand-sec autostart-sec">
    <div class="container">
      <h1 class="text-title text-center">Запуск самостоятельно</h1>
      <div class="brand-sec-list mt-60">
        <div class="brand-sec-card autostart-card autostart-left bg-border">
          <div v-for="(i, index) in auto_start_list" :key="index" class="autostart-text"><img src="@/assets/img/tick.svg"
              alt="tick"><span class="text-prime">{{ i }}</span></div>
        </div>
        <div class="brand-sec-card autostart-card autostart-right gonet-dark bg-border">
          <video autoplay="autoplay" loop="loop"  playsinline="" class="fade-in-video video-wrapper">
            <!-- <source src="@/assets/screencast.mov" type="video/mov"> -->
          </video>
        </div>
      </div>
      <button class="btn start-sec-btn">Оставить заявку</button>
    </div>
  </section>
  <TheBanner>
    <template v-slot:header>
      SSP
    </template>
    <template v-slot:content>
      С Go NET SSP можно подключать рекламные источники и эффективно монетизировать рекламный инвентарь по России и
      всему миру
    </template>
  </TheBanner>
  <TheAchive id="achive" />
  <TheCases id="cases" />
  <TheForm id="contact">Чтобы оценить возможности <br /> Go NET, оставьте заявку</TheForm>
</template>

<script>
import GonetHeader from '@/components/GonetHeader.vue'
import TheForm from '@/components/TheForm.vue'
import TheBanner from '@/components/TheBanner.vue'
import FormatCreative from '@/components/FormatCreative.vue'
import TheAchive from '@/components/TheAchive.vue'
import TheCases from '@/components/TheCases.vue'
export default {
  name: 'HomeView',
  components: {
    GonetHeader, TheForm, TheBanner, FormatCreative, TheAchive, TheCases
  },
  data() {
    return {
      facebookColor: "#FC2E71",
      list: [{
        id: 1,
        title: 'Независимая programmatic- экосистема',
      },
      {
        id: 2,
        title: 'Необходимые объемы инвентаря по всему миру',
      },
      {
        id: 3,
        title: 'Кастомизация под задачи клиента',
      },
      {
        id: 4,
        title: 'Гибкое ценообразование',
      },
      {
        id: 5,
        title: 'Качество и сервис, поддержка клиентов 24/7',
      },
      {
        id: 6,
        title: 'Возможность работы с любыми форматами креативов',
      },
      {
        id: 7,
        title: 'Понимание специфики работы рекламных агентств, процессы адаптированные под них',
      },
      {
        id: 8,
        title: 'Оперативная скорость запуска и настройки рекламных кампаний',
      },
      ],
      posibile_list: [
        {
          count: '15 000',
          title: 'Площадок'
        }, {
          count: '40',
          title: 'SSP'
        }, {
          count: '10 000',
          title: 'Показов в секунду доступно'
        },
      ],
      posible_list_ul: ["Предиктивная закупка",
        "Внутренний пре-бид антифрод",
        "Верификация любыми системами",
        "Закупка по моделям: CPM, CPC, CPV и пр.",
        "Ретаргетинг",
        "Возможность автооптимизации под целевые действия на сайте клиента"],
      start_list: [{
        img: 'hands',
        title: 'Гибкое сотрудничество',
        text: 'Подключение источников, форматов и аудиторных сегментов в соответствии с потребностями клиента',
      }, {
        img: 'kpi',
        title: 'Оптимизация кампаний под KPI клиента',
        text: 'Машинная и ручная оптимизация рекламных кампаний под KPI клиента и отчетность в удобном формате',
      }, {
        img: 'shield',
        title: 'Надежность',
        text: 'Тщательно следим за Brand Safety: можем работать со сторонними пикселями и трекерами для проверки клиентом качества трафика',
      }, {
        img: 'team',
        title: 'Сильная команда',
        text: 'Кампании ведут медиабайеры с большим опытом работы на платформе, а клиента сопровождает выделенный аккаунт-менеджер',
      }],
      auto_start_list: ["Прозрачное ценообразование", "Возможность кастомизации платформы под задачи клиента", "Вся digital-реклама в одном окне (Media / OLV / Native / Push / inApp)", "Быстрый старт работы и поддержка 24/7"]
    }
  },
  methods: {
    getImgUrl(id) {
      const images = require.context('@/assets/img/start/', false, /\.svg$/)
      return images('./' + id + ".svg")
    }
  },
}
</script>
