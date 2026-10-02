import styled from "styled-components";

const LogoTexto = () => {
  return (
    <StyledWrapper>
      <div className="logo-container">
        <div className="texto-fijo">Gestor de</div>

        <div className="words">
          <span className="word">Torneos</span>
          <span className="word">Fútbol</span>
          <span className="word">Murak</span>
          <span className="word">Torneos</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .logo-container {
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
    font-weight: bold;
    line-height: 1;
  }

  .texto-fijo {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  .words {
    height: 45px;
    overflow: hidden;
    position: relative;
  }

  .word {
    display: block;
    height: 45px;
    color: #83ff68;
    font-size: 2.2rem;
    line-height: 45px;
    animation: cambiarPalabra 7s infinite;
  }

  @keyframes cambiarPalabra {
    0% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(0);
    }

    33% {
      transform: translateY(-45px);
    }

    58% {
      transform: translateY(-45px);
    }

    66% {
      transform: translateY(-90px);
    }

    91% {
      transform: translateY(-90px);
    }

    100% {
      transform: translateY(-135px);
    }
  }

  @media (max-width: 576px) {
    .texto-fijo {
      font-size: 1.1rem;
    }

    .words {
      height: 32px;
    }

    .word {
      height: 32px;
      line-height: 32px;
      font-size: 1.6rem;
    }

    @keyframes cambiarPalabra {
      0% {
        transform: translateY(0);
      }

      25% {
        transform: translateY(0);
      }

      33% {
        transform: translateY(-32px);
      }

      58% {
        transform: translateY(-32px);
      }

      66% {
        transform: translateY(-64px);
      }

      91% {
        transform: translateY(-64px);
      }

      100% {
        transform: translateY(-96px);
      }
    }
  }
`;

export default LogoTexto;
