<template>
    <div class="banner-wrapper">
        <div class="container">
            <div class="banner-content">
                <div class="banner-item banner-left">
                    <div class="banner-title text-title"><slot name="header"></slot></div>
                    <div class="banner-text text-prime"><slot name="content"></slot></div>
                </div>
                <div class="banner-item banner-right">
                    <button class="btn btn-light banner-btn">Подробнее</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
