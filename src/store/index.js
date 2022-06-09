import { getUserData } from '@/services';
/**
 *  Не знаю можно ли было править модель данных, но я ее поправил :)
 *
 *  Так получится разделить на компоненты более правильно
 */

const store = {
    state: {
        header: 'List',
        filteredUsers: [],
        users: [],
        filtersList: {
            countries: [
                {
                    text: 'russia',
                    value: 'rus',
                },
                {
                    text: 'usa',
                    value: 'usa',
                },
            ],
            score: [
                {
                    text: '> 20',
                    condition: 'more',
                    value: 20,
                },
                {
                    text: '< 10',
                    condition: 'less',
                    value: 10,
                },
            ],
        },
    },
    mutations: {
        setState(state, payload) {
            state.users = payload;
        },

        initialUserList (state) {
            state.filteredUsers = state.users;
        },

        userFiltered (state, { country, score }) {
            let firstStepFiltered = null;
            let secondStepFiltered = null;

            const filterToConditions = (score, data) => {
                switch (true) {
                    case score?.condition === 'more':
                        return data.filter((el) => el.score > score.value);
                    case score?.condition === 'less':
                        return data.filter((el) => el.score < score.value);
                    default:
                        return data.map((el) => el);
                }
            };

            if (country) {
                firstStepFiltered = state.users.filter((user) => user.country === country?.value);
            }


            secondStepFiltered = firstStepFiltered
                ? filterToConditions(score, firstStepFiltered)
                : filterToConditions(score, state.users);


            state.filteredUsers = secondStepFiltered;
        }
    },
    actions: {
        async initialStore({ commit }) {
            const data = await getUserData();
            commit('setState', data.users);
        },
    },
};

export default store;

