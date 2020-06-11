var hub = require('./src/api');

(async () => {
    console.log('Fetching apline repo information')
    let response = await hub.repository('library', 'alpine').catch( (err) => console.log(err) )
    console.log(response)

    console.log('Now get some tags from it...\n\n')
    let tags = await hub.tags('library', 'alpine') 
    console.log(tags)
})()
