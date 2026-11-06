const { addonBuilder } = require("stremio-addon-sdk");

const manifest = require("./manifest.json");

const builder = new addonBuilder(manifest);

const VIDEOS = [
  { id: "yt_dQw4w9WgXcQ", name: "Ejemplo Cine", type: "movie", poster: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", description: "Video de prueba" }
];

builder.defineCatalogHandler(() => {
  return Promise.resolve({ metas: VIDEOS });
});

builder.defineStreamHandler(({ id }) => {
  const ytId = id.replace("yt_", "");
  return Promise.resolve({ streams: [{ title: "Ver en YouTube", externalUrl: `https://www.youtube.com/watch?v=${ytId}` }] });
});

module.exports = builder.getInterface();
