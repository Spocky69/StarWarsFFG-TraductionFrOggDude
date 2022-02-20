Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'ffg-star-wars-traduction-fr-oggdude',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});