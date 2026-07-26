<template>
    <div>
        <div class="fade-nested">
            <h1>Not Found 🧭</h1>
            <p>Oops, the page doesn't exist. Try going
                <router-link to="/">home</router-link>.
            </p>
        </div>
    </div>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta({ title: 'Not Found', description: 'This page could not be found.' })
</script>