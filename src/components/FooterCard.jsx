import styled from "styled-components";

const FooterCard = () => {
  return (
    <StyledWrapper>
      <div className="card-footer">
        <div className="icono">
          <i className="bi bi-trophy-fill"></i>
        </div>

        <div className="contenido">
          <span>GESTOR DE TORNEOS</span>
          <h3>Fútbol Murak</h3>
          <p>Equipos, jugadores y partidos.</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;

  .card-footer {
    position: relative;
    width: 100%;
    height: 100px;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
    background: #8bdc65;
    color: #183d24;
    transition: 0.5s;
  }

  .icono {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 55px;
    transition: 0.5s;
  }

  .contenido {
    position: absolute;
    bottom: -125px;
    left: 0;
    width: 100%;
    padding: 20px;
    text-align: center;
    background: white;
    transition: 0.5s;
  }

  .contenido span {
    font-size: 12px;
    font-weight: bold;
    color: #198754;
  }

  .contenido h3 {
    margin: 3px 0;
    font-size: 25px;
    font-weight: bold;
  }

  .contenido p {
    margin: 0;
    font-size: 14px;
    color: #555;
  }

  .card-footer:hover .icono {
    transform: translateY(-45px);
  }

  .card-footer:hover .contenido {
    bottom: 0;
  }
`;

export default FooterCard;
