<template>
    <div class="row justify-content-center">
        <div class="">
            <svg width="81" height="52" viewBox="0 0 81 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.000175476 26.2342C0.000175476 12.0042 11.5359 0.468468 25.7659 0.468468C36.945 0.468468 46.4612 7.58781 50.0279 17.5399C49.2957 17.9344 48.6206 18.4212 48.0181 18.9847V18.973C42.0777 24.8041 38.6915 24.7093 32.5586 18.973V18.9847C30.842 17.3792 28.5358 16.3964 26 16.3964C20.6961 16.3964 16.3964 20.6961 16.3964 26C16.3964 31.304 20.6961 35.6036 26 35.6036C28.5358 35.6036 30.842 34.6209 32.5586 33.0154V33.0271L32.6488 32.9299C32.8668 32.7207 33.0749 32.5014 33.2724 32.2726C38.4681 26.9059 41.7453 26.4223 47.1142 32.0455C47.3738 32.3655 47.6536 32.6686 47.9516 32.9526L48.0181 33.0271V33.0154C48.6583 33.6142 49.3805 34.1263 50.166 34.5332C46.712 44.6915 37.0925 52 25.7659 52C11.5359 52 0.000175476 40.4643 0.000175476 26.2342Z"
                    fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M80.6161 25.7658C80.6161 39.9958 69.0804 51.5315 54.8503 51.5315C43.6713 51.5315 34.1551 44.4122 30.5883 34.4601C31.3204 34.0656 31.9955 33.5788 32.598 33.0154V33.027C39.5852 25.5315 42.3961 27.1712 48.0574 33.027V33.0154C49.774 34.6208 52.0802 35.6036 54.616 35.6036C59.9199 35.6036 64.2196 31.3039 64.2196 26C64.2196 20.6961 59.9199 16.3964 54.616 16.3964C52.0802 16.3964 49.774 17.3792 48.0574 18.9847V18.973L47.9672 19.0701C47.7492 19.2793 47.5411 19.4987 47.3436 19.7275C42.3961 23.8919 39.351 25.0631 33.7294 19.9099C33.5439 19.7399 33.3515 19.5949 33.1682 19.4567C32.9861 19.3195 32.8129 19.189 32.6644 19.0474L32.598 18.973V18.9847C31.9578 18.386 31.2357 17.8738 30.4502 17.467C33.9042 7.30853 43.5237 0 54.8503 0C69.0804 0 80.6161 11.5357 80.6161 25.7658Z"
                    fill="#5452FC" />
                <path
                    d="M50.1259 17.5676C48.6298 11.4447 40.9907 4.91891 39.8196 4.68469C39.8196 4.68469 32.3241 9.83783 30.4502 17.3333L32.7925 19.2072C36.2597 22.2659 38.1248 23.5342 40.9907 23.1892C43.0686 22.9214 44.354 22.2415 46.8466 20.1442C48.1177 18.7667 48.8385 18.3103 50.1259 17.5676Z"
                    fill="black" />
                <path
                    d="M50.1259 34.4324C48.5941 40.769 41.9556 47.0729 40.7565 47.3153C40.7565 47.3153 32.3687 42.1895 30.4502 34.4324L32.8483 32.2861C36.3981 29.1207 38.3075 27.8081 41.2417 28.1651C43.369 28.4423 44.0604 29.2169 46.6124 31.3874C47.9137 32.8129 48.8078 33.6638 50.1259 34.4324Z"
                    fill="#5452FC" />
            </svg>

            <div class="dashboard-title">
                Painel de Dados
            </div>
        </div>
        <div class="row link">
            <div class="">
                <router-link to="/dashboard">
                    <button class="btn btn-light w-100 d-flex align-items-center justify-content-center">
                        <IconDashboard />
                        <span class="ms-3">Dashboard</span>
                    </button>
                </router-link>
            </div>
        </div>
        <div class="row config">
            <router-link to="/dashboard/settings">
                <button class="btn mb-2 w-100 d-flex align-items-center justify-content-start">
                    <IconSettings />
                    <span class="ms-3">Configurações</span>
                </button>
            </router-link>
            <router-link to="/">
                <button class="btn w-100 d-flex align-items-center justify-content-start">
                    <IconExit />
                    <span class="ms-3">Sair</span>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import IconDashboard from './icons/IconDashboard.vue';
import IconSettings from './icons/IconSettings.vue';
import IconExit from './icons/IconExit.vue';
export default {
    name: "LefiSidebar",
    components: { IconDashboard, IconSettings, IconExit }
}
</script>

<style scoped>
</style>