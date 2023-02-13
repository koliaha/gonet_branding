<template>
    <div class="form-wrapper">
        <div class="container">
            <h1 class="form-title text-title text-center">
                <slot />
            </h1>
            <form class="form-content bg-border mt-60">
                <div class="form__input-list">
                    <input type="text" name="name" class="input-form" placeholder="Имя *" required>
                    <input type="text" name="name" class="input-form" placeholder="Имя *" required>
                    <input type="text" name="name" class="input-form" placeholder="Имя *" required>
                    <input type="text" name="name" class="input-form" placeholder="Имя *" required>
                    <input type="text" name="name" class="input-form" placeholder="Имя *" required>
                </div>
                <button class="btn mt-60">Оставить заявку</button>
                <p class="text-center mt-40">Нажимая кнопку «Оставить заявку», вы даёте свое согласие на <a href="">обработку персональных данных</a> и соглашаетесь с политикой обработки <a href="">персональных данных</a></p>
            </form>
        </div>
    </div>
</template>