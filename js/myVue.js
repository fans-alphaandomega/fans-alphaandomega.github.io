new Vue ({
	el: "#wrapper",
	data: {
		bio: [
			{
				picture: null, 
				name: null,
				species: null,
				status: null,
				pack: null,
				parents: null,
				siblings: null,
				partner: null,
				about: null,
			},
			{
				picture: 'kate', 
				name: 'Кейт',
				species: 'Волчица',
				status: 'Альфа',
				pack: 'Западная Стая',
				parents: 'Ив (мать), Уинстон (отец)',
				siblings: 'Лили (сестра)',
				partner: 'Хамфри (муж)',
				about: `Кейт - сильная и дисциплинированная Альфа-самка из Западной Стаи, дочь вожака, готовящаяся занять его место. 
						Кейт с детства дружит с Хамфри, Омегой-самцом из своей Стаи, но подготовка в Альфа-школе вынуждает её не только 
						прервать их дружеские отношения, но и стать более спокойной и ответственной. По окончании обучения волчица узнаёт, 
						что должна выйти замуж за Гарта, сына вожака Востока, дабы объединить две стаи и предотвратить кровопролитную войну. 
						Остаётся лишь гадать, как бы сложилась судьба Кейт, если бы её вместе с Хамфри не похитили работники парка. Альфа и 
						Омега оказываются вдали от дома и, чтобы вернуться, вынуждены действовать заодно. В ходе путешествия Кейт и Хамфри 
						понимают свои настоящие чувства друг к другу...`,
			},
			{
				picture: 'humphrey',
				name: 'Хамфри',
				species: 'Волк',
				status: 'Омега',
				pack: 'Западная Стая',
				parents: '-',
				siblings: '-',
				partner: 'Кейт (жена)',
				about: `Хамфри - беззаботный и весёлый Омега-самец из Западной Стаи. Его всегда можно наблюдать в окружении таких же шумных 
						Омег, как и он сам. Кроме того, Хамфри с детства дружит с Кейт, Альфа-самкой и дочерью вожака Запада. Хамфри явно 
						неравнодушен к волчице, но их отношения были невозможны из-за жёсткого Закона Стаи. Однажды Хамфри и Кейт похищают 
						работники парка и увозят их далеко от родных мест. Чтобы вернуться, Альфе и Омеге приходится действовать сообща, и за 
						время своего путешествия домой они понимают, что для любви не существует никаких преград. И всё же, их чувствам друг к 
						другу предстоит выдержать суровые испытания...`,
			},
			{
				picture: 'lilly',
				name: 'Лили',
				species: 'Волчица',
				status: 'Омега',
				pack: 'Западная Стая',
				parents: 'Ив (мать), Уинстон (отец)',
				siblings: 'Кейт (сестра)',
				partner: 'Гарт (муж)',
				about: `Лили - Омега-самка из Западной Стаи, дочь Уинстона и Ив, сестра Кейт, обладающая, пожалуй, самым противоречивым 
						характером среди главных героев. Волчица также весела и игрива, как и прочие Омеги, но её никогда нельзя заметить в 
						компании друзей. С возрастом детский задор никуда не пропадает, но, похоже, Лили тщательно скрывает его от всех, кроме 
						самых близких. Что странно, единственный, с кем Лили запросто становится самой собой - это Гарт, Альфа-волк из Восточной 
						Стаи, несостоявшийся "жених" её сестры Кейт. За недолгое время, проведённое вместе, Альфа и Омега очень привязываются друг 
						к другу, но жестокая реальность сразу же стремится проверить их чувства на прочность...`,
			},
			{
				picture: 'garth',
				name: 'Гарт',
				species: 'Волк',
				status: 'Альфа',
				pack: 'Восточная Стая',
				parents: 'Тони (отец)',
				siblings: '-',
				partner: 'Лили (жена)',
				about: `Гарт - сильный и гордый Альфа-самец, сын Тони, вожака Восточной Стаи, который в будущем сменит на этом посту своего отца. 
						Когда на территории Востока ухудшается ситуация с пропитанием, Тони вынуждает вожака соседней Западной Стаи Уинстона 
						заключить союз, залог которого - свадьба их детей. Гарт относится к этому обязательству довольно легко из-за собственной 
						самоуверенности, но события принимают неожиданный оборот. Его "невеста" Кейт бесследно исчезает, а на время её поисков Гарт 
						проводит время в компании её сестры Лили. Как ни странно, именно Омега становится той, с кем Гарт может не притворяться 
						"совершенным Альфой", а просто быть самим собой. Взаимопонимание и симпатия Альфы и Омеги перерастает в романтические чувства...`,
			}
		],
		buttonIndex: 0,
		pageIndex: 0,
		currentChar: 0,
		show: false
	},
	methods: {
		darkMode: function() {
			this.buttonIndex = 1
			var i, j, k, l
			var isApple = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
			var v = this.$refs["wrapper"]
			if (isApple) {v.classList.toggle("idark")}
			else {v.classList.toggle("dark")}
			var w = this.$el.querySelectorAll(".w3-teal")
			for (i = 0; i < w.length; i++) {
				w[i].className = w[i].className.replace("w3-teal", "w3-indigo w3-text-yellow")
			}
			var x = this.$el.querySelectorAll(".color")
			for (j = 0; j < x.length; j++) {
				x[j].classList.toggle("filter")
			}	
			var y = this.$el.querySelectorAll(".w3-dark-grey")
			for (k = 0; k < y.length; k++) {
				y[k].className = y[k].className.replace("w3-white", "w3-dark-grey w3-text-orange")
			}
			var z = this.$el.querySelectorAll(".side")
			for (l = 0; l < z.length; l++) {
				z[l].className = z[l].className.replace("w3-text-white", "w3-text-yellow")
			}
		},
		lightMode: function() {
			this.buttonIndex = 0
			var i, j, k, l
			var isApple = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
			var v = this.$refs["wrapper"]
			if (isApple) {v.classList.toggle("idark")}
			else {v.classList.toggle("dark")}
			var w = this.$el.querySelectorAll(".w3-indigo")
			for (i = 0; i < w.length; i++) {
				w[i].className = w[i].className.replace("w3-indigo w3-text-yellow", "w3-teal")
			}
			var x = this.$el.querySelectorAll(".color")
			for (j = 0; j < x.length; j++) {
				x[j].classList.toggle("filter")
			}	
			var y = this.$el.querySelectorAll(".w3-dark-grey")
			for (k = 0; k < y.length; k++) {
				y[k].className = y[k].className.replace("w3-dark-grey w3-text-orange", "w3-white")
			}
			var z = this.$el.querySelectorAll(".side")
			for (l = 0; l < z.length; l++) {
				z[l].className = z[l].className.replace("w3-text-yellow", "w3-text-white")
			}
		},	
		openPage: function(index) {
			this.pageIndex = index
		},
		getBio: function(index) {
			this.currentChar = index
			this.show = true
			this.$refs['info'].scrollIntoView({ behavior: 'smooth'})
		},
		closeBio: function() {
			this.show = false
			this.$refs['bio'].scrollIntoView({ behavior: 'smooth'})
			this.currentChar = 0
		},
		showDivs: function(n) {
			var i
			var slideIndex = n
			var x = this.$el.querySelectorAll('.slide')
			var dots = this.$el.querySelectorAll('.demo')
			if (n > x.length) {slideIndex = 1}
			if (n < 1) {slideIndex = x.length}
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none"
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" w3-opacity-off", "")
			}
			x[slideIndex-1].style.display = "block"
			dots[slideIndex-1].className += " w3-opacity-off"
		}
	}
})	
	