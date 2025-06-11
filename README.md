# SantiagoCollantesTestGrupoB

Este proyecto es parte del test técnico del Grupo B (sin librería de componentes). El objetivo fue construir desde cero un componente de formulario llamado **Base Card**, siguiendo el diseño proporcionado en Figma, aplicando buenas prácticas con Angular y manteniendo modularidad total.

---

## 🧩 Estructura de Componentes

El diseño fue desarrollado dividiendo la interfaz en componentes reutilizables:

- `HeaderComponent`: contiene el título, subtítulo y descripción.
- `InputComponent`: maneja campos de tipo texto, textarea y select.
- `CheckboxComponent`: casilla con estilo personalizado.
- `ButtonComponent`: botón primario (azul) y secundario (rojo).
- `BaseCardComponent`: componente que integra y organiza todos los anteriores.

---

## 🛠️ Tecnologías

- Angular Standalone (v17+)
- HTML & CSS (sin frameworks externos)
- Typescript

---

## 🚀 Instrucciones para correr

```bash
npm install
ng serve