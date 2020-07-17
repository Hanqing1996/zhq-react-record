type Tag = {
    id: number,
    name: string
}

type RecordItem={
    tagNames:string[],
    note:string,
    type:'+'|'-',
    amount:number,
    createdAt:string
}