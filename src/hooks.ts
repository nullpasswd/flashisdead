import fs from 'fs';
import { htmlToText } from 'html-to-text';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const validHeaders = ['curl', 'wget', 'axios'];
    if (validHeaders.some((key) => event.request.headers.get('user-agent')?.includes(key))) {
        var file: any;
        try {
            file = fs.readFileSync(new URL('../../../../static/noscript.html', import.meta.url));
        } catch (e) {
            file = fs.readFileSync(new URL('../static/noscript.html', import.meta.url));
        }
        file = htmlToText(file);
        file = file.replace(
            "FLASH IS DEAD\n\nBut it wasn't always that way.",
            "-------- flashisdead.xyz --------\n\nFLASH IS DEAD\nBut it wasn't always that way.\n\n---------------"
        );
        file = file
            .split('\n\nONE THING YOU CAN DO IS PLACE A NICE BADGE ON YOUR PAGE.')[0]
            .replace(/\s\[.*\]/g, '')
            .replace(/HAS\nREACHED/g, 'HAS REACHED')
            .replace(/\n\n\n/g, '\n\n---------------\n\n');
        file = file + '\n-------- flashisdead.xyz --------\n';
        return new Response(file);
    }

    const response = await resolve(event);
    return response;
}
