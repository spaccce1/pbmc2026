///////////***aptrgangr*** 


ServerEvents.generateData('after_mods', e => {
    e.json('pbmc:gateways/maledictus', {
        size: 'large',
        color: 'yellow',
        completion_xp: 0,
        spawn_range: 10,
        leash_range: 256,
        waves: [
            {
                entities: [
                    {
                        type: "gateways:standard",
                        count: 1,
                        entity: "minecraft:blaze",
                        desc: "WIP",      
                    },
                ],
                modifiers: [],
                rewards: [
                    {
                        type: 'gateways:loot_table',
                        loot_table: 'craftoria:gate/mythic_affix',
                        rolls: 1,
                        desc: 'WIP',
                    },
                ],
                max_wave_time: 4500,
                setup_time: 20,
            },
        ],
        rewards: [],
        failures: [
            {
                type: "gateways:explosion",
                strength: 20000,             // [Mandatory] || Strength of the explosion. Creepers are 3, TNT is 4.
                fire: true,               // [Mandatory] || If the explosion will cause fire to spawn.
                block_damage: true,       // [Mandatory] || If the explosion will damage blocks.
                desc: "WIP"               // [Mandatory] || Lang Key (or english text) which will be used to display the failure in the tooltip.
            },

            /*
            {
                type: "gateways:summon",
                entity: 
                [
                    {
                        type: "gateways:standard",
                        count: 20,
                        entity: "minecraft:blaze"
                    },
                ],
            }
            */

        ],
    });
})