<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Go back only when the previous page is inside this app. Visitors who land
// here directly (shared link, search engine) go to the destinations list
// instead of being sent off the site.
function goBack() {
    if (window.history.state?.back) {
        router.back()
    } else {
        router.push({ name: 'About' })
    }
}
</script>

<template>
    <span class="go-back">
        <button class="pill pill--ghost" type="button" @click="goBack">← Go Back</button>
    </span>
</template>
