<template>
    <div class="home">
        <div class="fade home_container">
            <h1 class="main_title">Wanderlust Nomad</h1>
            <h2 class="main_subtitle">Welcome to my nomad journey!</h2>
            <p class="main_text">
              This website is a manifestation of my wanderlust and desire to explore the world.
              Traveling is one of my top priorities in life, as it allows us to enrich our lives and explore the beauty of different cultures.
              <br>
              <br>
              As the saying goes, we should travel not to escape life, but for life not to escape us. 
              <br>
              <br>
              I hope this website inspires you to embark on your own journey and embrace the adventure of a nomadic lifestyle. Let's break free from routine and discover the world together!
            </p>
        </div>
        <div class="main_image fade-nested">
            <img src="/nomad.svg" alt="Wanderlust Nomad">
        </div>
    </div>
    <div class="footer">
        <p>Made by <a href="https://github.com/highflyer910/wanderlust_nomad" target="_blank">Thea</a> &copy; 2023</p>
    </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}

.main_image {
  flex-basis: 50%;
  padding: 0 10px;
}

.main_image img {
  width: 100%;
  height: auto;
  display: block;
}

.home_container {
  flex-basis: 50%;
  padding: 20px;
}

.footer p{
  text-align: center;
  margin-bottom: 0;
}

.footer  a{
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .home {
    display: flex;
    flex-direction: column-reverse;

  }

  .home_container {
    margin-top: -120px;
    text-align: center;
  }

  .home_container h1,
  .home_container h2{
    text-align: center;
  }
  .main_image {
    text-align: center;
    margin-top: 50px;
  }
}

</style>
