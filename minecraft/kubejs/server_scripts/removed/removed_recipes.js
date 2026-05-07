ServerEvents.recipes(event => {

    const remove_id = [
        'mahoutsukai:pestle',
        'mahoutsukai:mortar',
        ''
    ]



    remove_id.forEach(element => {
        event.remove({ id: element })

    });


    //bulk:--------------------------------------
    event.remove({ type: '' })
    event.remove({ type: '' })
    event.remove({ type: '' })
    event.remove({ type: 'apotheosis:salvaging' , output: 'apotheosis:gem_dust' }) //grrrr Franzosen, they make my thing not work
    event.remove({ output: 'apotheosis:gem_dust' })
    event.remove({ mod: 'ultimine_addition' })

})
