import Vue from 'vue';


var NewLink = {
    template: '<li><a href v-bind:href="single.href">{{ single.title }}</a><button v-on:click="$emit(\'remove\')">X</button></li>',
    props: ['single']
};

var Heading =  {
    props: [
        'title'
    ],
    template: '<h1>{{title}}</h1>'
};

var app = new Vue({
    el: '#app',
    data: {
        newLink: '',
        newTitle: '',
        message: 'Test message!',
        list: [
            {title: 'Google', href: 'https://google.com'},
            {title: 'Yahoo', href: 'https://yahoo.com'},
            {title: 'Bing', href: 'https://bing.com'}
        ]
    },
    components: {
        'heading': Heading,
        'new_link' : NewLink
    },
    methods: {
        addLink: function() {
            this.list.push({ title: this.newTitle, href: this.newLink });
            this.newLink = '';
            this.newTitle = '';
        }
    }
});
