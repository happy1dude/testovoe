import {StateInterface} from '@/store/types/state-interface';
import {GetterTree} from 'vuex';
import {GET_CONTACTS_DATA} from '../constants';

/**
 * Геттеры стора.
 */
export const getters: GetterTree<StateInterface, any> = {
	/** Получить данные контактов */
	[GET_CONTACTS_DATA](state) {
		return state.contactsData;
	},
}
