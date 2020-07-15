let id:number=Number(window.localStorage.getItem('_idMax')||'0')||0

function createId() {
    console.log('add');
    id++
    window.localStorage.setItem('_idMax',id.toString())
    return id
}

export default createId