export default class Bar{
    initialState(){
        return false
    }
    check(value){
        return value.length >= 5
    }
}