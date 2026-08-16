import React from "react";
import {
  AbsoluteFill,
  Composition,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const layerNames = [
  "SESIÓN VERIFICADA",
  "AISLAMIENTO DEL WORKSPACE",
  "POLÍTICAS MCP",
  "GESTOR DE SECRETOS",
  "AUDITORÍA + REDACCIÓN",
];

const Sprite: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Interactive.Div
      name="Intruso digital"
      style={{
        position: "absolute",
        left: 70,
        top: 272,
        width: 94,
        height: 112,
        translate: interpolate(
          frame,
          [0, 74, 88, 118, 191],
          ["0px 0px", "430px 0px", "370px -18px", "398px 0px", "398px 0px"],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.2, 0.8, 0.2, 1),
          },
        ),
        rotate: interpolate(
          frame,
          [72, 84, 100],
          ["0deg", "-18deg", "0deg"],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        ),
        opacity: interpolate(frame, [0, 8, 168, 191], [0, 1, 1, 0.22], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        filter: "drop-shadow(0 0 18px rgba(255,65,84,.52))",
      }}
    >
      <svg width="94" height="112" viewBox="0 0 94 112">
        <path d="M23 32 35 12h24l12 20 12 13-8 45H19l-8-45 12-13Z" fill="#12070a" stroke="#ff4154" strokeWidth="4"/>
        <path d="M32 43h9v9h-9zm22 0h9v9h-9z" fill="#ff4154"/>
        <path d="M33 67h28" stroke="#ff4154" strokeWidth="5"/>
        <path d="m23 88-11 20m59-20 11 20" stroke="#ff4154" strokeWidth="6"/>
      </svg>
    </Interactive.Div>
  );
};

const MeridianCore: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Interactive.Div
      name="Núcleo protegido"
      style={{
        position: "absolute",
        left: 536,
        top: 146,
        width: 262,
        height: 262,
        borderRadius: 58,
        background: "linear-gradient(145deg, rgba(10,34,24,.96), rgba(1,8,5,.98))",
        border: "2px solid rgba(0,255,102,.62)",
        boxShadow:
          "inset 0 0 70px rgba(0,255,102,.12), 0 0 80px rgba(0,255,102,.18), 0 28px 90px #000",
        scale: interpolate(frame, [0, 22], [0.82, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.spring({ damping: 180 }),
          output: "perceptual-scale",
        }),
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 29,
          borderRadius: 44,
          border: "1px dashed rgba(0,255,102,.55)",
          rotate: interpolate(frame, [0, 191], ["0deg", "100deg"]),
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 62,
          borderRadius: 999,
          background: "radial-gradient(circle at 35% 24%, #1a6b45, #020906 66%)",
          border: "1px solid #00ff66",
          boxShadow: "inset -18px -24px 42px #000, 0 0 38px rgba(0,255,102,.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: 70,
          fontWeight: 950,
          color: "#eafff2",
          textShadow: "0 0 28px #00ff66",
        }}
      >
        M
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 17,
          width: "100%",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: 10,
          fontWeight: 900,
          letterSpacing: 4,
          color: "#72ffab",
        }}
      >
        NÚCLEO MERIDIAN
      </div>
    </Interactive.Div>
  );
};

