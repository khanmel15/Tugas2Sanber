function calculateSquareRoot() {
    const x = 24;

    if (x < 0) {
        console.error("Tidak bisa input bilangan negatif");
        return;
    }

    if (x % 2 !== 0) {
        console.error("Tidak bisa input bilangan ganjil");
        return;
    }

    const result = Math.sqrt(x);
    console.log(`Akar pangkat 2 dari ${x} adalah ${result}`);
}

calculateSquareRoot();