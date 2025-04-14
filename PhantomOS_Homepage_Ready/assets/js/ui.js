
// ui.js - Handles tile rendering and UI interactivity

import { loadConfig } from './config.js';

export async function renderTiles(containerId) {
    const config = await loadConfig();
    if (!config) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    config.modules.forEach(module => {
        const settings = config.moduleSettings[module];
        if (settings && settings.enabled) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.textContent = module;
            tile.onclick = () => triggerTile(module);
            container.appendChild(tile);
        }
    });
}

export function triggerTile(name) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.innerText = name + " activated";
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 2000);
}
