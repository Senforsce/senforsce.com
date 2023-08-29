FROM denoland/deno:1.36.3

COPY ./senforsce .

RUN deno task build

EXPOSE 8000

CMD deno task start
