import http from 'http';

export default ({ param }) => {
    const submit = async ({ innerParam }) => {
        console.log();
    };
    return { submit };
};


http.createServer(() => {
    console.log('server');
    
}).listen(8080)
