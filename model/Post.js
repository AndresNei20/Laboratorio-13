class Post{
    constructor(user, message, id, estado){
        this.user = user;
        this.message = message;
        this.id = id;
        this.estado= estado;
    }
    render(){
        console.log("render");
    }
}