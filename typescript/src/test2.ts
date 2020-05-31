function main() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }
    console.log('hi');
}

main();
