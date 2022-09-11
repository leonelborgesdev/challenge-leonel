# Desafio Tecnico para Backend Developer

Este es un desafío tecnico para la empresa tuGerente.com.

El mismo consiste en :

Desarrollar usando reactjs un componente de tipo tabla que en primera instancia cuando se monta el componente, muestra los primeros 20 documentos, consultando al servicio de firebase(firestore), buscando coincidencias según el texto escrito (o sin filtro, en caso de que no se haya escrito texto).

- El modelo en firebase consiste de los siguientes atributos:

1. nombre
2. razón social
3. nit
4. teléfono
5. código

- Debe solicitar resultados paginados de 20 en 20, y solo deberá traer la siguiente página cuando se esté scrolleando cerca al final de la lista actual de resultados.
- Debe permitir parametrizar por qué atributo del objeto se buscará. La parametrización se debe hacer por código, no en tiempo de ejecución
- El primer resultado del dropdown debe ser una opción fija que al darle click levante un pequeño pop-up, parte del componente, que permita agregar un nuevo objeto con el texto ya ingresado, pero permitiendo editarlo antes de guardar también.
- El proyecto esta dockerizado

## Comenzando 🚀

Estas instrucciones te permitirá levantar el proyecto.

### Pre-requisitos 📋

Necesitaras previamente tener instalado lo siguiente:

- Docker Desktop

### Instalación 🔧

Para levantar el contenedor, utilizas el siguiente comando:

docker-compose up

esta es una muestra de como se ve el frontend 🤓✌🏻

![localhost_3000_](https://user-images.githubusercontent.com/95236206/189511422-8b4e56d1-34fd-4f16-87b1-a9afa9bb2675.png)

![localhost_3000_ (1)](https://user-images.githubusercontent.com/95236206/189511459-d0ce7e93-db21-45b6-9bd6-85a872441503.png)

![localhost_3000_ (2)](https://user-images.githubusercontent.com/95236206/189511507-83ef2eea-39ad-4b19-8fb5-a7050a1494ff.png)

## Autores ✒️

Este desafío fue realizado por mi persona

- _Leonel Borges_ - Trabajo Inicial - [Leonel Borges](https://github.com/leonelborgesdev)

⌨️ con ❤️ por [Leonel Borges](https://github.com/leonelborgesdev)🤓✌🏻!!
