<template>
  <a-breadcrumb>
    <a-breadcrumb-item
      v-for="(route, index) in $route.matched"
      :key="index"
      v-show="route.meta.title"
    >
      <component :is="route.meta.icon"></component>
      <span v-if="$route.matched.indexOf(route) === $route.matched.length - 1">
        {{ route.meta.title }}
      </span>
      <router-link v-else :to="route.path">
        {{ route.meta.title }}
      </router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts" name="BreadCrumbs"></script>
