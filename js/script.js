let date = new Date('nov 4 2022 00:00:00');

function counts() {
    let now = new Date();
    gap = date - now;
    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    if (gap < 0) {
        document.querySelector('.timer-items').innerText = 'РОЗПРОДАЖ РОЗПОЧАТО';
        document.querySelector('.timer-title').innerText = '';
    }
    else {
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}
};

counts();
setInterval(counts, 1000);