import type { SetMetaData } from "$lib/types/set-types";

interface Resolver {
    metadata: SetMetaData;
}

const getAllSets = async () => {
    const allPostFiles = import.meta.glob('/src/lib/sets/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver() as Resolver;
            const name = path.slice(14, -3);

            return {
                name,
                metadata,
            };
        })
    );

    const allPostsSorted = allPosts.toSorted((a, b) => {
        const publishedDateA = a.metadata.dates[0];
        const publishedDateB = b.metadata.dates[0];
        return new Date(publishedDateB).getTime() - new Date(publishedDateA).getTime();
    });

    return allPostsSorted;
};

export async function load() {
    const sets = await getAllSets();

    return {
        sets,
    };
}
