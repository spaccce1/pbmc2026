ServerEvents.recipes(event => {
    //shelfs
    event.replaceInput({ id: 'apothic_enchanting:seashelf' }, 'minecraft:potion', 'apotheosis:rare_material')
    event.replaceInput({ id: 'apothic_enchanting:hellshelf' }, 'minecraft:potion', 'kubejs:raw_sapphire')
    event.replaceInput({ id: 'apothic_enchanting:dormant_deepshelf' }, 'minecraft:cracked_deepslate_tiles', 'kubejs:copperbound_prism')
    event.replaceInput({ id: 'apothic_enchanting:endshelf' }, 'minecraft:ender_pearl', 'kubejs:crystallized_soul')
    event.replaceInput({ id: 'apothic_enchanting:draconic_endshelf' }, 'minecraft:ender_pearl', 'kubejs:arcane_gem')



    //other apoth
    //event.replaceInput({ id: 'apotheosis:potion_charm'}, 'minecraft:blaze_powder', 'kubejs:arcane_gem')
    event.replaceInput(
        { id: 'apotheosis:salvaging_table' },
        'minecraft:copper_ingot',
        'ominous_steel:ominous_ingot',
    )
    event.replaceInput(
        { id: 'apotheosis:gem_cutting_table' },
        'minecraft:smooth_stone', 'ominous_steel:ominous_ingot',
    )
    event.replaceInput(
        { id: 'apothic_enchanting:library' },
        'minecraft:enchanting_table', 'kubejs:blood_essence',
    )
    event.replaceInput(
        { id: 'apotheosis:gem_case' },
        'minecraft:ender_chest', 'kubejs:blood_essence',
    )
    event.replaceInput(
        { id: 'apotheosis:simple_reforging_table' },
        'apotheosis:gem_dust', 'kubejs:crystallized_soul',
    )
    event.replaceInput(
        { id: 'apotheosis:simple_reforging_table' },
        'minecraft:iron_ingot', 'ominous_steel:ominous_ingot',
    )





})
