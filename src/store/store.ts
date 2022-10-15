import {createStore} from 'vuex';
import {actions} from './methods/actions';
import {getters} from './methods/getters';
import {mutations} from './methods/mutations';
import {StateInterface} from './types/state-interface';

export default function createHomepageStore() {
	return createStore<StateInterface>({
		state:   {
			contactsData: [],
		},
		getters,
		mutations,
		actions,
	});
}
