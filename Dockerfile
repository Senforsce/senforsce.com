FROM denoland/deno:1.36.3

COPY . .

deno cache main.ts

CMD deno run --allo-net main.ts
