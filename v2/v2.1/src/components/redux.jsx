//#1
export const add_Docteur = (docteur) => {
    return {
        type: 'ADD_DOCTEUR',
        payload: docteur,
    };

};
export const delete_Docteur = (id) => {
    return {
        type: 'DELETE_DOCTEUR',
        payload: id,
    };

};

//#2
import 