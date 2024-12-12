const numberDisplay = document.getElementById('number');
let primes = [2];
let currentIndex = 0;

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getNextPrime() {
    let candidate = primes[primes.length - 1] + 1;
    while (!isPrime(candidate)) {
        candidate++;
    }
    primes.push(candidate);
    return candidate;
}

document.body.addEventListener('click', (event) => {
    if (event.button === 0) { // Left click
        currentIndex++;
        if (currentIndex === primes.length) {
            getNextPrime();
        }
        numberDisplay.textContent = primes[currentIndex];
    }
});

document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (currentIndex > 0) {
        currentIndex--;
        numberDisplay.textContent = primes[currentIndex];
    }
});
