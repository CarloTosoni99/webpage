

export interface article {
    title: string;
    authors: string;
    conference: boolean;
    name: string;
    shortname: string;
    image: string;
    date: string;
    isDoi: boolean;
    url: string;
}

export interface listItem {
    ispub: boolean;
    pubsdata?: article;
    year?: string;
}

const publications: listItem[] = [
    {
        ispub: false,
        year: "2025"
    },
    {
        ispub: true,
        pubsdata: {
            title: "New Entropy Measures for Tries with Applications to the XBWT",
            authors: "L. Carfagna and C. Tosoni",
            conference: false,
            name: "arXiv (preprint)",
            shortname: "arXiv",
            image: "/imgs/pubs/arXiv.png",
            date: "December 2025",
            isDoi: false,
            url: "https://arxiv.org/abs/2512.11618"
        }
    },
    {
        ispub: true,
        pubsdata: {
            title: "Analysing New Entropy Measures for Tries",
            authors: "L. Carfagna and C. Tosoni",
            conference: true,
            name: "Symposium on String Processing and Information Retrieval (SPIRE)",
            shortname: "SPIRE",
            image: "/imgs/pubs/Spire.png",
            date: "September 2025",
            isDoi: true,
            url: "10.1007/978-3-032-05228-5_3"
        }
    },
    {
        ispub: true,
        pubsdata: {
            title: "Encoding Co-Lex Orders of Finite-State Automata in Linear Space",
            authors: "R. Becker, N. Cotumaccio, S. Kim, N. Prezza, and C. Tosoni",
            conference: true,
            name: "Symposium on Combinatorial Pattern Matching (CPM)",
            shortname: "CPM",
            image: "/imgs/pubs/CPM.png",
            date: "June 2025",
            isDoi: true,
            url: "10.4230/LIPIcs.CPM.2025.15"
        }
    },
    {
        ispub: false,
        year: "2024"
    },
    {
        ispub: true,
        pubsdata: {
            title: "Indexing Finite-State Automata Using Forward-Stable Partitions",
            authors: "R. Becker, S. Kim, N. Prezza, and C. Tosoni",
            conference: true,
            name: "Symposium on String Processing and Information Retrieval (SPIRE)",
            shortname: "SPIRE",
            image: "/imgs/pubs/Spire.png",
            date: "September 2024",
            isDoi: true,
            url: "10.1007/978-3-031-72200-4_3"
        }
    }
];


export default publications;