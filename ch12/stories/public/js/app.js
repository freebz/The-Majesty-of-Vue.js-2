Vue.component('story', {
    template: '#template-story-raw',
    props: ['story'],
    methods: {
	deleteStory: function (story) {
	    var index = vm.stories.indexOf(story);
	    this.$parent.stories.splice(index, 1)
	    axios.delete('/api/stories/' + story.id)
	},
	upvoteStory: function (story) {
	    story.upvotes++;
	    axios.patch('/api/stories/' + story.id, story)
	},
	editStory: function (story) {
	    story.editing=true;
	},
	updateStory: function (story) {
	    axios.patch('/api/stories/' + story.id, story)
	    // editing을 false로 설정해서 입력 필드를 숨기고 actions를 다시 표시
	    story.editing = false;
	},
	storeStory: function (story) {
	    axios.post('/api/stories/', story).then(function (response) {
		// 데이터베이스에 새 이야기를 저장한 후
		// 다시 모든 이야기를 vm.fetchStories();로 가져옵니다.
		// 더 나은 방법은 새 이야기의 id를 업데이트하는 것입니다.
		Vue.set(story, 'id', response.data.id);
		// editing을 flse로 설정해서 입력 필드를 숨기고
		// actions를 다시 표시합니다.
		story.editing = false;
	    });
	},
    }
});

// Vue.prototype.$http = axios
var vm = new Vue({
    el: '#v-app',
    data: {
	stories: [],
	story: {}
    },
    mounted: function () {
	this.fetchStories()
    },
    methods: {
	createStory: function () {
	    var newStory={
		"plot": "",
		"upvotes": 0,
		"editing": true
	    };
	    this.stories.push(newStory);
	},
	fetchStories: function () {
	    var vm = this;
	    axios.get('/api/stories')
		.then(function (response) {
		    // vm에 data를 설정
		    var storiesReady = response.data.map(function (story) {
			story.editing = false;
			return story
		    })
		    // vm.stories = storiesReady
		    Vue.set(vm, 'stories', storiesReady)
		});
	},
    }
});
