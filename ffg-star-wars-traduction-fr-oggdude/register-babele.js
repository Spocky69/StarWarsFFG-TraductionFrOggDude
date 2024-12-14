Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
		game.babele.register({
				module: 'ffg-star-wars-traduction-fr-oggdude',
				lang: 'fr',
				dir: 'compendium'
			});			
    }
});