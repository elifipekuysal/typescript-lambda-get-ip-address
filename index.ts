import * as publicIp from 'public-ip';

(async () => {
    await main();
})();

async function main() {
    console.log(await publicIp.default.v4());

    
}