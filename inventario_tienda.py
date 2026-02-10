"""inventario py"""

### librerias
import time
import json
RUTA_ARCHIVO = "inventario_de_productos.json"

### bloque de archivo json e invemtario
def cargar_inventario():
    """
    Docstring para cargar_inventario
    """
    try:
        with open(RUTA_ARCHIVO, "r") as archivo:
            return json.load(archivo)
    except FileNotFoundError:
        return {}

def guardar_inventario(inventario):
    with open(RUTA_ARCHIVO, "w") as archivo:
        json.dump(inventario, archivo, indent=4)

inventario = cargar_inventario()

### bloque de validar respuesta [s/n]
def validar():
    """
    Docstring para validar
    """
    while True:
        validacion = input("[s/n]: ").lower()
        ### se verifica si es "s" o "n"
        if validacion in ("s", "n"):
            return validacion == "s"
        print("debes poner 's' o 'n'")

### verifica la entrada de numeros
def pedir_numero(mensaje):
    """
    Docstring para pedir_numero
    
    :param mensaje: Descripción
    """
    while True:
        valor = input(mensaje)
        ### verifica si es numero valido
        if valor.isnumeric():
            return int(valor)
        print("Debe ser un número válido")

### verifica si existe el producto en inventario
def existe_producto(nombre):
    """
    Docstring para existe_producto
    
    :param nombre: Descripción
    """
    return nombre in inventario

### bloque de añadir producto/s
def agregar_producto():
    """
    Docstring para agregar_producto
    """
    ### bucle para el ingreso
    while True:
        producto = input("Ingresa el nombre del producto: ").lower()
        cantidad = pedir_numero("¿Cuántos quieres agregar?: ")
        ### agrega producto y cantidad a listas
        inventario[producto] = inventario.get(producto, 0) + cantidad
        print("quieres agregar otro producto?")
        if not validar():
            break
    ### ouput
    print("agregando productos/s... ")
    time.sleep(1.5)

### bloque de eliminar producto/s
def eliminar_producto():
    """
    Docstring para eliminar_producto
    """
    while True:
        producto = input("que producto quieres eliminar?: ").lower()
        print("buscando producto...")
        time.sleep(0.6)
        ### verifica si no existe
        if not existe_producto(producto):
            print("el producto no existe")
            print("quieres volver al menu principal?")
            if not validar():
                break
            continue

        print("producto encontrado")
        ### bucle de elegir opcion
        while True:
            opcion = input(
                "qué quieres eliminar?\n",
                "   1-. todos\n",
                "   2-. una cantidad\n",
                "elige [1/2]: "
            )

            ### primera -> borra toda la lista
            if opcion == "1":
                print("eliminando todos los productos...")
                time.sleep(3.6)
                print(f"todos los '{producto}' fueron eliminados")
                inventario.pop(producto)
            ### segunda -> pregunta cantidad y elimina
            else:
                while True:
                    cantidad = input("cuantos quieres eliminar?: ")
                    if cantidad.isnumeric():
                        cantidad = int(cantidad)
                        break
                    print("debe ser un numero")
                ### si es que elimina todo
                if cantidad >= inventario[producto]:
                    inventario.pop(producto)
                    print(f"se eliminaron todos los '{producto}'")
                else:
                    ### saca (cantidad) (productos) de inventario
                    inventario[producto] -= cantidad
                    print(f"se eliminaron {cantidad} '{producto}'")

            print("quieres eliminar otro producto?")
            if not validar():
                break

### buscar y confirmar existencia de producto
def buscar_producto():
    """
    Docstring para buscar_producto
    """
    producto = input("como se llama el producto que quieres buscar?: ").lower()
    if not existe_producto(producto):
        print("este producto no existe")
    ### muestra inventario
    else:
        print("buscando producto...")
        time.sleep(0.5)
        print("producto encontardo")
        time.sleep(0.15)
        print(f"tienes {inventario.get(producto)} de {producto}")

### ejecucion
while True:
    opcion = input(
        "\nBienvenido al inventario de productos\n"
        "¿Qué quieres hacer? Elige un número:\n"
        "   1. Agregar un producto\n"
        "   2. Eliminar un producto\n"
        "   3. Buscar un producto\n"
        "   4. Ver inventario\n"
        "   5. Salir\n"
        
        ">>> "
    )
    if not opcion.isnumeric():
        print("debes ingresar un número del 1 al 5")
        continue
    opcion = int(opcion)
    # validar rango
    if opcion not in range(1, 6):
        print("debes ingresar un número del 1 al 5")
        continue
    # opciones
    """
    if opcion == "1":
        productos, cantidad = agregar_producto()
        for i, x in zip(productos, cantidad):
            try:
                item_sumado = inventario[i] + int(x)
            except KeyError:
                item_sumado = inr(x)
            inventaraio.update({i: item_sumado})
    elif opcion == "2":
        invventario = eliminar producto()
    elif opcion == "3":
        while True:
            buscar_producto()
            
    """
    if opcion == 1:
        productos, cantidad = agregar_producto()
        for p, c in zip(productos, cantidad):
            inventario[p] = inventario.get(p, 0) + c
    elif opcion == 2:
        eliminar_producto()
    elif opcion == 3:
        producto = input("que producto deseas buscar?: ").lower()
        if producto in inventario:
            print(f"{producto}: {inventario[producto]}")
        else:
            print("producto no encontrado")
    elif opcion == 4:
        if not inventario:
            print("el inventario está vacío")
        else:
            print("\n Inventario:")
            for p, c in inventario.items():
                print(f"- {p}: {c}")
    ### sale y guarda archvo json
    elif opcion == 5:
        print("guardando inventario...")
        with open(f"{RUTA_ARCHIVO}.json", "w") as archivo:
            json.dump(inventario, archivo, indent=4)
        print("hasta luego")
        break
