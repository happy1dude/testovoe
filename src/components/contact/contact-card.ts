/**
 * Компонент контакта.
 */
export default {
	props: {
		/** Ссылка на аватар пользователя */
		avatar: {type: String, default: ''},

		/** Имя пользователя  */
		name: {type: String, default: ''},

		/** id пользователя  */
		contactId: {type: String, default: ''}
	},
	emits:['menuSubItemOnFocus'],
	setup(props,{emit}) {
		/**
		 * Клик по кнопке удаления.
		 */
		function deleteContact(): void {
			emit('deleteContact');
		}

		return {
			deleteContact,
		}
	}
}
