ItemEvents.foodEaten('minecraft:sugar', event => {
	const { item, level, player } = event;

	const sugarEaten = (player.persistentData.getInt('sugar_eaten') ?? 0) + 1;
	player.persistentData.putInt('sugar_eaten', sugarEaten);

	player.tell(`You ate some sugar! You've gambled your life $==={sugarEaten}=== times so far.`);
});
ItemEvents.rightClicked('minecraft:sugar', event => {

  if (event.hand == 'MAIN_HAND') {
    /*
    const sugarEaten = (player.persistentData.getInt('sugar_eaten') ?? 0) + 1;
    event.player.persistentData.putInt('sugar_eaten', sugarEaten);
    
    event.player.tell(`You ate some sugar! You've gambled $==={sugarEaten}=== times so far.`);
    */
   event.player.tell('You ate some sugar!')
    if (Math.random() > 0.75) {
      event.player.potionEffects.add('minecraft:speed', 200, 1)
      event.player.potionEffects.add('minecraft:regeneration', 100, 1)
      event.player.potionEffects.add('minecraft:resistance', 300, 0)
      event.player.potionEffects.add('minecraft:jump_boost', 200, 1)
    } else {
      event.player.potionEffects.add('minecraft:hunger', 1000, 1)
      event.player.potionEffects.add('minecraft:weakness', 1000, 1)
      event.player.potionEffects.add('minecraft:blindness', 1000, 1)
      event.player.potionEffects.add('minecraft:slowness', 1000, 3)
    }
    event.player.mainHandItem.count--
  }

})



ItemEvents.foodEaten(event => {
  if (event.item.id == 'minecraft:sugar') {
    if (Math.random() > 0.75) {
      event.player.potionEffects.add('minecraft:speed', 200, 1)
      event.player.potionEffects.add('minecraft:regeneration', 100, 1)
      event.player.potionEffects.add('minecraft:resistance', 300, 0)
      event.player.potionEffects.add('minecraft:jump_boost', 200, 1)
    } else {
      event.player.potionEffects.add('minecraft:hunger', 200, 1)
      event.player.potionEffects.add('minecraft:weakness', 100, 1)
      event.player.potionEffects.add('minecraft:hunger', 300, 0)
      event.player.potionEffects.add('minecraft:blindness', 200, 1)
    }
    event.player.tell('You ate some sugar!')
  }
})


