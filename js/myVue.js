Vue.component ('movie-post', {
	props: ['movie'],
	template: 	`<div class="w3-teal w3-panel w3-border w3-round-xlarge panel">
					<div class="w3-third leftpart">
						<img :src="'img/movie'+movie.id+'.jpg'" class="w3-round cover">
						<a target="_blank" :href="movie.link" class="w3-button w3-white w3-round-large lb" title="Бесплатный онлайн-кинотеатр">Смотреть на <b>BASKINO</b></a>
						<a target="_blank" :href="movie.link" class="w3-button w3-white w3-round-large sb" style="display: none" title="Бесплатный онлайн-кинотеатр"><b>BASKINO</b></a>	
					</div>
					<div class="w3-twothird rightpart">
						<h3>{{ movie.title }} ({{ movie.year }})</h3>
						<h4 style="display: none">{{ movie.title }} {{ movie.year }}</h4>
						<p> {{ movie.desc }}</p>
					</div>
				</div>`
})	

Vue.component ('side-post', {
	props: ['side'],
	template:	`<div class="w3-text-white w3-panel w3-center w3-border w3-round-xlarge side special" :style="{background: side.back }">		
					<a target="_blank" :href="side.link" style="text-decoration: none" :title="side.title">
						<img :src="'img/side-'+side.name+'.png'" style="width: 100%"><br>
						<h3>{{ side.subject }}</h3>
						<h4 style="display: none">{{ side.subject }}</h4>
					</a>
				</div>`
})

