import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios';
import CONFIG from '../config'

export const ProductsActions = {
    readMenShirts: function(){
       axios.get(CONFIG.backend_url+"products/1")
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'read_menShirts_successful',
                data:  res.data
            });
            console.log("read_menShirts "+res.data);
        })
        .catch( (error) => {
            console.log(error);
            Dispatcher.dispatch({
                actionType: 'read_menShoes_failure'
            });
        });
    },
    readMenShoes: function(){
        axios.get(CONFIG.backend_url+`products/2`)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'read_menShoes_successful',
                data:  res.data
            });
            console.log("read_menShoes "+res.data);
        })
        .catch( (error) => {
            console.log(error);
            Dispatcher.dispatch({
                actionType: 'read_menShoes_failure'
            });
        });
    },

    readWomenShoes: function(){
        axios.get(CONFIG.backend_url+`products/3`)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'read_womenShoe_successful',
                data:  res.data
            });
            console.log("read_menShoes "+res.data);
        })
        .catch( (error) => {
            console.log(error);
            Dispatcher.dispatch({
                actionType: 'read_womenShoe_failure'
            });
        });
    },
    readMenJacket: function(){
        axios.get(CONFIG.backend_url+`products/4`)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'read_menJacket_successful',
                data:  res.data
            });
            console.log("read_menJacket "+res.data);
        })
        .catch( (error) => {
            console.log(error);
            Dispatcher.dispatch({
                actionType: 'read_menJacket_failure'
            });
        });
    }
}

export default ProductsActions;