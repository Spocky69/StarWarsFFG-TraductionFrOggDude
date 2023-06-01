Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
		if(isNewerVersion(game.version, 10))
		{
			Babele.get().register({
				module: 'ffg-star-wars-traduction-fr-oggdude',
				lang: 'fr',
				dir: 'compendium'
			});
		}
		else
		{
			Babele.get().register({
				module: 'ffg-star-wars-traduction-fr-oggdude',
				lang: 'fr',
				dir: 'compendiumV9'
			});
		}			
    }
});