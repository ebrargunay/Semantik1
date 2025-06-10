const moods = {
  mutlu: {
    emoji: "😊",
    music: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC" // Mutlu şarkılar
  },
  yorgun: {
    emoji: "😴",
    music: "https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp"
  },
  stresli: {
    emoji: "😰",
    music: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"
  },
  motive: {
    emoji: "💪",
    music: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP"
  },
  uzgun: {
    emoji: "😢",
    music: "https://open.spotify.com/playlist/37i9dQZF1DX7gIoKXt0gmx"
  }
};

async function getQuote() {
  const response = await fetch("https://zenquotes.io/api/random");
  const data = await response.json();
  return `"${data[0].q}" – ${data[0].a}`;
}

async function showMoodInfo() {
  const mood = document.querySelector('input[name="mood"]:checked');
  if (!mood) {
    alert("Lütfen bir ruh hali seç!");
    return;
  }

  const selectedMood = mood.value;
  const info = moods[selectedMood];
  const quote = await getQuote();

  document.getElementById("emoji").textContent = `${info.emoji} Ruh halin: ${selectedMood}`;
  document.getElementById("quote").textContent = `🧠 Günün sözü: ${quote}`;
  document.getElementById("music").innerHTML = `🎵 Spotify listesi: <a href="${info.music}" target="_blank">Buraya tıkla</a>`;

  document.getElementById("resultBox").style.display = "block";
}
