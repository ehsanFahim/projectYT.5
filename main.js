const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Agu', 'sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684,
                    33572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32698,
                    5000, 3000, 18656, 24832, 36844],
                borderColor: 'blue',
                borderwidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});


///sidebar
// show or hide sidebar
const menuBtn = document.querySelector ('#menu-button');
const closeBtn = document.querySelector ('#close-btn');
const sidebar = document.querySelector ('aside');
menuBtn.addEventListener('click', () => {
     sidebar.style.display = 'block';
})
closeBtn.addEventListener('click', () =>{
    sidebar.style.display = 'none';
})

// change theme
const themeBtn = document.querySelector('.btn-theme');
themeBtn.addEventListener('click', () => {
     document.body.classList.toggle('dark-theme');
     themeBtn.querySelector('span:first-child').classList.toggle('active')
     themeBtn.querySelector('span:first-child').classList.toggle('active')
})