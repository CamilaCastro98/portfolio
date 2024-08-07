const projects = [
    {
      title: {
        es: "Hobbify",
        en: "Hobbify"
      },
      img: "/img/proyects/hobbify.png",
      description: {
        es: "Aplicación móvil que conecta mediante chat en tiempo real a personas con hobbies e intereses en común.",
        en: "Mobile application that connects people with similar hobbies and interests through real-time chat."
      },
      technology: {
        es: "React Native, Expo.",
        en: "React Native, Expo."
      },
      more: {
        es: "Hobbify permite al usuario elegir o crear sus propios hobbies y luego de esto crear mediante un filtro automático un feed con todos los demás usuarios que tienen intereses en común con éste. La aplicación cuenta con autenticación propia y externa utilizando auth0, pasarela de pago con Stripe para permitir un plan premium y desbloquear beneficios, socket.IO para lograr la funcionalidad de chat en vivo y tiene persistencia de sesión.",
        en: "Hobbify allows users to choose or create their own hobbies and then automatically filter to create a feed with all other users who share similar interests. The app includes its own and external authentication using Auth0, payment gateway with Stripe for premium plans and benefits, live chat functionality with socket.IO, and session persistence."
      },
      links: {
        yt:'https://youtu.be/VXv4RG-DYS8',
        gh:'https://github.com/CamilaCastro98/frontend-hobbify',
      }
    },
    {
      title: {
        es: "hiWorld",
        en: "hiWorld"
      },
      img: "/img/proyects/tech.png",
      description: {
        es: "eCommerce para la venta de productos tecnológicos.",
        en: "eCommerce for selling technology products."
      },
      technology: {
        es: "Typescript, React, Next, Tailwind",
        en: "Typescript, React, Next, Tailwind"
      },
      more: {
        es: "hiWorld muestra los productos disponibles con posibilidad de poder filtrarlos según numerosos criterios, tales como por rango de precio, categorías y búsqueda personalizada por nombre. Tiene disponible una vista con los detalles del producto, detalles del carrito e historial de compras. Posee persistencia de sesión y del mismo carrito.",
        en: "hiWorld displays available products with the option to filter them by various criteria, such as price range, categories, and custom search by name. It includes a view with product details, cart details, and purchase history. It also features session persistence and cart persistence."
      },
      links: {
        deploy:'https://hiworld-two.vercel.app/',
        yt:'https://youtu.be/2tcHWsgOJDk',
        gh:'https://github.com/CamilaCastro98/Tech_Ecommerce',
      }
    },
    {
      title: {
        es: "React Fitness",
        en: "React Fitness"
      },
      img: "/img/proyects/react.png",
      description: {
        es: "Gestor de turnos para clientes de un gimnasio.",
        en: "Appointment manager for gym clients."
      },
      technology: {
        es: "React, Vite, Bootstrap",
        en: "React, Vite, Bootstrap"
      },
      more: {
        es: "React Fitness registra el historial de turnos de cada usuario para diferentes actividades disponibles en el gimnasio. Luego de un ingreso de sesión mediante autenticación propia, permite crear turnos nuevos dentro del horario permitido y cancelar otros en el momento.",
        en: "React Fitness records the appointment history of each user for various activities available at the gym. After logging in with its own authentication, it allows users to create new appointments within allowed hours and cancel others on the spot."
      },
      links: {
        deploy:'https://reactfitness-camila-castros-projects-9551b2b4.vercel.app/',
        yt:'https://youtu.be/VDSdjl2nHFU',
        gh:'https://github.com/CamilaCastro98/Gestor_de_turnos',
      }
    },
    {
      title: {
        es: "Etch a Sketch",
        en: "Etch a Sketch"
      },
      img: "/img/proyects/sketch2.png",
      description: {
        es: "Minijuego que permite dibujar y pintar en un lienzo blanco.",
        en: "Mini game that allows drawing and painting on a blank canvas."
      },
      technology: {
        es: "Javascript, HTML, CSS",
        en: "Javascript, HTML, CSS"
      },
      more: {
        es: "Desarrollado con Javascript vainilla, Etch a Sketch permite seleccionar colores y tamaño del pincel. Se puede eliminar todo el lienzo o borrar solo por sectores. También permite pintar en modo arcoíris.",
        en: "Developed with vanilla Javascript, Etch a Sketch allows selecting colors and brush sizes. You can erase the entire canvas or erase only in sections. It also features a rainbow painting mode."
      },
      links: {
        deploy:'https://etch-a-sketch-indol-pi.vercel.app/',
        gh:'https://github.com/CamilaCastro98/etch_a_sketch',
      }
    }
  ];
  
  export default projects;
  