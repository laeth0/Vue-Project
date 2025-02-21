<script setup lang="ts">
import { useAxios } from "@vueuse/integrations";
import baseApiClient from "@/api/baseApiClient";

const { data, isLoading } = useAxios("/products", baseApiClient);
console.log(data);
</script>

<template>
    <h1>Products</h1>
    <div v-if="isLoading">Loading...</div>
    <v-container v-else>
        <v-row>
            <v-col
                v-for="product in data.products"
                :key="product.id"
                cols="12"
                md="4"
                sm="6"
            >
                <v-card>
                    <v-img
                        :src="product.mainImage.secure_url"
                        height="200px"
                    ></v-img>
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle>
                        {{ product.price }} => {{ product.reviews[0].rating }}
                    </v-card-subtitle>
                    <v-card-text>{{ product.description }}</v-card-text>
                    <v-card-actions>
                        <router-link
                            :to="{
                                name: 'ProductDetailsPage',
                                params: { id: product._id },
                            }"
                        >
                            click here
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss"></style>
