import {StateInterface} from '@/store/types/state-interface';
import {MutationTree} from 'vuex';
import {MUTATION_SET_CONTACTS} from '../constants';

/**
 * Мутации стора.
 */
export const mutations: MutationTree<StateInterface> = {
	/** Записать данные контактов */
	[MUTATION_SET_CONTACTS]: (state, data) => {
		state.contactsData = data.data;
	},
}
