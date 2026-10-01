import styled from "styled-components";

const BotonAgregar = ({ texto, onClick }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        <div>
          <span>
            <p>{texto}</p>
            <p>+</p>
          </span>
        </div>

        <div>
          <span>
            <p>{texto.replace("Agregar", "")} agregado</p>
            <p>✓</p>
          </span>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    outline: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 160px;
    height: 50px;
    border-radius: 0.5em;
    box-shadow: 0 0.625em 1em 0 rgba(30, 143, 255, 0.35);
    overflow: hidden;
    cursor: pointer;
  }

  button div {
    transform: translateY(0px);
    width: 100%;
  }

  button,
  button div {
    transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  button div span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0.75em 1.125em;
  }

  button div:nth-child(1) {
    background-color: #1e90ff;
  }

  button div:nth-child(2) {
    background-color: #21dc62;
  }

  button:hover {
    box-shadow: 0 0.625em 1em 0 rgba(33, 220, 98, 0.35);
  }

  button:hover div {
    transform: translateY(-50px);
  }

  button p {
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    margin: 0;
  }

  button:active {
    transform: scale(0.95);
  }
`;

export default BotonAgregar;
