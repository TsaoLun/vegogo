import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.177.0/http/file_server.ts"

serve((req: Request) => {
    const url = new URL(req.url);
    console.log(url.pathname)
    if (url.pathname === "/") {
        return serveFile(req, "./home.html")
    }
    if (url.pathname == "/declaration") {
        return serveFile(req, "./declaration.html")
    }
    return serveFile(req, "."+ url.pathname)
});