<script setup lang="ts">
import { useAxios } from "@vueuse/integrations";
import fakeStoreApiClient from "@/api/fakeStoreApiClient";

const { data, isLoading } = useAxios("/products", fakeStoreApiClient);
</script>

<template>
    <h1>Products</h1>
    <div v-if="isLoading">Loading...</div>
    <ul v-else>
        <li v-for="item in data" :key="item.id">
            <router-link
                :to="{
                    name: 'ProductDetailsPage',
                    params: { id: item.id },
                }"
            >
                {{ item.title }}
            </router-link>
        </li>
    </ul>
</template>

<style scoped lang="scss"></style>
