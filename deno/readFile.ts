let file = await Deno.open("./hellow.txt");

await Deno.copy(file, Deno.stdout);
file.close;
