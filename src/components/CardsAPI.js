let TRIPS = [
    {
        id: '1',
        dest: 'Jungle',
        src: '/assets/1.jpg',
        description: 'Explore the hidden waterfall deep inside the Amazon jungle 1'
    },
    {
        id: '2',
        dest: 'Jungle',
        src: '/assets/2.jpg',
        description: 'Explore the hidden waterfall deep inside the Amazon jungle 2'
    },{
        id: '3',
        dest: 'Beach',
        src: '/assets/3.jpg',
        description: 'Explore the hidden waterfall deep inside the Amazon jungle 3'
    },{
        id: '4',
        dest: 'Beach',
        src: '/assets/4.jpg',
        description: 'Explore the hidden waterfall deep inside the Amazon jungle 4'
    },{
        id: '5',
        dest: 'Waterfall',
        src: '/assets/5.jpg',
        description: 'Explore the hidden waterfall deep inside the Amazon jungle 5'
    },{
        id: '6',
        dest: 'Waterfall',
        src: '/assets/6.jpg',
        description: 'Explore the hidden waterfall deep inside the Amazon jungle 6'
    },
]

const filterByDest =(dest) => {
    return TRIPS.filter(
        (trip) => trip.dest.toLowerCase() === dest.toLowerCase()
    )
}

const filterById = (id) => {
    return TRIPS.find(
        (trip) => trip.id === id
    )
}

const dests = [ ...new Set(TRIPS.map(trip => trip.dest))]
const ss = [ ...new Set([1,1,3])]

export {TRIPS, filterByDest, filterById, dests, ss}