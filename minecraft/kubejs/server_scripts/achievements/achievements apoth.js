PlayerEvents.advancement(event => {

    if (PlayerEvents.advancement === /apotheosis:progression.*/)
        event.cancel()

})