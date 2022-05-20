import imgApp from './../../images/img-app.png';
import IPL from './../../images/ipl-dashboard.png';
import spamApp from './../../images/spamham.png';
import bike_predictor from './../../images/bike_predictor.png';
import ticTacToe from './../../images/tic-tac-web.png';

export const projectData = [
    {
        id : '3',
        title : 'Bike Price Predictor',
        content : "This project tells what should the price of Indian selling 2nd Bike. Model prediction almost beats bike price on olx.in, droom.in.",
        img : bike_predictor,
        seeLive : 'https://predict-bike-price.herokuapp.com/',
        github : 'https://github.com/rakeshsahni/bike-price-predictor',
    },
    {
        id : '4',
        title : 'IPL DashBoard',
        content : "This is a IPL dashboard in which we can see all top Stats of IPL History 2008/09-2021. I have useed Kaggel dataset to build this dashboard.",
        img : IPL,
        seeLive : 'https://ipl-dashbord.herokuapp.com/',
        github : 'https://github.com/rakeshsahni/Quote-Apphttps://github.com/rakeshsahni/IPL-DashBord',
    },
    
    {
        id : '5',
        title : 'Email Spam Classifier',
        content : "This project tells us a text which is Ham or Spam. Means to aware spam type text so that we will serious.",
        img : spamApp,
        seeLive : 'https://detect-msg.herokuapp.com/',
        github : 'https://github.com/rakeshsahni/nlp-detect-msg',
    },

    {
        id : '2',
        title : 'Tic Tac Toe',
        content : "This is a Tic Tac Toe game in which is build in React Js. This is also build in own CSS.",
        img : ticTacToe,
        seeLive : 'https://rakeshsahni.github.io/tic-tac-web/',
        github : 'https://github.com/rakeshsahni/tic-tac-web/tree/master',
    },
    {
        id : '1',
        title : 'Image App',
        content : 'This is MERN App in which we are able to create profile, add, update, delete, like, comment on the images.',
        img : imgApp,
        seeLive : 'https://rakeshmernapp.herokuapp.com/',
        github : 'https://github.com/rakeshsahni/first-full-MERN-image-app',
    }
]