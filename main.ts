import { serveDir } from "jsr:@std/http/file-server";

export default {
    fetch: (req) => {
        return serveDir(req, { fsRoot: "_site" });
    },
} satisfies Deno.ServeDefaultExport;
