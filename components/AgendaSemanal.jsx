import React from "react";

const AgendaSemanal = () => {
  const agenda = [
    { dia: "Domingo", actividad: "Encuentro con Dios", imagen:"/img/semana_lunes.jpg" },
    { dia: "Lunes", actividad: "Prosperidad con Dios", imagen:"/img/semana_domingo.jpg" },
    { dia: "Martes", actividad: "Sanidad", imagen:"/img/semana_martes.jpg" },
    { dia: "Miércoles", actividad: "Estudio bíblico", imagen:"/img/semana_miercoles.jpg" },
    { dia: "Jueves", actividad: "Terapia del Amor", imagen:"/img/semana_jueves.jpg" },
    { dia: "Viernes", actividad: "Liberación",imagen:"/img/semana_viernes.jpg" },
    {
      dia: "Sábado",
      actividad: "Casos Imposibles / Vicios",
      imagen:"/img/semana_sabado.jpg",
    },
  ];

  return (
    <>
      <h2 className="container_h2">Agenda <b>Semanal</b></h2>
      <div className="container">
        <ul className="list-group">
          {agenda.map((item, index) => (
            <li key={index} className="list-group-item">
             <img src={item.imagen} alt={item.title} style={{ marginRight: "8px" }}/>
              <strong>{item.dia}:</strong> {item.actividad}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AgendaSemanal;
