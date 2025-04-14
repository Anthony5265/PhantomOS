
// config.js - Handles loading PhantomOS config

export async function loadConfig() {
    const res = await fetch('/config/phantom-config.json');
    if (!res.ok) {
        console.error("Failed to load config");
        return null;
    }
    return await res.json();
}
