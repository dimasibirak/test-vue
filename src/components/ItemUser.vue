<template>
  <transition name="fade">
    <v-list-item>
      <v-list-item-avatar @click="onShowAddress">
        <v-img
            :src="avatar"
        />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-html="title" />
        <v-list-item-subtitle v-html="subtitle" />
        <div v-if="isShowAddress" class="address">
          <span>Address: </span>
          {{ address }}
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-divider
        v-if="divider"
        :inset="inset"
    />
  </transition>
</template>

<script>
export default {
  name: 'ItemUser',

  props: {
    avatar: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    divider: {
      type: Boolean,
      default: false,
    },
    inset: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isShowAddress: false,
    };
  },

  methods: {
    onShowAddress() {
      console.log('ffd')
      this.isShowAddress = !this.isShowAddress;
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .address {
    margin-top: 25px;
    height: 25px;
  }
</style>
