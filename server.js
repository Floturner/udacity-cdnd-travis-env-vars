const FAVORITE_GAME = process.env.FAVORITE_GAME;

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
	while (true) {
		console.log(`I love ${FAVORITE_GAME}`);
		await sleep(5000);
	}
}

main();
