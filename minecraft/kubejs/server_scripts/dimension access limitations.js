const end_portal_open = false
const aether_open = false

BlockEvents.rightClicked(event => {
    if (end_portal_open === false) {
        if (event.player.mainHandItem.id === 'minecraft:ender_eye') {// Check
            if (event.block.id === 'minecraft:end_portal_frame') { // Checks

                //event.player.playSound('minecraft:block.anvil.place')
                event.cancel()   // Cancel the event to prevent placement
                

                
                // Play the sound with server-side execution
                event.server.scheduleInTicks(1, callback => {
                    event.block.popResource('minecraft:ender_eye')
                })
                event.player.sendData({
                    type: 'actionbar',
                    text: [{ 'text': '§cYou cannot place eyes of ender here!', 'color': 'red' }]
                })

                // Play sound at player location
                event.block.getLevel().playSound(
                    null,
                    event.block.getX() + 0.5,
                    event.block.getY() + 0.5,
                    event.block.getZ() + 0.5,
                    'minecraft:block.anvil.place',
                    'blocks',
                    10.0,
                    10.0
                )
            }
        }
    }
})

