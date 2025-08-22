import React, { useRef, useState } from "react";

type VideoItem = {
  id: number;
  name: string;
  url: string;
};

const YouTubeApp: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selected, setSelected] = useState<VideoItem | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      setVideos(prev => [
        ...prev,
        { id: Date.now(), name: file.name, url }
      ]);
      e.target.value = "";
    }
  };

  const handleSelect = (video: VideoItem) => {
    setSelected(video);
  };

  return (
    <div style={{
      maxWidth: 600,
      margin: "40px auto",
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 4px 24px rgba(44,22,60,0.10)",
      padding: 24
    }}>
      <h2 style={{ textAlign: "center", color: "#1976d2" }}>Mini YouTube App</h2>
      <div style={{ marginBottom: 18, textAlign: "center" }}>
        <input
          ref={inputRef}
          type="file"
          accept="video/mp4,video/webm,video/ogg"
          style={{ marginBottom: 12 }}
          onChange={handleUpload}
        />
      </div>
      <div>
        <h3 style={{ color: "#1976d2" }}>Danh sách video đã upload:</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {videos.map(video => (
            <li key={video.id} style={{
              marginBottom: 10,
              background: "#e3eefe",
              borderRadius: 8,
              padding: "8px 12px",
              cursor: "pointer",
              color: "#1976d2",
              fontWeight: selected?.id === video.id ? "bold" : "normal",
              border: selected?.id === video.id ? "2px solid #1976d2" : "none"
            }}
              onClick={() => handleSelect(video)}
            >
              {video.name}
            </li>
          ))}
        </ul>
      </div>
      {selected && (
        <div style={{ marginTop: 24 }}>
          <h4 style={{ color: "#1976d2" }}>{selected.name}</h4>
          <video
            src={selected.url}
            controls
            style={{ width: "100%", borderRadius: 12, background: "#222" }}
          />
        </div>
      )}
    </div>
  );
};

export default YouTubeApp;
