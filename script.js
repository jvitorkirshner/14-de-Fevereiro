<script>
    const audio = document.getElementById('audio');
    const btnAudio = document.getElementById('btn-audio');

    btnAudio.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            btnAudio.innerHTML = '<i class="fa-solid fa-pause"></i> Pausar';
        } else {
            audio.pause();
            btnAudio.innerHTML = '<i class="fa-solid fa-music"></i> Tocar';
        }
    });
</script>
