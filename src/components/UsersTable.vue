<template>
    <div class="bg-white px-4 pt-2 pb-3 mt-3 rounded-3">
        <div class="mt-3 d-flex justify-content-between mb-4">
            <h4 class="text-secondary">Usuários</h4>
            <button class="btn btn-purple">
                +
            </button>
        </div>

        <table class="table table-striped table-borderless">
            <thead>
                <tr>
                    <th class="col">Nome</th>
                    <th class="col">Email</th>
                    <th class="col">Perfil</th>
                    <th class="col">Status</th>
                    <th class="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        {{ user.profile }}
                    </td>
                    <td><div class="px-2 py-1 text-center rounded-2" style="background-color: #CCFFE3; color: #006737;">Ativo</div></td>
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
    name: "UsersTable",
    components: { IconEdit },
    data() {
        return {
            users: [
                { id: 1, name: "junior Luiz", email: "junior@convicti.com.br", profile: "Admin", },
                { id: 2, name: "joao Lucas", email: "joao.lucas@convicti.com.br", profile: "Desenvolvedor", },
                { id: 3, name: "Cíntia Lopes", email: "cintia.lopes@convicti.com.br", profile: "Recursos Humanos", }
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