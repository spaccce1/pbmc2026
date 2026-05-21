
ServerEvents.recipes(event => {


  ['helmet', 'chestplate', 'leggings', 'boots'].forEach(piece => {
    event.replaceInput(
      { id: 'cataclysm:smithing/ignitium_' + piece },
      'minecraft:netherite_' + piece,
      'cataclysm:cursium_' + piece
    )
    event.replaceInput(
      { id: 'cataclysm:smithing/cursium_' + piece },
      'minecraft:netherite_' + piece,
      'ominous_steel:ominous_' + piece
    )
  })


  event.replaceInput(
    { id: 'cataclysm:bone_reptile_helmet' },        
    'cataclysm:kobolediator_skull', 'aether:zanite_gemstone')

  event.replaceInput(
    { id: 'cataclysm:mechanical_fusion_anvil' },
    'minecraft:redstone_block',
    'kubejs:copperbound_prism',
  )
  event.replaceInput(
    { id: 'cataclysm:ignitium_upgrade_smithing_template' },
    'minecraft:blaze_powder',
    'kubejs:arcane_gem',
  )
  




})

