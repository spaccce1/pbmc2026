ServerEvents.generateData('after_mods', e => {
    e.json('pbmc:gateways/ignis', {
        size: 'medium',
        color: 'red',
        completion_xp: 5000,
        spawn_range: 5,
        leash_range: 256,
        waves: [
            {
                entities: [
                    {
                        type: "gateways:standard",
                        count: 6,
                        entity: "minecraft:blaze"
                    },
                ],
                modifiers: [],
                rewards: [
                    {
                        type: 'gateways:loot_table',
                        loot_table: 'craftoria:gate/mythic_affix',
                        rolls: 1,
                        desc: 'mythic item',
                    },
                ],
                max_wave_time: 4500,
                setup_time: 20,
            },
            {
                entities: [
                    {
                        type: "gateways:standard",
                        count: 1,
                        entity: "cataclysm:ignis"
                    },
                ],

                modifiers: [
                    {
                        type: "gateways:attribute",
                        attribute: "minecraft:generic.max_health",
                        operation: "add_multiplied_total",
                        value: 3
                    },
                    {
                        type: "gateways:attribute",
                        attribute: "minecraft:generic.armor",
                        operation: "add_value",
                        value: 30.0
                    },
                    {
                        type: "gateways:attribute",
                        attribute: "minecraft:generic.attack_damage",
                        operation: "add_multiplied_total",
                        value: 10
                    },
                    {
                        type: "gateways:attribute",
                        attribute: "apothic_attributes:projectile_damage",
                        operation: "add_multiplied_total",
                        value: 7
                    },
                    {
                        type: "gateways:attribute",
                        attribute: "minecraft:generic.knockback_resistance",
                        operation: "add_value",
                        value: 1
                    },
                    {
                        type: "gateways:attribute",
                        attribute: "minecraft:generic.movement_speed",
                        operation: "add_multiplied_total",
                        value: 0.5
                    }
                ],
                rewards: [
                    {
                        type: 'gateways:loot_table',
                        loot_table: 'craftoria:gate/mythic_affix',
                        rolls: 1,
                        desc: 'mythic item',
                    },
                ],
                max_wave_time: 24000, 
                setup_time: 20,
            },
        ],
        rewards: [
            {
                type: 'gateways:loot_table',
                loot_table: 'craftoria:gate/mythic_affix',
                rolls: 1,
                desc: 'mythic apoth gear',
            },
            {
                type: "gateways:stack",
                stack:
                {
                    id: "kubejs:arcane_gem",                   // [Mandatory] || Registry name of the item to load.
                    count: 6,                 // [Optional]  || Stack Size. Default value = 1.
                }
            }
        ],
        failures: [
            {
                type: "gateways:explosion",
                strength: 20,             // [Mandatory] || Strength of the explosion. Creepers are 3, TNT is 4.
                fire: true,               // [Mandatory] || If the explosion will cause fire to spawn.
                block_damage: true,       // [Mandatory] || If the explosion will damage blocks.
                desc: "might explode if you fail"               // [Mandatory] || Lang Key (or english text) which will be used to display the failure in the tooltip.
            },
            {
                type: "gateways:command",
                command: '/give @n[type=minecraft:player] gateways:gate_pearl[gateways:gateway="pbmc:ignis"]',
                //command: '/playsound cataclysm:explosion hostile @p[distance=50] ~ ~ ~ 100',           // [Mandatory] || The command string, without a leading slash.
                //command: 'tellraw @a[distance=50] {"text":"The gate was not completed in time and the boss escaped!","color":"red"}',
                desc: "gives back the gate pearl"               // [Mandatory] || Lang Key (or english text) which will be used to display the failure in the tooltip.
            },
            {
                type: "gateways:command",
                command: 'tellraw @a[distance=..100] {"text":"The gate was not completed in time and the boss escaped!","color":"red"}',
                desc: "failure message"               // [Mandatory] || Lang Key (or english text) which will be used to display the failure in the tooltip.
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
    //////////////////////////////////////// ignis large
    e.json('pbmc:gateways/ignis_large', {
        size: 'large',
        color: 'red',
        completion_xp: 5000,
        spawn_range: 5,
        leash_range: 256,
        waves: [
            {
                entities: [
                    {
                        type: "gateways:standard",
                        count: 24,
                        entity: "minecraft:blaze"
                    },
                ],
                modifiers: [
                    {
                        type: "gateways:attribute",
                        attribute: "minecraft:generic.max_health",
                        operation: "add_multiplied_total",
                        value: 3
                    },
                ],
                rewards: [
                    {
                        type: 'gateways:loot_table',
                        loot_table: 'craftoria:gate/mythic_affix',
                        rolls: 1,
                        desc: 'mythic item',
                    },
                ],
                max_wave_time: 4500,
                setup_time: 20,
            },
            {
                entities: [
                    {
                        type: "gateways:standard",
                        count: 5,
                        entity: "cataclysm:ignis"
                    },
                ],

                modifiers: [
                    {
                        type: "gateways:attribute",
                        attribute: "minecraft:generic.max_health",
                        operation: "add_multiplied_total",
                        value: 3
                    },
                    {
                        type: "gateways:attribute",
                        attribute: "minecraft:generic.armor",
                        operation: "add_value",
                        value: 30.0
                    },
                    {
                        type: "gateways:attribute",
                        attribute: "minecraft:generic.attack_damage",
                        operation: "add_multiplied_total",
                        value: 10
                    },
                    {
                        type: "gateways:attribute",
                        attribute: "apothic_attributes:projectile_damage",
                        operation: "add_multiplied_total",
                        value: 7
                    },
                    {
                        type: "gateways:attribute",
                        attribute: "minecraft:generic.knockback_resistance",
                        operation: "add_value",
                        value: 1
                    },
                    {
                        type: "gateways:attribute",
                        attribute: "minecraft:generic.movement_speed",
                        operation: "add_multiplied_total",
                        value: 0.5
                    }
                ],
                rewards: [
                    {
                        type: 'gateways:loot_table',
                        loot_table: 'craftoria:gate/mythic_affix',
                        rolls: 1,
                        desc: 'mythic item',
                    },
                ],
                max_wave_time: 24000, 
                setup_time: 20,
            },
        ],
        rewards: [
            {
                type: 'gateways:loot_table',
                loot_table: 'craftoria:gate/mythic_affix',
                rolls: 1,
                desc: 'mythic apoth gear',
            },
            {
                type: "gateways:stack",
                stack:
                {
                    id: "kubejs:arcane_gem",                   // [Mandatory] || Registry name of the item to load.
                    count: 36,                 // [Optional]  || Stack Size. Default value = 1.
                }
            }
        ],
        failures: [
            {
                type: "gateways:command",
                command: '/give @n[type=minecraft:player] gateways:gate_pearl[gateways:gateway="pbmc:ignis"]',
                //command: '/playsound cataclysm:explosion hostile @p[distance=50] ~ ~ ~ 100',           // [Mandatory] || The command string, without a leading slash.
                //command: 'tellraw @a[distance=50] {"text":"The gate was not completed in time and the boss escaped!","color":"red"}',
                desc: "gives back the gate pearl"               // [Mandatory] || Lang Key (or english text) which will be used to display the failure in the tooltip.
            },
            {
                type: "gateways:explosion",
                strength: 20,             // [Mandatory] || Strength of the explosion. Creepers are 3, TNT is 4.
                fire: true,               // [Mandatory] || If the explosion will cause fire to spawn.
                block_damage: true,       // [Mandatory] || If the explosion will damage blocks.
                desc: "explosion"               // [Mandatory] || Lang Key (or english text) which will be used to display the failure in the tooltip.
            },
            {
                type: "gateways:command",
                command: 'tellraw @a[distance=..100] {"text":"The gate was not completed in time and the boss escaped!","color":"red"}',
                desc: "failure message"               // [Mandatory] || Lang Key (or english text) which will be used to display the failure in the tooltip.
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