function createWebserver() {
    function start() {
        console.log('> [database] Starting...');
        console.log('> [database] Waiting for port to be available...');
        console.log('> [database] Starting done!');
    }

    function stop() {
        console.log('> [database] Stopping...');
        console.log('> [database] Gracefully waiting for all clients...');
        console.log('> [database] Closing all ports...');
        console.log('> [database] Stopping done!');
    }

    return {
        start,
        stop
    }
}

export default createWebserver;
