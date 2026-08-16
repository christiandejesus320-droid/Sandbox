import React from "react";
import {
  AbsoluteFill,
  Composition,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { CalculateMetadataFunction } from "remotion";

type Props = { title?: string };

const W = 1280;
const H = 720;
const FPS = 30;
const FRAMES = 900;

const calculateMetadata: CalculateMetadataFunction<Props> = () => ({
  durationInFrames: FRAMES,
  fps: FPS,
  width: 3840,
  height: 2160,
});

const colors = {
  cyan: "#50d9ff",
  blue: "#2d7dff",
  violet: "#9b7cff",
  silver: "#e9f2f8",
  muted: "#7993a8",
  panel: "rgba(8, 18, 30, .88)",
};

const Text: React.FC<{ children: React.ReactNode; size?: number; color?: string; weight?: number; spacing?: number; style?: React.CSSProperties }> = ({ children, size = 16, color = colors.silver, weight = 500, spacing = 0, style }) => (
  <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: size, color, fontWeight: weight, letterSpacing: spacing, ...style }}>{children}</div>
);

const Background: React.FC<{ frame: number }> = ({ frame }) => (
  <AbsoluteFill style={{ background: "#060b12", overflow: "hidden" }}>
    <AbsoluteFill style={{ background: "radial-gradient(circle at 76% 26%, #103452 0%, transparent 34%), radial-gradient(circle at 20% 88%, #1e123d 0%, transparent 34%)", opacity: 0.85 }} />
    <AbsoluteFill style={{ opacity: 0.22, backgroundImage: "linear-gradient(rgba(80,217,255,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(80,217,255,.13) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "linear-gradient(to bottom, black, transparent 92%)" }} />
    <div style={{ position: "absolute", width: 620, height: 620, borderRadius: "50%", border: "1px solid #50d9ff22", right: -200, top: -250, transform: `rotate(${frame / 20}deg)`, boxShadow: "0 0 80px #50d9ff0a" }} />
    <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", border: "1px solid #9b7cff18", left: -260, bottom: -240, transform: `rotate(${-frame / 24}deg)` }} />
  </AbsoluteFill>
);

const Header: React.FC<{ frame: number; section: string }> = ({ frame, section }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ width: 12, height: 12, borderRadius: 99, background: colors.cyan, boxShadow: `0 0 ${16 + Math.sin(frame / 12) * 5}px ${colors.cyan}` }} />
      <Text size={17} weight={800} spacing={4}>MERIDIAN</Text>
      <Text size={12} color="#516b7f" spacing={3}>B2B SPATIAL OS</Text>
    </div>
    <Text size={12} color="#60788d" spacing={3}>{section} / 2026</Text>
  </div>
);

const IconOrb: React.FC<{ label: string; glyph: string; color: string; x: number; y: number; delay: number; frame: number }> = ({ label, glyph, color, x, y, delay, frame }) => {
  const local = Math.max(0, frame - delay);
  const scale = spring({ frame: local, fps: FPS, config: { damping: 12, stiffness: 95 } });
  const float = Math.sin((frame + delay) / 16) * 4;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translateY(${float}px) scale(${interpolate(scale, [0, 1], [.72, 1])})`, opacity: scale }}>
      <div style={{ width: 106, height: 106, borderRadius: 28, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: `linear-gradient(145deg, ${color}cc, #0b1826 72%)`, border: `1px solid ${color}aa`, boxShadow: `inset 8px 8px 18px #ffffff22, 0 14px 30px #0009, 0 0 34px ${color}35` }}>
        <Text size={34} weight={800} color="#ffffff" style={{ textShadow: `0 2px 10px ${color}` }}>{glyph}</Text>
        <Text size={10} weight={800} color="#e8f7ff" spacing={2} style={{ marginTop: 6 }}>{label}</Text>
      </div>
    </div>
  );
};

const HeroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const reveal = spring({ frame, fps: FPS, config: { damping: 18, stiffness: 70 } });
  return (
    <AbsoluteFill style={{ padding: "54px 66px" }}>
      <Header frame={frame} section="01 / ECOSYSTEM" />
      <div style={{ position: "absolute", left: 66, top: 150, width: 590, opacity: reveal, transform: `translateY(${interpolate(reveal, [0, 1], [30, 0])}px)` }}>
        <Text size={15} color={colors.cyan} weight={800} spacing={4}>A BUSINESS OPERATING SYSTEM FOR THE AI ERA</Text>
        <Text size={70} weight={900} spacing={-2} style={{ marginTop: 22, lineHeight: 1.02 }}>Meridian<br /><span style={{ color: colors.silver }}>moves ideas.</span></Text>
        <Text size={22} color="#9cb0c1" style={{ marginTop: 24, lineHeight: 1.45, maxWidth: 520 }}>Trabajo, clientes, conocimiento, datos, automatización e inteligencia artificial en una capa unificada.</Text>
      </div>
      <div style={{ position: "absolute", right: 160, top: 132, width: 420, height: 420, borderRadius: "50%", border: "1px solid #50d9ff55", boxShadow: "0 0 100px #50d9ff12, inset 0 0 80px #50d9ff0c" }}>
        <div style={{ position: "absolute", inset: 38, borderRadius: "50%", border: "1px solid #9b7cff55", transform: `rotate(${frame / 7}deg)`, borderLeftColor: "transparent", borderBottomColor: "transparent" }} />
        <div style={{ position: "absolute", inset: 92, borderRadius: "50%", background: "radial-gradient(circle at 36% 28%, #274c75, #0a1623 62%)", border: "1px solid #8ee9ff66", boxShadow: "inset -35px -35px 75px #02060c, inset 15px 15px 35px #5ee9ff22" }}>
          <div style={{ position: "absolute", inset: 20, borderRadius: "50%", border: "1px dashed #50d9ff66", transform: `rotate(${-frame / 11}deg)` }} />
          <Text size={14} color={colors.cyan} weight={800} spacing={3} style={{ position: "absolute", top: 138, width: "100%", textAlign: "center" }}>MERIDIAN CORE</Text>
        </div>
      </div>
      <IconOrb label="CODE AGENT" glyph="⌘" color={colors.cyan} x={716} y={128} delay={12} frame={frame} />
      <IconOrb label="VOICE ENGINE" glyph="◉" color={colors.violet} x={1000} y={348} delay={26} frame={frame} />
      <IconOrb label="LIBRARIAN" glyph="▦" color="#ffbd66" x={664} y={452} delay={40} frame={frame} />
      <IconOrb label="AUTOMATION" glyph="↗" color="#72e6a1" x={1015} y={94} delay={54} frame={frame} />
      <Text size={12} color="#5d788d" spacing={3} style={{ position: "absolute", left: 66, bottom: 35 }}>MERIDIAN / ORCHESTRATION / CONTEXT / ACTION</Text>
    </AbsoluteFill>
  );
};

