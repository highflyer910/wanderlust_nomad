<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">My Destinations</router-link>
        
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<style lang="css">
#nav .active {
   color: #fff;
   opacity: 1;
}
</style>