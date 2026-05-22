ServerEvents.tags('item', event => {

    ['helmet', 'chestplate', 'leggings', 'boots'].forEach(piece => {
        ['c:armor', 'c:enchantables', 'minecraft:enchantable/armor', 'minecraft:enchantable/durability', 'minecraft:enchantable/equippable', 'minecraft:enchantable/vanishing', 'dynamiccrosshait:usable'].forEach(tags => {
            event.add(tags, 'ominous_steel:ominous_' + piece)
        })
    })

    event.add('minecraft:enchantable/head_armor', 'ominous_steel:ominous_helmet')
    event.add('minecraft:enchantable/chest_armor', 'ominous_steel:ominous_chestplate')
    event.add('minecraft:enchantable/leg_armor', 'ominous_steel:ominous_leggings')
    event.add('minecraft:enchantable/foot_armor', 'ominous_steel:ominous_boots')

})
