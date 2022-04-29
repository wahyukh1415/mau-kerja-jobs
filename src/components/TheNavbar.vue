<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light header-color center-navbar navbar-height">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-start" id="navbarNavDropdown">
    <a class="navbar-brand px-3 py-3" href="#">
      <img src="../assets/img/maukerja-logo.png" width="100" alt="">
    </a>
    <ul class="navbar-nav">
      <li class="nav-item active px-3 py-3">
        <router-link class="to-center" :to="{name : 'home'}">
          All Jobs
        </router-link>
      </li>
      <li class="nav-item dropdown px-3 py-3">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tools
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown px-3 py-3">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Help
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item px- py-3">
        <a class="nav-link" href="#">Blog</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<style lang="scss" scoped>
a{
  color: white !important;
}
.header-color{
  background: #E23F59 !important
}
</style>