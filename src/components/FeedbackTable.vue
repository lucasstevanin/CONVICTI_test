<template>
    <div class="bg-white px-4 pt-2 pb-3 mt-3 rounded-3">
        <h4 class="mt-3 text-secondary">Feedbacks</h4>
        <table class="table table-striped">
            <thead class="m-3">
                <tr>
                    <th>Avaliação</th>
                    <th>Data</th>
                    <th>Avaliação</th>
                    <th>Melhorias</th>
                    <th>Plataforma</th>
                </tr>
            </thead>
            <tbody class="p-3">
                <tr v-for="feedback in feedbacks" :key="feedback.id">
                    <td>{{ feedback.description }}</td>
                    <td>{{ feedback.date }}</td>
                    <td>{{ feedback.rating }}</td>
                    <td>{{ feedback.improvements || '-' }}</td>
                    <td>{{ feedback.platform }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "FeedbackTable",
    data() {
        return {
            feedbacks: [
                {
                    id: 1,
                    description:
                        "Aplicativo muito bom, porém poderiam atualizar mensalmente com os dados da qualidade do leite. Quando vi a mês a aplicação pega os dados da produção dos meses anteriores, não sendo possível consultar os meses anteriores. Antes não tinha esse problema.",
                    date: "01/04/24",
                    rating: 4,
                    improvements: "Dados de Produção, Suporte ao Usuário",
                    platform: "Android",
                },
                {
                    id: 2,
                    description:
                        "Aplicativo muito bom, porém poderiam atualizar mensalmente com os dados da qualidade do leite.",
                    date: "30/03/24",
                    rating: 5,
                    improvements: "-",
                    platform: "IOS",
                },
                {
                    id: 3,
                    description:
                        "",
                    date: "",
                    rating: null,
                    improvements: "",
                    platform: "",
                },
                {
                    id: 4,
                    description:
                        "",
                    date: "",
                    rating: null,
                    improvements: "",
                    platform: "",
                },
                {
                    id: 5,
                    description:
                        "",
                    date: "",
                    rating: null,
                    improvements: "",
                    platform: "",
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

td {
    font-weight: 400;
    font-size: 16px;
    color: #3d3d3d;
}
</style>
Ï