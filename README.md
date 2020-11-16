# API REST DNA MUTATION

Este es un proyecto desarrollado en JavaScript mediante Node.js utilizando express. Detecta si una persona tiene diferencias genéticas basándose en su ADN.
Una secuencia de ADN con mutaciones geneticas es aquella que tiene más de una secuencia de cuatro letras iguales de forma oblicua, horizontal o vertical.
**Sin Mutación**
![sin mutacion](https://firebasestorage.googleapis.com/v0/b/platzi-store-fc265.appspot.com/o/images%2Fsin-mutacion.PNG?alt=media&token=dec68c16-6090-445e-abcb-dc0fe915b73b "Sin mutacion")

**Con Mutación**
![con mutacion](https://firebasestorage.googleapis.com/v0/b/platzi-store-fc265.appspot.com/o/images%2Fcon-mutacion.PNG?alt=media&token=d1121f24-ee59-4239-a863-b7a72f4e0d84 "Con mutacion")

## Instalación
Para la instalación en local es necesario clonar el repositorio de [GitLab](https://gitlab.com/HectorRubi/dna-mutation-api-res) ó [GitHub](https://github.com/HectorRubi/dna-mutation-api-res), una vez clonado hay que entrar en la carpeta del proyecto, instalar las dependencias y ejecutar el proyecto.
```sh
$ cd dna-mutation-api-res
$ npm install
$ node app.js
```
Verifica el funcionamiento de la aplicación accediendo desde el navegador a la direccion del servidor.
```sh
127.0.0.1:8080
```

## Uso
En la URL raíz se muestra el mensaje `Hi im working` que indica que el servidor esta funcionando correctamente, en caso de no vizualizarlo revise los pasos de intalación.

En el endpoint `POST /mutation` es en donde se detecta si existe una mutación enviando la secuencia de ADN mediante un JSON con el siguiente formato:
```sh
{
    "dna": [
        "ATGCGA",
        "CAGTGC",
        "TTATCT",
        "AGACGG",
        "CCCCTA",
        "TCACTG"
    ]
}
```
En caso de que la secuencia de ADN tenga una mutación devolvera un status `200`, si no encuentra ninguna mutación devuelve un status de `403`.

```sh
# Ejemplo de petición de Status 200:
{ "dna": ["ATGCGA", "CAGTGC", "TTATCT", "AGACGG", "CCCCTA", "TCACTG"] }

# Ejemplo de etición de Status 403:
{ "dna": ["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"] }
```

El endpoint `GET /stats` devuelve un JSON con estadisticas de las verificaciones de ADN.
```sh
{
    "count_mutations": 40,
    "count_no_mutations": 100,
    "ratio": 0.4
}
```

## Author
**Héctor Rubí**
* [GitHub Profile](https://github.com/HectorRubi)
* [GitLab Profile](https://gitlab.com/HectorRubi)
* [LinkedIn Profile](https://linkedin.com/in/hector-rubi-garcia)
* [Twitter Profile](https://twitter.com/HectorRubiDev)

## License
MIT
