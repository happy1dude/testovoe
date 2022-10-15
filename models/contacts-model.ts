/**
 * Модель для данных контактов.
 */
export interface ContactsModel {
	/** Идентификатор */
	id: string;

	/** e-mail */
	email: string;

	/** Имя */
	first_name: string;

	/** Фамилия */
	last_name: string;

	/** Аватарка */
	avatar: string;
}