new Vue ({
	el: "#wrapper",
	data: {
		movies: [
			{
				id: 1,
				link: 	'https://bit.ly/2Fsn09K',
				title: 	'Альфа и Омега: Клыкастая братва',
				year: 	'2010',
				desc: 	`Come along on the ultimate road-trip adventure that will leave the whole family 
						howling with laughter! When Kate and Humphrey, Alpha and Omega wolves, are suddenly 
						relocated, they must begin an incredible journey home to Jasper Park to save their pack!`,
			},
			{
				id: 2, 
				link: 	'https://bit.ly/3jcaZ71',
				title: 	'Альфа и Омега 2: Приключения праздничного воя',
				year: 	'2013',
				desc: 	`Kate and Humphrey and their 3 wolf cubs, Stinky, Claudette and Runt, are happily 
						preparing to celebrate their first winter holidays together when their smallest cub, Runt, 
						mysteriously disappears. They must now go on a new journey across the wilderness to find 
						and bring back Runt before the winter festivities begin at home. It's their greatest 
						adventure yet, filled with both action and suspense as well as plenty of the humor and 
						heartwarming moments that was delivered in the first theatrical release. While their 
						adventure does not end exactly as planned, in the end Kate and Humphrey must make new 
						holiday plans, but discover that "Home is where the Family is".`,
			},
			{
				id: 3, 
				link: 	'https://bit.ly/34aAwXM',
				title: 	'Альфа и Омега 3: Великие волчьи игры',
				year: 	'2014',
				desc: 	`Join the pack in this wild, warm hearted and totally pawsome adventure starring 
						everyone's favorite alphas and omegas! It's time for "The Great Wolf Games," when all 
						the alphas in the packs set aside their differences for some friendly competition. When 
						an unexpected accident puts many of our pack's star alpha wolves out of commission, a 
						new team is assembled that includes forest friends not in the pack. Can Coach Humphrey 
						lead his ragtag group of "underdogs" to victory? Find out in this thrilling movie that 
						will leave you howling for more!`,
			},
			{
				id: 4, 
				link: 	'https://bit.ly/3jdcrG1',
				title: 	'Альфа и Омега 4: Легенда о Зубастой Пещере',
				year: 	'2014',
				desc: 	`The Alphas and Omegas share a thrilling adventure filled with suspense, humor and 
						heartwarming moments after Runt – Kate and Humphrey's Omega wolf cub – sneaks off to 
						explore the haunted Saw Tooth Cave. When Runt finds a wolf that's been driven from her 
						pack for being different, he musters all his courage to help her – and learns the joys 
						of lending a paw to a friend in need.`,
			},
			{
				id: 5, 
				link: 	'https://bit.ly/3cDVWAz',
				title: 	'Альфа и Омега 5: Семейный отдых',
				year: 	'2015',
				desc: 	`Pack up for a howling fun movie adventure filled with action, laughs, and tender 
						moments as Kate and Humphrey take their pups on their first family vacation! The wolves 
						are ready for a relaxing getaway to Alfred Creek Falls – until they discover trappers 
						on their trail. To outwit the trappers and get to safety, Kate and Humphrey will need 
						the help of a wild and wonderful group of animal friends in this unforgettable story of 
						family togetherness.`,
			},
			{
				id: 6, 
				link: 	'https://bit.ly/3igQyV0',
				title: 	'Альфа и Омега 6: Прогулка с динозавром',
				year: 	'2016',
				desc: 	`After Kate, Humphrey, and their three pups are forced to relocate their den, they 
						discover Amy, a friendly raptor that magically came to life after being uncovered 
						during a big dig! The pups and their forest friends show Amy the wonders of their new 
						world, and must work together and try to stop the diggers from unearthing the dangerous 
						T-Rex before it’s too late!`,
			},
			{
				id: 7, 
				link: 	'https://bit.ly/3jdldnr',
				title: 	'Альфа и Омега 7: Большое обледенение',
				year: 	'2016',
				desc: 	`Join everyone's favorite alpha and omega wolves for a heartwarming holiday adventure!
						When Kate and Humphrey get lost in the woods and fail to appear for the holidays, their 
						wolf pups – Stinky, Claudette, and Runt – take matters into their own paws and venture out 
						into a blizzard to rescue them. Joined by Brent the sleepy bear cub and Agnes the feisty 
						porcupine, the pups prove that neither blinding snow, nor rival wolves, nor hungry bears 
						will keep them from spending the holidays together as a family.`,
			},
			{
				id: 8, 
				link: 	'https://bit.ly/30ge9iH',
				title: 	'Альфа и Омега 8: Путешествие в Медвежье Королевство',
				year: 	'2017',
				desc: 	`When the Queen Bear and her daughter, Princess Canue, visit the Eastern Valley an 
						epic war breaks out – Rogue Wolves versus the Western Pack and the Bear Army. Now, it's 
						up to Stinky, Claudette, and Runt to help Princess Canue return home to regain control 
						of her kingdom.`,
			},
		],
		sides: [
			{
				id: 1,
				back: '#4f1700',
				link: 'https://bit.ly/2S5NMr1',
				title: 'Фанфики по Альфе и Омеге',
				name: 'ficbook',
				subject: 'Приключения продолжаются!'
			},
			{
				id: 2,
				back: '#4d76a1',
				link: 'https://bit.ly/3dCa9OT',
				title: 'Наша группа ВКонтакте', 
				name: 'vk',
				subject: 'Присоединяйся к Cтае!'
			},
			{
				id: 3,
				back: '#000000',
				link: 'https://bit.ly/3dzt0Ks',
				title: 'Скачать тему для плеера AIMP',
				name: 'aimp',
				subject: 'Прокачай свой плеер!'
			},
		],
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
				children: null,
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
				children: 'Стинки (сын), Клодетт (дочь), Рант (сын)',
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
				children: 'Стинки (сын), Клодетт (дочь), Рант (сын)',
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
				children: '-',
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
				children: '-',
				about: `Гарт - сильный и гордый Альфа-самец, сын Тони, вожака Восточной Стаи, который в будущем сменит на этом посту своего отца. 
						Когда на территории Востока ухудшается ситуация с пропитанием, Тони вынуждает вожака соседней Западной Стаи Уинстона 
						заключить союз, залог которого - свадьба их детей. Гарт относится к этому обязательству довольно легко из-за собственной 
						самоуверенности, но события принимают неожиданный оборот. Его "невеста" Кейт бесследно исчезает, а на время её поисков Гарт 
						проводит время в компании её сестры Лили. Как ни странно, именно Омега становится той, с кем Гарт может не притворяться 
						"совершенным Альфой", а просто быть самим собой. Взаимопонимание и симпатия Альфы и Омеги перерастает в романтические чувства...`,
			},
			{
				picture: 'winston',
				name: 'Уинстон',
				species: 'Волк',
				status: 'Альфа',
				pack: 'Западная Стая',
				parents: '-',
				siblings: '-',
				partner: 'Ив (жена)',
				children: 'Кейт (дочь), Лили (дочь)',
				about: `Уинстон - опытный и мудрый Альфа-самец, признанный вожак Западной Стаи. Очень заметна приверженность Уинстона к миру и порядку,
						он не считает насилие выходом из ситуации, но как лидер готов пойти на всё ради своей Стаи. Также волк одинаково хорошо относится
						как к Альфам, так и к Омегам, несмотря на то, что пренебрежительное отношение к низшему рангу совсем не редкость. У Уинстона две 
						дочери, причём Кейт - Альфа, а Лили - Омега. Возможно, это оказало своё влияние на характер и "политику" вожака. Известно, что
						Уинстон хорошо знаком с Тони, вожаком Восточной Стаи. Когда-то давно он даже принял поистине судьбоносное решение об объединении
						двух Стай...`,
			},
			{
				picture: 'eve',
				name: 'Ив',
				species: 'Волчица',
				status: 'Альфа',
				pack: 'Западная Стая',
				parents: '-',
				siblings: '-',
				partner: 'Уинстон (муж)',
				children: 'Кейт (дочь), Лили (дочь)',
				about: `Ив - опытная и уважаемая Альфа-самка, жена вожака Западной Стаи Уинстона, мать Кейт и Лили. Если первой дочери от матери досталась
						внешность, то второй, пожалуй, двойственность характера. Обычно Ив держится спокойно и дружелюбно, но если её что-то разозлит,
						то от неё лучше держаться подальше. Своими красноречивыми угрозами и эмоциональностью волчица способна привести в ужас самых матёрых
						и сильных волков, а если этого будет недостаточно, то без промедлений бросится в драку. Несмотря на всё это, Ив справедливо можно
						назвать любящей женой и заботливой матерью...`,
			},
			{
				picture: 'hutch',
				name: 'Скромник',
				species: 'Волк',
				status: 'Бета',
				pack: 'Западная Стая',
				parents: '-',
				siblings: '-',
				partner: '-',
				children: '-',
				about: `Скромник - самец-Бета, один из помощников вожака Уинстона, обладающий также схожим с ним характером. Скромник осторожен и 
						рассудителен, тем не менее, в нужный момент он готов действовать бесстрашно и решительно. Будучи Бетой, участвует в жизни Стаи
						наравне с другими, занимаясь охотой и защитой от врагов. Конфликт Западной и Восточной Стаи начинается, когда волки с Востока 
						срывают первую охоту Кейт, в которой принимает участие и Скромник. Благодаря вмешательству Омег дело тогда ограничивается лишь 
						лёгкой перепалкой. Позже тем же днём, "красные" нападают на товарища Скромника, Чудилу. Предвидя последствия, Скромник объявляет
						сбор Альфа-волков...`,
			},
			{
				picture: 'candu',
				name: 'Чудила',
				species: 'Волк',
				status: 'Бета',
				pack: 'Западная Стая',
				parents: '-',
				siblings: '-',
				partner: '-',
				children: '-',
				about: `Чудила - самец-Бета, один из помощников вожака Уинстона. В отличии от него и своего товарища Скромника, Чудила довольно 
						импульсивен и вспыльчив, и всё же, при этом он, как и они, бесконечно предан своей Стае. Когда охотники с Востока срывают охоту
						Кейт, Чудила, принимавший участие в охоте, сразу же рвётся проучить незваных гостей. Появление Омег, а следом и Уинстона, вовремя
						сглаживает конфликт, но позже в тот же день "красные" не упускают возможность отомстить шумному Бете. Тем не менее, Чудила стойко
						это переносит и на следующий же день снова решительно настроен и рвётся в бой...`,
			},
			
		],
		buttonIndex: 0,
		pageIndex: 0,
		currentChar: 0,
		sectionName: 'Главная',
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
			var y = this.$el.querySelectorAll(".w3-white")
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
		openPage: function(index, name) {
			this.pageIndex = index
			this.sectionName = name
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
	