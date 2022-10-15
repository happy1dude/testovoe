import {ACTION_GET_CONTACTS_DATA, GET_CONTACTS_DATA} from '@/store/constants';
import {ref, onMounted} from 'vue';
import ContactCard from './components/contact/contact-card.vue';
import {useStore} from 'vuex';

/**
 * Компонент списка контактов.
 */
export default {
	components: {
		ContactCard
	},
	setup() {
		/** Стор */
		const {dispatch, getters} = useStore();

		/** Данные контактов */
		const contactsData = ref();

		onMounted(() => {
			dispatch(ACTION_GET_CONTACTS_DATA).then(() => {
				contactsData.value = getters[GET_CONTACTS_DATA];
			})
		})

		/**
		 * Удалить контакт из списка.
		 *
		 * @param {string} index Индекс элемента в списке.
		 */
		function deleteContact(index: string): void {
			contactsData.value.splice(index, 1);
		}

		return {
			contactsData,
			deleteContact,
		}
	}
}
