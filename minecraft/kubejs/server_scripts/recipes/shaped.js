

ServerEvents.recipes(event => {


    //Mahou Tsukai ------------------------------------------------------------------------------
    //if (Mahou === true)
    event.shaped(
        Item.of('mahoutsukai:mortar', 1), // arg 1: output
        [
            '   ',
            'ABA', // arg 2: the shape (array of strings)
            ' A '
        ],
        {
            A: 'apotheosis:mythic_material',
            B: 'apotheosis:epic_material'
        }
    )
    event.shaped(
        Item.of('mahoutsukai:pestle', 1), // arg 1: output
        [
            '  B',
            'CB ', // arg 2: the shape (array of strings)
            'AC '
        ],
        {
            A: 'apotheosis:mythic_material',
            B: 'minecraft:iron_ingot',
            C: 'apotheosis:epic_material',
        }
    )




    //Wood Shit-----------------------------------------------------------
    event.shaped(
        Item.of('4x minecraft:chest'),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: '#minecraft:logs'
        }
    )

    event.shaped(
        Item.of('16x minecraft:stick'),
        [
            'A  ',
            'A  ',
            '   '
        ],
        {
            A: '#minecraft:logs'
        }
    )



    //progression stuff? -----------------------------------------------------------
    event.shaped(
        Item.of('cataclysm:black_steel_ingot', 1), // arg 1: output
        [
            '   ',
            'ABA', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            A: 'apotheosis:epic_material',
            B: 'ominous_steel:ominous_ingot'
        }
    )
    event.shaped(
        Item.of('ominous_steel:ominous_scrap', 10), // arg 1: output
        [
            '   ',
            'ABA', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            A: 'minecraft:popped_chorus_fruit',
            B: 'minecraft:netherite_scrap'
        }
    )


    event.replaceInput({ id: 'reliquified_artifacts:mimi_dust' },
        'minecraft:echo_shard', 'kubejs:medium_sapphire',)
    event.replaceInput({ id: 'reliquified_artifacts:mimi_dust' },
        'minecraft:glowstone_dust', 'apotheosis:gem_dust',)
    event.replaceInput({ id: 'reliquified_artifacts:mimi_dust' },
        'minecraft:redstone', 'apotheosis:epic_material',)

    //apoth sigils-------------------------------------------------------
    event.shaped(
        Item.of('apotheosis:sigil_of_malice', 2), 
        [
            'BBB',
            'ACA',
            'BBB'
        ],
        {
            A: 'apotheosis:gem_fused_slate', 
            B: 'apotheosis:epic_material',
            C: 'kubejs:blood_essence',
        }
    )
    event.shaped(
        Item.of('apotheosis:sigil_of_supremacy', 1), 
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: 'apotheosis:gem_fused_slate', 
            A: 'kubejs:arcane_gem',
        }
    )
})