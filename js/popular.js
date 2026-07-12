document.addEventListener('DOMContentLoaded', () => {
	const filterSelect = document.getElementById('popular-filter-select');
	const popularGrid = document.getElementById('popular-paddles-grid');
	const popularTitle = document.getElementById('popular-section-title');
	const pageButtons = Array.from(document.querySelectorAll('#popular-paddles-nav button'));

	const categoryPages = {
		Paddles: [
			[
				{ label: 'HONEY SLAY MAX', src: './assets/poppad_1.png' },
				{ label: 'PINK ASSASSIN', src: './assets/poppad_2.png' },
				{ label: 'OCEAN SWATTER', src: './assets/poppad_3.png.png' }
			],
			[
				{ label: 'BROAD SWING', src: './assets/poppad_1.png' },
				{ label: 'RAPID RALLY', src: './assets/poppad_2.png' },
				{ label: 'COURT CLASH', src: './assets/poppad_3.png.png' }
			],
			[
				{ label: 'NIGHT NETTER', src: './assets/poppad_1.png' },
				{ label: 'SPIKE STRIKE', src: './assets/poppad_2.png' },
				{ label: 'HORN CHARGE', src: './assets/poppad_3.png.png' }
			],
			[
				{ label: 'GLIDE GHOST', src: './assets/poppad_1.png' },
				{ label: 'AERO ATTACK', src: './assets/poppad_2.png' },
				{ label: 'COURT COMMAND', src: './assets/poppad_3.png.png' }
			],
			[
				{ label: 'POWER PULSE', src: './assets/poppad_1.png' },
				{ label: 'SPEED SERPENT', src: './assets/poppad_2.png' },
				{ label: 'MATCH MAGIC', src: './assets/poppad_3.png.png' }
			]
		],
		Footwear: [
			[
				{ label: 'FAST FURY 5 SNEAKS', src: './assets/volt_shoes_cutout_fina1l.png' },
				{ label: 'COURT CHASER', src: './assets/volt_paddle_cutout.png' },
				{ label: 'GRIP GLIDE', src: './assets/pickleball_pink_black_solid.png' }
			],
			[
				{ label: 'SWIFT SLIDE', src: './assets/volt_shoes_cutout_fina1l.png' },
				{ label: 'PACE PATROL', src: './assets/volt_paddle_cutout.png' },
				{ label: 'RUN RALLY', src: './assets/pickleball_pink_black_solid.png' }
			],
			[
				{ label: 'COURT PULSE', src: './assets/volt_shoes_cutout_fina1l.png' },
				{ label: 'STEALTH STRIDE', src: './assets/volt_paddle_cutout.png' },
				{ label: 'MATCH GRIP', src: './assets/pickleball_pink_black_solid.png' }
			],
			[
				{ label: 'RALLY ROCKET', src: './assets/volt_shoes_cutout_fina1l.png' },
				{ label: 'COURT SPARK', src: './assets/volt_paddle_cutout.png' },
				{ label: 'RUNNER REIGN', src: './assets/pickleball_pink_black_solid.png' }
			],
			[
				{ label: 'SPEED SPRINT', src: './assets/volt_shoes_cutout_fina1l.png' },
				{ label: 'FLEX FORCE', src: './assets/volt_paddle_cutout.png' },
				{ label: 'TRAIL TACKLE', src: './assets/pickleball_pink_black_solid.png' }
			]
		],
		Accessories: [
			[
				{ label: 'AKWAJETT THERMOS', src: './assets/pickleball_thermos.png' },
				{ label: 'NET NINJA', src: './assets/volt_paddle_cutout.png' },
				{ label: 'GRIP TAPE PRO', src: './assets/pickleball_black_blue_final.png' }
			],
			[
				{ label: 'SWING SACK', src: './assets/pickleball_pink_black_solid.png' },
				{ label: 'COURT CLIP', src: './assets/volt_paddle_cutout.png' },
				{ label: 'MATCH ZIP', src: './assets/volt_sports_bag_cutout.png' }
			],
			[
				{ label: 'BALL BELT', src: './assets/pickleball_pink_black_solid.png' },
				{ label: 'NET SLICK', src: './assets/pickleball_black_blue_final.png' },
				{ label: 'STICKY STRAP', src: './assets/pickle_shirt.png' }
			],
			[
				{ label: 'CARRY NET', src: './assets/volt_sports_bag_cutout.png' },
				{ label: 'SERVE SHIELD', src: './assets/pickleball_black_blue_final.png' },
				{ label: 'BALL BOX', src: './assets/pickleball_thermos.png' }
			],
			[
				{ label: 'SWING WRAP', src: './assets/pickle_shirt.png' },
				{ label: 'COURT CASE', src: './assets/volt_paddle_cutout.png' },
				{ label: 'GEAR GRID', src: './assets/volt_sports_bag_cutout.png' }
			]
		],
		Apparel: [
			[
				{ label: 'PICKLE PRO POLO', src: './assets/pickle_shirt.png' },
				{ label: 'MATCH DAY TANK', src: './assets/pickleball_pink_black_solid.png' },
				{ label: 'BOUNCE SHORTS', src: './assets/volt_paddle_cutout.png' }
			],
			[
				{ label: 'COURT CREW', src: './assets/pickleball_black_blue_final.png' },
				{ label: 'RALLY JACKET', src: './assets/volt_paddle_cutout.png' },
				{ label: 'TACTIC TEE', src: './assets/pickleball_thermos.png' }
			],
			[
				{ label: 'SERVICE SHIRT', src: './assets/pickle_shirt.png' },
				{ label: 'MATCH CAP', src: './assets/pickleball_pink_black_solid.png' },
				{ label: 'COURT COSY', src: './assets/pickleball_black_blue_final.png' }
			],
			[
				{ label: 'FLEX FIT', src: './assets/volt_shirt.png' },
				{ label: 'RALLY RUSH TEE', src: './assets/pickleball_pink_black_solid.png' },
				{ label: 'MATCH SIDE', src: './assets/volt_paddle_cutout.png' }
			],
			[
				{ label: 'COURT CAPE', src: './assets/pickleball_pink_black_solid.png' },
				{ label: 'PLAYER POLO', src: './assets/pickle_shirt.png' },
				{ label: 'SLAM SOCKS', src: './assets/pickleball_black_blue_final.png' }
			]
		],
		Bags: [
			[
				{ label: 'ALL-AROUND SPORTS BAG', src: './assets/volt_sports_bag_cutout.png' },
				{ label: 'RALLY TOTE', src: './assets/volt_paddle_cutout.png' },
				{ label: 'PRO COURT PACK', src: './assets/pickleball_black_blue_final.png' }
			],
			[
				{ label: 'CARRY CORE', src: './assets/volt_paddle_cutout.png' },
				{ label: 'TRAINER TOTE', src: './assets/pickle_shirt.png' },
				{ label: 'MATCH DAY SLING', src: './assets/volt_shoes_cutout_fina1l.png' }
			],
			[
				{ label: 'COURT CARRIER', src: './assets/volt_sports_bag_cutout.png' },
				{ label: 'PACK PRO', src: './assets/pickleball_black_blue_final.png' },
				{ label: 'TRAVEL TOTE', src: './assets/pickleball_pink_black_solid.png' }
			],
			[
				{ label: 'GEAR GRID', src: './assets/volt_shoes_cutout_fina1l.png' },
				{ label: 'BAG BOOST', src: './assets/volt_sports_bag_cutout.png' },
				{ label: 'COURT SLING', src: './assets/volt_paddle_cutout.png' }
			],
			[
				{ label: 'TRAIL TOTE', src: './assets/pickle_shirt.png' },
				{ label: 'HANDLE HYPE', src: './assets/volt_sports_bag_cutout.png' },
				{ label: 'MATCH MATE', src: './assets/pickleball_black_blue_final.png' }
			]
		]
	};

	let currentCategory = filterSelect.value;
	let currentPage = 0;

	function renderPopularPage(category, pageIndex) {
		const pages = categoryPages[category] || categoryPages.Paddles;
		const items = pages[pageIndex] || pages[0];
		popularGrid.innerHTML = items.map(({ label, src }) => {
			return `
				<div class="paddle-card">
					<div class="paddle-image"><img src="${src}" alt="${label}"></div>
					<div class="paddle-copy">${label}</div>
				</div>`;
			}).join('');
		popularTitle.textContent = `POPULAR ${category.toUpperCase()}`;
		pageButtons.forEach((button, index) => {
			button.classList.toggle('active', index === pageIndex);
		});
	}

	filterSelect.addEventListener('change', () => {
		currentCategory = filterSelect.value;
		currentPage = 0;
		renderPopularPage(currentCategory, currentPage);
	});

	pageButtons.forEach((button, pageIndex) => {
		button.addEventListener('click', () => {
			currentPage = pageIndex;
			renderPopularPage(currentCategory, currentPage);
		});
	});

	renderPopularPage(currentCategory, currentPage);
});