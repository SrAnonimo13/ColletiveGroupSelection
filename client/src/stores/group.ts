import { defineStore } from 'pinia'

interface State {
    names: [{
        id: number,
        name: string
    }]
}

export const useGroupStore = defineStore('GroupStore', {
    state: (): State => ({
        names: [{
            id: 0,
            name: ''
        }]
    }),
    actions: {
        addNewName(){
            this.names.push({ id: this.names.length + 1, name: '' })
        },
        removeNameByIndex(index: number){
            this.names.splice(index, 1);
        }
    }
});