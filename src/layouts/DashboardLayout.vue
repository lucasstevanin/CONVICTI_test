<template>
    <div class="container-fluid">
        <div class="row vh-100">
            <div class="d-none d-xxl-block col-xxl-2 bg-sidebar sticky-sidebar">
                <LeftSidebar />
            </div>
            <div class="col bg-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import LeftSidebar from '@/components/LeftSidebar.vue';

export default {
    name: 'DashboardLayout',
    components: { LeftSidebar }
}
</script>