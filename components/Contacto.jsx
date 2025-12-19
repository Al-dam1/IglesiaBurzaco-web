import React from 'react';

const Contacto = () => {
  return (
    <div>
      <a
        href="https://whatsapp.com/channel/0029Vb68H0v11ulJhQGbk535"
        className="btn btn-success btn-lg rounded-circle"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
};

export default Contacto;
