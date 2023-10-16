const dieteticaItems = [
  {
    id: 1,
    name: "Avena",
    price: 3.99,
    description: "Grano entero rico en fibra y nutrientes esenciales.",
    descriptionExt:
      "La avena es un grano entero muy popular y ampliamente consumido en todo el mundo. Es conocida por ser rica en fibra dietética y nutrientes esenciales como vitaminas, minerales y antioxidantes. La avena se utiliza comúnmente en la preparación de avena instantánea, gachas de avena y también se puede agregar a batidos y productos horneados. Es una opción saludable para el desayuno o como base para muchas recetas nutritivas. Su alto contenido de fibra ayuda a mantener la saciedad y puede ser beneficioso para la salud del corazón.",
  },
  {
    id: 2,
    name: "Chía",
    price: 5.49,
    description:
      "Pequeñas semillas ricas en ácidos grasos omega-3 y antioxidantes.",
    descriptionExt:
      "Las semillas de chía son pequeñas pero poderosas. Son conocidas por ser una excelente fuente de ácidos grasos omega-3, antioxidantes y fibra. Estas semillas versátiles se pueden agregar a una variedad de platos, como batidos, yogur, ensaladas y productos horneados. Cuando se mezclan con líquido, las semillas de chía forman un gel que puede usarse como sustituto de huevo en recetas veganas o para espesar salsas y pudines. Además de su perfil nutricional impresionante, las semillas de chía son bajas en calorías y pueden ser una adición saludable a tu dieta. Su capacidad para absorber agua y formar un gel en el estómago también puede contribuir a la sensación de saciedad y ayudar en la digestión.",
  },
  {
    id: 3,
    name: "Lentejas",
    price: 2.99,
    description: "Legumbre nutritiva, fuente de proteínas y fibra dietética.",
    descriptionExt:
      "Las lentejas son legumbres altamente nutritivas y versátiles. Son una excelente fuente de proteínas vegetales, fibra dietética, vitaminas y minerales esenciales. Las lentejas son un ingrediente popular en platos como sopas, guisos, ensaladas y curry. Además de su valor nutricional, las lentejas son conocidas por ser económicas y fáciles de cocinar. Su alto contenido de fibra ayuda a mantener la saciedad y puede contribuir a la salud digestiva. Las lentejas también son una fuente de hierro y pueden ser una opción saludable para vegetarianos y veganos. Su versatilidad en la cocina las convierte en un ingrediente esencial para una dieta equilibrada y deliciosa.",
  },
  {
    id: 4,
    name: "Quinua",
    price: 4.79,
    description: "Cereal lleno de proteínas y vitaminas.",
    descriptionExt:
      "La quinua es un pseudocereal altamente nutritivo que se ha vuelto muy popular en la alimentación saludable. Es conocida por ser una excelente fuente de proteínas de alta calidad, conteniendo todos los aminoácidos esenciales. Además, es rica en fibra, vitaminas y minerales, como el hierro y el magnesio. La quinua es una opción versátil en la cocina y se puede utilizar en una variedad de platos, desde ensaladas hasta guisos. Es una excelente alternativa sin gluten para aquellos que necesitan evitar el trigo u otros cereales con gluten. La quinua es conocida por su textura ligera y su sabor suave, lo que la hace fácil de combinar con otros ingredientes y sabores. Es una elección saludable para una dieta equilibrada y nutritiva.",
  },
  {
    id: 5,
    name: "Aceite de oliva extra virgen",
    price: 8.99,
    description: "Aceite saludable para cocinar y aderezar.",
    descriptionExt:
      "El aceite de oliva extra virgen es un aceite vegetal saludable ampliamente utilizado en la cocina mediterránea y en todo el mundo. Se extrae de las aceitunas y es apreciado por su sabor y sus beneficios para la salud. Este aceite es una excelente fuente de grasas monoinsaturadas, que son consideradas saludables para el corazón. También contiene antioxidantes, como la vitamina E, que pueden ayudar a combatir el estrés oxidativo en el cuerpo. El aceite de oliva extra virgen es versátil y se puede utilizar para cocinar, aderezar ensaladas o sumergir pan. Se recomienda usarlo en preparaciones a fuego medio o bajo para aprovechar al máximo sus beneficios nutricionales. Además, su sabor suave y afrutado puede realzar el sabor de tus platos. Es una opción popular para cocinar y una alternativa saludable a otros aceites vegetales menos saludables.",
  },
  {
    id: 6,
    name: "Almendras",
    price: 7.49,
    description: "Fruto seco cargado de grasas saludables y antioxidantes.",
    descriptionExt:
      "Las almendras son frutos secos altamente nutritivos y sumamente versátiles. Son una fuente rica de grasas saludables, incluyendo ácidos grasos monoinsaturados, que son conocidos por sus beneficios para la salud cardiovascular. Además, son una excelente fuente de proteínas, fibra y vitamina E, un antioxidante que desempeña un papel crucial en la protección celular. Las almendras se pueden disfrutar como un snack saludable por sí solas, pero también se utilizan en la cocina de diversas maneras. Pueden ser picadas y agregadas a ensaladas, yogur o avena para dar un toque crujiente y nutritivo. Además, son un ingrediente popular en la repostería y se emplean en la elaboración de productos como pan de almendra y galletas. Su versatilidad culinaria y su perfil nutricional las convierten en una elección habitual para aquellos que buscan opciones de bocadillos saludables y deliciosos.",
  },
  {
    id: 7,
    name: "Yogur griego",
    price: 2.29,
    description: "Yogur cremoso con alto contenido de proteínas.",
    descriptionExt:
      "El yogur griego es un producto lácteo caracterizado por su textura cremosa y su alto contenido de proteínas. A diferencia del yogur común, el yogur griego es más espeso debido a que se elimina parte del suero durante el proceso de producción. Esta característica lo convierte en una elección popular entre quienes buscan una fuente de proteínas de calidad en su dieta. Además de ser rico en proteínas, el yogur griego también proporciona calcio y probióticos beneficiosos para la salud digestiva. Puede consumirse solo o con frutas, miel o frutos secos como acompañamiento, y es una opción versátil que se utiliza en batidos, aderezos para ensaladas y recetas de repostería. Su cremosidad y sabor suave lo convierten en un alimento delicioso y saludable para incorporar en una dieta equilibrada.",
  },
  {
    id: 8,
    name: "Espinacas frescas",
    price: 1.99,
    description: "Verdura rica en hierro y vitaminas.",
    descriptionExt:
      "Las espinacas frescas son verduras de hojas verdes conocidas por su alto contenido de hierro y otros nutrientes esenciales. Son una fuente importante de vitaminas y minerales, incluyendo vitamina A, vitamina K, ácido fólico, calcio y hierro. Estos nutrientes son esenciales para la salud ósea, la coagulación de la sangre y la salud general del organismo. Las espinacas frescas son versátiles y se pueden consumir crudas en ensaladas, cocidas como acompañamiento o como ingrediente en una variedad de platos, desde sopas hasta batidos. Además, son bajas en calorías y ricas en fibra, lo que las convierte en una opción saludable para quienes buscan mantener un peso equilibrado. Su sabor suave y su capacidad para mezclarse fácilmente con otros alimentos hacen que las espinacas frescas sean una elección nutricionalmente rica y deliciosa para una alimentación saludable.",
  },
  {
    id: 9,
    name: "Miel de abeja",
    price: 6.99,
    description: "Edulcorante natural con propiedades saludables.",
    descriptionExt:
      "La miel de abeja es un edulcorante natural apreciado por su dulce sabor y sus beneficios para la salud. Producida por las abejas a partir del néctar de las flores, la miel de abeja es conocida por su contenido de antioxidantes y propiedades antibacterianas naturales que pueden ayudar a mejorar la salud inmunológica y aliviar la garganta. Se utiliza comúnmente como endulzante en bebidas, productos horneados y aderezos para ensaladas, y también se emplea en remedios caseros para aliviar la tos. La miel de abeja es una opción versátil y saludable para satisfacer tus necesidades de dulzura en una variedad de preparaciones culinarias y remedios caseros.",
  },
  {
    id: 10,
    name: "Tofu orgánico",
    price: 3.49,
    description: "Fuente de proteínas vegetales con versatilidad culinaria.",
    descriptionExt:
      "El tofu orgánico es un producto a base de soja altamente versátil y nutritivo. Se obtiene mediante la coagulación de la leche de soja y es una fuente de proteínas vegetales de alta calidad. Además, es una excelente fuente de calcio, hierro y otros nutrientes esenciales. El tofu se utiliza comúnmente en la cocina vegetariana y vegana como sustituto de la carne en una variedad de platos, desde salteados y guisos hasta batidos y postres. Su sabor suave y su capacidad para absorber los sabores de los ingredientes con los que se combina lo convierten en un ingrediente versátil en la cocina. El tofu es apreciado por su textura firme y su capacidad de adaptarse a diferentes preparaciones culinarias, lo que lo hace una elección popular para quienes buscan una fuente de proteínas vegetales en su dieta o para aquellos que desean explorar opciones culinarias más saludables.",
  },
  {
    id: 11,
    name: "Aceitunas verdes",
    price: 4.29,
    description: "Fruto encurtido rico en grasas saludables.",
    descriptionExt:
      "Las aceitunas verdes son frutos encurtidos con un sabor característico y una textura carnosa. Son ampliamente apreciadas en la cocina mediterránea y en todo el mundo. Estas delicias saladas son una excelente fuente de grasas saludables, especialmente ácidos grasos monoinsaturados, que se consideran beneficiosos para la salud del corazón. Además, las aceitunas verdes contienen antioxidantes, como los polifenoles, que pueden tener propiedades antiinflamatorias y proteger las células del daño oxidativo. Se pueden disfrutar solas como aperitivo o como acompañamiento en ensaladas, platos de pasta o pizzas. Su sabor distintivo y versatilidad en la cocina las convierten en un ingrediente apreciado para realzar el sabor de una variedad de platillos. Las aceitunas verdes ofrecen un equilibrio entre sabor y salud que las hace una elección deliciosa y nutritiva para agregar a tus comidas.",
  },
  {
    id: 12,
    name: "Harina de almendra",
    price: 9.99,
    description: "Harina sin gluten hecha de almendras molidas.",
    descriptionExt:
      "La harina de almendra es un producto versátil y sin gluten que se obtiene al moler almendras en un polvo fino. Es ampliamente utilizada en la cocina, especialmente en recetas aptas para personas con sensibilidad al gluten o que siguen una dieta sin gluten. La harina de almendra es rica en grasas saludables, proteínas y fibra, lo que la convierte en una alternativa nutricionalmente densa a la harina de trigo convencional. Se utiliza comúnmente en la repostería para la elaboración de panes, galletas, tartas y otros productos horneados, y agrega un sabor suave y una textura húmeda a las preparaciones. Además, su capacidad para unir los ingredientes sin gluten la hace esencial en la cocina sin gluten. La harina de almendra es apreciada por su perfil nutricional y su versatilidad culinaria, y es una elección saludable para aquellos que buscan alternativas sin gluten en su dieta.",
  },
  {
    id: 13,
    name: "Cúrcuma en polvo",
    price: 2.79,
    description: "Especia con propiedades antiinflamatorias y antioxidantes.",
    descriptionExt:
      "La cúrcuma en polvo es una especia de tonalidad amarilla apreciada tanto por su sabor terroso como por sus beneficios para la salud. Su componente activo, la curcumina, ha sido asociado con propiedades antioxidantes y antiinflamatorias, lo que la convierte en una especia popular tanto en la cocina como en la medicina tradicional. Se utiliza en una variedad de platos, como curry, sopas y guisos, y puede añadirse a batidos y adobos. Su versatilidad y perfil nutricional la convierten en un ingrediente valioso que agrega sabor y posibles beneficios para la salud a tus comidas.",
  },
  {
    id: 14,
    name: "Leche de almendra",
    price: 3.29,
    description: "Alternativa láctea baja en calorías y sin lactosa.",
    descriptionExt:
      "La leche de almendra es una alternativa a la leche de origen animal que se obtiene al mezclar almendras con agua y luego filtrar la mezcla para obtener un líquido similar a la leche. Es una opción popular entre personas que siguen dietas veganas o que son intolerantes a la lactosa, ya que es naturalmente libre de lácteos. La leche de almendra es conocida por ser baja en calorías y grasa, lo que la hace una opción preferida para quienes buscan reducir la ingesta de calorías y grasas saturadas. Además, es una fuente de calcio, vitamina E y antioxidantes. Se utiliza comúnmente en cereales, café, batidos y recetas de repostería, y puede ser consumida sola o como base en muchas preparaciones culinarias. Su sabor suave y su textura ligera la hacen ideal para acompañar una variedad de platos y satisfacer las necesidades de aquellos que buscan una alternativa láctea más saludable y sin lactosa.",
  },
  {
    id: 15,
    name: "Semillas de girasol",
    price: 1.79,
    description: "Semillas ricas en grasas saludables y vitamina E.",
    descriptionExt:
      "Las semillas de girasol son semillas comestibles derivadas de la planta de girasol. Son una fuente nutricionalmente rica de grasas saludables, proteínas, fibra, vitamina E y minerales, como el magnesio y el selenio. Estas semillas tienen un sabor suave y una textura crujiente que las hace ideales como snack o como adición a una variedad de platillos. Son conocidas por ser una fuente de ácidos grasos insaturados, que pueden tener beneficios para la salud cardiovascular. Las semillas de girasol también contienen antioxidantes, lo que puede ayudar a proteger las células del daño oxidativo. Se pueden disfrutar solas como aperitivo, esparcidas sobre ensaladas o mezcladas en batidos. Su versatilidad en la cocina y su perfil nutricional las convierten en una opción deliciosa y saludable para satisfacer tus necesidades de bocadillos o añadir un toque crujiente a tus comidas.",
  },
];

export default dieteticaItems;
