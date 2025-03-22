<template>
    <div class="p-5">
        <h4 class="mb-4">Configurações</h4>
        <div class="row">
            <div class="col-12">
                <ProfilesTable />
            </div>
            <div class="col-12">
                <UsersTable />
            </div>
        </div>
    </div>
</template>
<script>
import ProfilesTable from '@/components/ProfilesTable.vue';
import UsersTable from '@/components/UsersTable.vue';
export default {
    name: 'MainSettings',
    components: { ProfilesTable, UsersTable }
}
</script>
<style scoped></style>