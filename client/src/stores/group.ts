import { defineStore } from 'pinia';

interface State {
    id: string,
    names: {
        id: string,
        name: string
    }[]
};

export const useGroupStore = defineStore('GroupStore', {
    state: (): State => ({
        id: '',
        names: [{
            id: '',
            name: ''
        }]
    }),
    actions: {
        addNewName(){
            this.names.push({ id: '', name: '' })
        },
        removeNameByIndex(index: number){
            this.names.splice(index, 1);
        },
        setNames(...values: {id: string, name: string}[]){
            this.names.push(...values);
        }
    }
});