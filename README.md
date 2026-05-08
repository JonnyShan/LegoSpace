# LEGO X-Wing Dogfight

Single-file browser game. Third-person LEGO X-Wing space combat against TIE fighters and an Imperial Star Destroyer.

## Play

Open `xwing.html` in a modern browser, or serve the folder locally:

```bash
python3 -m http.server 8765
# then open http://localhost:8765/xwing.html
```

The page loads Three.js r160 from a CDN — no build step required.

## Controls

- **Mouse** — aim
- **A / D** — roll
- **W / S** — pitch
- **Shift** — boost
- **Space / Click** — fire lasers
- **Q** — fire proton torpedo (with lock)
- **Esc** — pause

## Features

- 3 pilot characters (Luke, Leia, Obi-Wan) with stat trade-offs
- 10 mixed TIE fighters (standard, interceptor, bomber)
- Final boss: Imperial Star Destroyer with destructible subsystems
- Procedural LEGO-style ships, asteroid field, planet, sun
- Bloom postprocessing, FXAA, ACES tone-mapping
- Background music + Web Audio synthesized SFX
- Settings menu (volume, sensitivity, invert-Y)
- Achievements + leaderboard (localStorage)
- Off-screen enemy direction arrows
- Pickups (shield, double-laser, torpedo)
- Hyperspace exit + LEGO confetti on victory

## Assets

- `xwing.html` — the entire game
- `midnight-circuit-loop.mp3` — background music
- `lego-characters.png` — pilot select portraits
- `starwars-ships-night.png` — game-over splash

## License

Personal project. Star Wars and LEGO are trademarks of their respective owners.
