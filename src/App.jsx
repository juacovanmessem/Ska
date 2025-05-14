import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactoPage from "./pages/ContactoP";
import ProyectosPage from "./pages/ProyectosP";
import "./App.css";
import { useState, useRef, useEffect } from 'react';
import fugata from "../src/assets/music/Fugata.mp3";

function App() {
  const [userChoice, setUserChoice] = useState(() => {
    return localStorage.getItem("musicChoice"); // "yes" | "no" | null
  });

  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const handleStart = () => {
    setUserChoice("yes");
    localStorage.setItem("musicChoice", "yes");

    const audio = audioRef.current;
    if (audio) {
      setTimeout(() => {
        audio.play().catch((e) => {
          console.log("Error al reproducir el audio:", e);
        });
      }, 100);
    }
  };

  const handleDecline = () => {
    setUserChoice("no");
    localStorage.setItem("musicChoice", "no");
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  useEffect(() => {
    if (userChoice === "yes" && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [userChoice]);
  return (
    <>
      <audio ref={audioRef} src={fugata} loop />

      {userChoice === null ? (
        <div className="welcome-screen">
          <div className='headerfototitulo fuente-titulo hero-logo'>
            <img className='img-fluid logo' src={logo} alt="no hay"/>
          </div>
          <h1>Bienvenido/a a SKA</h1>
          <p>¿Querés acompañar la experiencia con un poco de música?</p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <button onClick={handleStart} className="start-button">
              Sí
            </button>
            <button onClick={handleDecline} className="start-button no">
              No
            </button>
          </div>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/proyectos" element={<ProyectosPage />} />
          </Routes>

          {/* Mostrar botón de muteo solo si dijo que sí */}
          {userChoice === "yes" && (
            <button
              className="mute-button"
              onClick={toggleMute}
              aria-label="Silenciar música"
              title={isMuted ? "Reactivar música" : "Silenciar música"}
            >
              <i className={`bi ${isMuted ? "bi-volume-mute-fill" : "bi-volume-up-fill"}`}></i>
            </button>
          )}
        </>
      )}
    </>
  );
}

export default App;
