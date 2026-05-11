const end_portal_open = false
const aether_open = false

BlockEvents.rightClicked(event => {
    if (end_portal_open === false) {
        if (event.player.mainHandItem.id === 'minecraft:ender_eye') {
            if (event.block.id === 'minecraft:end_portal_frame') { 
                //console.runCommand(`/playsound block.anvil.place master @a[distance=0..20] ~ ~ ~ 0.9`)
                //event.playSound(block.anvil.place,10,10)
                event.player.tell(Text.of('NO END PORTAL FOR YOU').red());
                event.player.tell(Text.of('come back later'));
                event.cancel()
            }
        }
    }
})
    



