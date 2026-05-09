ServerEvents.tags('item', event => {
    
    event.remove('reliquified_artifacts:mimic_loot', ['relics:experience_disperser', 'artifacts:ring_of_the_seven_deadly_sins', 'artifacts:power_glove'])
    event.remove('reliquified_artifacts:mimificable', ['relics:experience_disperser', 'artifacts:ring_of_the_seven_deadly_sins', 'artifacts:power_glove'])

})
