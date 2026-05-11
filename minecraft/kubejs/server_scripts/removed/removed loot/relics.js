LootJS.modifiers(event => {
    event.removeGlobalModifiers(/relics:.*/)
})




LootJS.lootTables(event => {
    let ids = event.getLootTableIds()
    ids.forEach(element => {
        event.getLootTable(element).removeItem("ominous_steel:ominous_scrap")
    });
})


