<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{ hash: '#presentation' }">Présentation</router-link>
        </li>
        <li>
          <router-link :to="{ hash: '#creation' }">Création</router-link>
        </li>
        <li>
          <router-link :to="{ hash: '#contact' }">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>