const end_portal_open = false
const aether_open = false
/*
BlockEvents.rightClicked(event => {
    if (end_portal_open === false) {
        if (event.player.mainHandItem.id === 'minecraft:ender_eye') {
            if (event.block.id === 'minecraft:end_portal_frame') { 
                //console.runCommand(`/playsound block.anvil.place master @a[distance=0..20] ~ ~ ~ 0.9`)
                console.log('uygaw4rcibuyngsg45t')
                event.playSound(block.anvil.place,10,10)
                
            }
        }
    }
})
    */
BlockEvents.rightClicked(event => {
    if (end_portal_open === false) {
        if (event.player.mainHandItem.id === 'minecraft:ender_eye') {
            if (event.block.id === 'minecraft:end_portal_frame') { 
                event.player.tell(Text.of('NO END FOR YOU').red())
                event.player.tell(Text.of('come back later'))
                //event.level.playSound(null, event.player.x, event.player.y, event.player.z, 'minecraft:block.anvil.place', 'master', 1, 1.0) //doesnt work, throws an error I can no read
                event.cancel()
                
            }
        }
    }
})

