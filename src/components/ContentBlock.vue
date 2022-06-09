<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <v-select
            v-model="selectedCountry"
            :items="filtersList.countries"
            :return-object="true"
            clearable
            label="Filter by country"
            @input="onFiltered"
        />

        <v-select
            v-model="selectedScore"
            :items="filtersList.score"
            :return-object="true"
            clearable
            label="Filter by score"
            @input="onFiltered"
        />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <v-card
            max-width="450"
            class="mx-auto"
        >
          <v-subheader
              v-if="header"
              v-text="header"
          />
          <v-list three-line>
            <template v-for="(user, index) in filteredUsers">
              <item-user
                :key="index"
                :avatar="user.avatar"
                :address="user.address"
                :divider="user.divider"
                :inset="user.inset"
                :subtitle="user.subtitle"
                :title="user.title"
              />
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import ItemUser from '@/components/ItemUser.vue';

  export default {
    name: 'ContentBlock',

    components: {
      ItemUser,
    },

    data: () => ({
      selectedCountry: null,
      selectedScore: null,
    }),

    computed: {
      ...mapState({
        header: (state) => state.header,
        filtersList: (state) => state.filtersList,
        filteredUsers: (state) => state.filteredUsers,
      }),
    },

    methods: {
      ...mapActions({
        initialStore: 'initialStore',
      }),

      ...mapMutations({
        userFiltered: 'userFiltered',
        initialUserList: 'initialUserList',
      }),

      onFiltered() {
        this.userFiltered({
          country: this.selectedCountry,
          score: this.selectedScore
        });
      },
    },

    async mounted() {
      await this.initialStore();
      this.initialUserList();
    }
  }
</script>
