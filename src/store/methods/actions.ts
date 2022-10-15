import {ContactsModel} from '@/models/contacts-model';
import {ACTION_GET_CONTACTS_DATA, MUTATION_SET_CONTACTS} from '@/store/constants';
import {StateInterface} from '@/store/types/state-interface';
import axios, {AxiosResponse} from 'axios';
import {ActionTree} from 'vuex';

/**
 * Экшены стора.
 */
export const actions: ActionTree<StateInterface, any> = {
	/** Получение меню каталога */
	async [ACTION_GET_CONTACTS_DATA]({commit}) {
		await axios.get('https://test1-vobler.mocklab.io/contacts')
			.then((response: AxiosResponse<ContactsModel[]>) => {
				commit(MUTATION_SET_CONTACTS, response.data);
			})
	},
}
