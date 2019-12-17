async function init(img){
    $('#output').html('Mohon tunggu..');
    model =  await tf.loadModel('https://raw.githubusercontent.com/zephyrzth/LeafRecognition/master/public/js/js_model/model.json');
    console.log('model loaded from storage');
    
    let result = await preprocess(img);
    console.log("bisa 0");
    
    const pred = await model.predict(result, 1).dataSync();
    console.log(pred);
    
    let i = indexOf(pred);
    // var arr=['Daun A',
    //     'B (Philodendron crassinervium)',
    //     'C (Daun Pepaya)',
    //     'D (Acalypha indica)',
    //     'E (River tamarind)',
    //     'Daun F',
    //     'H (Canna tuerckheimii)',
    //     'I (Alternanthera)',
    //     'J (Nikau palm)',
    //     'Daun K'
    // ];

    var arr =  [
        {
            nama_spesies: "Pseuderanthemum carruthersii",
            deskripsi: "Berasal dari hutan terbuka Polinesia dan Melanesia. Semak abadi yang tegak, multi-cabang, dan hijau sepanjang tahun yang sedang hingga cepat tumbuh dan tingginya bisa mencapai 1-2 m. Beruang sederhana, daun utuh dan bulat telur, 7,6-12,7 panjang, beraneka ragam dan disusun berpasangan di sepanjang batang. Banyak hort var. dan corak dan variasi warna daun yang berbeda. Penggunaan dalam obat-obatan folkloric dan ornamen.",
            habitat: "Tanaman asli daerah tropis, biasanya tumbuh di sekitar pekarangan rumah.",
            budidaya: "-",
            kegunaan: "Biasanya digunakan sebagai tanaman hias."
        },
        {
            nama_spesies: "Philodendron crassinervium",
            deskripsi: "Philodendron crassinervium adalah spesies tanaman dalam famili Araceae. Ini asli ke Brazil Tenggara dan merupakan bagian dari bagian Baursia. Bahkan, ini adalah jenis spesies dari bagian ini. Memiliki daun berbentuk tombak panjang yang mengarah ke atas dengan midvein dominan besar. Midvein digunakan untuk menyimpan air selama periode kekeringan yang terjadi selama musim kemarau. Sepanjang midvein ada kelenjar merah kecil yang menghasilkan getah bening yang menghasilkan tampilan berbintik-bintik di kedua sisi daun. Daunnya sendiri bisa tumbuh hingga hampir satu meter panjangnya dengan lebar sekitar 10 cm. Juga, tanaman memiliki kebiasaan pertumbuhan pendakian. Akar udara tanaman berwarna merah ketika pertama kali mulai tumbuh dan kemudian berubah menjadi coklat tua seiring bertambahnya usia.Spadix Philodendron crassinervium mencapai sekitar 20–25 cm dan ditutupi oleh spathe yang berwarna putih dengan nuansa merah gelap ke arah bawah tempat spadix muncul. Buah yang dihasilkan mengandung delapan ovulus aksil di setiap lokus ovarium.Ada beberapa spesies yang menyerupai Philodendron crassinervium, seperti Philodendron longilaminatum.",
            habitat: "Tumbuhan yang banyak dijumpai di hutan tropis seperti di Indonesia. Biasanya tumbuh di tempat-tempat yang lembap, di rawa, pada tepi sungai, maupun di pinggir jalan.",
            budidaya: "Pembibitan dengan stek batang, stek bonggol.",
            kegunaan: "-"
        },
        {
            nama_spesies: "Daun Pepaya (Carica papaya)",
            deskripsi: "Pepaya (Carica papaya L.), atau betik adalah tumbuhan yang berasal dari Meksiko bagian selatan dan bagian utara dari Amerika Selatan, dan kini menyebar luas dan banyak ditanam di seluruh daerah tropis untuk diambil buahnya. C. papaya adalah satu-satunya jenis dalam genus Carica. Nama pepaya dalam bahasa Indonesia diambil dari bahasa Belanda, \"papaja\", yang pada gilirannya juga mengambil dari nama bahasa Arawak, \"papaya\". Dalam bahasa Jawa pepaya disebut \"katès\" dan dalam bahasa Sunda \"gedang\".",
            habitat: "Banyak ditanam orang, baik di daerah tropis maupun sub tropis, di daerah basah dan kering atau di dataran rendah dan pegunungan (sampai 1000 m dpl). Tanaman ini juga dibudidayakan di kebun-kebun luas karena buahnya yang segar dan bergizi.",
            budidaya: "Pemilihan benih, pembenihan, penyiapan media tanam, penyemaian bibit, membuat bendengan, penanaman, pengapuran dan pemupukan, penyulaman, penyiangan, dangir, pemupukan, irigasi dan penyiraman, pemanenan",
            kegunaan: "-"
        },
        {
            nama_spesies: "Acalypha indica (Kucing Galak)",
            deskripsi: "Spesies tumbuhan liar yang berasal dari Genus Acalypha. Tanaman ini juga dinamakan sebagai tanaman kucing-kucingan, anting-anting, dan akar kucing. Tanaman ini sangat disukai oleh para kucing, terutama di bagian akarnya.",
            habitat: "Tumbuh di tempat-tempat yang terganggu seperti tanah limbah, sisi jalan, celah-celah di dinding. Itu juga tumbuh di lereng berbatu, tepi hutan dan tepi sungai.",
            budidaya: "-",
            kegunaan: "Kandungan metabolit sekunder dari tanaman Acalypha indica L yang berkhasiat diantaranya adalah alkaloid, flavonoid, catachol, senyawa fenol, steroid, dan saponin. Beberapa khasiat yang telah dibuktikan secara ilmiah yaitu efektivitas antioksidan, antikanker, antiviral, antidiabetes, dan antijamur."
        },
        {
            nama_spesies: "River tamarind",
            deskripsi: "Pohon mimosoid kecil yang tumbuh cepat, berasal dari Meksiko selatan dan Amerika Tengah utara dan sekarang dinaturalisasi di seluruh daerah tropis.",
            habitat: "Tumbuh liar di daerah yang tropis.",
            budidaya: "-",
            kegunaan: "Digunakan untuk berbagai keperluan, seperti kayu bakar, serat, dan pakan ternak."
        },
        {
            nama_spesies: "Passiflora foetida",
            deskripsi: "Batangnya tipis dan kurus, ditutupi dengan rambut kuning lengket kecil. Batang yang lebih tua menjadi kayu. Daunnya berlubang tiga hingga lima dan berbulu kental. Ketika dihancurkan, daun ini mengeluarkan bau menyengat yang oleh sebagian orang dianggap tidak menyenangkan. Bunganya berwarna putih sampai krem ​​pucat, berdiameter sekitar 5-6 cm. Buahnya bulat, diameter 2-3 cm, oranye kekuningan sampai merah saat matang, dan memiliki banyak biji hitam yang tertanam di dalam bubur; buah dimakan dan biji disebarkan oleh burung.",
            habitat: "Umumnya tumbuh sebagai tumbuhan herba liar di berbagai tempat yang tidak terawat, baik itu di daerah hutan, pesisir pantai, sawah, ladang atau tanah -tanah terbuka tak terawat yang mendapatkan penyinaran matahari penuh, namun tumbuhan ini juga suka hidup pada tanah yang lembab.",
            budidaya: "Rombusa mini adalah tanaman perdu kecil bersifat semak, terlihat rimbun daunnya, berbunga putih kecil dengan bentuk seperti bintang. Cocok sebagai tanaman penutup tanah, tanaman pagar, tanaman border atau pembatas. Tanaman ini sangat tahan panas dan kering, tahan banting atau bandel. Rekomendasi dataran dan kondisi tempat tumbuh optimal: dataran rendah – tinggi, suhu panas maupun dingin. Kebutuhan sinar matahari: partial shade (di bawah naungan / teduh) sampai full sun.\nJika ditanam di pot, rekomendasi ukuran pot: diameter 25 cm.\nMedia tanam yang digunakan: tanah humus atau tanah kompos.\nIntensitas penyiraman: satu kali dalam sehari.\nIlustrasi ukuran tanaman saat dikirim ke Anda: 20-30 cm.\nIlustrasi tinggi tanaman ketika tumbuh besar: < 100 cm.\nTips pemberian pupuk (pemupukan): dilakukan kira-kira 30 hari sekali, menggunakan pupuk NPK Daun.",
            kegunaan: "Daun muda dan ujung tanaman juga bisa dimakan. Daun kering digunakan dalam teh dalam pengobatan tradisional Vietnam untuk meredakan masalah tidur, serta pengobatan untuk gatal dan batuk."
        },
        {
            nama_spesies: "Canna tuerckheimii",
            deskripsi: "Spesies dari genus Canna, milik keluarga Cannaceae. Julukan khusus tuerckheimii untuk memperingati Hans von Türckheim, seorang kolektor tanaman Jerman abad ke-19.",
            habitat: "Membutuhkan tanah dengan drainase yang dalam dan kaya dalam posisi cerah  Tanaman ini memiliki daun besar dan tidak menyukai kondisi berangin karena ini dapat merobek daun menjadi serpihan.",
            budidaya: "-",
            kegunaan: "Kulit segar akar digunakan sebagai diaforis dan diuretik."
        },
        {
            nama_spesies: "Alternanthera",
            deskripsi: "Merupakan tanaman semak, genus tanaman yang termasuk keluarga bayam-bayaman, tanaman asli hutan tropis dan subtropis terbuka di Amerika Tengah dan Selatan.",
            habitat: "Daerah tropis di sekitar perairan maupun daratan, ramuan stolonifer abadi yang ditemukan di habitat perairan dan darat. Rui-Yan dan Ren (2004) telah menemukan A. philoxeroides menginfestasi sungai, danau, kolam, dan saluran irigasi, serta banyak habitat darat. (1998) menyatakan bahwa, \"A. philoxeroides tumbuh pada berbagai macam substrata, dari pasir hingga tanah liat yang berat. Ketika mengambang di atas air, ia dapat berakar di tepian atau substrat, atau mengambang bebas.\"",
            budidaya: "-",
            kegunaan: "Dedaunan penuh warna. Baik untuk tempat tidur, penutup tanah, keranjang gantung, tepi, atau taman simpul formal. Jika ditanam dari biji, warna dedaunan akan bervariasi."
        },
        {
            nama_spesies: "Nikau palm",
            deskripsi: "Nikau adalah pohon palem endemik ke Selandia Baru, dan satu-satunya kelapa asli ke daratan Selandia Baru. Tumbuhnya lambat Tinggi bisa mencapai 10 - 15 meter.",
            habitat: "Daratan tropis, nikau tumbuh subur pada suhu dingin, tetapi tidak tunduk pada cuaca beku di habitat aslinya. Ini dapat bertahan beberapa derajat es, tetapi itu rusak bahkan lebih parah oleh penurunan suhu yang tiba-tiba bahkan di atas titik beku. Itu baik di daerah dengan iklim Mediterania ringan.",
            budidaya: "Pembibitan, teknik penyemaian benih, penumbuhan tunas, membesarkan bibit.",
            kegunaan: "Digunakan sebagai pencahar. Ini digunakan untuk mengendurkan otot-otot dasar panggul membuat persalinan lebih mudah dan juga berguna dalam kasus diare."
        },
        {
            nama_spesies: "Polyalthia longifolia",
            deskripsi: "Asli ashoka palsu dari India, adalah pohon cemara yang tinggi, umumnya ditanam karena efektivitasnya dalam mengurangi polusi suara. Ini menunjukkan pertumbuhan piramidal simetris dengan cabang-cabang terjumbai menangis merayap dan daun lanset sempit panjang dengan margin bergelombang.",
            habitat: "1200 m dpl, dataran rendah, tanah gembur, Hutan Alam dan Hutan Sekunder.\nDistribusi: Indonesia, Pulau Sumatera, Jawa dan Kalimantan.\nManfaat/Keunikan:merupakan tumbuhan evergreen (mampu bertahan hidup tanpa menggugurkan daunnya, always green,evergreen), tidak berpengaruh terhadap perubahan iklim dan cuaca di sekitarnya.",
            budidaya: "-",
            kegunaan: "Hampir semua bagian tanaman digunakan dalam sistem pengobatan tradisional India untuk pengobatan berbagai penyakit pada manusia. Dalam Ayurveda, khususnya, kulit P. longifolia memiliki sifat obat yang signifikan seperti yang dijelaskan berikut ini."
        }
    ];
    
    console.log(arr[i]);
    $('#output').html('');
    $('#nama_spesies').html(arr[i].nama_spesies);
    $('#deskripsi').html(arr[i].deskripsi);
    $('#habitat').html(arr[i].habitat);
    $('#budidaya').html(arr[i].budidaya);
    $('#kegunaan').html(arr[i].kegunaan);
}

function preprocess(img)
{

    //convert the image data to a tensor 
    let tensor = tf.fromPixels(img)
    //resize to 224 x 224
    const resized = tf.image.resizeBilinear(tensor, [200, 200]).toFloat()
    // Normalize the image 
    // const offset = tf.scalar(255.0);
    // const normalized = tf.scalar(1.0).sub(resized.div(offset));
    //We add a dimension to get a batch shape 
    const batched = resized.expandDims(0)
    return batched

}

function indexOf(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}