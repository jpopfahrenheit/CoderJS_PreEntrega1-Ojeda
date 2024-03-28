// Juan Pablo Ojeda
// PreEntrega1+Ojeda
welcome()

function welcome() {
    alert("Bienvenidos a Zapatillas Center\nLe solicitamos que inicie sesión\n\nUtilice las siguientes credenciales\nUsuario: JuanPablo\nContraseña: CoderHouse")
    let name = login()
    options(name, 0)
}

function login() {
    let name = "Juan Pablo";
    let user = "JuanPablo";
    let pass = "CoderHouse";
    let count = 0;

    do {
        let inputUser = prompt("Ingresar tu nombre de usuario:")
        let inputPass = prompt("Ingresa tu contraseña:")
        count++;

        if (inputUser === user && inputPass === pass) {
            return name;
        } else {
            alert("Usuario y/o contraseña incorrecta")
        }

    } while (count < 3)

    alert("Número máximo de intentos alcanzado. Intente más tarde.")
    errorLogin()
}

function options(name, total) {
    let exitLoop = false;
    let shoes = ["Zapatillas para trekking hombre", "Zapatillas para correr hombre", "Botines Futbol para hombre", "Zapatillas para trekking mujer", "Zapatillas para correr mujer", "Botines Futbol para mujer", "Zapatillas para deportes niño", "Zapatillas de escuela niño", "Zapatillas para deportes niña", "Zapatillas para escuela niña"];

    while (!exitLoop) {
        let menu = parseInt(prompt(`Bienvenido ${name}\nSeleccione qué desea ver e ingrese el número:\n1) Zapatillas para hombres\n2) Zapatillas para Mujer\n3) Zapatillas para Niños\n4) Zapatillas para Niñas\n5) Carrito de compras\n0) Salir`))

        switch (menu) {
            case 0:
                exitLoop = true;
                exit(name, total)
                break;
            case 1:
                total = men(total)
                break;
            case 2:
                total = women(total)
                break;
            case 3:
                total = boys(total)
                break;
            case 4:
                total = girls(total)
                break;
            case 5:
                cart(total)
                break;
            default:
                alert("Esta opción no es válida")
                break;
        }
    }
    function men(total) {
        let subTotalMen = 0;
        let back = false;
    
        do {
            let menu = parseInt(prompt(`Tenemos los siguientes productos\nSeleccione cuál desea agregar al carrito\n1) ${shoes[0]} : $125000\n2) ${shoes[1]} : $100000\n3) ${shoes[2]} : $95500\n0) Volver al menú anterior`))
    
            switch (menu) {
                case 0:
                    back = true;
                    break;
                case 1:
                    subTotalMen += 125000;
                    break;
                case 2:
                    subTotalMen += 100000;
                    break;
                case 3:
                    subTotalMen += 95500;
                    break;
                default:
                    alert("Esta opción no es válida")
                    break;
            }
        } while (!back)
    
        total += subTotalMen;
        return total;
    }
    
    function women(total) {
        let subTotalWomen = 0;
        let back = false;
    
        do {
            let menu = parseInt(prompt(`Tenemos los siguientes productos\nSeleccione cuál desea agregar al carrito\n1) ${shoes[3]} : $115000\n2) ${shoes[4]} : $94000\n3) ${shoes[5]} : $98250\n0) Volver al menú anterior`))
    
            switch (menu) {
                case 0:
                    back = true;
                    break;
                case 1:
                    subTotalWomen += 115000;
                    break;
                case 2:
                    subTotalWomen += 94000;
                    break;
                case 3:
                    subTotalWomen += 98250;
                    break;
                default:
                    alert("Esta opción no es válida")
                    break;
            }
        } while (!back)
    
        total += subTotalWomen;
        return total;
    }
    
    function boys(total) {
        let subTotalBoys = 0;
        let back = false;
    
        do {
            let menu = parseInt(prompt(`Tenemos los siguientes productos\nSeleccione cuál desea agregar al carrito\n1) ${shoes[6]} : $85260\n2) ${shoes[7]} : $72300\n0) Volver al menú anterior`))
    
            switch (menu) {
                case 0:
                    back = true;
                    break;
                case 1:
                    subTotalBoys += 85260;
                    break;
                case 2:
                    subTotalBoys += 72300;
                    break;
                default:
                    alert("Esta opción no es válida")
                    break;
            }
        } while (!back)
    
        total += subTotalBoys;
        return total;
    }
    
    function girls(total) {
        let subTotalGirls = 0;
        let back = false;
    
        do {
            let menu = parseInt(prompt(`Tenemos los siguientes productos\nSeleccione cuál desea agregar al carrito\n1) ${shoes[8]} : $85260\n2) ${shoes[9]} : $72300\n0) Volver al menú anterior`))
    
            switch (menu) {
                case 0:
                    back = true;
                    break;
                case 1:
                    subTotalGirls += 85260;
                    break;
                case 2:
                    subTotalGirls += 72300;
                    break;
                default:
                    alert("Esta opción no es válida")
                    break;
            }
        } while (!back)
    
        total += subTotalGirls;
        return total;
    }
}



function cart(total) {
    let messageCart = "";
    if (total == 0) {
        messageCart = "El carrito está vacío";
    } else {
        messageCart = `El total acumulado en el carrito es: $${total}`;
    }
    alert(messageCart)
}

function errorLogin() {
    for (let i = 3; i > 0; i--) {
        alert(`Vuelva más tarde (${i})`)
    }
    alert("Bueno, ya esperaste demasiado, prueba otra vez")
    welcome()
}

function exit(name) {
    alert(`${name} gracias por elegirnos\nVuelva pronto!`)
    welcome()
}
