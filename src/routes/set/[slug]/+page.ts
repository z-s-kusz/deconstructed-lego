import type { SetMetaData } from '$lib/types/set-types.js';

export async function load({ params }) {
    const set = await import(`../../../lib/sets/${params.slug}.md`);

    return {
        metadata: set.metadata as SetMetaData,
        content: set.default,
        params: params.slug,
    };
}
