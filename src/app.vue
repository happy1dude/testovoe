<script lang="ts" src="./app.ts"></script>

<template>
	<div class="contacts">
		<div class="contacts__title">
			Контакты
		</div>

		<div class="contacts__list">
			<template
					v-for="(contact, index) in contactsData"
					:key="index"
			>
				<contact-card
						:avatar="contact.avatar"
						:name="contact.first_name"
						:contact-id="contact.id"
						@delete-contact="deleteContact(index)"
				/>
			</template>
		</div>
	</div>
</template>

<style lang="scss">
body {
	margin:           0;
	background-color: #f6f6f6;
}

#app {
	display:         flex;
	align-items:     center;
	justify-content: center;
	height:          100vh;
}

.contacts {
	width:         60vw;
	height:        80vh;
	border-radius: 12px;
	box-shadow:    0 1px 2px 0 rgb(0 0 0 / 16%);
	background:    #fff;
	padding:       25px;

	@media (max-width: 991px) {
		width: 100%;
	}

	&__title {
		width:         100%;
		text-align:    center;
		font-size:     20px;
		font-weight:   bold;
		margin-bottom: 15px;
	}

	&__list {
		width:         100%;
		height:             95%;
		overflow-x:         auto;
		box-shadow:         0 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
		border-radius:      8px;
		-ms-overflow-style: none;
		scrollbar-width:    none;

		&::-webkit-scrollbar {
			width:      0;
			background: transparent;
		}
	}
}
</style>
