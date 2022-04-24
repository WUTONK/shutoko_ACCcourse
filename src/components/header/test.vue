<template>
	<div>
		<!-- 注1：语言切换按钮 -->
		
		<!-- 注2：在按钮中，加入单击事件，事件指向语言切换函数 -->
		<button @click="switch_the_language">中文/English<button>
	
		<h1>{{ $t('login.title') }}</h1>
		
		<input type='text' :placeholder="$t('login.username')" >
		
		<p>当前语言： {{ message }} </p>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				message: this.$t('language.name')
			}
		},
		
		methods: {
		
			// 注3：增加语言切换函数
			switch_the_language() {
				if (this.$i18n.locale === 'zh') {
					this.$i18n.locale = 'en'
				} else {
					this.$i18n.locale = 'zh'
				}
			}
		
		
		}
	};
</script>


