document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('timeline-slider');
    const contentDisplay = document.getElementById('content-display');
    const eraTitle = document.getElementById('era-title');
    const eraDescription = document.getElementById('era-description');
    const eraImagePlaceholder = document.getElementById('era-image-placeholder');

    // Data Konten berdasarkan nilai slider (0, 1, 2, 3)
    const eraData = [
        {
            title: "Era 1: Kerajaan Nusantara (Abad 7-15)",
            description: "Pelajari tentang Sriwijaya dan Majapahit. Era keemasan maritim dan budaya Hindu-Buddha di Nusantara.",
            image: "[Ilustrasi Kapal Kuno/Candi]"
        },
        {
            title: "Era 2: Kedatangan Bangsa Eropa (Abad 16-18)",
            description: "Masa penjajahan dan masuknya pengaruh Islam. Temukan tokoh-tokoh perlawanan awal.",
            image: "[Ilustrasi Peta Lama/Benteng]"
        },
        {
            title: "Era 3: Pergerakan Nasional (1900-1945)",
            description: "Munculnya kesadaran berbangsa dan perjuangan para pahlawan untuk kemerdekaan. Fokus pada Sumpah Pemuda.",
            image: "[Ilustrasi Gedung Bersejarah/Tokoh Pahlawan]"
        },
        {
            title: "Era 4: Kemerdekaan & Reformasi (1945 - Sekarang)",
            description: "Proklamasi, pembangunan, dan perkembangan teknologi modern di Indonesia hingga saat ini.",
            image: "[Ilustrasi Bendera/Pembangunan Kota]"
        }
    ];

    // Fungsi untuk memperbarui tampilan dengan transisi
    function updateContent(eraIndex) {
        const data = eraData[eraIndex];

        // 1. Mulai Transisi (Fade Out)
        contentDisplay.style.opacity = 0;

        // 2. Tunda Perubahan Konten (Agar Fade Out selesai)
        setTimeout(() => {
            eraTitle.textContent = data.title;
            eraDescription.textContent = data.description;
            eraImagePlaceholder.textContent = data.image; // Di sini Anda bisa mengganti dengan <img> beneran

            // 3. Akhiri Transisi (Fade In)
            contentDisplay.style.opacity = 1;
        }, 400); // Waktu tunda harus sama atau lebih kecil dari waktu transisi CSS (.4s)
    }

    // Event Listener pada Tuas Geser
    slider.addEventListener('input', (event) => {
        const value = parseInt(event.target.value);
        updateContent(value);
    });

    // Panggil pertama kali untuk memuat konten awal
    updateContent(parseInt(slider.value));

    // Update label slider secara dinamis (opsional, untuk tampilan)
    const labels = document.querySelectorAll('.slider-labels span');
    eraData.forEach((era, index) => {
        labels[index].textContent = era.title.split(':')[0].trim(); // Ambil hanya nama Era
    });
});
