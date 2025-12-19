import React from "react";

const AgendaSemanal = () => {
const agenda = [ { dia: "Domingo", actividad: "Encuentro con Dios", icono: "bi-cross" }, { dia: "Lunes", actividad: "Prosperidad con Dios", icono: "bi-cash-stack" }, { dia: "Martes", actividad: "Sanidad", icono: "bi-heart-pulse" }, { dia: "Miércoles", actividad: "Estudio bíblico", icono: "bi-book" }, { dia: "Jueves", actividad: "Terapia del Amor", icono: "bi-heart" }, { dia: "Viernes", actividad: "Liberación", icono: "bi-fire" }, { dia: "Sábado", actividad: "Casos Imposibles / Vicios", icono: "bi-stars" }, ];

  return (<>
    <h2 className="container_h2">Agenda Semanal</h2>
    <div className="container">
      
      <ul className="list-group">
        {agenda.map((item, index) => (
          <li key={index} className="list-group-item">
            <i className={`bi ${item.icono} me-2`}></i>
            <strong>{item.dia}:</strong> {item.actividad}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default AgendaSemanal
