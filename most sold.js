document.addEventListener('DOMContentLoaded', () => {
    const mostSoldGrid = document.getElementById('most-sold-grid');
    const mostSoldButtons = Array.from(document.querySelectorAll('#most-sold-paddles-nav button'));

    const mostSoldPages = [
        [
            { label: 'FAST FURY 5 SNEAKS', src: './assets/most_sold_1.png' },
            { label: 'BOLTED LIGHTNING PADDLE', src: './assets/most_sold_2.png' },
            { label: 'STICKY SQUEAKS', src: './assets/most_sold_3.png' },
            { label: 'LIT AF PICKLEBALL SHIRT', src: './assets/most_sold_4.png' },
            { label: 'AKWAJETT THERMOS', src: './assets/most_sold_5.png' },
            { label: 'ALL-AROUND SPORTS BAG', src: './assets/most_sold_6.png' }
        ],
        [
            { label: 'COURT COMMANDER', src: './assets/most_sold_7.png' },
            { label: 'RALLY ROCKET', src: './assets/most_sold_8.png' },
            { label: 'NET NAVIGATOR', src: './assets/most_sold_1.png' },
            { label: 'SMASH SQUAD', src: './assets/most_sold_2.png' },
            { label: 'POWER PLAY PADDLE', src: './assets/most_sold_3.png' },
            { label: 'COURT QUEEN', src: './assets/most_sold_4.png' }
        ],
        [
            { label: 'RALLY RIDER', src: './assets/most_sold_5.png' },
            { label: 'BLAZE BEAST', src: './assets/most_sold_6.png' },
            { label: 'SPIN MASTER', src: './assets/most_sold_7.png' },
            { label: 'WILD SERVE', src: './assets/most_sold_8.png' },
            { label: 'COURT HAWK', src: './assets/most_sold_1.png' },
            { label: 'SMASH STORM', src: './assets/most_sold_2.png' }
        ],
        [
            { label: 'HOOP HERO', src: './assets/most_sold_3.png' },
            { label: 'RALLY REV', src: './assets/most_sold_4.png' },
            { label: 'LIGHTNING LEGEND', src: './assets/most_sold_5.png' },
            { label: 'COURT CRUSHER', src: './assets/most_sold_6.png' },
            { label: 'SPARK STRIKE', src: './assets/most_sold_7.png' },
            { label: 'PICKLE PUNCH', src: './assets/most_sold_8.png' }
        ],
        [
            { label: 'GOLD GLIDE', src: './assets/most_sold_1.png' },
            { label: 'RAPID RIP', src: './assets/most_sold_2.png' },
            { label: 'DYNANO DASH', src: './assets/most_sold_3.png' },
            { label: 'COURT FURY', src: './assets/most_sold_4.png' },
            { label: 'RALLY RUSH', src: './assets/most_sold_5.png' },
            { label: 'SMASH WAVE', src: './assets/most_sold_6.png' }
        ]
    ];

    function renderCards(grid, items) {
        grid.innerHTML = items.map(({ label, src }) => {
            return `
                <div class="paddle-card">
                    <div class="paddle-image"><img src="${src}" alt="${label}"></div>
                    <div class="paddle-copy">${label}</div>
                </div>`;
        }).join('');
    }

    function setActiveMostSoldPage(pageIndex) {
        mostSoldButtons.forEach((button, buttonIndex) => {
            button.classList.toggle('active', buttonIndex === pageIndex);
        });
    }

    function renderMostSoldPage(pageIndex) {
        const selectedPage = mostSoldPages[pageIndex] || mostSoldPages[0];
        renderCards(mostSoldGrid, selectedPage);
        setActiveMostSoldPage(pageIndex);
    }

    mostSoldButtons.forEach((button, pageIndex) => {
        button.addEventListener('click', () => {
            renderMostSoldPage(pageIndex);
        });
    });

    renderMostSoldPage(0);
});
