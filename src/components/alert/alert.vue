<template>
 <div v-if="alertShow" class="alertA animated bounceInDown">
     <span>{{alertMess}}</span>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'alert',
  data () {
    return {
    }
  },
  computed:mapGetters({
         alertShow:'getAlertShow',
         alertMess:'getAlertMess'
         })
     
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.alertA
    position: fixed;
    top: 40px;
    width: 100%;
    text-align: center;
    z-index: 3;
    color: #fff;
    span
        background: #fff;
        border-radius: 10px;
        padding: 5px 25px;
        color: #3f17d8;
</style>
