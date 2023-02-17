<template>
    <section class="cases">
        <div class="container cases-container">
            <div class="cases-title text-title text-center">Кейсы</div>
        </div>
        <div class="cases-list mt-60">
            <!-- swiper -->
            <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide>
                    <div class="cases-item">
                        <div class="cases-item__left">
                            <div class="cases-item__title">Повышение узнаваемости спорткара Hyundai i30 N</div>
                            <div class="cases-item__content cases-task">
                                <h3 class="text-prime mt-20"><b>Задачи</b></h3>
                                <ul class="cases-item__content-list text-prime">
                                    <li>Максимальный охват целевой аудитории</li>
                                    <li>Повышение осведомленности о бренде</li>
                                    <li>Досматриваемость ролика 70%</li>
                                </ul>
                            </div>
                            <div class="cases-item__content cases-instruments mt-40">
                                <h3 class="text-prime mt-20"><b>Инструменты</b></h3>

                                <ul class="cases-item__content-list text-prime">
                                    <li>Таргетинг по соцдему и интересам</li>
                                    <li>Оптимизация на уровне ID паблишеров</li>
                                    <li>Размещение в формате Rewarded video</li>
                                    <li>White-лист приложений развлекательной и автотематики</li>
                                </ul>
                            </div>
                            <img class="cases-line" src="@/assets/img/lines.svg" alt="lines">
                        </div>
                        <div class="cases-item__right">
                            <img src="@/assets/img/cases/hundai.png" class="cases-item__right-img" alt="cases">
                            <div class="cases-item__content cases-results">
                                <h3 class="text-prime"><b>Результаты</b></h3>
                                <div class="cases-item__content-results text-prime mt-20">
                                    <div class="cases-item__content-result">
                                        <span class="">~200 k</span><br />Пользователей
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">~75%</span><br />VTR
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">400 k+</span><br />Показов
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">~8%</span><br />CTR
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="cases-item">
                        <div class="cases-item__left">
                            <div class="cases-item__title">Оптимизация mobile web-кампании производителя кормов для животных
                            </div>
                            <div class="cases-item__content cases-task">
                                <h3 class="text-prime mt-20"><b>Задачи</b></h3>
                                <p class="cases-item__content-list text-prime mt-20">
                                    Улучшить post-click показатели до оптимальных значений:
                                </p>
                                <div class="cases-item__content-list-wrapper">
                                    <p class="cases-item__content-list text-prime mt-20">
                                        Для баннеров
                                    <ul class="cases-item__content-list text-prime">
                                        <li>CTR ≥ 0,15%</li>
                                    </ul>
                                    </p>
                                    <p class="cases-item__content-list text-prime mt-20">
                                        Для видео (20 секунд):
                                    <ul class="cases-item__content-list text-prime">
                                        <li>Процент досмотров ≥ 65%</li>
                                        <li>CTR ≥ 3%</li>
                                    </ul>
                                    </p>
                                </div>
                            </div>
                            <div class="cases-item__content cases-instruments mt-40">
                                <h3 class="text-prime mt-20"><b>Инструменты</b></h3>

                                <ul class="cases-item__content-list text-prime">
                                    <li>Использовали action-предиктор, чтобы оптимизировать видеокампанию по проценту
                                        досмотров</li>
                                    <li>Установили смарт-пиксель Go NET, чтобы настроить конверсионное правило «Досмотр
                                        видео»</li>
                                    <li>Собрали аудиторный сегмент из числа пользователей с похожим поведением в сети</li>
                                    <li>Регулярно обновляли white-листы</li>
                                    <li>Отключали неэффективные креативы и площадки</li>
                                </ul>
                            </div>
                        </div>
                        <div class="cases-item__right">
                            <img src="@/assets/img/cases/mobile.png" class="cases-item__right-img" alt="cases">
                            <div class="cases-item__content cases-results">
                                <h3 class="text-prime"><b>Результаты</b></h3>
                                <div class="cases-item__content-results results-wide text-prime mt-20">
                                    <div class="cases-item__content-result">
                                        На <span class="">14%</span><br />снижение закупки в видеокампании
                                    </div>
                                    <div class="cases-item__content-result">
                                        На <span class="">3%</span><br />снижение закупки в display-кампании
                                    </div>
                                    <div class="cases-item__content-result">
                                        До <span class="">52%</span><br />снижение процента отказов
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">+9%</span><br />увеличение процента досмотров в видеокампании
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">49 сек</span><br />среднее время пребывания на сайте
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">3,04%</span><br />CTR видеокампаний
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">0,18% </span><br />CTR баннеров
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="cases-item">
                        <div class="cases-item__left">
                            <div class="cases-item__title">Продвижение мобильной онлайн-игры с помощью формата Rewarded
                                Video</div>
                            <div class="cases-item__content cases-task">
                                <h3 class="text-prime mt-20"><b>Задачи</b></h3>
                                <ul class="cases-item__content-list text-prime">
                                    <li>Повышение узнаваемости бренда</li>
                                    <li>Достичь KPI: CTR 3%, VTR 70%</li>
                                </ul>
                            </div>
                            <div class="cases-item__content cases-instruments mt-40">
                                <h3 class="text-prime mt-20"><b>Инструменты</b></h3>
                                <ul class="cases-item__content-list text-prime">
                                    <li>Использовали формат Rewarded Video. </li>
                                    <li>Пользователь должен был полностью посмотреть видео и в конце получить бонус в виде
                                        игровой валюты, бесплатных функций в приложении и т. д.</li>
                                </ul>
                            </div>
                            <div class="cases-item__content cases-instruments mt-40">
                                <h3 class="text-prime mt-20"><b>Преимущества формата</b></h3>
                                <ul class="cases-item__content-list text-prime">
                                    <li>Вызывает у пользователя приятные эмоции, т. к. после просмотра он получает награду
                                    </li>
                                    <li>Позволяет полностью рассказать о бренде, поскольку пользователи просматривают ролики
                                        полностью</li>
                                    <li>Формат применяется только на эксклюзивных площадках</li>
                                </ul>
                            </div>
                        </div>
                        <div class="cases-item__right">
                            <img src="@/assets/img/cases/reward.png" class="cases-item__right-img" alt="cases">
                            <div class="cases-item__content cases-results">
                                <h3 class="text-prime"><b>Результаты</b></h3>
                                <div class="cases-item__content-results text-prime mt-20">
                                    <div class="cases-item__content-result">
                                        <span class="">3 млн</span><br />Пользователей
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">4,5%</span><br />СTR
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">80%</span><br />VTR
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">2,9%</span><br />CR
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="cases-item">
                        <div class="cases-item__left">
                            <div class="cases-item__title">Повышение узнаваемости бренда противовирусного средства</div>
                            <div class="cases-item__content cases-task">
                                <h3 class="text-prime mt-20"><b>Задачи</b></h3>
                                <ul class="cases-item__content-list text-prime">
                                    <li>Охватить наиболее релевантную аудиторию через видеоролики с использованием
                                        таргетингов на ЦА</li>
                                    <li>Увеличить долю пользователей, просмотревших ролики с помощью инструмента
                                        ретаргетинга</li>
                                    <li>Повысить CTR</li>
                                </ul>
                            </div>
                            <div class="cases-item__content cases-instruments mt-40">
                                <h3 class="text-prime mt-20"><b>Инструменты</b></h3>
                                <ul class="cases-item__content-list text-prime">
                                    <li>Использование баннеров формата OLV Video</li>
                                    <li>Таргетинг по соцдему и ГЕО пользователей</li>
                                    <li>Ретаргет на пользователей, которые досмотрели ролик до конца</li>
                                </ul>
                            </div>
                        </div>
                        <div class="cases-item__right">
                            <img src="@/assets/img/cases/virus.png" class="cases-item__right-img" alt="cases">
                            <div class="cases-item__content cases-results">
                                <h3 class="text-prime"><b>Результаты</b></h3>
                                <div class="cases-item__content-results text-prime mt-20">
                                    <div class="cases-item__content-result">
                                        <span class="">3 млн</span><br />Пользователей
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">4,5%</span><br />СTR
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">80%</span><br />VTR
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">2,9%</span><br />CR
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="cases-item">
                        <div class="cases-item__left">
                            <div class="cases-item__title">Размещение видеоролика ФИНАМ с QR-кодом в SMART TV</div>
                            <div class="cases-item__content cases-task">
                                <h3 class="text-prime mt-20"><b>Задачи</b></h3>
                                <ul class="cases-item__content-list text-prime">
                                    <li>Повышение узнаваемости бренда</li>
                                    <li>Расширение присутствия бренда в новых каналах</li>
                                </ul>
                            </div>
                            <div class="cases-item__content cases-instruments mt-40">
                                <h3 class="text-prime mt-20"><b>Инструменты</b></h3>
                                <ul class="cases-item__content-list text-prime">
                                    <li>Видеоролик с QR-кодом</li>
                                    <li>WL</li>
                                </ul>
                            </div>
                            <img class="cases-line" src="@/assets/img/lines.svg" alt="lines">
                        </div>
                        <div class="cases-item__right">
                            <img src="@/assets/img/cases/finam.png" class="cases-item__right-img" alt="cases">
                            <div class="cases-item__content cases-results">
                                <h3 class="text-prime"><b>Результаты</b></h3>
                                <div class="cases-item__content-results results-wide text-prime mt-20">
                                    <div class="cases-item__content-result">
                                        До<span class=""> 52 %</span><br />снижение процента отказов
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">+9%</span><br />Увеличение процента досмотров в видеокампании
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">49 сек</span><br />Среднее время пребывания на сайте
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">0,18%</span><br />CTR баннеров
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">3,04%</span><br />CTR видеокампаний
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="cases-item">
                        <div class="cases-item__left">
                            <div class="cases-item__title">Повышение узнаваемости новой линейки бренда Infinity Nado
                                (РОСМЭН)</div>
                            <div class="cases-item__content cases-task mt-40">
                                <p class="cases-item__content-list text-prime">
                                    Бренд «Росмэн» хотел повысить узнаваемость новой линейки бренда Infinity Nado.
                                    <br/>
                                    <br/>
                                    Для решения задачи мы должны были рассказать о новой линейке игрушек Infinity Nado,
                                    максимально охватить целевую аудиторию и обеспечить 80% досматриваемости рекламного
                                    видеоролика.
                                </p>
                            </div>
                            <div class="cases-item__content cases-instruments mt-40">
                                <h3 class="text-prime mt-20"><b>Инструменты</b></h3>
                                <ul class="cases-item__content-list text-prime">
                                    <li>Таргетинг по соцдему и интересам</li>
                                    <li>Размещение в формате Rewarded video</li>
                                    <li>Whitelist приложений категории «Игры для детей»</li>
                                </ul>
                            </div>
                            <img class="cases-line" src="@/assets/img/lines.svg" alt="lines">
                        </div>
                        <div class="cases-item__right">
                            <img src="@/assets/img/cases/rosman.png" class="cases-item__right-img" alt="cases">
                            <div class="cases-item__content cases-results">
                                <h3 class="text-prime"><b>Результаты</b></h3>
                                <div class="cases-item__content-results text-prime mt-20">
                                    <div class="cases-item__content-result">
                                        <span class="">> 860 k+</span><br />Показов
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">> 19 k</span><br />Кликов
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">> 695 k</span><br />Пользователей
                                    </div>
                                    <div class="cases-item__content-result">
                                        <span class="">> 2,26%</span><br />CTR
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>
