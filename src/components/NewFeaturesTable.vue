<template>
    <div class="bg-white px-4 pt-2 pb-3 mt-3 rounded-3">
        <h4 class="mt-3 text-secondary">Novas Funcionalidades</h4>
        <table class="table table-striped">
            <thead class="m-3">
                <tr>
                    <th>Funcionalidades</th>
                    <th>Taxas De Uso</th>
                </tr>
            </thead>
            <tbody class="p-3">
                <tr v-for="feature in features" :key="feature.id">
                    <td>{{ feature.name }}</td>
                    <td>{{ feature.rate }}%</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "NewFeaturesTable",
    data() {
        return {
            features: [
                {
                    id: 1,
                    name: "Veículo Em Rota",
                    rate: 92
                },
                {
                    id: 2,
                    name: "Avaliação De Coleta",
                    rate: 78
                },                
            ],
        };
    },
};
</script>

<style scoped>
th {
    font-weight: 400;
    font-size: 18px;
    color: #bfbfbf;
}

th:nth-child(2) {
    text-align: right;
}

td {
    font-weight: 400;
    font-size: 16px;
    color: #3d3d3d;
}

td:nth-child(2) {
    text-align: right;
    color: #00EC6D;
}

</style>
Ï