const PipelineNode: React.FC<{ title: string; caption: string; color: string; index: number; frame: number }> = ({ title, caption, color, index, frame }) => {
  const local = frame - index * 32;
  const opacity = interpolate(local, [0, 22], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y = interpolate(local, [0, 22], [18, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ flex: 1, opacity, transform: `translateY(${y}px)`, padding: 16, minHeight: 100, background: colors.panel, border: `1px solid ${color}66`, boxShadow: `inset 0 0 22px ${color}13` }}><Text size={12} color={color} weight={800} spacing={2}>{String(index + 1).padStart(2, "0")}</Text><Text size={17} weight={800} style={{ marginTop: 12 }}>{title}</Text><Text size={12} color="#8199aa" style={{ marginTop: 8 }}>{caption}</Text></div>;
};

const CodeAgentScene: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{ padding: "54px 66px" }}><Header frame={frame} section="02 / CODE AGENT" /><Text size={15} color={colors.cyan} weight={800} spacing={4} style={{ marginTop: 72 }}>FROM IDEA TO VERIFIABLE APPLICATION</Text><Text size={48} weight={900} style={{ marginTop: 14 }}>Meridian Code Agent</Text><Text size={18} color="#9cb0c1" style={{ marginTop: 12 }}>Inspecciona. Planifica. Modifica. Verifica. Muestra el preview.</Text><div style={{ marginTop: 64, display: "flex", gap: 14 }}>{[{ title: "INPUT", caption: "idea / doc / visual", color: colors.cyan }, { title: "PLAN", caption: "architecture + skills", color: colors.violet }, { title: "BUILD", caption: "files + integrations", color: "#ffbd66" }, { title: "VERIFY", caption: "tests + preview", color: "#72e6a1" }].map((node, index) => <PipelineNode key={node.title} {...node} index={index} frame={frame} />)}</div><div style={{ position: "absolute", right: 88, bottom: 60, padding: 18, width: 350, background: "#0a1724dd", border: "1px solid #50d9ff44" }}><Text size={11} color="#5f7c91" spacing={2}>ACTIVE ROUTE</Text><Text size={15} color={colors.cyan} weight={700} style={{ marginTop: 10 }}>designEngineer → frontendEngineer → visualVerifier</Text></div></AbsoluteFill>;
};

const LibrarianScene: React.FC = () => {
  const frame = useCurrentFrame();
  const nodes = ["ARCHITECT", "DESIGN", "BACKEND", "SECURITY", "TEST", "VISUAL"];
  return <AbsoluteFill style={{ padding: "54px 66px" }}><Header frame={frame} section="03 / LIBRARIAN" /><div style={{ position: "absolute", left: 66, top: 170, width: 410 }}><Text size={15} color="#ffbd66" weight={800} spacing={4}>SEMANTIC ROUTING + MCP</Text><Text size={52} weight={900} style={{ marginTop: 18, lineHeight: 1.04 }}>The Librarian</Text><Text size={19} color="#9cb0c1" style={{ marginTop: 22, lineHeight: 1.45 }}>Index semántico. Skills lazy-loaded. Workers especializados. Tools con políticas.</Text></div><div style={{ position: "absolute", left: 640, top: 160, width: 420, height: 420, borderRadius: "50%", border: "1px solid #ffbd6655", transform: `rotate(${frame / 15}deg)` }}><div style={{ position: "absolute", inset: 58, borderRadius: "50%", border: "1px dashed #50d9ff66", transform: `rotate(${-frame / 9}deg)` }} /><div style={{ position: "absolute", inset: 130, borderRadius: "50%", background: "radial-gradient(circle at 35% 25%, #4d3a22, #0a1623 65%)", border: "1px solid #ffbd66aa", boxShadow: "0 0 60px #ffbd6622, inset -28px -28px 45px #0008" }}><Text size={13} color="#ffbd66" weight={800} spacing={2} style={{ position: "absolute", top: 122, textAlign: "center", width: "100%" }}>SEMANTIC CORE</Text></div>{nodes.map((node, i) => { const a = (i / nodes.length) * Math.PI * 2 + frame / 180; const x = 168 + Math.cos(a) * 222; const y = 168 + Math.sin(a) * 222; return <div key={node} style={{ position: "absolute", left: x, top: y, transform: "translate(-50%, -50%)", padding: "8px 12px", border: "1px solid #50d9ff66", background: "#0a1724ee" }}><Text size={10} color={colors.cyan} weight={800} spacing={1}>{node}</Text></div>; })}</div><Text size={12} color="#5d788d" spacing={3} style={{ position: "absolute", left: 66, bottom: 35 }}>TOOLS / RESOURCES / PROMPTS / APPROVALS</Text></AbsoluteFill>;
};

