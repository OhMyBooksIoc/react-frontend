function CookiesPage() {
    return (
      <div className="text-container">
        <h1 className="text-container__header">Política de Cookies</h1>
        <p className="text-container__text">Debido a la entrada en vigor de la referente modificación de la “Ley de Servicios de la Sociedad de la Información” (LSSICE) establecida por el Real Decreto 13/2012, es de obligación obtener el consentimiento expreso del usuario de todas las páginas web que usan cookies prescindibles, antes de que éste navegue por ellas.</p>
        <h2 className="text-container__title">¿Qué son las cookies?</h2>
        <p className="text-container__text">Las cookies y otras tecnologías similares tales como local shared objects, flash cookies o píxeles, son herramientas empleadas por los servidores Web para almacenar y recuperar información acerca de sus visitantes, así como para ofrecer un correcto funcionamiento del sitio.<br />
        Mediante el uso de estos dispositivos se permite al servidor Web recordar algunos datos concernientes al usuario, como sus preferencias para la visualización de las páginas de ese servidor, nombre y contraseña, productos que más le interesan, etc.</p>
        <h2 className="text-container__title">Cookies afectadas por la normativa y cookies exceptuadas</h2>
        <p className="text-container__text">Según la directiva de la UE, las cookies que requieren el consentimiento informado por parte del usuario son las cookies de analítica y las de publicidad y afiliación, quedando exceptuadas las de carácter técnico y las necesarias para el funcionamiento del sitio web o la prestación de servicios expresamente solicitados por el usuario.</p>
        <h2 className="text-container__title">¿Qué tipos de cookies existen?</h2>
        <h3 className="text-container__subtitle">Según su titularidad</h3>
        <ul className="text-container__text">
          <li><em>Cookies propias:</em> Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio Solicitado por el usuario.</li>
          <li><em>Cookies de terceros:</em> Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.</li>
        </ul>
        <h3 className="text-container__subtitle">Según su duración</h3>
        <ul className="text-container__text">
          <li><em>Cookies de sesión:</em> Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web.</li>
          <li><em>Cookies persistentes:</em> Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</li>
        </ul>
        <h3 className="text-container__subtitle">Según su funcionalidad</h3>
        <ul className="text-container__text">
          <li><em>Cookies necesarias:</em> Son aquellas imprescindibles para el correcto funcionamiento del sitio web. No recopilan ningún tipo de datos de usuario y recogen información como la preferencia de idioma, si se ha aceptado la política de cookies, etc.</li>
          <li><em>Cookies de análisis:</em> Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.</li>
          <li><em>Cookies publicitarias o de marketing:</em> Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.</li>
          <li><em>Cookies de publicidad comportamental o de marketing personalizado:</em> Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo. Asimismo es posible que al visitar alguna página web o al abrir algún email donde se publique algún anuncio o alguna promoción sobre nuestros productos o servicios se instale en tu navegador alguna cookie que nos sirve para mostrarte posteriormente publicidad relacionada con la búsqueda que hayas realizado, desarrollar un control de nuestros anuncios en relación, por ejemplo, con el número de veces que son vistos, donde aparecen, a qué hora se ven, etc.</li>
        </ul>
      </div>
    );
  }
  
  
  export default CookiesPage;