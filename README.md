# 📌 Clasificación de Tareas - API  

Esta API permite clasificar automáticamente una tarea en una categoría específica con base en su **título** y **contenido**.  

## 🚀 Endpoint  

POST https://magicloops.dev/api/loop/798de182-1517-4815-ae7f-952796610ac9/run?

## 📥 Parámetros de entrada  

Debe enviarse una solicitud **POST** con un cuerpo en formato **JSON**, con los siguientes parámetros:  

| Parámetro  | Tipo   | Descripción |
|------------|--------|-------------|
| `titulo`   | string | Título breve de la tarea |
| `contenido` | string | Descripción detallada de la tarea |

### 📌 Ejemplo de solicitud  

```json
{
  "titulo": "Hacer la compra",
  "contenido": "Comprar lechuga, tomate, cebolla"
}
```
### 📤 Respuesta esperada
La API responderá con un objeto JSON que incluye la categoría detectada para la tarea.

🔹 Ejemplo de respuesta
```json
{
  "categoria": "Compras"
}
```
### 🛠 Códigos de respuesta
| Código |	Descripción |
|--------|--------------|
| `200 OK` |	La solicitud se procesó correctamente y se devolvió la categoría. |
| `400 Bad Request` |	Faltan parámetros obligatorios o hay un error en el formato del JSON. |
| `500 Internal Server Error` |	Error inesperado en el servidor. |

### 📌 Notas adicionales
- La API utiliza Procesamiento de Lenguaje Natural (NLP) para clasificar las tareas de manera automática.
- Las categorías pueden incluir: Trabajo, Estudio, Salud, Compras, Finanzas, Ocio, Viajes, Hogar, Administrativo, etc.
