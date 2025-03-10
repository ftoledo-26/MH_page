from pymongo import MongoClient
import json
import os
import creacionJSON as cj

ListBase = ["monstruos", "armas", "lugares", "items", "armaduras"]
cj.inicio()


try:
    client = MongoClient("mongodb://localhost:27017/")
    database = client['MH_Wiki']

    for i in ListBase:
        monsters = json.load(open(i+".json"))
    

    # Luego creo la api y la meto en las tablas y creo el script para que se ejecute en el servidor 
        for monster in monsters:
            database[i.capitalize()].insert_one(monster)
        os.remove(i+".json")
   # database['Armadura'].insert_one({"nombre": "Armadura Rathalos", "defensa": 50})
    #database['Arma'].insert_one({"nombre": "Espada Llamarada", "ataque": 120})
    #database['Habilidad'].insert_one({"nombre": "Resistencia al fuego", "nivel": 3})
    #database['Objeto'].insert_one({"nombre": "Poción", "efecto": "Recupera salud"})
    #database['Usuarios'].insert_one({"username": "Hunter01", "rango": "Alto"})


    print("Bases de datos disponibles:", client.list_database_names())
    print("Colecciones en MH_Wiki:", database.list_collection_names())

except Exception as e:
    print(f"Error: {e}")
