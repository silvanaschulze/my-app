import { createClient } from 'contentful'; //ES6 modules

const client = createClient({
    space: 'kjmavxqbnuj7',
    accessToken: 'aOmR_7ytKQEebCUnx6fJoxvdw4pJIsZzaUziKCp7uuU'
});

export default client;