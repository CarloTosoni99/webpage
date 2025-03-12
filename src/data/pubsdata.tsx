
interface article {
    title: string;
    authors: string;
    conference: boolean;
    name: string;
    image: string;
    date: string;
    doi: string;
}

const publications: article[] = [
    {
        title: "Indexing Finite-State Automata Using Forward-Stable Partitions",
        authors: "R. Becker, S. Kim, N. Prezza, C. Tosoni",
        conference: true,
        name: "Symposium on String Processing and Information Retrieval (SPIRE)",
        image: "/imgs/pubs/Spire2023.png",
        date: "September 2024",
        doi: "10.1007/978-3-031-72200-4_3"
    }
];


export default publications;