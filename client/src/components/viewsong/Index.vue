<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />

      </v-flex>
      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />

      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <song-tabs :song="song"/>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import SongTabs from './SongTabs'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    SongTabs
  }
}

</script>
<style scoped>

</style>