import React from "react";

function App() {
  return (
    <div className="App">
      <div className="pages-header bg-color-2">
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12">
              <div className="page-title ptb-110">
                <h1 className="mb-15">Contactenos</h1>
                <h4 className="mb-5">Contamos con oficinas en San Pedro y Playa Hermosa</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area contact-one section-padding white-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 col-text-center no-padding">
              <div className="pull-left mobile-mb-30 tablet-mb-50">
                <div className="info-text">
                  <h2>Informacioón de Contacto:</h2>
                  <p className="mb-30">
                    There are many variations of passages of Lo Ipsum <br /> available, but the majority have
                    suffered alteration in <br /> some form, by injected hu.
                  </p>
                  <ul>
                    <li className="mb-15">
                      <span>Address:</span> 17 Street Name here Office, <br />
                      80 Newlok US 8.
                    </li>
                    <li>
                      <span>Phone:</span>
                      <a href="tel:+1122588788966"> +11 225 887 889 66</a>
                    </li>
                    <li>
                      <span>Email:</span>
                      <a href="mailto:MiniPo@gmail.com"> info@nihuarquitectos.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pull-right">
                <div className="contact-form">
                  <form
                    className="custom-input contact_form"
                    id="contact_form"
                    action="contact-form.php"
                    method="post">
                    <div className="row">
                      <div className="col-xs-12 col-sm-6">
                        <input type="text" id="contact_name" name="name" placeholder="Su nomnbre" required />
                      </div>
                      <div className="col-xs-12 col-sm-6">
                        <input type="email" id="contact_email" name="email" placeholder="Email" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6">
                        <input type="text" id="contact_phone" name="phone" placeholder="Telefono" />
                      </div>
                    </div>
                    <textarea name="message" id="contact_message" rows="2" placeholder="Email" />
                    <button
                      className="btn"
                      type="submit"
                      name="submit"
                      id="contact_submit"
                      data-complete-text="Well done!">
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div />
    </div>
  );
}

export default App;
