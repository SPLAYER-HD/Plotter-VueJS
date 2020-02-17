<template>
  <div>
    <svg width="250" height="250">
      <circle
        :cx="item.x"
        :cy="item.y"
        :r="item.r"
        :fill="getRandomColor()"
        v-for="item in plotter"
        :key="item.id"
        v-if="item.i == 'c'"
      />
      <rect
        :x="item.x"
        :y="item.y"
        :width="item.w"
        :fill="getRandomColor()"
        :height="item.h"
        v-for="item in plotter"
        :key="item.id"
        v-if="item.i == 'r'"
      />
      <polygon
        :points="item.points"
        :fill="getRandomColor()"
        v-for="item in plotter"
        :key="item.id"
        v-if="item.i == 'p'"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Draw",
  data() {
    return {
      info: []
    };
  },
  props: ["plotter"],
  methods: {
    getRandomColor: function() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
};
</script>

<style></style>
