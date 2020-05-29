/**
 * * 파일을 생성해서 글 쓰기
 */

const encoder = new TextEncoder();

const hellowText = encoder.encode("안녕하세요?");

// namespace Deno!!
// Deno는 모든 반환이 프로미스!
// --allow-write
await Deno.writeFile("hellow.txt", hellowText);
