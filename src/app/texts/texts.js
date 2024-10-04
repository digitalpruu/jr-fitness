const title = "JR FITNESS";
const email = "jrfitness.3010@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy muy interesado en tus productos de ${title} y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!`
);
const numeroWhatsApp = "3214908835";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En JR Fitness, nos dedicamos a ofrecer ropa deportiva que combina comodidad, estilo y amor en cada prenda. Cada pieza de nuestra colección está diseñada pensando en la flexibilidad y el bienestar, permitiéndote rendir al máximo en cada actividad física mientras te ves increíble. Nuestro compromiso es crear ropa que no solo se vea bien, sino que también te haga sentir bien. Utilizamos materiales de alta calidad que ofrecen transpirabilidad, durabilidad y un ajuste perfecto, para que cada prenda sea tan funcional como elegante.\n" +
            "\n" +
            "En JR Fitness, creemos que la ropa deportiva debe ser una extensión de tu estilo personal, por eso ofrecemos una variedad de diseños que se adaptan a todas las preferencias. Cada prenda es confeccionada con detalle y pasión, asegurando que cada pieza refleje nuestro amor por el deporte y la moda. Si buscas ropa deportiva que te acompañe en cada paso de tu rutina, JR Fitness es la elección perfecta. ¡Comodidad, estilo y amor en cada prenda, solo en JR Fitness!",
        description2: ""
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan:{
            p1: "Comodidad, estilo y amor en cada prenda,",
            p2: "solo en JR Fitness!"
        },
        address: email,
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://es-la.facebook.com/profile.php?id=100078086377353&name=xhp_nt__fb__action__open_user",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },

};
export default textos;
