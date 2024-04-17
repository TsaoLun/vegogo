import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.177.0/http/file_server.ts"

serve((req: Request) => {
    const url = new URL(req.url);
    // if (url.pathname.startsWith("/img")) {
    //     return serveFile(req, "./demo"+ url.pathname)
    // }
    console.log(url.pathname)
    if (url.pathname.startsWith("/x_files")) {
        return serveFile(req, "./"+ url.pathname)
    }
    return serveFile(req, "./home.html")
});