Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'ffg-star-wars-ogg-dude-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});