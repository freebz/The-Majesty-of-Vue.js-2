<template>
  <ul class="list-group">
    <li v-for="story in stories" class="list-group-item">
      {{ story.writer }} said "{{ story.plot }}"
      Story upvotes {{ story.upvotes }}.
    </li>
  </ul>
</template>

<script>
  import {store} from '../store.js'
  
  export default {
    data () {
      return {
	// stories에 직접 바인딩합니다
	stories: store.stories,
      }
    },
    created () {
      console.log('stories')
    }
  }
</script>
