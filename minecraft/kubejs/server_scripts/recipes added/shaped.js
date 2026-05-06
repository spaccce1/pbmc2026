const Mahou = true
const reforge_simple = true
const reforge_advanced = true

ServerEvents.recipes(event => {


    //Mahou Tsukai ------------------------------------------------------------------------------
    if (Mahou === true)
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
    console.log('shaped recipes has fired, did work indeed')
})