<script lang="ts" src="./contact-card.ts"></script>

<template>
	<div class="contact-card">
		<div class="contact-card__info">
			<img
					:src="avatar"
					alt="avatar"
					class="contact-card__avatar"
			 >
			<div class="contact-card__about-profile">
				<div class="contact-card__name">
					Имя: {{ name }}
				</div>
				<div class="contact-card__contact-id">
					Идентификатор: {{ contactId }}
				</div>
			</div>
		</div>

		<button
				@click="deleteContact"
				class="contact-card__delete-btn"
		>
			Удалить
		</button>
	</div>
</template>

<style lang="scss">
.contact-card {
	display:         flex;
	align-items:     center;
	border-bottom:   1px solid rgba(0, 0, 0, 0.25);
	min-height:      85px;
	margin:          0 10px;
	justify-content: space-between;

	&__info {
		display:     flex;
		align-items: center;
	}

	&__avatar {
		max-width:     75px;
		border-radius: 50%;
		margin-right:  40px;
	}

	&__about-profile {
		display:        flex;
		flex-direction: column;
	}

	&__name {
		margin-bottom: 10px;
	}

	&__delete-btn {
		background:    #f6f6f6;
		border-radius: 8px;
		padding:       10px;
		font-weight:   bold;
		border:        1px solid #d9d9d9;
		cursor:        pointer;

		&:hover {
			background: #f82f2f;
			color:      #fff;
		}
	}
}
</style>
