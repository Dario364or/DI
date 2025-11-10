interface UserData{
    name:String,
    age:number,
    isActive:boolean
}

function Button (){

    let name:String = "Dario"; //let(Variable) name(nombre variable): String(tipo de dato)
    let age:number = 25;
    let price:number = 28.6;
    let isActive:boolean = true;

    let names:string[] = []; //Colecciones siempre en plurar

    let teachers: Map<string, string> = new Map(); 
    teachers.set("dario.narvaez@...", "Dario");
    teachers.set("marcos@...", "Marcos");
    teachers.set("luis@...", "luis");



    let user:UserData = {
        name: "Dario",
        age: 28,
        isActive:true
    }
    
    if(user.isActive){
        return<button>Está logueado</button>;
    }
    return<button>No esta logueado</button>

    names[0] = "Dario";

    names.push("Javier");

    names.pop(); //Extrae el ultimos valor del array

    let lastName = names.pop()

    return <button>{user.name}</button>;
}

export default Button;