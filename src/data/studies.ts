export const studies = [
  {
    title: "Ingles Básico-Intermedio",
    institution: "Ceid - UNCP",
    description:
      "Estudie el lenguaje de Ingles en el Centro de idiomas de la Universidad del Centro del Perú, hasta el nivel intermedio.",
    tags: [
      "idioma",
    ],
  },
  {
    title: "Robótica",
    institution: "SENATI",
    description:
      "Aprendí a diseñar robots y programarlos con lego mindstorms ev3.",
    tags: [
      "Programación",
      "Diseño",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

