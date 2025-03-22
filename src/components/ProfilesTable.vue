<template>
    <div class="bg-white px-4 pt-2 pb-3 mt-3 rounded-3">
        <div class="mt-3 d-flex justify-content-between mb-4">
            <h4 class="text-secondary">Perfils</h4>
            <button class="btn btn-purple">
                +
            </button>
        </div>

        <table class="table table-striped table-borderless">
            <thead>
                <tr>
                    <th class="col">Nome</th>
                    <th class="col">Quantidade De Usuários</th>
                    <th class="col">Permissões</th>
                    <th class="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="profile in profiles" :key="profile.id">
                    <td>{{ profile.name }}</td>
                    <td>{{ profile.qttUsers }}</td>
                    <td>
                        <span v-for="perm in profile.permissions" :key="perm" class="badge bg-purple me-2">
                            {{ perm }}
                        </span>
                    </td>
                    <td>
                        <button class="btn font-size-20">
                            <IconEdit />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import IconEdit from './icons/IconEdit.vue';
export default {
    name: "ProfilesTable",
    components: { IconEdit },
    data() {
        return {
            profiles: [
                { id: 1, name: "Admin", qttUsers: 1, permissions: ["Tudo"] },
                { id: 2, name: "Desenvolvedor", qttUsers: 2, permissions: ["Downloads", "Avaliações", "Erros", "Novas Funcionalidades"] },
                { id: 3, name: "Recursos Humanos", qttUsers: 1, permissions: ["Nenhuma"] }
            ]
        };
    }
};
</script>

<style classd>
.btn-purple {
    background-color: #5452FC;
    color: #fff;
    font-size: 16px;
}

.badge.bg-purple {
    background-color: #5B59FF33;
    color: black;
    font-weight: 300;
    font-size: 14px;
    border-radius: 20px;
    padding: 10px 12px;
}

.table th,
.table td {
    vertical-align: middle;
}

thead tr {
    border-bottom: 1px solid #e1e1e1;
    border-top: 1px solid #e1e1e1;
}

th {
    font-weight: 300;
    font-size: 18px;
    color: #bfbfbf;
}

td {
    font-weight: 400;
    font-size: 16px;
    color: #3d3d3d;
}
</style>