const VoiceScene: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{ padding: "54px 66px" }}><Header frame={frame} section="04 / VOICE ENGINE" /><div style={{ position: "absolute", left: 66, top: 170, width: 480 }}><Text size={15} color={colors.violet} weight={800} spacing={4}>CONTROLLED CONVERSATION</Text><Text size={54} weight={900} style={{ marginTop: 18, lineHeight: 1.04 }}>Meridian<br />Voice Engine</Text><Text size={20} color="#9cb0c1" style={{ marginTop: 22, lineHeight: 1.45 }}>Escucha respuestas extensas. Dicta mensajes. Sigue el estado real del Code Agent.</Text></div><div style={{ position: "absolute", right: 90, top: 170, width: 520, height: 320, padding: 30, background: "linear-gradient(145deg, #161129, #0a111c)", border: "1px solid #9b7cff66", boxShadow: "0 22px 80px #0009, inset 0 0 50px #9b7cff12" }}><div style={{ display: "flex", justifyContent: "space-between" }}><Text size={12} color="#8f7cff" weight={800} spacing={2}>VOICE SESSION / ACTIVE</Text><Text size={12} color="#72e6a1" weight={800}>● LIVE</Text></div><div style={{ height: 120, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginTop: 22 }}>{Array.from({ length: 38 }).map((_, i) => { const h = 18 + Math.abs(Math.sin((frame + i * 11) / 9)) * 72; return <div key={i} style={{ width: 5, height: h, borderRadius: 5, background: `linear-gradient(to top, #6a4cff, #50d9ff)`, opacity: .48 + (i % 4) * .12 }} />; })}</div><Text size={14} color="#d9d2ff" style={{ marginTop: 26 }}>“El plan está listo. Encontré tres referencias y preparé un preview.”</Text><Text size={11} color="#788ea0" style={{ marginTop: 9 }}>ELEVENLABS / CONTROLLED USER ACTION</Text></div><Text size={12} color="#5d788d" spacing={3} style={{ position: "absolute", left: 66, bottom: 35 }}>SPEECH / STATE / APPROVAL / MEMORY</Text></AbsoluteFill>;
};

const EndScene: React.FC = () => { const frame = useCurrentFrame(); const s = spring({ frame, fps: FPS, config: { damping: 15, stiffness: 75 } }); return <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}><div style={{ opacity: s, transform: `scale(${interpolate(s, [0, 1], [.88, 1])})` }}><Text size={16} color={colors.cyan} weight={800} spacing={5}>MERIDIAN RESEARCH LAB</Text><Text size={62} weight={900} style={{ marginTop: 20 }}>Research before build.</Text><Text size={24} color="#9cb0c1" style={{ marginTop: 20 }}>La IA debe estar actualizada. Y debe demostrarlo.</Text><Text size={13} color="#60788d" spacing={4} style={{ marginTop: 44 }}>CODE AGENT · VOICE ENGINE · THE LIBRARIAN · MCP</Text></div></AbsoluteFill>; };

export const MyComposition = () => <Composition id="MeridianResearchLab" component={MyComponent} durationInFrames={FRAMES} fps={FPS} width={3840} height={2160} defaultProps={{ title: "MERIDIAN RESEARCH LAB" }} calculateMetadata={calculateMetadata} />;

export const MyComponent: React.FC<Props> = () => { const { width } = useVideoConfig(); const scale = width / W; return <AbsoluteFill><Background frame={useCurrentFrame()} /><div style={{ position: "absolute", width: W, height: H, transform: `scale(${scale})`, transformOrigin: "top left" }}><Sequence durationInFrames={180}><HeroScene /></Sequence><Sequence from={180} durationInFrames={210}><CodeAgentScene /></Sequence><Sequence from={390} durationInFrames={210}><LibrarianScene /></Sequence><Sequence from={600} durationInFrames={180}><VoiceScene /></Sequence><Sequence from={780} durationInFrames={120}><EndScene /></Sequence></div></AbsoluteFill>; };
