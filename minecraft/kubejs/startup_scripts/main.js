// Visit the wiki for more info - https://kubejs.com/
//custom materials ----------------------------------------

// Listen to item registry event
StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
 
event.create('arcane_gem').texture('gems:item/material_crystal_arcane_gem')
event.create('copperbound_prism').texture('gems:item/gem_prism_copperbound')
event.create('blood_essence').texture('gems:item/magic_essence_blood_gem_medium')
event.create('crystallized_soul').texture('gems:item/magic_essence_soul_gem_medium')
event.create('raw_sapphire').texture('gems:item/gem_sapphire_raw')
event.create('rought_sapphire').texture('gems:item/gem_sapphire_rough')
event.create('sapphire_nugget').texture('gems:item/gem_sapphire_nugget')
event.create('medium_sapphire').texture('gems:item/gem_sapphire_medium')

  // If you want to specify a different texture location you can do that too, like this:
  //event.create('test_item_1').texture('mobbo:item/lava') // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png

  // You can chain builder methods as much as you like
  //event.create('test_item_2').maxStackSize(16).glow(true)

  // You can specify item type as 2nd argument in create(), some types have different available methods
  //event.create('custom_sword', 'sword').tier('diamond').attackDamageBaseline(10)
})