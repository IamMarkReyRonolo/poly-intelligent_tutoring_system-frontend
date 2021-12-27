<template>
	<div class="bigContainer">
		<div class="main">{{ content }}</div>
	</div>
</template>

<script>
	import contentAPI from "../api/contentAPI";
	export default {
		data: () => ({
			number: 0,
			content: {},
		}),
		methods: {
			clicked() {
				this.number++;
			},
		},

		created() {
			const lesson_name = this.$route.params.lessonName.replaceAll("_", " ");
			const chapter_number = this.$route.params.chapterNumber;
			console.log(lesson_name);
			console.log(chapter_number);
			this.content = contentAPI.prototype.getChapterContent(
				lesson_name,
				chapter_number
			);
		},
	};
</script>

<style scoped></style>
