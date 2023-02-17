<template>
  <section class="brand">
    <SspHeader />
  </section>
  <section class="brand-sec">
    <div class="container">
      <h1 class="text-title text-center">Преимущества работы с Go NET SSP</h1>
      <div class="brand-sec-list mt-60">
        <div class="brand-sec-card bg-border work-card" v-for="i in list" :key="i.id">
          <div class="work-card__img"><img :src="getImgUrl(i.icon)" alt=""></div>
          <div class="brand-sec-card__title text-prime">{{ i.title }}</div>
        </div>
        <div class="brand-sec-card bg-border work-card work-card-wide">
          <div class="brand-sec-card__title text-prime">
            <div class="work-card-title">Доступные типы инвентаря:</div>
            <div class="work-card-text">
              <div v-for="(i, index) in auto_start_list" :key="index" class="autostart-text"><img
                  src="@/assets/img/tick.svg" alt="tick"><span class="text-prime">{{ i }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="brand-sec-card work-card work-card-bg">
          <img :src="getImgUrl('bg')" alt="">
        </div>
      </div>
    </div>
  </section>

  <section class="brand-sec publish-sec">
    <div class="container">
      <h1 class="publish-sec-title text-center text-prime">С нами уже работают <span class="">15000</span> паблишеров
      </h1>
      <div class="brand-sec-list mt-40">
        <div class="brand-sec-card posible-card-second posible-card-second-wide publish-sec-card bg-border">
          <div class="card-pie-list">
            <img src="@/assets/img/pie3.svg" alt="pie1">
            <img src="@/assets/img/pie4.svg" alt="pie1">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="brand-sec publisher">
    <div class="container publisher-wrapper">
      <h1 class="text-title">Паблишеру</h1>
      <div class="publisher-text">
        <p class="text-prime">Эффективная монетизация вашего рекламного инвентаря по России и всему миру. Наши клиенты —
          крупнейшие рекламные агентства России и мира, прямые рекламодатели.
          <br />
          <br />
          Go NET SSP — часть экосистемы Go Ahead. В список основных клиентов группы компаний входят такие рекламодатели,
          как S7, Burger King, МВидео-Эльдорадо, ЦИАН, La Redoute, Магнит, Тинькофф, Мегафон и многие другие.
        </p>
      </div>
      <p class="text-prime mt-40"><b>Основные вертикали рынка, с которыми мы работаем:</b></p>
      <div class="publisher-list work-card-text">
        <div v-for="(i, index) in publisher_list" :key="index" class="autostart-text"><img src="@/assets/img/tick.svg"
            alt="tick"><span class="text-prime">{{ i }}</span>
        </div>
      </div>
      <div class="publisher-box">
        <p class="publisher-box__text">Запускайте рекламные кампании и подключайте площадки и мобильные приложения для повышения монетизации инвентаря </p>
        <img class="publisher-box__img" src="@/assets/img/short-term.svg" alt="term">
        <img class="publisher-box__phone" src="@/assets/img/phone.png" alt="phone">
      </div>
    </div>
  </section>

  <TheBanner>
    <template v-slot:header>
      Рекламодателю
    </template>
    <template v-slot:content>
      С Go NET DSP можно запустить app- и web-кампании на 15 000 площадках, работать с любыми форматами креативов и
      адаптировать инвентарь под цели и KPI бизнеса.
    </template>
  </TheBanner>
  <TheForm>Повышайте монетизацию <br /> вашего трафика вместе с нами!</TheForm>
</template>

<script>
import SspHeader from '@/components/SspHeader.vue'
import TheForm from '@/components/TheForm.vue'
import TheBanner from '@/components/TheBanner.vue'
export default {
  name: 'HomeView',
  components: {
    SspHeader, TheForm, TheBanner
  },
  data() {
    return {
      list: [{
        id: 1,
        icon: 'stable',
        title: 'Стабильный доход и быстрая интеграция',
      },
      {
        id: 2,
        icon: 'star',
        title: 'Контроль рекламных материалов',
      },
      {
        id: 3,
        icon: 'support',
        title: 'Экспертная поддержка 24/7',
      },
      {
        id: 4,
        icon: 'figure',
        title: 'Удобный интерфейс',
      },
      {
        id: 5,
        icon: 'chart',
        title: 'Возможность полной монетизации рекламных форматов и инвентаря (web / mobile)',
      },
      {
        id: 6,
        icon: 'tick',
        title: 'Поддержка VAST / VPAID',
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
      auto_start_list: ["Поддержка VAST / VPAID", "Web desktop ", "Mobile desktop", "Video desktop", "In-app инвентарь"],
      publisher_list: ["Фарма", "FMCG Food/Non-Food", "Онлайн- и офлайн-ритейл", "Финансовый сектор", "Телеком-операторы","B2C/B2B-услуги и сервисы","Fashion&Beauty"]
    }
  },
  methods: {
    getImgUrl(id) {
      const images = require.context('@/assets/img/ssp/', false, /\.svg$/)
      return images('./' + id + ".svg")
    }
  },
}
</script>
