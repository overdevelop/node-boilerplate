import appFactory from './presentation/http';

appFactory().then(app => app.start()).catch(console.error);