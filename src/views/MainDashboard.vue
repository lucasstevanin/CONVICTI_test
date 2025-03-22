<template>
    <div class="p-5">
        <h4 class="mb-4">Estatísticas</h4>
        <div class="row">
            <div class="col-12 col-lg-4">
                <CardDashboard :title="'Downloads'" />
            </div>
            <div class="col-12 mt-3 mt-lg-0 col-lg-4">
                <CardDashboard :title="'Avaliações'" :value="4.5" />
            </div>
            <div class="col-12 mt-3 mt-lg-0 col-lg-4">
                <CardDashboard :title="'Erros'" :value="100" :percentage="2" />
            </div>

            <div class="col-12">
                <FeedbackTable />
            </div>
            <div class="col-12">
                <NewFeaturesTable />
            </div>


        </div>
    </div>
</template>
<script>
import CardDashboard from '@/components/CardDashboard.vue';
import FeedbackTable from '@/components/FeedbackTable.vue';
import NewFeaturesTable from '@/components/NewFeaturesTable.vue';

export default {
    name: 'MainDashboard',
    components: { CardDashboard, FeedbackTable, NewFeaturesTable }
}
</script>
<style scoped></style>