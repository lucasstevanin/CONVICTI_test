<template>
    <div class="bg-white px-4 py-2 rounded-3">
        <div class="d-flex justify-content-between">
            <h4 class="text-secondary">
                {{ title }}
            </h4>
            <div>
                <IconCloud v-if="title === 'Downloads'" />
                <IconRating v-if="title === 'Avaliações'" />
                <IconError v-if="title === 'Erros'" />
            </div>
        </div>
        <h1 v-if="title === 'Avaliações'" class="font-size-22">
            {{ value }}<span class="fs-4">/5</span>
        </h1>
        <h1 v-else class="font-size-22">{{ value }}</h1>
        <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center">
                <div class="me-3 d-flex align-items-center">
                    <IconAndroid class="me-2"/>
                    {{ value1 }}
                </div>
                <div class="d-flex align-items-center">
                    <IconIOS class="me-2"/>
                    {{ value2 }}
                </div>
            </div>
            <div v-if="percentage">
                <component :is="icon" />
                {{ percentage }}%
            </div>
        </div>
    </div>
</template>

<script>
import IconCloud from './icons/IconCloud.vue';
import IconRating from './icons/IconRating.vue';
import IconError from './icons/IconError.vue';
import IconAndroid from './icons/IconAndroid.vue';
import IconIOS from './icons/IconIOS.vue';
export default {
    name: 'CardDashboard',
    props: {
        title: { type: String, default: 'Title' },
        value: { type: Number, default: 330 },
        value1: { type: Number, default: 30 },
        value2: { type: Number, default: 50 },
        percentage: { type: Number, default: null },
        icon: { type: Object, default: null }
    },
    components: { IconCloud, IconRating, IconError, IconAndroid, IconIOS }
}
</script>

<style scoped></style>