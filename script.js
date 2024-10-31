// Nilai tukar (contoh, bisa diupdate)
const rates = {
    USD: 1,
    EUR: 0.92,
    IDR: 15683,
    JPY: 153,
    MYR: 4.38,
    KRW: 1380.18,
    GBP: 0.77
};

function konversi() {
    const jumlah = parseFloat(document.getElementById('jumlah').value);
    const dari = document.getElementById('dari').value;
    const ke = document.getElementById('ke').value;
    const hasil = document.getElementById('hasil');

    if (isNaN(jumlah) || jumlah <= 0) {
        hasil.textContent = "Jumlah harus lebih besar dari 0!";
        return;
    }

    // Menghitung nilai konversi
    const hasilKonversi = (jumlah / rates[dari]) * rates[ke];
    hasil.textContent = `${jumlah} ${dari} = ${hasilKonversi.toFixed(2)} ${ke}`;
}
