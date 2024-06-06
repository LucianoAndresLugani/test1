
import 'bulma/css/bulma.min.css';
import './App.css'


const Header = ({titulo}) => {
  return (
    <header className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{titulo}</h1>
      </div>
    </div>
  </header>
  );
};


const MainSection = ({ proyecto }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">{proyecto.nombre}</h2>
        <p className="content">{proyecto.descripcion}</p>
        <div className="columns is-multiline">
          {proyecto.imagenes.map((imagen, index) => (
            <div className="column is-one-third" key={index}>
              <figure className="image">
                <img src={imagen} alt={`Imagen ${index + 1}`} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const TeamSection = ({ equipo }) => {
  return (
    <section className="section">
    <div className="container">
      <h2 className="title">Equipo</h2>
      <div className="columns is-multiline">
        {equipo.map((miembro, index) => (
          <div className="column is-one-third" key={index}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={miembro.foto} alt={miembro.nombre} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{miembro.nombre}</p>
                    <p className="subtitle is-6">{miembro.rol}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};


const TestimonialsSection = ({ testimonios }) => {
  return (
    <section className="section">
    <div className="container">
      <h2 className="title">Testimonios</h2>
      <div className="columns is-multiline">
        {testimonios.map((testimonio, index) => (
          <div className="column is-one-third" key={index}>
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    {testimonio.foto && (
                      <figure className="image is-48x48">
                        <img src={testimonio.foto} alt={testimonio.nombre} />
                      </figure>
                    )}
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{testimonio.nombre}</p>
                  </div>
                </div>
                <div className="content">
                  {testimonio.comentario}
                </div>
              </div>
            </div>
          </div>
        ))}1
      </div>
    </div>
  </section>
   
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Contacto: contacto@proyecto.com</p>
      </div>
    </footer>
  );
};
import imagen1 from './assets/img/entrepiso.jpg';
//import imagen2 from './assets/img/hangar.jpg';
import fotoJuan from './assets/img/dario.jpg';
import fotoAna from './assets/img/lucianolugani.jpg';


const proyecto = {
  titulo:'Proyeto Robotica',
  nombre: 'Iluminacion inteligente segun lumen del ambiente',
  descripcion: 'Nuestro proyecto sirve para iluminar ambientes segun la luz del ambiente manteniendo siempre los mismos lumems seteados.',
  imagenes: [
    imagen1,
    
  ],
  equipo: [
    {
      nombre: 'Juan Pérez',
      rol: 'Backend',
      foto: fotoJuan
    },
    {
      nombre: 'Luciano Lugani',
      rol: 'Frontend ',
      foto: fotoAna
    }
  ],
  testimonios: [ // solo para grupo de 4
    {
      nombre: 'Carlos López',
      comentario: 'El proyecto es innovador y muy útil.',
      foto: fotoAna
    },
    {
      nombre: 'Cesar Gandia',
      comentario: 'Me encantó participar en este proyecto.',
      foto: fotoAna
    }
  ]
};

const App = () => {
  return (
    <div>
      <Header titulo={proyecto.titulo}/>
      <MainSection proyecto={proyecto} />
      <TeamSection equipo={proyecto.equipo} />
      {proyecto.testimonios && <TestimonialsSection testimonios={proyecto.testimonios} />} {/* solo para grupo de 4 */}
      <Footer />
    </div>
  );
};

export default App;


