export interface GroupResponse {
    id: string,
    names: { id: string, name: string }[]
}

export async function RequestGroup(id: string): Promise<GroupResponse> {
    const groups: GroupResponse[] = [
        {
            id: "123",
            names: [
                { id: 'abc', name: 'João' },
                { id: 'abc1', name: 'Lucas' },
                { id: 'abc2', name: 'Marcos' },
                { id: 'abc3', name: 'Paulo' },
                { id: 'abc4', name: 'José' }
            ]
        }
    ]

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const group = groups.find(e => e.id == id);
            
            if(group) return resolve(group)
            reject('Invalid Code')
        }, 2000);
    });
}