const ProtectionStack: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ position: "absolute", right: 44, top: 118, width: 310 }}>
      {layerNames.map((name, index) => (
        <div
          key={name}
          style={{
            height: 48,
            marginBottom: 10,
            padding: "0 15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 12,
            background: "linear-gradient(90deg, rgba(5,22,15,.94), rgba(3,10,7,.84))",
            border: "1px solid rgba(0,255,102,.28)",
            boxShadow: "inset 0 0 20px rgba(0,255,102,.05)",
            opacity: interpolate(frame, [20 + index * 8, 34 + index * 8], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(
              frame,
              [20 + index * 8, 34 + index * 8],
              ["34px 0px", "0px 0px"],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            ),
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span style={{ fontSize: 11, color: "#d8ffe8", fontWeight: 800, letterSpacing: 1.2 }}>
            {name}
          </span>
          <span style={{ fontSize: 13, color: "#00ff66", fontWeight: 950 }}>ACTIVA</span>
        </div>
      ))}
    </div>
  );
};

const DataPipe: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ position: "absolute", left: 788, top: 383, width: 250, height: 3, background: "#00ff6638" }}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: -4,
            width: 11,
            height: 11,
            borderRadius: 99,
            background: "#00ff66",
            boxShadow: "0 0 18px #00ff66",
            translate: interpolate(
              (frame + index * 22) % 66,
              [0, 66],
              ["0px 0px", "240px 0px"],
            ),
          }}
        />
      ))}
      <div style={{ position: "absolute", top: 13, fontFamily: "monospace", fontSize: 10, color: "#63a980", letterSpacing: 2 }}>
        DATOS FILTRADOS · SIN SECRETOS
      </div>
    </div>
  );
};

export const MeridianSecurityGame: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const impact = interpolate(frame, [72, 80, 88], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#020403", overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 56% 48%, rgba(0,255,102,.11), transparent 32%), radial-gradient(circle at 18% 45%, rgba(255,65,84,.08), transparent 25%)",
        }}
      />
      <AbsoluteFill
        style={{
          opacity: 0.22,
          backgroundImage:
            "linear-gradient(rgba(0,255,102,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,102,.12) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          translate: interpolate(frame, [0, durationInFrames], ["0px 0px", "0px 38px"]),
        }}
      />

      <Interactive.Div
        name="Marca superior"
        style={{
          position: "absolute",
          left: 44,
          top: 28,
          fontFamily: "Arial, sans-serif",
          fontSize: 14,
          fontWeight: 950,
          color: "#edfff4",
          letterSpacing: 5,
        }}
      >
        MERIDIAN <span style={{ color: "#00ff66" }}>// SECURITY ARCADE</span>
      </Interactive.Div>

      <div style={{ position: "absolute", left: 44, top: 66, fontFamily: "monospace", fontSize: 11, color: "#587467" }}>
        SESIÓN 2026-A7 · MONITOREO EN TIEMPO REAL · ESTADO: PROTEGIDO
      </div>

      <Sprite />
      <MeridianCore />
      <ProtectionStack />
      <DataPipe />

      <div
        style={{
          position: "absolute",
          left: 505,
          top: 126,
          width: 320,
          height: 320,
          borderRadius: 74,
          border: "3px solid #ff4154",
          opacity: impact,
          boxShadow: "0 0 80px #ff4154",
          scale: interpolate(frame, [72, 80, 88], [0.82, 1.08, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />

      <Interactive.Div
        name="Mensaje de bloqueo"
        style={{
          position: "absolute",
          left: 54,
          bottom: 70,
          opacity: interpolate(frame, [82, 98], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [82, 98], ["0px 20px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 33, fontWeight: 950, color: "#ff5264", letterSpacing: -1 }}>
          403: PERMISOS NO ENCONTRADOS
        </div>
        <div style={{ marginTop: 8, fontSize: 16, color: "#c7d7ce" }}>
          Buen intento, intruso. El núcleo ni siquiera vio tu clave.
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Llamado a la acción"
        style={{
          position: "absolute",
          right: 44,
          bottom: 34,
          padding: "15px 22px",
          borderRadius: 999,
          background: "#00ff66",
          boxShadow: "0 0 32px rgba(0,255,102,.3)",
          fontFamily: "Arial, sans-serif",
          fontSize: 13,
          fontWeight: 950,
          letterSpacing: 1.5,
          color: "#001a0a",
          opacity: interpolate(frame, [118, 136], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        EXPLORA EL MAPA DE MERIDIAN →
      </Interactive.Div>
    </AbsoluteFill>
  );
};

export const MeridianSecurityGameComposition: React.FC = () => (
  <Composition
    id="MeridianSecurityGame"
    component={MeridianSecurityGame}
    durationInFrames={192}
    fps={24}
    width={1200}
    height={520}
  />
);
