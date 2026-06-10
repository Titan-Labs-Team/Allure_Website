"use client";

import React, { useEffect, useRef, useCallback, CSSProperties, ReactNode } from 'react';

function hexToRgba(hex: string, alpha: number = 1): string {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface ElectricBorderProps {
  children?: ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  borderRadius?: number;
  className?: string;
  style?: CSSProperties;
}

const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = '#5227FF',
  speed = 1,
  chaos = 0.12,
  borderRadius = 24,
  className,
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasChaosRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const animationChaosRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const timeChaosRef = useRef(37.3);
  const lastFrameTimeChaosRef = useRef(0);

  const random = useCallback((x: number): number => (Math.sin(x * 12.9898) * 43758.5453) % 1, []);

  const noise2D = useCallback((x: number, y: number): number => {
    const i = Math.floor(x), j = Math.floor(y);
    const fx = x - i, fy = y - j;
    const a = random(i + j * 57), b = random(i + 1 + j * 57);
    const c = random(i + (j + 1) * 57), d = random(i + 1 + (j + 1) * 57);
    const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
    return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
  }, [random]);

  const octavedNoise = useCallback((x: number, octaves: number, lacunarity: number, gain: number, baseAmplitude: number, baseFrequency: number, time: number, seed: number, baseFlatness: number): number => {
    let y = 0, amplitude = baseAmplitude, frequency = baseFrequency;
    for (let i = 0; i < octaves; i++) {
      const oct = i === 0 ? amplitude * baseFlatness : amplitude;
      y += oct * noise2D(frequency * x + seed * 100, time * frequency * 0.3);
      frequency *= lacunarity;
      amplitude *= gain;
    }
    return y;
  }, [noise2D]);

  const getCornerPoint = useCallback((cx: number, cy: number, r: number, startAngle: number, arcLength: number, progress: number) => ({
    x: cx + r * Math.cos(startAngle + progress * arcLength),
    y: cy + r * Math.sin(startAngle + progress * arcLength),
  }), []);

  const getRoundedRectPoint = useCallback((t: number, left: number, top: number, width: number, height: number, radius: number) => {
    const sw = width - 2 * radius, sh = height - 2 * radius;
    const ca = (Math.PI * radius) / 2;
    const total = 2 * sw + 2 * sh + 4 * ca;
    const dist = t * total;
    let acc = 0;
    if (dist <= acc + sw) return { x: left + radius + ((dist - acc) / sw) * sw, y: top };
    acc += sw;
    if (dist <= acc + ca) return getCornerPoint(left + width - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, (dist - acc) / ca);
    acc += ca;
    if (dist <= acc + sh) return { x: left + width, y: top + radius + ((dist - acc) / sh) * sh };
    acc += sh;
    if (dist <= acc + ca) return getCornerPoint(left + width - radius, top + height - radius, radius, 0, Math.PI / 2, (dist - acc) / ca);
    acc += ca;
    if (dist <= acc + sw) return { x: left + width - radius - ((dist - acc) / sw) * sw, y: top + height };
    acc += sw;
    if (dist <= acc + ca) return getCornerPoint(left + radius, top + height - radius, radius, Math.PI / 2, Math.PI / 2, (dist - acc) / ca);
    acc += ca;
    if (dist <= acc + sh) return { x: left, y: top + height - radius - ((dist - acc) / sh) * sh };
    acc += sh;
    return getCornerPoint(left + radius, top + radius, radius, Math.PI, Math.PI / 2, (dist - acc) / ca);
  }, [getCornerPoint]);

  useEffect(() => {
    const canvas = canvasRef.current, container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const octaves = 10, lacunarity = 1.6, gain = 0.7, amplitude = chaos, frequency = 10, baseFlatness = 0, displacement = 12, borderOffset = 20;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width + borderOffset * 2, h = rect.height + borderOffset * 2;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      return { width: w, height: h };
    };

    let { width, height } = updateSize();
    let lastDpr = Math.min(window.devicePixelRatio || 1, 2);

    const draw = (currentTime: number) => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (dpr !== lastDpr) { lastDpr = dpr; const s = updateSize(); width = s.width; height = s.height; }
      const delta = (currentTime - lastFrameTimeRef.current) / 1000;
      timeRef.current += delta * speed;
      lastFrameTimeRef.current = currentTime;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);
      ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      const left = borderOffset, top = borderOffset, bw = width - 2 * borderOffset, bh = height - 2 * borderOffset;
      const maxR = Math.min(bw, bh) / 2, radius = Math.min(borderRadius, maxR);
      const perimeter = 2 * (bw + bh) + 2 * Math.PI * radius;
      const samples = Math.floor(perimeter / 2);
      ctx.beginPath();
      for (let i = 0; i <= samples; i++) {
        const p = i / samples;
        const pt = getRoundedRectPoint(p, left, top, bw, bh, radius);
        const xn = octavedNoise(p * 8, octaves, lacunarity, gain, amplitude, frequency, timeRef.current, 0, baseFlatness);
        const yn = octavedNoise(p * 8, octaves, lacunarity, gain, amplitude, frequency, timeRef.current, 1, baseFlatness);
        i === 0 ? ctx.moveTo(pt.x + xn * displacement, pt.y + yn * displacement) : ctx.lineTo(pt.x + xn * displacement, pt.y + yn * displacement);
      }
      ctx.closePath(); ctx.stroke();
      animationRef.current = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => { const s = updateSize(); width = s.width; height = s.height; });
    ro.observe(container);
    animationRef.current = requestAnimationFrame(draw);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); ro.disconnect(); };
  }, [color, speed, chaos, borderRadius, octavedNoise, getRoundedRectPoint]);

  // Second chaotic layer
  useEffect(() => {
    const canvas = canvasChaosRef.current, container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const octaves = 10, lacunarity = 1.6, gain = 0.7, amplitude = chaos * 5, frequency = 10, baseFlatness = 0, displacement = 35, borderOffset = 20;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width + borderOffset * 2, h = rect.height + borderOffset * 2;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      return { width: w, height: h };
    };

    let { width, height } = updateSize();
    let lastDpr = Math.min(window.devicePixelRatio || 1, 2);

    const draw = (currentTime: number) => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (dpr !== lastDpr) { lastDpr = dpr; const s = updateSize(); width = s.width; height = s.height; }
      const delta = (currentTime - lastFrameTimeChaosRef.current) / 1000;
      timeChaosRef.current += delta * speed * 1.4;
      lastFrameTimeChaosRef.current = currentTime;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);
      ctx.strokeStyle = hexToRgba(color, 0.38); ctx.lineWidth = 1.2; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      const left = borderOffset, top = borderOffset, bw = width - 2 * borderOffset, bh = height - 2 * borderOffset;
      const maxR = Math.min(bw, bh) / 2, radius = Math.min(borderRadius, maxR);
      const perimeter = 2 * (bw + bh) + 2 * Math.PI * radius;
      const samples = Math.floor(perimeter / 2);
      ctx.beginPath();
      for (let i = 0; i <= samples; i++) {
        const p = i / samples;
        const pt = getRoundedRectPoint(p, left, top, bw, bh, radius);
        const xn = octavedNoise(p * 8, octaves, lacunarity, gain, amplitude, frequency, timeChaosRef.current, 42, baseFlatness);
        const yn = octavedNoise(p * 8, octaves, lacunarity, gain, amplitude, frequency, timeChaosRef.current, 99, baseFlatness);
        i === 0 ? ctx.moveTo(pt.x + xn * displacement, pt.y + yn * displacement) : ctx.lineTo(pt.x + xn * displacement, pt.y + yn * displacement);
      }
      ctx.closePath(); ctx.stroke();
      animationChaosRef.current = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => { const s = updateSize(); width = s.width; height = s.height; });
    ro.observe(container);
    animationChaosRef.current = requestAnimationFrame(draw);
    return () => { if (animationChaosRef.current) cancelAnimationFrame(animationChaosRef.current); ro.disconnect(); };
  }, [color, speed, chaos, borderRadius, octavedNoise, getRoundedRectPoint]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-visible isolate ${className ?? ''}`}
      style={{ '--electric-border-color': color, borderRadius, ...style } as CSSProperties}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[2]">
        <canvas ref={canvasRef} className="block" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[3]">
        <canvas ref={canvasChaosRef} className="block" />
      </div>
      <div className="absolute inset-0 rounded-[inherit] pointer-events-none z-0">
        <div className="absolute inset-0 rounded-[inherit] pointer-events-none" style={{ border: `2px solid ${hexToRgba(color, 0.6)}`, filter: 'blur(1px)' }} />
        <div className="absolute inset-0 rounded-[inherit] pointer-events-none" style={{ border: `2px solid ${color}`, filter: 'blur(4px)' }} />
        <div className="absolute inset-0 rounded-[inherit] pointer-events-none -z-[1] scale-110 opacity-30" style={{ filter: 'blur(32px)', background: `linear-gradient(-30deg, ${color}, transparent, ${color})` }} />
      </div>
      <div className="relative rounded-[inherit] z-[1]">{children}</div>
    </div>
  );
};

export default ElectricBorder;
