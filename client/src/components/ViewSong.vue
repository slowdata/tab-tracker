<template>
  <v-layout>
    <v-flex xs6>
      <Panel title="Song Metadata">
        <v-layout>
          <v-flex xs6>
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-genre">
              {{song.genre}}
            </div>
          </v-flex>
          
          <v-flex xs6>
            <img :src="song.albumImageUrl" class="album-image">
            <br>
            {{song.album}}
          </v-flex>
        </v-layout>
      </Panel>
    </v-flex>

    <v-flex xs6 class="ml-2">
      <Panel title="Tabs">
        <textarea readonly v-model="song.tab">
        </textarea>
      </Panel>
    </v-flex>
  </v-layout>
    

</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

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
    Panel
  }
}

</script>
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px

}

.song-artist {
  font-size: 24px

}

.song-genre {
  font-size: 18px
}

.album-image {
  width: 70%;
  margin: 0 auto;
}

textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border: transparent;
  overflow: auto;
  padding: 40px;
}
</style>