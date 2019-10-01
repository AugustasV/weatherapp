export default hot(App)

getDockerHost = require('get-docker-host');
isInDocker = require('is-in-docker');
// App.js
import { hot } from 'react-hot-loader/root';
const App = () => <div>Hello World!</div>;
export default hot(App);

checkDocker = () => {
    return new Promise((resolve, reject) => {
        if (isInDocker()) {
            getDockerHost((error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
        } else {
            resolve(null);
        }
    });
};

//Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
	      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
	    }));
})();

checkDocker().then((addr) => {
    if (addr) {
        console.log('Docker host is ' + addr);
    } else {
        console.log('Not in Docker');
    }
}).catch((error) => {
    console.log('Could not find Docker host: ' + error);
});
