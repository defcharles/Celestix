import { readdir } from "fs/promises";
import { join } from "path";
import { Hono } from "hono";

async function loadRoute(directory: string, file: string): Promise<void> {
    try {
        const RouteModule = await import(join(directory, file));
        const defaultExport = RouteModule.default;

        if (defaultExport && typeof defaultExport === "function") {
            defaultExport();
        } else {
           console.log(`${file} does not export a valid route initializer`);
        }
    } catch (error) {
        console.log(`Error loading route ${file}: ${(error as Error).message}`);
    }
}

export async function loadRoutes(directory: string, app: Hono): Promise<void> {
    try {
        const files = await readdir(directory);
        const routedFiles = files.filter((name) => name.endsWith(".ts") || name.endsWith(".js"));

        await Promise.all(routedFiles.map((file) => loadRoute(directory, file)));
    } catch (error) {
        console.log(`Failed to load routes: ${error}`);
    }
}